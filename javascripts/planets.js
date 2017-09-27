"use strict";

let planets = [];
let nasaData = [];

$.get('../data/planets.json').done((data) => {
  planets = data.planets; //saves planets json data to variable
}).fail((error) => {
  console.log(error);
});

//getting nasa api data
$.get('https://api.nasa.gov/planetary/apod?api_key=cML4iFHlbQ0IUTnGJROHnsbAfZ3Dl6TMWimdwSNY').done((data) => {
  nasaData = data;
  $('body').css('background-image', `url(${data.hdurl})`); //sets background image to url in nasa api call
}).fail((error) => {
  console.log(error);
});

const getNasaData = () => {
  return nasaData;
};

//getter function to get planets
const getPlanets = () => {
  return planets;
};

module.exports = { getPlanets, getNasaData };
