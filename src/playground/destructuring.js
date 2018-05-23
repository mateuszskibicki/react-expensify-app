// const person = {
//   name: 'Andrew',
//   age: 23,
//   location: {
//     city: 'Burnley',
//     temp: 20
//   }
// };

// const { name: firstName = 'Annonymous', age } = person;
// const { city, temp: temperature } = person.location;

// const book = {
//   title: 'Harri Potta xD',
//   author: 'J.K. Rolling Stones',
//   publisher: {
//     //name: 'Kotek',
//     surname: 'Bilbo'
//   }
// }

// const { title = '1', author = '2' } = book;

// const { name: firstName = '3', surname: lastName ='4' } = book.publisher;

// console.log(`${title} wrote by ${author}. ${firstName} ${lastName} was the publisher. `);



//array
const address = ['1 Carlton', 'BB11 4JE', 'Burnley', 'Lancashire', 'England', 'Europe', 'Earth'];

const [street, zip, city, state, country, continent, planet] = address;

console.log(street, zip, city, state, country, continent, planet);

const item = []