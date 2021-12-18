# Weather-Journal App Project

## Table of Contents

* [Description](#description)
* [Dependancies](#dependancies)
* [Setup and Run](#setup-and-run)
* [Resources](#resources)

## Description

* The project consists of an interactive weather web application running on a local server and made using HTML, JavaScript, and NodeJS.
* The application gets the current temperature of the ZIP code entered by the user from [openweathermap.org](https://openweathermap.org/) through an API call using a special key.
* The application consists of:
    1. A text field to enter the ZIP code of the city of choice to get its current temperature.
    2. A text field for the user to enter his/her feelings about the weather.
    3. A drop-down menu for the user to select the unit in which the temperature is to be displayed. The available options are: Celsius (C), Fahrenheit (F), and Kelvin (K).
    4. A button with the label 'Generate' that is used to get the weather data and update the UI. It will also diplay an alert dialog box if the entered ZIP code is not valid.
    5. An area in which the retrieved weather data of the most recent entry is displayed in the following items:
        * Date in m.d.yyyy
        * Time of the entry in hh:mm
        * Name of the city corresponding to the entered ZIP code.
        * Temperature in the selected unit.
        * The user feelings entered above.

## Dependencies

**Node.js** should be installed on your machine.

## Setup and Run

1. **Download** the project files.
2. Inside your **terminal**, go to the main directory of the project and run the following command

```
node server.js
```

3. Open your **browser** and open the following link [127.0.0.1:2525](http://127.0.0.1:2525/)

## Resources

The following resources were used for research and guidance

* MDN Web Docs [https://developer.mozilla.org/en-US/docs/Web]
* W3schools [https://www.w3schools.com/howto/default.asp]
* Stack Overflow [https://stackoverflow.com/]
