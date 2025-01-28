import React, { useState } from 'react';
import './CommentPage.css';

const comments = [
    { name: 'Alice', company: 'TechCorp', message: 'Great portfolio! Keep up the good work.' },
    { name: 'Bob', company: 'Innovate Inc.', message: 'Loved your projects. Very impressive!' },
    { name: 'Charlie', company: 'DevStudio', message: 'You have an amazing skill set!' },
    { name: 'Diana', company: 'CodeWorks', message: 'Looking forward to seeing more projects.' },
];

const CommentPage = () => {
    const [showModal, setShowModal] = useState(false);

    const handleOpenModal = () => setShowModal(true);
    const handleCloseModal = () => setShowModal(false);

    return (
        <div className="container comments-container">
            <h1 className="text-center">Comments</h1>
            <div className="row">
                {comments.map((comment, index) => (
                    <div key={index} className="col-md-4 col-lg-3 mb-4">
                        <div className="card comment-card">
                            <div className="card-body">
                                <h5 className="card-title">{comment.name}</h5>
                                <h6 className="ccard-text">{comment.company}</h6>
                                <p className="card-text">{comment.message}</p>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
            <div className="text-center mt-4">
                <button className="btn btn-gold" onClick={handleOpenModal}>
                    Leave a Comment
                </button>
            </div>

            {/* Modal */}
            {showModal && (
                <div className="modal-overlay">
                    <div className="modal-content">
                        <h5 className="modal-title">Leave a Comment</h5>
                        <button className="close-button" onClick={handleCloseModal}>
                            &times;
                        </button>
                        <form>
                            <div className="mb-3">
                                <label htmlFor="name" className="form-label">
                                    Name
                                </label>
                                <input type="text" className="form-control" id="name" placeholder="Your Name" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="company" className="form-label">
                                    Company
                                </label>
                                <input type="text" className="form-control" id="company" placeholder="Your Company" />
                            </div>
                            <div className="mb-3">
                                <label htmlFor="message" className="form-label">
                                    Message
                                </label>
                                <textarea className="form-control" id="message" rows={3} placeholder="Your Message"></textarea>
                            </div>
                            <button type="button" className="btn btn-gold" onClick={handleCloseModal}>
                                Submit
                            </button>
                        </form>
                    </div>
                </div>
            )}
        </div>
    );
};

export default CommentPage;
