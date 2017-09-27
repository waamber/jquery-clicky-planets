"use strict";

const planets = require('./planets');

//all planets to show
$('#showButton').mouseover(() => {
  createDomString(planets.getPlanets());
});

const createDomString = (planetsData) => {
  let planetString = '';
  for (let i = 0; i < planetsData.length; i++) {
    let newPlanet = `<div class="planetBox"  id="planetBox-${i}">
                      <div class="planetName hidden">${planetsData[i].name}</div>       
                      <img class="planetImage" src="${planetsData[i].url}">
                      </div>`;
    planetString += newPlanet;
  }
  printToDom(planetString);
};

const printToDom = (strang) => {
  $('#planetHolder').html(strang);
};

//click on planetImage, grabs images previous sibling of event target(planetName) and removes it
$('body').on('click', '.planetImage', (e) => {
  $(e.target).prev().removeClass('hidden');
});


//clears on clear button click and replaces it with nasa data
$('#clearButton').click(() => {
  let nasaData = planets.getNasaData();
  $('#planetHolder').html(`<h2>${nasaData.title}</h2>`);
  $('#planetHolder').append(`<p>${nasaData.explanation}</p>`);
});

$('#searchText').keypress((e) => {
  if (e.key === 'Enter') {
    let txt = $('#searchText').val();
    let planetData = planets.getPlanets();
    let results = planetData.filter((thing) => {
      return thing.name.indexOf(txt) > -1;
    });
    createDomString(results);
    $('.planetName').removeClass('hidden');
  }
});

module.exports = {};

