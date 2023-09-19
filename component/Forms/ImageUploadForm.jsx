import { useState } from 'react';

const ImageUploadForm = ({imageData, setImageData}) => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [check, setCheck] = useState(null);

  const handleImageChange = (e) => {
    const file = e.target.files[0];

    if (file) {
      const reader = new FileReader();

      reader.onload = (event) => {
        const base64String = event.target.result.split(',')[1]; // Extract base64 data
        setSelectedImage(URL.createObjectURL(file)); // Display image preview
        // setImageData(base64String); // Save base64 data
        setImageData(file)
        setCheck(event.target.result)

        console.log('==============', 'event.target.result')
      };

      reader.readAsDataURL(file);
    }

    
  };

  const handleClick = () => {
    setSelectedImage(imageData)
    console.log('imagebasee64', imageData)
  }


  return (
    <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
      <h2 className="text-2xl font-semibold mb-4">Image Upload</h2>
      
        <div className="mb-4">
          <label htmlFor="image" className="block font-medium text-gray-700">
            Select Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            onChange={handleImageChange}
            className="mt-1 w-full"
          />
          {selectedImage && (
            <img
              src={check}
              alt="Selected Image"
              className="mt-4 max-w-full h-auto"
            />
          )}
        </div>

        <div className="mt-4">
          <button onClick={handleClick}
            type="submit"
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            Upload Image
          </button>
        </div>
    </div>
  );
};

export default ImageUploadForm;
