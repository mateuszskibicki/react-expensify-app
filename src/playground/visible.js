class Visible extends React.Component {
  constructor(props) {
    super(props);
    this.handleVisibility = this.handleVisibility.bind(this);
    this.state = {
      visibility: false
    };
  }

  handleVisibility(){
    this.setState((prevState) => {
      if(prevState.visibility === false) {
        return {
          visibility: true
        }
      } else {
        return {
          visibility: false
        }
      }

    });
  }

  render() {
    return (
      <div>
        <h1>Visibility: {this.state.count}</h1>
        <button onClick={this.handleVisibility}>
        {this.state.visibility === true && 'Hide' || 'Show'}
        </button>
        {this.state.visibility === true && <p>SHOWSHOWSHOW</p>}
      </div>
    );
  }
}

ReactDOM.render(<Visible />, document.getElementById('app'));