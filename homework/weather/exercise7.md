# Homework 7 - The Weather Widget

**All installation, running, style, and submission requirements from Homework 5 still apply.**

## Prerequisites
* Server application is running on [https://forecast-ut-88jlk.ondigitalocean.app/](https://forecast-ut-88jlk.ondigitalocean.app/) host
* Please go through [API documentation](https://github.com/artem-galas/forecast-ut#api)

## Add functionality to Weather Widget ( 10 / 10 points)

Adding routes to you application

* `/` route - where is simple display dashboard from previous homework
* `/widgets` routes - displays list of the widgets (just city name)
* `/widgets/:id` - will display **detailed** weather information
* `/history` - display history of used cities
* Not found cases should be covered

Click on "History" button will navigate to `/history` page
Click on "All Widgets" button will navigate to `/widgets` page
Click on "+ Add Widget" button will navigate to dashboard `/`

**NOTE:**
For routing [React-Router](https://reactrouter.com/docs/en/v6/getting-started/installation) should be installed

## Submission

* Requirements which cannot be validated due to missing dependencies from package.json will be awarded 0 points

## Sanity check

* Delete node_modules/ directory and JavaScript and CSS files from the public/ directory
* Run `yarn install && yarn lint && yarn test` and check that your tests pass
* Run `yarn start` and check that your application works as expected
