function Traveled() {
  this.places = {}
}

Traveled.prototype.addPlace = function(place) {
  this.places[place.placeName] = place;
}

function Place(placeName, landmarkSeen, timeVisited) {
  this.placeName = placeName;
  this.landmarkSeen = landmarkSeen;
  this.timeVisited = timeVisited;
}