import React from 'react';
import Modal from 'react-modal';

const app = document.getElementById('app');

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.hideModalEvent}
      selectedOption={props.selectedOption}
      contentLabel="Selected Option"
      appElement={app}
      closeTimeoutMS={200}
      className="modal"
    >

    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption}</p>}
    <button onClick={props.hideModalEvent}>OKAY</button>
    </Modal>
);

export default OptionModal;