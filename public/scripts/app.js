'use strict';

console.log('App is running');
// var swapi = fetch('https://swapi.co/api/people/1/').then((response) => {
//   return response.json();
// }).then((data) => {
//   console.log(data);
// });

// JSX - Javascript XML
var template = React.createElement(
  'div',
  null,
  React.createElement(
    'p',
    { id: 'someClass' },
    'This is JSX from app.js does this change?'
  ),
  React.createElement(
    'h1',
    null,
    'This is some info'
  ),
  React.createElement(
    'ol',
    null,
    React.createElement(
      'li',
      null,
      '1'
    ),
    React.createElement(
      'li',
      null,
      '2'
    ),
    React.createElement(
      'li',
      null,
      '3'
    )
  )
);

// create templateTwo var JSX expression
//div 
//h1 -> name
//p -> age
//p-> location -> burnleyxdddd
//render t2 instead of template


var templateTwo = React.createElement(
  'div',
  null,
  React.createElement(
    'h1',
    null,
    'Mateusz'
  ),
  React.createElement(
    'p',
    null,
    '23'
  ),
  React.createElement(
    'p',
    null,
    'Burnley'
  )
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);
