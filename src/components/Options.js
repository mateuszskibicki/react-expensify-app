import React from 'react';
import Option from './Option';

const Options = (props) => {
  const options = props.options;

  return (
    <div className="widget">

      <div className="widget__header">
        <h3>Your options</h3>
        <button className="button button--link" onClick={props.handleDeleteOptions}>XX Remove ALL XX</button>
      </div>
      
    {
      props.options.map((option, index) => (
        <Option 
          key={option} 
          optionText={option}
          count={index + 1}
          handleDeleteOptionSingle={props.handleDeleteOptionSingle}
        />
      ))
    }

    </div>
  );
};

export default Options;