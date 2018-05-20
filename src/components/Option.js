import React from 'react';

const Option = (props) => (
    <div>
      <div className="option">
        Option : {props.optionText} 
        <button 
        onClick={(e) => {
          props.handleDeleteOptionSingle(props.optionText);
        }}
        >
        __DELETE
        </button>
      </div>
    </div>
);

export default Option;