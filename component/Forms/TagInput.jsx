import ReactSelect from 'react-select';
import { useState } from 'react';

const TagInput = ({ selectedTags, setSelectedTags }) => {
  const [inputValue, setInputValue] = useState('');

  const options = [
    { value: 'tag1', label: 'Tag 1' },
    { value: 'tag2', label: 'Tag 2' },
    // Add more tags as needed
  ];

  const handleChange = (selectedOption) => {
    setSelectedTags(selectedOption);
  };

  const handleInputChange = (input) => {
    setInputValue(input);
  };

  const handleCreateOption = (input) => {
    const newOption = { value: input, label: input };
    const updatedTags = [...selectedTags, newOption];
    setSelectedTags(updatedTags);
    setInputValue(''); // Clear inputValue
  };
  ;

  return (
    <ReactSelect
      isMulti
      options={options}
      value={selectedTags}
      onChange={handleChange} // Corrected prop name to onChange
      onInputChange={handleInputChange}
      inputValue={inputValue}
      onCreateOption={handleCreateOption}
      placeholder="Select or type tags..."
    />
  );
};

export default TagInput;
