import React, { useState } from 'react';
import axios from 'axios';

const UploadForm = () => {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [error, setError] = useState('');

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);

    // Validate file types and sizes
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif']; // Add more types if needed
    const maxSize = 10 * 1024 * 1024; // 10MB

    const invalidFiles = files.filter((file) => {
      if (!allowedTypes.includes(file.type)) {
        setError(`Invalid file type: ${file.name}`);
        return true;
      }
      if (file.size > maxSize) {
        setError(`File size exceeds 10MB: ${file.name}`);
        return true;
      }
      return false;
    });

    // Only update selectedFiles if all files are valid
    if (invalidFiles.length === 0) {
      setError('');
      setSelectedFiles(files);
    }
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) return;

    try {
      const formData = new FormData();
      selectedFiles.forEach((file, index) => {
        formData.append(`files`, file);
      });

      const response = await axios.post('/api/testing/googledriveapi2', formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });

      console.log('Files uploaded successfully:', response.data);
      // Handle the response here as needed
    } catch (error) {
      console.error('Error uploading files:', error);
    }
  };

  return (
    <div className='py-40'>
      <input type="file" onChange={handleFileChange} multiple />
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <button className='bg-red-600 px-6 py-3 rounded-full text-white' onClick={handleUpload}>
        Upload Files
      </button>
    </div>
  );
};

export default UploadForm;
