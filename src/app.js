console.log('App is running');
// var swapi = fetch('https://swapi.co/api/people/1/').then((response) => {
//   return response.json();
// }).then((data) => {
//   console.log(data);
// });

// JSX - Javascript XML
var template = (
  <div>
    <p id="someClass">This is JSX from app.js does this change?</p>
    <h1>This is some info</h1>
    <ol>
      <li>1</li>
      <li>2</li>
      <li>3</li>
    </ol>
  </div>
);

// create templateTwo var JSX expression
//div 
  //h1 -> name
  //p -> age
  //p-> location -> burnleyxdddd
//render t2 instead of template



var templateTwo = (
  <div>
    <h1>Mateusz</h1>
    <p>23</p>
    <p>Burnley</p>
  </div>
);

var appRoot = document.getElementById('app');

ReactDOM.render(templateTwo, appRoot);