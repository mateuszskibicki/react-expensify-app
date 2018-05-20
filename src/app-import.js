import validator from 'validator';
import React from 'react';
import ReactDOM from 'react-dom';
import axios from 'axios';

let trololo = validator.isEmail('guwww@wp.pl');


const template = <p>Template 33333</p>;
ReactDOM.render(template, document.getElementById('app'));

async function getPeople() {
  const response = await fetch('https://swapi.co/api/people/1/');

  const data = await response.json();

  return data;
}

getPeople().then(posts => console.log(posts));


axios.get('https://swapi.co/api/people/1/')
  .then(function (response) {
    console.log(response.data);
  })
  .catch(function (error) {
    console.log(error);
  });