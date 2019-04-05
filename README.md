# _Beep! Boop_

#### _Replaces elements containing numbers with a string, 4/5/209_

#### By _**Justin Kerntz**_

## Description

_Takes an input number and returns a range of numbers that count to that input. Replaces all numbers that contain 1, 2, and/or 3 with "Beep!", "Boop", "I'm Sorry Dave, I'm afraid I can't do that"._

## Setup/Installation Requirements

* _Clone Repo from [Click here](https://github.com/kerj/beepBoop.git)._
* _Open index.html in Chrome browser_

## Specs

| Behavior | Input | Output |
| ------------- |:-------------:| -----:|
| The program retains a range of numbers from 0 to the user inputted number | "4" | "0,1,2,3,4" |
| The program replaces numbers containing "3" with "I'm sorry Dave I'm afraid I can't do that." | "3" | "0,1,2,I'm sorry Dave I'm afraid I can't do that." |
| The program replaces numbers containing "2" with "Boop". | "2" | "0,1,Boop" |
| The program replaces numbers containing "1" with "Beep!". | "1" | "0,Beep!" |
| The program replaces every occurrence of numbers containing 1,2, and 3 | "4" | 0,Beep!,Boop,I'm sorry Dave I'm afraid I can't do that." |
| Double digit inputs that contain multiple rules will default to the higher numbers rule. | "13" | "..9, Beep!, Beep!,Boop,I'm sorry Dave I'm afraid I can't do that." | 

## Known Bugs

_None to date_

## Support and contact details

_Contact me via GitHub_

## Technologies Used

_Utilizes javascript as well as jquery_

### License

*MIT*

Copyright (c) 2019 **_Justin Kerntz_**
