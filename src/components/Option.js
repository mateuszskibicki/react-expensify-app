import React from 'react';

const Option = (props) => (
    <div>
      <div className="option">
        {props.count}. {props.optionText} 
        <button 
        className="button button--link"
        onClick={(e) => {
          props.handleDeleteOptionSingle(props.optionText);
        }}
        >
        Remove
        </button>
      </div>
    </div>
);

export default Option;