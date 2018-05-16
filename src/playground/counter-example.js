console.log('App is running');
// var swapi = fetch('https://swapi.co/api/people/1/').then((response) => {
//   return response.json();
// }).then((data) => {
//   console.log(data);
// });

// JSX - Javascript XML
// const template = (
//   <div>
//     <p id="someClass">This is JSX from app.js does this change?</p>
//     <h1>This is some info</h1>
//     <ol>
//       <li>1</li>
//       <li>2</li>
//       <li>3</li>
//     </ol>
//   </div>
// );

// // create templateTwo var JSX expression
// //div 
//   //h1 -> name
//   //p -> age
//   //p-> location -> burnleyxdddd
// //render t2 instead of template

// const user = {
//   name: 'Papuk',
//   age: 89,
//   location: 'Burnley',
//   cats: 2,
//   catsNames: [
//     'Pigeon',
//     'Bumbla'
//   ]
// };

// const getLocation = (location) => {
//   if (location) {
//     return <p>location : {location}</p>;
//   }
// }

// const cats = (cats) => {
//   if (cats && cats > 0 && cats === 1) {
//     return <p>I see you have {cats} cat</p>
//   } else if(cats && cats > 1) {
//     return <p>I see you have {cats} cats</p>
//   }
// }

// const catNames = (names) => {
//   if (names && names.length > 0) {
//     let output = '';
//     names.forEach((name) => {
//     });
//     return output;
//   }
// }

// var templateTwo = (
//   <div>
//     <h1>{user.name ? user.name : 'Anonymous'}</h1>
//     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
//     {getLocation(user.location)}
//     {cats(user.cats)}
//     {catNames(user.catsNames)}
//   </div>
// );

// let count = 0;

// const addOne = () => {
//   count++;
//   renderCounterApp();
// };

// const minusOne = () => {
//   count--;
//   renderCounterApp();
// };

// const reset = () => {
//   count = 0;
//   renderCounterApp();
// };

// const appRoot = document.getElementById('app');

// const renderCounterApp = () => {
//   const templateTwo = (
//     <div>
//       <h1>Count: {count}</h1>
//       <button onClick={addOne}>+1</button>
//       <button onClick={minusOne}>-1</button>
//       <button onClick={reset}>Reset</button>
//     </div>
//   );
//   ReactDOM.render(templateTwo, appRoot);
// }


// renderCounterApp();

class Counter extends React.Component {
  constructor(props) {
    super(props);
    this.handleAddOne = this.handleAddOne.bind(this);
    this.handleMinusOne = this.handleMinusOne.bind(this);
    this.handleReset = this.handleReset.bind(this);
    this.state = {
      count: 0
    };
  }

  handleAddOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count + 1
      }
    });
  }

  handleMinusOne(){
    this.setState((prevState) => {
      return {
        count: prevState.count - 1
      }
    });
  }

  handleReset(){
    this.setState(() => {
      return {
        count: 0
      }
    });
  }

  render() {
    return (
      <div>
        <h1>Count: {this.state.count}</h1>
        <button onClick={this.handleAddOne}>+1</button>
        <button onClick={this.handleMinusOne}>-1</button>
        <button onClick={this.handleReset}>reset</button>
      </div>
    );
  }
}

ReactDOM.render(<Counter/>, document.getElementById('app'));

