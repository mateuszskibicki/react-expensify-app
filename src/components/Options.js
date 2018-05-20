import React from 'react';
import Option from './Option';

const Options = (props) => {
  const options = props.options;

  return (
    <div>
      
    {
      props.options.map((option) => (
        <Option 
          key={option} 
          optionText={option}
          handleDeleteOptionSingle={props.handleDeleteOptionSingle}
        />
      ))
    }

    <button onClick={props.handleDeleteOptions}>XX Remove ALL XX</button>

    </div>
  );
};

export default Options;