import React, { useState } from 'react';
import './setting.css';

function Setting() {
    const [selectedImages, setSelectedImages] = useState([]);

    const handleImageUpload = (event) => {
        const files = event.target.files;
        const imageArray = Array.from(files).map((file) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                file.dataURL = reader.result;
                setSelectedImages((prevImages) => [...prevImages, file]);
            };
            return file;
        });
    };

    const handleImageDelete = (index) => {
        setSelectedImages((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages.splice(index, 1);
            return updatedImages;
        });
    };

    return (
        <div className="setting-container">
            <div className="upload-container">
                <label htmlFor="imageUpload" className="upload-button">
                    <input
                        type="file"
                        id="imageUpload"
                        accept="image/*"
                        multiple
                        onChange={handleImageUpload}
                    />
                    <i className="fas fa-cloud-upload-alt"></i> Upload Images
                </label>
            </div>

            {selectedImages.length > 0 && (
                <div>
                    <h2 className="uploaded-heading">Uploaded Images:</h2>
                    <div className="image-container">
                        {selectedImages.map((image, index) => (
                            <div key={index} className="image-card">
                                <div className="image-details">
                                    <div className="detail-row">
                                        <span className="detail-label">Date:</span>
                                        <span className="detail-value">{new Date().toLocaleDateString()}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="detail-label">Time:</span>
                                        <span className="detail-value">{new Date().toLocaleTimeString()}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="detail-label">Size:</span>
                                        <span className="detail-value">{(image.size / 1024 / 1024).toFixed(2)} MB</span>
                                    </div>
                                    <button className="delete-button" onClick={() => handleImageDelete(index)}>
                                        Delete
                                    </button>
                                </div>
                                <img src={image.dataURL} alt={`Uploaded ${index + 1}`} className="image" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Setting;
