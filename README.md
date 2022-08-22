# _Places Traveled_

#### By _**Tim Empey & Tiberius Lockett**_

#### _Creates objects of places traveled based on user input_

## Technologies Used

* _JavaScript_
* _HTML_
* _CSS_
* _Bootstrap_

## Description

_Webpage allows user to press a locations name and the name, landmark, time traveled, and climate will appear below the selected location_

## Setup/Installation Requirements

* _Open up your terminal and navigate to the desired landing folder_
* _In terminal enter, ' "git clone https://github.com/TimEmpey/places-traveled \'_
* _In terminal enter 'code .' to open files in Visual Studio Code_
* _In Visual Code Studio select the 'Go Live' option on the bottom task bar_

## Known Bugs

* _No known bugs_

## Tests

<details>
<summary>Show Tests</summary>
Describe: Place();<br>
Test 1: Should return placeName, landmarkSeen, timeVisited with key-value pair<br>
Code:<br>
  let place1 = new Place("Paris", "Eiffel Tower", "September 12")<br>
  Traveled.Place.Paris<br>
Expected Outcome: <br>
  Place {<br>
    placeName: 'Paris'<br>
    landmarkSeen: 'Eiffel Tower'<br>
    dateVisited: 'September 19'<br>
  }<br>


Describe: Traveled() <br>
Test 1: It should make new object based off our place we add"<br>
Code:<br>
  let traveled = new Traveled();<br>
  Traveled();<br>
Expected outcome<br>
  Traveled {places: {...}}<br>

Test 2: It should add current Id to 0 for our traveled constructor and set it to 0;
<br>
Code:<br>
  function Traveled();
  <br>
Expected Outcome:<br>
  {places{...}}<br>


Describe: Traveled.prototype.addPlace()<br>
Test 1: It should add a place to our <br>
Code:<br>
  let place1 = new Place("Paris", "Eiffel Tower", "September 12")<br>
  traveled = new Traveled();<br>
  traveled.addPlace(place1)<br>
  traveled.places<br>
Expected Outcome:<br>
  {Paris: Place}<br>


Describe Traveled.prototype.assignId <br>
Test: It should add Id incrementing by 1 to each new object.<br>
Code:<br>
  let place1 = new Place("Paris", "Eiffel Tower", "September 12")<br>
  let traveled = new Traveled()<br>
  traveled.addPlace(place)<br>
  traveled.places<br>
Expected Outcome:<br>
  {1: Place}<br>


Describe Traveled.prototype.findPlace<br>
Test:<br>
Code: <br>
  let place1 = new Place("Paris", "Eiffel Tower", "September 12")<br>
  let traveled = new Traveled()<br>
  traveled.addPlace(place)<br>
  traveled.findPlace(1)<br>
Expected Outcome:<br>
  Place {placeName: 'Paris', landmarkSeen: 'Eiffel Tower', timeVisited: 'september 12', id:'1'}<br>


Describe: Traveled.prototype.deletePlace();<br>
  let place1 = new Place("Paris", "Eiffel Tower", "September 12")<br>
  let traveled = new Traveled()<br>
  traveled.addPlace(place)<br>
  traveled.deletePlace(1)<br>
  traveled.places<br>
Expected Output: <br>
  {}<br>
</details>

## License

_[MIT](https://en.wikipedia.org/wiki/MIT_License)_

Copyright (c) _2022_ _Timohy Empey & Tiberius Lockett_