import React, { useState, useRef,useEffect } from 'react';
import Comment from './Comment';
import '../../css/CommentContainer.css';

const CommentContainer = ({ videoTime,video_id }) => {
  const [commentText, setCommentText] = useState('');
  const [apiComments, setApiComments] = useState([
    // {
    //   id: 1,
    //   video_id: 1,
    //   description: 'Top-level Comment 1',
    //   user: 'user1',
    //   parent_comment: null,
    //   relativeTimeStamp: 0,
    // },
    // {
    //   id: 2,
    //   video_id: 1,
    //   description: 'Reply to Comment 1',
    //   user: 'user2',
    //   parent_comment: 1,
    //   relativeTimeStamp: 10,
    // },
    // {
    //   id: 5,
    //   video_id: 1,
    //   description: 'Reply to Reply 1',
    //   user: 'user3',
    //   parent_comment: 2,
    //   relativeTimeStamp: 20,
    // },
    // {
    //   id: 4,
    //   video_id: 1,
    //   description: 'Another Reply to Comment 1',
    //   user: 'user4',
    //   parent_comment: 1,
    //   relativeTimeStamp: 55,
    // },
    // {
    //   id: 5,
    //   video_id: 1,
    //   description: 'Top-level Comment 2',
    //   user: 'user5',
    //   parent_comment: null,
    //   relativeTimeStamp: 20,
    // }
  ]);
  const getCommentData = async () => {
    try {
      const response = await fetch(`http://127.0.0.1:8000/courses/comment/get_video_comments/${video_id}`, {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
      });
      const data = await response.json();
      console.log('Comment data:', data.comments);
      setApiComments(data.comments);
    } catch (error) {
      console.error('Error fetching comments:', error);
    }
  };

  const postNewComment = async (body) => {
    try {
      const response = await fetch('http://127.0.0.1:8000/courses/comment/add_video_comment/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer ${localStorage.getItem('token')}`,
        },
        body: JSON.stringify(body),
      });
      const data = await response.json();
      console.log('New comment response:', data);
      setApiComments([...apiComments, data.comment]);
    } catch (error) {
      console.error('Error posting comment:', error);
    }
  };



  useEffect(() => {
    getCommentData();
    formatComments(apiComments);
    
    console.log('Comments:', comments);
  }, [video_id]);

  const [comments, setComments] = useState([]);
  useEffect(() => {
    formatComments(apiComments);
    console.log('Comments:', comments);
  }, [apiComments, videoTime]);

  const formatComments = (commentsData) => {
    const formattedComments = [];
    const commentsMap = new Map();

    commentsData?.forEach(comment => {
      commentsMap.set(comment.id, { ...comment, replies: [] });
    });

    commentsData?.forEach(comment => {
      if (comment.parent_comment !== null) {
        const parent = commentsMap.get(comment.parent_comment);
        if (parent) {
          parent.replies.push(commentsMap.get(comment.id));
        }
      } else {
        formattedComments.push(commentsMap.get(comment.id));
      }
    });

    setComments(formattedComments);
  };

  const addReply = (parentId, replyText, currentComments) => {
    const updatedComments = currentComments.map(comment => {
      if (comment.id === parentId) {
        const newReply = {
          // id: Date.now(),
          description: replyText,
          // user: 'newUser',
          replies: [],
          relativeTimeStamp: videoTime,
          parent_comment: parentId,
        };
        var response = postNewComment({video_id:video_id,description:replyText,parent_comment:parentId});
        setApiComments([...apiComments, newReply]);
        if (comment.replies) {
          return { ...comment, replies: [...comment.replies, newReply] };
        } else {
          return { ...comment, replies: [newReply] };
        }
      } else if (comment.replies) {
        return { ...comment, replies: addReply(parentId, replyText, comment.replies) };
      }
      return comment;
    });
    return updatedComments;
  };

  const handleDelete = (commentId, parentId) => {
    const deleteFromComments = (comments) => {
      return comments.filter(comment => {
        if (comment.id === commentId) {
          return false;
        } else if (comment.replies && comment.replies.length > 0) {
          comment.replies = deleteFromComments(comment.replies);
        }
        return true;
      });
    };

    if (parentId) {
      const updatedComments = comments.map(comment => {
        if (comment.id === parentId) {
          comment.replies = deleteFromComments(comment.replies);
        }
        return comment;
      });
      setComments(updatedComments);
    } else {
      const updatedComments = deleteFromComments(comments);
      setComments(updatedComments);
    }
  };

  const handleEdit = (commentId, newText) => {
    const editComments = (comments) => {
      return comments.map(comment => {
        if (comment.id === commentId) {
          comment.description = newText;
        } else if (comment.replies && comment.replies.length > 0) {
          comment.replies = editComments(comment.replies);
        }
        return comment;
      });
    };

    const updatedComments = editComments(comments);
    setComments(updatedComments);
  };

  const handleAddReply = (parentId, replyText) => {
    const updatedComments = addReply(parentId, replyText, comments);
    setComments(updatedComments);
  };

  const handleAddTopLevelComment = () => {
    const newComment = {
      id: Date.now(),
      description: `New Top-level Comment ${comments.length + 1} commentText: ${commentText}`,
      user: 'newUser',
      parent_comment: null,
      replies: [],
      relativeTimeStamp: videoTime,
    };
    
    setComments([...comments, newComment]);
    setApiComments([...apiComments, newComment]);
    setCommentText('');
  };

  return (
    <div id="comment-container" className="instagram-theme">
      <input 
        type="text" 
        id="comment-input" 
        value={commentText} 
        onChange={(e) => setCommentText(e.target.value)} 
        placeholder="Add a comment..." 
      />
      <button id="add-comment-btn" onClick={handleAddTopLevelComment}>Add Comment</button>
      <div id="comments-list" style={{ maxHeight: '400px', overflowY: 'auto' }}>
      {comments?.map(comment => (
        // (parseInt(videoTime) >= parseInt(comment.relativeTimeStamp)) && !comment.parent_comment? (
        (!comment.parent_comment ? (
          <div key={comment.id} className="comment-item">
            <Comment
              comment={comment}
              addReply={handleAddReply}
              deleteComment={handleDelete}
              editComment={handleEdit}
            />
          </div>
        ) : null)
      ))}
       
      </div>
    </div>
  );
};

export default CommentContainer;
