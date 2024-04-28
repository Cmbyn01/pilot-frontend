// import React from 'react';

// class UpdateCourseForm extends React.Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             name: 'Course Name',
//             description: 'Course Description',
//             image_course: null,
//             price: '100',
//             small_description: 'Small Description',
//             learned: 'What you will learn',
//             tags: 'Tag1, Tag2',
//             videoFile: null
//         };
//     }

//     handleChange = (event) => {
//         this.setState({
//             [event.target.name]: event.target.value
//         });
//     }

//     handleImageChange = (event) => {
//         this.setState({
//             image_course: event.target.files[0]
//         });
//     }

//     handleVideoChange = (event) => {
//         this.setState({
//             videoFile: event.target.files[0]
//         });
//     }

//     handleSubmit = async (event) => {
//         event.preventDefault();

//         // Simulated form submission
//         console.log('Form submitted with state:', this.state);
//     }

//     render() {
//         return (
//             <div style={{ display: 'grid', placeItems: 'center', height: '100vh', overflow: 'auto' }}>
//                 <div style={{ marginBottom: '20px' }}>
//                     <h1>Update Course</h1>
//                 </div>
//                 <div style={{ width: '50%' }}>
//                     <form onSubmit={this.handleSubmit} encType="multipart/form-data">
//                         <div style={{ marginBottom: '20px' }}>
//                             <label htmlFor="name">Name:</label>
//                             <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
//                         </div>
//                         <div style={{ marginBottom: '20px' }}>
//                             <label htmlFor="videoFile">Upload Video:</label>
//                             <input type="file" className="form-control-file" id="videoFile" name="videoFile" onChange={this.handleVideoChange} />
//                         </div>
//                         <div style={{ marginBottom: '20px' }}>
//                             <label htmlFor="description">Description:</label>
//                             <textarea className="form-control" id="description" name="description" rows="5" value={this.state.description} onChange={this.handleChange}></textarea>
//                         </div>
//                         <div style={{ marginBottom: '20px' }}>
//                             <label htmlFor="image_course">Image:</label>
//                             <input type="file" className="form-control-file" id="image_course" name="image_course" onChange={this.handleImageChange} />
//                         </div>
//                         <div style={{ marginBottom: '20px' }}>
//                             <label htmlFor="price">Price:</label>
//                             <input type="text" className="form-control" id="price" name="price" value={this.state.price} onChange={this.handleChange} />
//                         </div>
//                         <div style={{ marginBottom: '20px' }}>
//                             <label htmlFor="small_description">Small Description:</label>
//                             <input type="text" className="form-control" id="small_description" name="small_description" value={this.state.small_description} onChange={this.handleChange} />
//                         </div>
//                         <div style={{ marginBottom: '20px' }}>
//                             <label htmlFor="learned">What you will learn:</label>
//                             <textarea className="form-control" id="learned" name="learned" rows="5" value={this.state.learned} onChange={this.handleChange}></textarea>
//                         </div>
//                         <div style={{ marginBottom: '20px' }}>
//                             <label htmlFor="tags">Tags:</label>
//                             <input type="text" className="form-control" id="tags" name="tags" value={this.state.tags} onChange={this.handleChange} />
//                         </div>
                        
                        
//                         <div style={{ display: 'flex', justifyContent: 'space-between' }}>
//                             <button type="submit" className="btn btn-primary">Update</button>
//                             <button type="button" className="btn btn-secondary" onClick={() => console.log('Cancel clicked')}>Cancel</button>
//                         </div>
//                     </form>
//                 </div>
//             </div>
//         );
//     }
// }

// export default UpdateCourseForm;









import React from 'react';

class UpdateCourseForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            name: props.course.name || '',
            description: props.course.description || '',
            image_course: null,
            price: props.course.price || '',
            small_description: props.course.small_description || '',
            learned: props.course.learned || '',
            tags: props.course.tags.map(tag => tag.name).join(', ') || '',
            videoFile: null
        };
    }

    handleChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value
        });
    }

    handleImageChange = (event) => {
        this.setState({
            image_course: event.target.files[0]
        });
    }

    handleVideoChange = (event) => {
        this.setState({
            videoFile: event.target.files[0]
        });
    }

    handleSubmit = async (event) => {
        event.preventDefault();

        const formData = new FormData();
        formData.append('name', this.state.name);
        formData.append('description', this.state.description);
        formData.append('image_course', this.state.image_course);
        formData.append('price', this.state.price);
        formData.append('small_description', this.state.small_description);
        formData.append('learned', this.state.learned);
        formData.append('tags', this.state.tags);
        formData.append('videoFile', this.state.videoFile); // Add video file to formData

        try {
            const response = await fetch(`/api/update_course/${this.props.course.id}`, {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                console.log('Course updated successfully');
            } else {
                console.error('Failed to update course');
            }
        } catch (error) {
            console.error('Error updating course:', error);
        }
    }

    render() {
        const { course } = this.props;

        return (
            <div style={{ display: 'grid', placeItems: 'center', height: '100vh', overflow: 'auto' }}>
                <h1>Update Course</h1>
                <form onSubmit={this.handleSubmit} encType="multipart/form-data" style={{ width: '50%' }}>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="name">Name:</label>
                        <input type="text" className="form-control" id="name" name="name" value={this.state.name} onChange={this.handleChange} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="description">Description:</label>
                        <textarea className="form-control" id="description" name="description" rows="10" value={this.state.description} onChange={this.handleChange}></textarea>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="image_course">Image:</label>
                        <input type="file" className="form-control-file" id="image_course" name="image_course" onChange={this.handleImageChange} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="price">Price:</label>
                        <input type="text" className="form-control" id="price" name="price" value={this.state.price} onChange={this.handleChange} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="small_description">Small Description:</label>
                        <input type="text" className="form-control" id="small_description" name="small_description" value={this.state.small_description} onChange={this.handleChange} />
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="learned">What you will learn:</label>
                        <textarea className="form-control" id="learned" name="learned" rows="10" value={this.state.learned} onChange={this.handleChange}></textarea>
                    </div>
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="tags">Tags:</label>
                        <input type="text" className="form-control" id="tags" name="tags" value={this.state.tags} onChange={this.handleChange} />
                    </div>
                    
                    <div style={{ marginBottom: '20px' }}>
                        <label htmlFor="videoFile">Upload Video:</label>
                        <input type="file" className="form-control-file" id="videoFile" name="videoFile" onChange={this.handleVideoChange} />
                    </div>
                    
                    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
                        <button type="submit" className="btn btn-primary">Update</button>
                        <button type="button" className="btn btn-secondary" onClick={() => window.location.href=`/course_detail/${course.id}`}>Cancel</button>
                    </div>
                </form>
            </div>
        );
    }
}

export default UpdateCourseForm;

