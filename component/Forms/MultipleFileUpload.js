import React, { useState } from 'react';

function MultipleFileUpload({ onFilesUploaded, name, setErrors }) {
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    setSelectedFiles(files);
  };

  const handleUpload = async () => {
    if (selectedFiles.length === 0) {
      console.error('No files selected');
      setErrors((prev) => ({
        ...prev,
        images: 'Please select at least one file.',
      }));
      return;
    }

    setUploading(true);

    const formData = new FormData();
    selectedFiles.forEach((file, i) => {
      formData.append(`file-${i}`, file, file.name);
    });

    try {
        console.log('Selected Files:', selectedFiles);
        console.log('FormData:', formData);
      const response = await fetch('/api/blogs/eg', {
        method: 'POST',
        body: selectedFiles,
      });

      if (response) {
        const data = await response.json();
        onFilesUploaded(data.downloadLinks);
        console.log('API RES==', response, 'DATA==', data);
      } else {
        console.error('Upload failed');
        setErrors((prev) => ({
          ...prev,
          images: 'Error while uploading file. Please try again later.',
        }));
        setUploading(false);
      }
    } catch (error) {
      console.error('Upload error:', error);
      setErrors((prev) => ({
        ...prev,
        images: 'Upload error. Please try again later.',
      }));
      setUploading(false);
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="space-y-2 w-full">
      <label htmlFor="images" className="block font-medium text-gray-700">
        Images (Upload multiple images for image slides.)
      </label>
      <input
        className="w-full border rounded h-12 focus:border-blue-600"
        type="file"
        multiple
        id="images"
        accept="image/*"
        onChange={handleFileChange}
        name={name}
        disabled={uploading}
      />
      <button
        className={`px-6 py-2 hover-blue rounded ${
          uploading ? 'bg-gray-300 cursor-not-allowed' : ''
        }`}
        onClick={handleUpload}
        disabled={uploading || selectedFiles.length === 0}
      >
        {uploading ? 'Uploading...' : 'Upload'}
      </button>
    </div>
  );
}

export default MultipleFileUpload;
