This file provides instructions on how to use the robotic hoover application.

#### To start the application using IntelliJ

* Open the robo-hoover project in IntelliJ.
* Run the application using the "Run" button provided by the IDE.
* Navigate to `http://localhost:3000`.

Then press `F12` or righ-click on the web page and inspect it. The application will log the final position of the hoover as well as the cleaned patches.

#### To start the application using the command line

* Open your command line or terminal.
* Navigate to the `robo-hoover` folder.
* Execute node script `npm start`.
* Navigate to `http://localhost:3000`.

Then press `F12` or righ-click on the web page and inspect it. The application will log the final position of the hoover as well as the cleaned patches.

#### Changing the input
To change the hoover input, edit the "input.txt" file in the `public` folder of the project.

#### Changing the javascript
Ensure to run `browserify -t brfs public/javascripts/index.js > public/javascripts/bundle.js` from the robo-hoover folder in the command line or terminal everytime the javascript is changed.

#### Running test
This project was test driven. To run the tests, execute `npm test` on the command line/terminal or on IntelliJ.