import React from 'react';

const Action = (props) => (
    <div>
      <button 
        onClick={props.handleAction}
        disabled={!props.hasOptions}
        className="big-button"
      >
      {props.hasOptions ? 'What should I do?' : 'Add something to use'}
      </button>
    </div>
);

export default Action;