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

function Place(placeName, landmarkSeen, timeVisited) {
  this.placeName = placeName;
  this.landmarkSeen = landmarkSeen;
  this.timeVisited = timeVisited;
}

