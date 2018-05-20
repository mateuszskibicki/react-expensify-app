'use strict';

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

// 

var IndecisionApp = function (_React$Component) {
  _inherits(IndecisionApp, _React$Component);

  function IndecisionApp(props) {
    _classCallCheck(this, IndecisionApp);

    var _this = _possibleConstructorReturn(this, (IndecisionApp.__proto__ || Object.getPrototypeOf(IndecisionApp)).call(this, props));

    _this.handleDeleteOptions = _this.handleDeleteOptions.bind(_this);
    _this.handleAction = _this.handleAction.bind(_this);
    _this.handleAddOption = _this.handleAddOption.bind(_this);
    _this.handleDeleteOptionSingle = _this.handleDeleteOptionSingle.bind(_this);
    _this.state = {
      options: []
    };
    return _this;
  }

  //when create


  _createClass(IndecisionApp, [{
    key: 'componentDidMount',
    value: function componentDidMount() {
      console.log('componentDidMount');
    }

    //when update

  }, {
    key: 'componentDidUpdate',
    value: function componentDidUpdate(prevProps, prevState) {
      console.log('update');
    }

    //when gone

  }, {
    key: 'componentWillUnmount',
    value: function componentWillUnmount() {
      console.log('gone');
    }
  }, {
    key: 'handleDeleteOptions',
    value: function handleDeleteOptions() {
      this.setState(function () {
        return { options: [] };
      });
    }
  }, {
    key: 'handleDeleteOptionSingle',
    value: function handleDeleteOptionSingle(optionToRemove) {
      this.setState(function (prevState) {
        return {
          options: prevState.options.filter(function (option) {
            return optionToRemove !== option;
          })
        };
      });
    }
  }, {
    key: 'handleAction',
    value: function handleAction() {
      var optionsLength = this.state.options.length;
      var randomNumber = Math.floor(Math.random() * this.state.options.length);
      console.log(this.state.options[randomNumber]);
    }
  }, {
    key: 'handleAddOption',
    value: function handleAddOption(option) {
      if (!option) {
        return 'Enter valid value to add item';
      } else if (this.state.options.indexOf(option) > -1) {
        return 'This option already exists';
      } else {}

      this.setState(function (prevState) {
        return {
          options: prevState.options.concat([option])
        };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      var title = 'Indecision test title';
      var subtitle = 'Subtitle xdddddd';

      return React.createElement(
        'div',
        null,
        React.createElement(Header, { title: title, subtitle: subtitle }),
        React.createElement(Action, {
          hasOptions: this.state.options.length > 0,
          handleAction: this.handleAction
        }),
        React.createElement(Options, {
          options: this.state.options,
          handleDeleteOptions: this.handleDeleteOptions,
          handleDeleteOptionSingle: this.handleDeleteOptionSingle
        }),
        React.createElement(AddOption, {
          handleAddOption: this.handleAddOption
        })
      );
    }
  }]);

  return IndecisionApp;
}(React.Component);

var Header = function Header(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'h1',
      null,
      'Indecision'
    ),
    React.createElement(
      'h2',
      null,
      props.title
    ),
    React.createElement(
      'h3',
      null,
      props.subtitle
    )
  );
};

Header.defaultProps = {
  title: 'some default'
};

var Action = function Action(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'button',
      {
        onClick: props.handleAction,
        disabled: !props.hasOptions
      },
      'What should I do?'
    )
  );
};

// class Action extends React.Component {
//   render() {
//     return (
//       <div>
//         <button 
//           onClick={this.props.handleAction}
//           disabled={!this.props.hasOptions}
//         >
//         What should I do?
//         </button>
//       </div>
//     );
//   }
// }

var Options = function Options(props) {
  var options = props.options;

  return React.createElement(
    'div',
    null,
    props.options.map(function (option) {
      return React.createElement(Option, {
        key: option,
        optionText: option,
        handleDeleteOptionSingle: props.handleDeleteOptionSingle
      });
    }),
    React.createElement(
      'button',
      { onClick: props.handleDeleteOptions },
      'XX Remove ALL XX'
    )
  );
};

// class Options extends React.Component {
//   render() {

//     const options = this.props.options;

//     return (
//       <div>

//       {
//         this.props.options.map((option) => <Option key={option} optionText={option}/>)
//       }

//       <button onClick={this.props.handleDeleteOptions}>XX Remove ALL XX</button>

//       </div>
//     );
//   }
// }

var Option = function Option(props) {
  return React.createElement(
    'div',
    null,
    React.createElement(
      'div',
      { className: 'option' },
      'Option : ',
      props.optionText,
      React.createElement(
        'button',
        {
          onClick: function onClick(e) {
            props.handleDeleteOptionSingle(props.optionText);
          }
        },
        '__DELETE'
      )
    )
  );
};

// class Option extends React.Component {
//   render() {
//     return (
//       <div>
//         <div className="option">Option : {this.props.optionText} {this.props.optionText==='four' && 'hejzehola'}</div>
//       </div>
//     );
//   }
// }

var AddOption = function (_React$Component2) {
  _inherits(AddOption, _React$Component2);

  function AddOption(props) {
    _classCallCheck(this, AddOption);

    var _this2 = _possibleConstructorReturn(this, (AddOption.__proto__ || Object.getPrototypeOf(AddOption)).call(this, props));

    _this2.handleAddOption = _this2.handleAddOption.bind(_this2);
    _this2.state = {
      error: undefined
    };
    return _this2;
  }

  _createClass(AddOption, [{
    key: 'handleAddOption',
    value: function handleAddOption(e) {
      e.preventDefault();
      //const inputText = document.getElementById('newOption').value;
      var inputText = e.target.elements.option.value.trim();

      var error = this.props.handleAddOption(inputText);

      this.setState(function () {
        return { error: error };
      });
    }
  }, {
    key: 'render',
    value: function render() {
      return React.createElement(
        'div',
        null,
        this.state.error && React.createElement(
          'p',
          null,
          this.state.error
        ),
        React.createElement(
          'form',
          { onSubmit: this.handleAddOption },
          React.createElement('input', { type: 'text', name: 'option' }),
          React.createElement(
            'button',
            { type: 'submit' },
            'SUBMIT BUTTON'
          )
        )
      );
    }
  }]);

  return AddOption;
}(React.Component);

// const User = (props) => {
//   return (
//     <div>
//       <p>Name: {props.name}</p>
//       <p>Age: </p>
//     </div>
//   );
// };

var papuk = {
  name: 'Papuk',
  age: '23',
  place: 'Burnley'
};

papuk = JSON.stringify(papuk);

console.log(papuk);

papuk = JSON.parse(papuk);
console.log(papuk);

ReactDOM.render(React.createElement(IndecisionApp, null), document.getElementById('app'));
