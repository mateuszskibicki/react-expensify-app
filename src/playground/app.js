// console.log('App is running');
// // var swapi = fetch('https://swapi.co/api/people/1/').then((response) => {
// //   return response.json();
// // }).then((data) => {
// //   console.log(data);
// // });

// // JSX - Javascript XML
// // const template = (
// //   <div>
// //     <p id="someClass">This is JSX from app.js does this change?</p>
// //     <h1>This is some info</h1>
// //     <ol>
// //       <li>1</li>
// //       <li>2</li>
// //       <li>3</li>
// //     </ol>
// //   </div>
// // );

// // // create templateTwo var JSX expression
// // //div 
// //   //h1 -> name
// //   //p -> age
// //   //p-> location -> burnleyxdddd
// // //render t2 instead of template

// // const user = {
// //   name: 'Papuk',
// //   age: 89,
// //   location: 'Burnley',
// //   cats: 2,
// //   catsNames: [
// //     'Pigeon',
// //     'Bumbla'
// //   ]
// // };

// // const getLocation = (location) => {
// //   if (location) {
// //     return <p>location : {location}</p>;
// //   }
// // }

// // const cats = (cats) => {
// //   if (cats && cats > 0 && cats === 1) {
// //     return <p>I see you have {cats} cat</p>
// //   } else if(cats && cats > 1) {
// //     return <p>I see you have {cats} cats</p>
// //   }
// // }

// // const catNames = (names) => {
// //   if (names && names.length > 0) {
// //     let output = '';
// //     names.forEach((name) => {
// //     });
// //     return output;
// //   }
// // }

// // var templateTwo = (
// //   <div>
// //     <h1>{user.name ? user.name : 'Anonymous'}</h1>
// //     {(user.age && user.age >= 18) && <p>Age: {user.age}</p>}
// //     {getLocation(user.location)}
// //     {cats(user.cats)}
// //     {catNames(user.catsNames)}
// //   </div>
// // );

// //OBJECT APP
// const app = {
//   title: 'Papuk',
//   subtitle: 'Papieroski',
//   options: []
// }


// //ADD TO ARRAY app.options
// const onFormSubmit = (e) => {
//   e.preventDefault();
//   const option = e.target.elements.option.value;
  
//   if (option) {
//     app.options.push(option);
//     e.target.elements.option.value = '';
//     renderApp();
//   }

//   console.log(app.options);
// };

// //REMOVE ITEMS
// const removeItems = () => {
//   app.options = [];
//   renderApp();
// };

// const numbers = [99, 98, 55];

// const onMakeDecision = () => {
//   const randomNum = Math.floor(Math.random() * app.options.length);
//   const option = app.options[randomNum];
//   alert(option);
// };


// // RENDER APP
// const appRoot = document.getElementById('app');
// const renderApp = () => {
//   const template = (
//     <div>
//     <form onSubmit={onFormSubmit}>
//       <input type="text" name="option"/>
//       <button>Add option</button>
//     </form>
//     <p>{app.options.length}</p>

//     <button onClick={removeItems}>Remove</button>

//     {app.options.length===0 && <p>Array is empty</p>}
//     {app.options.length>0 && <p>Oooo something in array</p>}

//     <button disabled={app.options.length === 0} onClick={onMakeDecision}>What should I do?</button>

//     <ol>
//       {
//         app.options.map((item) => {
//           return <li key={item}>{item}</li>
//         })
//       }
//     </ol>

//     </div>
//   );
//   ReactDOM.render(template, appRoot);
// };
// renderApp();