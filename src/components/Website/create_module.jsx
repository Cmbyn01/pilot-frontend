// import React, { useState, useEffect } from 'react';
// import CKEditor from '@ckeditor/ckeditor5-react';
// import ClassicEditor from '@ckeditor/ckeditor5-build-classic';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '@fortawesome/fontawesome-free/css/all.min.css';

// const CreateModule = () => {
//     const [moduleData, setModuleData] = useState({
//         module_name: '',
//         videos: [],
//         additional_notes: [''],
//         video_names: ['']
//     });

//     const [message, setMessage] = useState('');

//     const handleChange = (event) => {
//         const { name, value, files } = event.target;
//         if (name === 'video') {
//             setModuleData({
//                 ...moduleData,
//                 videos: files
//             });
//         } else {
//             setModuleData({
//                 ...moduleData,
//                 [name]: value
//             });
//         }
//     };

//     const handleNoteChange = (index, value) => {
//         const notes = [...moduleData.additional_notes];
//         notes[index] = value;
//         setModuleData({
//             ...moduleData,
//             additional_notes: notes
//         });
//     };

//     const handleVideoNameChange = (index, value) => {
//         const videoNames = [...moduleData.video_names];
//         videoNames[index] = value;
//         setModuleData({
//             ...moduleData,
//             video_names: videoNames
//         });
//     };

//     const addNote = () => {
//         setModuleData({
//             ...moduleData,
//             additional_notes: [...moduleData.additional_notes, '']
//         });
//     };

//     const removeNote = (index) => {
//         const notes = [...moduleData.additional_notes];
//         notes.splice(index, 1);
//         setModuleData({
//             ...moduleData,
//             additional_notes: notes
//         });
//     };

//     const addVideoName = () => {
//         setModuleData({
//             ...moduleData,
//             video_names: [...moduleData.video_names, '']
//         });
//     };

//     const removeVideoName = (index) => {
//         const videoNames = [...moduleData.video_names];
//         videoNames.splice(index, 1);
//         setModuleData({
//             ...moduleData,
//             video_names: videoNames
//         });
//     };

//     useEffect(() => {
//         try {
//             ClassicEditor.create(document.querySelector('#additional_notes'));
//         } catch (error) {
//             console.error('Error initializing CKEditor:', error);
//         }
//     }, []);

//     const handleSubmit = async (event) => {
//         event.preventDefault();

//         try {
//             const formData = new FormData();
//             formData.append('module_name', moduleData.module_name);
//             // Append videos to the formData (assuming you have multiple video files)
//             for (let i = 0; i < moduleData.videos.length; i++) {
//                 formData.append('videos', moduleData.videos[i]);
//             }
//             // Append additional notes to the formData
//             for (let i = 0; i < moduleData.additional_notes.length; i++) {
//                 formData.append('additional_notes', moduleData.additional_notes[i]);
//             }
//             // Append video names to the formData
//             for (let i = 0; i < moduleData.video_names.length; i++) {
//                 formData.append('video_names', moduleData.video_names[i]);
//             }

//             // Simulating API request
//             console.log('Form data:', formData);

//             // Reset form data after submission
//             setModuleData({
//                 module_name: '',
//                 videos: [],
//                 additional_notes: [''],
//                 video_names: ['']
//             });

//             // Set success message
//             setMessage('Module added successfully');
//         } catch (error) {
//             console.error('Error adding module:', error);
//             // Set error message
//             setMessage('Error adding module');
//         }
//     };

//     return (
//         <div className="container">
//             <h1>Add Module</h1>
//             {message && <div className={message.startsWith('Failed') ? 'alert alert-danger' : 'alert alert-success'} role="alert">{message}</div>}
//             <hr />
//             <form onSubmit={handleSubmit} encType="multipart/form-data">
//                 <div className="form-group">
//                     <label htmlFor="module_name">Module Name:</label>
//                     <input type="text" className="form-control" id="module_name" name="module_name" value={moduleData.module_name} onChange={handleChange} required />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="video">Videos:</label>
//                     <input type="file" className="form-control-file" id="video" name="video" accept="video/*" multiple onChange={handleChange} required />
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="additional_notes">Additional Notes:</label>
//                     {moduleData.additional_notes.map((note, index) => (
//                         <div key={index} className="note-input">
//                             <CKEditor
//                                 editor={ClassicEditor}
//                                 data={note}
//                                 onChange={(event, editor) => handleNoteChange(index, editor.getData())}
//                             />
//                             {index !== 0 && <button type="button" className="btn btn-danger" onClick={() => removeNote(index)}>-</button>}
//                         </div>
//                     ))}
//                     <button type="button" className="btn btn-success" onClick={addNote}>+</button>
//                 </div>
//                 <div className="form-group">
//                     <label htmlFor="video_names">Video Names:</label>
//                     {moduleData.video_names.map((videoName, index) => (
//                         <div key={index} className="video-name-input">
//                             <input type="text" className="form-control border-dark my-1" name="video_names[]" value={videoName} onChange={(event) => handleVideoNameChange(index, event.target.value)} required />
//                             {index !== 0 && <button type="button" className="btn btn-danger my-2" onClick={() => removeVideoName(index)}>-</button>}
//                         </div>
//                     ))}
//                     <button type="button" className="btn btn-success" onClick={addVideoName}>+</button>
//                 </div>
//                 <button type="submit" className="btn btn-primary">Add Module</button>
//             </form>
//         </div>
//     );
// };

