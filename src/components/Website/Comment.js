import React, { useState } from 'react';
import '../../css/Comment.css';

const Comment = ({ comment, addReply, deleteComment, editComment }) => {
  const [newReply, setNewReply] = useState('');
  const [showReplies, setShowReplies] = useState(true);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState(comment.text);

  const handleReply = () => {
    if (newReply.trim() === '') return;
    addReply(comment.id, newReply);
    setNewReply('');
  };

  const handleDelete = () => {
    deleteComment(comment.id);
  };

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleEditChange = (e) => {
    setEditText(e.target.value);
  };

  const handleEditSave = () => {
    editComment(comment.id, editText);
    setIsEditing(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleReply();
    }
  };

  const toggleReplies = () => {
    setShowReplies(prevState => !prevState);
  };

  return (
    <div className="comment" id={`comment-${comment.id}`}>
      {isEditing ? (
        <div>
          <textarea
            rows="2"
            cols="40"
            value={editText}
            onChange={handleEditChange}
            onKeyDown={handleKeyDown}
            placeholder="Edit your comment..."
            className="edit-textarea"
            id={`edit-textarea-${comment.id}`}
          />
          <button onClick={handleEditSave} id={`save-edit-${comment.id}`}>Save</button>
        </div>
      ) : (
        <div>
          <p>{comment.text}</p>
          <textarea
            rows="2"
            cols="40"
            value={newReply}
            onChange={(e) => setNewReply(e.target.value)}
            onKeyDown={handleKeyDown}
            placeholder="Reply to this comment..."
            className="reply-textarea"
            id={`reply-textarea-${comment.id}`}
          />
          <button onClick={handleReply} className="reply-button" id={`reply-button-${comment.id}`}>
            Reply
          </button>
          <button onClick={toggleReplies} id={`toggle-replies-${comment.id}`}>
            {showReplies
              ? `Hide ${comment.replies.length} replies`
              : 'Show replies'}
          </button>

          {showReplies && comment.replies && comment.replies.length > 0 && (
            <div className="nested-replies" id={`nested-replies-${comment.id}`}>
              {comment.replies.map((reply) => (
                <Comment
                  key={reply.id}
                  comment={reply}
                  addReply={addReply}
                  deleteComment={deleteComment}
                  editComment={editComment}
                />
              ))}
            </div>
          )}


          <button onClick={handleDelete} id={`delete-button-${comment.id}`}>Delete</button>
          <button onClick={handleEdit} id={`edit-comment-${comment.id}`}>Edit</button>
        </div>
      )}
    </div>
  );
};

export default Comment;
