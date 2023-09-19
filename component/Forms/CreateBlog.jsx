import { useState } from 'react';
import CreatableSelect from 'react-select/creatable';
import ImageUploadForm from './ImageUploadForm';


    const options = [
      { value: 'Real Estate', label: 'Real Estate' },

      { value: 'Building Construction', label: 'Building Construction' },
      { value: 'Project Management', label: 'Project Management' },
      { value: 'Waste Management', label: 'Waste Management' },
      { value: 'Energy', label: 'Energy' },
      { value: 'News', label: 'News' },
      { value: 'Urban Development', label: 'Urban Development' },
    ];
    `Real Estate`, `Building Construction`, `Project Management`, `Waste Management`, `Energy`, `News`, 'Urban Development'
    const optionsCategory= [
      { value: 'Real Estate', label: 'Real Estate' },
      { value: 'Building Construction', label: 'Building Construction' },
      { value: 'Project Management', label: 'Project Management' },
      { value: 'Waste Management', label: 'Waste Management' },
      { value: 'Energy', label: 'Energy' },
      { value: 'News', label: 'News' },
      { value: 'Urban Development', label: 'Urban Development' },
      // Add more tags as needed
    ];


    // Function to convert a File to Base64
const fileToBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    
    reader.onload = () => {
      const base64String = reader.result.split(',')[1];
      resolve(base64String);
    };

    reader.onerror = (error) => {
      reject(error);
    };

    reader.readAsDataURL(file);
  });
};


    const BlogPostForm = () => {
      const [selectedTags, setSelectedTags] = useState([]);
      const [selectedCategory, setSelectedCategory] = useState('');
      const [selectedImages, setSelectedImages] = useState([]);
      const [imageData, setImageData] = useState('');

      const [formData, setFormData] = useState({
        
        img: '',
        title: '',
        date: '',
        author: '',
        category: '',
        highlight: '',
        content: '',
        images: "",
        tags: "",
        ogImg: ''
      });
    
      const [errors, setErrors] = useState({
        ogImg: '',
        img: '',
        title: '',
        date: '',
        author: '',
        category: '',
        highlight: '',
        content: '',
        tags: '',
        images: '',
      });
    
      const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
          ...formData,
          [name]: value,
        });
      };

      const validateForm = () => {
        // Create a new errors object
        const newErrors = {};
      
        if (!formData.title.trim()) {
          newErrors.title = 'Title is required.';
        }
      
        if (!formData.author.trim()) {
          newErrors.author = 'Author is required.';
        }
      
        if (!formData.category.trim()) {
          newErrors.category = 'Category is required.';
        }
      
        if (!formData.date) {
          newErrors.date = 'Date is required.';
        }
      
        if (!formData.highlight.trim()) {
          newErrors.highlight = 'Highlight is required.';
        }
      
        if (!formData.content.trim()) {
          newErrors.content = 'Content is required.';
        }
      
        if (!formData.tags.trim()) {
          newErrors.tags = 'Tags are required.';
        }

        if (!formData.images.trim()) {
          newErrors.images = 'Multiple Images is required.';
        }
      
      
        // Set the new errors object
        setErrors(newErrors);
      
        // Check if there are no errors
        return Object.keys(newErrors).length === 0;
      };
      

      const handleSubmit = async (e) => {
        e.preventDefault();
      
        if (true) {
          try {

            const newFormData = {
              ...formData,
              tags: selectedTags.join(', '),
              img: imageData,
              // images: selectedImages.map((file, index)=> (`image${index + 1}`, file))
               }

            console.log('Success', newFormData);
            
            const response = await fetch('/api/blogs/create', {
              method: 'POST',
              body: JSON.stringify([imageData]),
              headers: {
                'Content-Type': 'application/json',
              },
            });

            if (response.status === 200) {
              const data = await response.json();
              console.log('Success', data);

              resetForm();
            } else {
              const data = await response.json();
              console.error('API error:', data);
            }
          } catch (error) {
            console.error('Fetch error:', error);
          }
        }
      };

      // Helper function to reset the form and related states
      const resetForm = () => {
        setFormData({
          ogImg: '',
          img: '',
          title: '',
          date: '',
          author: '',
          category: '',
          highlight: '',
          content: '',
          tags: '',
          images: '',
        });
        setSelectedImages([]);
        setSelectedCategory([]);
        setSelectedTags([]);
        setErrors({});
      };
 
      const tagChange = (selectedOption) => {
        setSelectedTags(selectedOption?.map((item)=> item.value));
        console.log(`Option tags selected:`, selectedOption);
      };

      const categoryChange = (selectedOption) => {
        setSelectedCategory(selectedOption.value);
        setFormData(prev=>{
          return {
            ...prev,
            category: selectedOption.value
          }
        })
        console.log(`Option category selected:`, selectedOption);
      };

      const handleImgChange = async (e) => {
        const selectedFile = e.target.files[0]; // Get the first selected file
        if (selectedFile) {
          const imageData = await fileToBase64(selectedFile);
          console.log('eeeeeeee',imageData)
          setFormData(prev=>{
            return {
              ...prev,
              img: imageData
            }
          })
        } else {
          setErrors(prev=> {return {...prev, img: 'Please select an image file.'}});
        }
      };

      const handleImageChange = (e) => {
        const selectedFiles = Array.from(e.target.files);
      
        // Check if any files were selected
        if (selectedFiles.length > 0) {
          setSelectedImages(selectedFiles);
        } else {
          setSelectedImages([]);
          setErrors(prev=> {return {...prev, images: 'Please select an image file.'}});

        }
      };
      
      
      return (
        <div className="max-w-md mx-auto p-6 bg-white rounded-md shadow-md">
        <h2 className="text-2xl font-semibold mb-4">Create Blog Post</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label htmlFor="title" className="block font-medium text-gray-700">
              Title
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={formData.title}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              
            />
            {errors.title && <p className="text-red-500">{errors.title}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="author" className="block font-medium text-gray-700">
              Author
            </label>
            <input
              type="text"
              id="author"
              name="author"
              value={formData.author}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              
            />
            {errors.author && <p className="text-red-500">{errors.author}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="category" className="block font-medium text-gray-700">
              Category (Select or type and enter a different Category)
            </label>
          <CreatableSelect
              onChange={categoryChange}
              id="category"
              name="category"
              options={options}
              className="basic-multi-select"
              classNamePrefix="select"
          />
            {errors.category && <p className="text-red-500">{errors.category}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="date" className="block font-medium text-gray-700">
              Date
            </label>
            <input
              type="date"
              id="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              
            />
            {errors.date && <p className="text-red-500">{errors.date}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="highlight" className="block font-medium text-gray-700">
              Highlight
            </label>
            <textarea
              id="highlight"
              name="highlight"
              value={formData.highlight}
              onChange={handleChange}
              rows="4"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              
            />
            {errors.highlight && <p className="text-red-500">{errors.highlight}</p>}
          </div>
          <div className="mb-4">
            <label htmlFor="content" className="block font-medium text-gray-700">
              Content
            </label>
            <textarea
              id="content"
              name="content"
              value={formData.content}
              onChange={handleChange}
              rows="8"
              className="mt-1 p-2 w-full border rounded-md focus:outline-none focus:ring focus:border-blue-500"
              
            />
            {errors.content && <p className="text-red-500">{errors.content}</p>}
          </div>
          
          <div className="mb-4">
            <label  className="block font-medium text-gray-700">
              Tags (Select or type and enter a different tag)
            </label>
          <CreatableSelect
              onChange={tagChange}
              isMulti
              name="tags"
              options={optionsCategory}
              className="basic-multi-select"
              classNamePrefix="select"
          />
            {errors.tags && <p className="text-red-500">{errors.tags}</p>}
          </div>

          <div className="mb-4">
            <label htmlFor="img" className="block font-medium text-gray-700">
              Image (Upload a single image for the blog banner)
            </label>
            <input
              type="file"
              id="img"
              name="img"
              accept="image/*" // Specify accepted file types (images in this case)
              onChange={handleImgChange} // Add an event handler for file input changes
              className="mt-1 w-full"
            />
            {errors.img && <p className="text-red-500">{errors.img}</p>}
          </div>

          {/* <div className="mb-4">
            <label htmlFor="images" className="block font-medium text-gray-700">
              Images (Upload multiple images for image slides.)
            </label>
            <input
              type="file"
              id="images"
              name="images"
              accept="image/*" // Specify accepted file types (images in this case)
              multiple // Allow multiple file selection
              onChange={handleImageChange} // Add an event handler for file input changes
              className="mt-1 w-full"
            />
            {errors.images && <p className="text-red-500">{errors.images}</p>}
          </div> */}

          <ImageUploadForm imageData={imageData} setImageData={setImageData}/>

          <div className="py-8">
            <img src={formData.img} alt="sssssss" className='w-80 h-96 border'/>
          </div>

          <div className="mt-4">
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
      
      );
    };
    
    export default BlogPostForm;
    