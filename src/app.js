class IndecisionApp extends React.Component {
  constructor(props){
    super(props);
    this.handleDeleteOptions = this.handleDeleteOptions.bind(this);
    this.handleAction = this.handleAction.bind(this);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      options: []
    }
  }

  handleDeleteOptions() {
    this.setState(() => {
      return {
        options: []
      };
    });
  }

  handleAction(){
    let optionsLength = this.state.options.length;
    let randomNumber = Math.floor(Math.random() * this.state.options.length);
    console.log(this.state.options[randomNumber]);
  }

  handleAddOption(option) {
    if(!option) {
      return 'Enter valid value to add item';
    } else if(this.state.options.indexOf(option) > -1) {
      return 'This option already exists';
    } else {

    }

    this.setState((prevState) => {
      return {
        options: prevState.options.concat([option])
      };
    });
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
        />
        <AddOption 
          handleAddOption={this.handleAddOption}
        />
      </div>
    );
  }
}

class Header extends React.Component {
  render() {
    return (
      <div>
        <h1>Indecision</h1>
        <h2>{this.props.title}</h2>
        <h3>{this.props.subtitle}</h3>
      </div>
    );
  }
}

class Action extends React.Component {
  render() {
    return (
      <div>
        <button 
          onClick={this.props.handleAction}
          disabled={!this.props.hasOptions}
        >
        What should I do?
        </button>
      </div>
    );
  }
}

class Options extends React.Component {
  render() {

    const options = this.props.options;

    return (
      <div>
        
      {
        this.props.options.map((option) => <Option key={option} optionText={option}/>)
      }

      <button onClick={this.props.handleDeleteOptions}>XX Remove ALL XX</button>

      </div>
    );
  }
}

class Option extends React.Component {
  render() {
    return (
      <div>
        <div className="option">Option : {this.props.optionText} {this.props.optionText==='four' && 'hejzehola'}</div>
      </div>
    );
  }
}

class AddOption extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOption = this.handleAddOption.bind(this);
    this.state = {
      error: undefined
    };
  }

  handleAddOption(e){
    e.preventDefault();
    //const inputText = document.getElementById('newOption').value;
    const inputText = e.target.elements.option.value.trim();

    const error = this.props.handleAddOption(inputText);
    this.setState(() => {
      return {
        error: error
      };
    });

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



ReactDOM.render(<IndecisionApp/>, document.getElementById('app'));