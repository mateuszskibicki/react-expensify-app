import React from 'react';

//components
import AddOption from './AddOption';
import Options from './Options';
import Header from './Header';
import Action from './Action';
import OptionModal from './OptionModal';
import { WSAEHOSTUNREACH } from 'constants';

export default class IndecisionApp extends React.Component {
  state = {
    options: [],
    selectedOption: undefined
  }

  //when create
  componentDidMount() {
    console.log('componentDidMount');
  }

  //when update
  componentDidUpdate(prevProps, prevState) {
    console.log('update');
  }

  //when gone
  componentWillUnmount() {
    console.log('gone');
  }

  handleDeleteOptions = () => {
    this.setState(() => ({ options: [] }));
  }

  handleDeleteOptionSingle = (optionToRemove) => {
    this.setState((prevState) => ({
      options : prevState.options.filter((option) => {
        return optionToRemove !== option;
      })
    }));
  }

  handleAction = () => {
    let optionsLength = this.state.options.length;
    let randomNumber = Math.floor(Math.random() * this.state.options.length);
    this.setState((prevState) => ({
      selectedOption: true
    }))
  }

  hideModalEvent = () => {
    this.setState((prevState) => ({
      selectedOption: false
    }))
  }

  handleAddOption = (option) => {
    if(!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } else {

    }

    this.setState((prevState) => ({
        options: prevState.options.concat([option])
    }));
  }

  render() {
    const title = 'Indecision test title';
    const subtitle = 'Subtitle xdddddd';

    return (
      <div>
        <Header title={title} subtitle={subtitle}/>
        <Action 
          hasOptions={this.state.options.length > 0}
          handleAction={this.handleAction}
        />
        <Options
          options={this.state.options}
          handleDeleteOptions={this.handleDeleteOptions}
          handleDeleteOptionSingle={this.handleDeleteOptionSingle}
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
        <OptionModal 
          selectedOption={this.state.selectedOption}
          hideModalEvent={this.hideModalEvent}
        />
      </div>
    );
  }
}