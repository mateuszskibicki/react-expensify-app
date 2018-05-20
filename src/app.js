import React from 'react';
import ReactDOM from 'react-dom';

//my app file
import IndecisionApp from './components/IndecisionApp';

ReactDOM.render(<IndecisionApp />, document.getElementById('app'));



















// ------------------
// OLD SYNTAX WITHOUT PRESETS
class OldSyntax {
  constructor() {
    this.name = "Mike";
    this.getGreeting = this.getGreeting.bind(this);
  }
  getGreeting() {
    return `Hi. My name is ${this.name}`;
  }
}
const oldSyntax = new OldSyntax();
const getGreeting = oldSyntax.getGreeting; 
console.log(getGreeting()); //doesn't reed this.name props without binding

// ------------------
// NEW SYNTAX
class NewSytnax {
  name = 'Jen';
  getGreeting = () => {
    return `Hi. My name is ${this.name}`;
  }
}
const newSytnax = new NewSytnax();
const newGetGreeting = newSytnax.getGreeting;
console.log(newGetGreeting()); //it work's without binds


