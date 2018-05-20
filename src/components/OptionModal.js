import React from 'react';
import Modal from 'react-modal';

const app = document.getElementById('app');

const OptionModal = (props) => (
    <Modal
      isOpen={!!props.selectedOption}
      onRequestClose={props.hideModalEvent}
      contentLabel="Selected Option"
      appElement={app}
    >

    <h3>Selected Option</h3>
    {props.selectedOption && <p>{props.selectedOption} test</p>}
    <button onClick={props.hideModalEvent}>OKAY</button>
    </Modal>
);

export default OptionModal;