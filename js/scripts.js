//Business Logic
function Traveled() {
  this.places = {}
  this.currentId = 0;
}

Traveled.prototype.addPlace = function(place) {
  place.id = this.assignId();
  this.places[place.id] = place;
}

Traveled.prototype.assignId = function() {
  this.currentId += 1;
  return this.currentId;
};

Traveled.prototype.findPlace = function(id) {
  if (this.places[id] !== undefined) {
  return this.places[id];
  }
  return false;
}

Traveled.prototype.deletePlace = function(id) {
  if (this.places[id] === undefined) {
    return false;
  }
  delete this.places[id];
  return true;
}

function Place(placeName, landmarkSeen, timeVisited, climate) {
  this.placeName = placeName;
  this.landmarkSeen = landmarkSeen;
  this.timeVisited = timeVisited;
  this.climate = climate;
}

//UI Logic
let traveled = new Traveled();

function handleFormSubmission(event) {
  event.preventDefault();
  const inputtedPlaceName = document.querySelector("input#newPlaceName").value;
  const inputtedLandmarkSeen = document.querySelector("input#newLandmarkSeen").value;
  const inputtedTimeVisited = document.querySelector("input#newTimeVisited").value;
  const inputtedClimate = document.querySelector("input#newClimate").value;
  let newPlace = new Place (inputtedPlaceName, inputtedLandmarkSeen, inputtedTimeVisited, inputtedClimate);
    traveled.addPlace(newPlace);
    console.log(traveled.places);
}
window.addEventListener("load", function() {
  document.querySelector("form#new-place").addEventListener("submit", handleFormSubmission);
});

