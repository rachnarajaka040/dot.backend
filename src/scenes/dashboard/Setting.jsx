import React, { useState, useEffect, useRef } from 'react';
import './setting.css';
import axios from 'axios';
import extractDateFromValue from '../../utils/date';
import getTimeFromDate from '../../utils/time';


function Setting() {
    const [selectedImages, setSelectedImages] = useState([]);
    const fileInputRef = useRef(null);

    const [value, setValue] = useState(0);
    useEffect(() => {
        const fetchImages = async () => {
            try {
                const response = await axios.get('http://localhost:4001/slider/slider/files');
                setSelectedImages(response.data);
            } catch (error) {
                console.log(error);
            }
        };
        fetchImages();
    }, [value]);

    const handleImageDelete = (index) => {
        setSelectedImages((prevImages) => {
            const updatedImages = [...prevImages];
            updatedImages.splice(index, 1);
            return updatedImages;
        });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        try {
            const formData = new FormData();
            formData.append('file', fileInputRef.current.files[0]);

            const response = await axios.post('http://localhost:4001/upload/slide', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                },
            });

            if (!response) {
                console.log("error uploading Image")
            } else {
                setValue((prevValue) => prevValue + 1);
            }
        } catch (error) {
            console.log(error);
        }
    };

    return (
        <div className="setting-container">
            <div className="upload-container">
                <form onSubmit={handleSubmit}>
                    <label htmlFor="imageUpload" className="upload-button">
                        <input
                            type="file"
                            id="imageUpload"
                            accept="image/*"
                            name="file"
                            ref={fileInputRef}
                            multiple
                            onChange={() => { }}
                        />
                        <i className="fas fa-cloud-upload-alt"></i> Upload Images
                    </label>
                    <input type="submit" value="Upload" />
                </form>
            </div>

            {selectedImages.length > 0 && (
                <div>
                    <h2 className="uploaded-heading" style={{ color: 'white' }}>
                        Uploaded Images:
                    </h2>
                    <div className="image-container">
                        {selectedImages.map((image, index) => (
                            <div key={index} className="image-card">
                                <div className="image-details">
                                    <div className="detail-row">
                                        <span className="detail-label">Date:</span>
                                        <span className="detail-value">{extractDateFromValue(image.createdAt)}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="detail-label">Time:</span>
                                        <span className="detail-value">{getTimeFromDate(image.createdAt)}</span>
                                    </div>
                                    <div className="detail-row">
                                        <span className="detail-label">Size:</span>
                                        <span className="detail-value">{(image.size / 1024 / 1024).toFixed(2)} MB</span>
                                    </div>
                                    <button className="delete-button" onClick={() => handleImageDelete(index)}>
                                        Delete
                                    </button>
                                </div>
                                <img src={image.slidePath} alt={`Uploaded ${index + 1}`} className="image" />
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    );
}

export default Setting;