// export default CreateModule;









import React, { useState, useEffect } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

const CreateModule = () => {
    const [moduleData, setModuleData] = useState({
        module_name: '',
        videos: [],
        additional_notes: [''],
        video_names: ['']
    });

    const [message, setMessage] = useState('');

    const handleChange = (event) => {
        const { name, value, files } = event.target;
        if (name === 'video') {
            setModuleData({
                ...moduleData,
                videos: files
            });
        } else {
            setModuleData({
                ...moduleData,
                [name]: value
            });
        }
    };

    const handleNoteChange = (index, value) => {
        const notes = [...moduleData.additional_notes];
        notes[index] = value;
        setModuleData({
            ...moduleData,
            additional_notes: notes
        });
    };

    const handleVideoNameChange = (index, value) => {
        const videoNames = [...moduleData.video_names];
        videoNames[index] = value;
        setModuleData({
            ...moduleData,
            video_names: videoNames
        });
    };

    const addNote = () => {
        setModuleData({
            ...moduleData,
            additional_notes: [...moduleData.additional_notes, '']
        });
    };

    const removeNote = (index) => {
        const notes = [...moduleData.additional_notes];
        notes.splice(index, 1);
        setModuleData({
            ...moduleData,
            additional_notes: notes
        });
    };

    const addVideoName = () => {
        setModuleData({
            ...moduleData,
            video_names: [...moduleData.video_names, '']
        });
    };

    const removeVideoName = (index) => {
        const videoNames = [...moduleData.video_names];
        videoNames.splice(index, 1);
        setModuleData({
            ...moduleData,
            video_names: videoNames
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const formData = new FormData();
            formData.append('module_name', moduleData.module_name);
            // Append videos to the formData (assuming you have multiple video files)
            for (let i = 0; i < moduleData.videos.length; i++) {
                formData.append('videos', moduleData.videos[i]);
            }
            // Append additional notes to the formData
            for (let i = 0; i < moduleData.additional_notes.length; i++) {
                formData.append('additional_notes', moduleData.additional_notes[i]);
            }
            // Append video names to the formData
            for (let i = 0; i < moduleData.video_names.length; i++) {
                formData.append('video_names', moduleData.video_names[i]);
            }

            const response = await fetch('/api/add_module', {
                method: 'POST',
                body: formData
            });

            if (response.ok) {
                // Set success message
                setMessage('Module added successfully');
            } else {
                // Set error message
                setMessage('Failed to add module');
            }
        } catch (error) {
            console.error('Error adding module:', error);
            // Set error message
            setMessage('Error adding module');
        }
    };

    return (
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <h1>Add Module</h1>
        {message && <div className={message.startsWith('Failed') ? 'alert alert-danger' : 'alert alert-success'} role="alert">{message}</div>}
        <div style={{ width: '100%', maxWidth: '500px', padding: '20px', border: '1px solid #ccc', borderRadius: '5px', backgroundColor: '#f9f9f9', marginTop: '20px' }}>
          <form onSubmit={handleSubmit} encType="multipart/form-data">
                <div className="form-group">
                    <label htmlFor="module_name">Module Name:</label>
                    <input type="text" className="form-control" id="module_name" name="module_name" value={moduleData.module_name} onChange={handleChange} required />
                </div>
                <div className="form-group py-4">
                    <label htmlFor="video">Videos:</label>
                    <input type="file" className="form-control-file" id="video" name="video" accept="video/*" multiple onChange={handleChange} required />
                </div>
                <div className="form-group">
                    <label htmlFor="additional_notes">Additional Notes:</label>
                    {moduleData.additional_notes.map((note, index) => (
                        <div key={index} className="note-input py-2">
                            <textarea
                                className="form-control"
                                value={note}
                                onChange={(event) => handleNoteChange(index, event.target.value)}
                            />
                            {index !== 0 && <button type="button" className="btn btn-danger" onClick={() => removeNote(index)}>-</button>}
                        </div>
                    ))}
                    <button type="button" className="btn btn-success" onClick={addNote}>+</button>
                </div>
                <div className="form-group py-3">
                    <label htmlFor="video_names">Video Names:</label>
                    {moduleData.video_names.map((videoName, index) => (
                        <div key={index} className="video-name-input py-1">
                            <input type="text" className="form-control border-dark my-1" name="video_names[]" value={videoName} onChange={(event) => handleVideoNameChange(index, event.target.value)} required />
                            {index !== 0 && <button type="button" className="btn btn-danger my-2" onClick={() => removeVideoName(index)}>-</button>}
                        </div>
                    ))}
                    <button type="button" className="btn btn-success" onClick={addVideoName}>+</button>
                </div>
                <button type="submit" className="btn btn-primary">Add Module</button>
            </form>
        </div>
        </div>
    );
};

export default CreateModule;
