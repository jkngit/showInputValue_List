import React, { useState } from 'react';

const App = () => {
  // State to hold the input value
  const [inputValue, setInputValue] = useState('');

  // Event handler to update the input value in the state
  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  // Event handler to display the input value in an <li> element
  const handleButtonClick = () => {
    // Perform any validation if needed before updating the list
    if (inputValue.trim() !== '') {
      // Update the list with the input value
      setList((prevList) => [...prevList, inputValue]);

      // Clear the input field
      setInputValue('');
    }
  };

  // State to hold the list of items
  const [list, setList] = useState([]);

  return (
    <div>
      <input
        type="text"
        value={inputValue}
        onChange={handleInputChange}
        placeholder="Type something..."
      />
      <button onClick={handleButtonClick}>Add to List</button>

      <ul>
        {list.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
