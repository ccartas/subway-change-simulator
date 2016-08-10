# Subway change simulator

# Getting started

Project contains:

- NodeJS server;
- AngularJS frontend;
- Karma with Jasmine unit testing;

# How to run the project?

1. Make sure you have installed NodeJS and Node Package Manager (npm). If not: https://docs.npmjs.com/getting-started/installing-node
2. Start the NodeJS server with the following command:
   `node server.js`
3. Access the following URL in browser:
	`http://localhost:8080/`
3. To run Karma Unit Test enter the following command: 
	`npm test`

# Need 2 know:

- Karma configuration file can be found on the following path:
	`node_modules/karma/bin/karma.conf.js`
- Install Karma by using the following command:
        `npm install karma --save-dev`
- In order to install the Jasmine Test Framework and Google Chrome browser plugin:
        `npm install karma-jasmine karma-chrome-launcher --save-dev`
- If the `karma` command is not recognized install it globally:
	`npm install -g karma-cli`


# Business Logic:

- The project simulate a machine, that for an amount of change(in pounds) you will provide the optimum solution, based on a limited amount of money;
- If the entered amount is bigger than the available money from the machine an error message will be thrown: "Out of service"
- If the entered amount cannot be split in the available money from the machine an error message will be thrown: "We cannot provide you the change"
