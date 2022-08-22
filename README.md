Describe: Place();
Test 1: Should return placeName, landmarkSeen, timeVisited with key-value pair
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
Test 1: It should make new object based off our place we add"
Code:
  let traveled = new Traveled();
  Traveled();
Expected outcome:
  Traveled {places: {...}}

Test 2: It should add current Id to 0 for our traveled constructor and set it to 0;
Code: 
  function Traveled();
Expected Outcome:
  {places{...}}


Describe: Traveled.prototype.addPlace()
Test 1: It should add a place to our 
Code:
  let place1 = new Place("Paris", "Eiffel Tower", "September 12")
  traveled = new Traveled();l
  traveled.addPlace(place1)
  traveled.places
Expected Outcome:
  {Paris: Place}


Describe Traveled.prototype.assignId 
Test: It should add Id incrementing by 1 to each new object.
Code:
  let place1 = new Place("Paris", "Eiffel Tower", "September 12")
  let traveled = new Traveled()
  traveled.addPlace(place)
  traveled.places
Expected Outcome:
  {1: Place}


Describe Traveled.prototype.findPlace
Test:
Code: 
  let place1 = new Place("Paris", "Eiffel Tower", "September 12")
  let traveled = new Traveled()
  traveled.addPlace(place)
  traveled.findPlace(1)
Expected Outcome:
  Place {placeName: 'Paris', landmarkSeen: 'Eiffel Tower', timeVisited: 'september 12', id:'1'}


Describe: Traveled.prototype.deletePlace();
Code:
  let place1 = new Place("Paris", "Eiffel Tower", "September 12")
  let traveled = new Traveled()
  traveled.addPlace(place)
  traveled.deletePlace(1)
  traveled.places
Expected Output: 
  {}