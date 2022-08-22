Describe: Place();

Test: Should return placeName, landmarkSeen, timeVisited with key-value pair
Code:
  let place1 = new Place("Paris", "Eiffel Tower", "September 12")
  Traveled.Place.Paris
Expected Outcome: 
  Place {
    placeName: 'Paris'
    landmarkSeen: 'Eiffel Tower'
    dateVisited: 'September 19'
  }


Describe: Traveled() 

Test: It should make new object based off our place we add"
Code:
  let traveled = new Traveled();
  Traveled();
Expected outcome:
  Traveled {places: {...}}


Describe: Traveled.prototype.addPlace()

Test: It should add a place to our 
Code:
  let place1 = new Place("Paris", "Eiffel Tower", "September 12")
  traveled = new Traveled();l
  traveled.addPlace(place1)
  traveled.places
Expected Outcome:
  {Paris: Place}