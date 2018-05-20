import React from 'react';

export default class AddOption extends React.Component {
  state = {
    error: undefined
  };

  handleAddOption = (e) => {
    e.preventDefault();
    const inputText = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(inputText);

    this.setState(() => ({ error }));

  }

  render() {
    return (
      <div>
        {this.state.error && <p>{this.state.error}</p>}
        <form onSubmit={this.handleAddOption}>
          <input type="text" name="option"/>
          <button type='submit'>SUBMIT BUTTON</button>
        </form>
      </div>
    );
  }
}