# Flight-Schedules-React

I started this project to demonstrate what I have learned about developing web applications using React. This app is meant to be just a showcase.
There are certain requirements that I have set myself for this app:
 - The app must be built using the latest stable version of React
 - The app must be written using Typescript - it just adds an extra layer of complexity
 - The app must use a grid layout - either using a predefined framework like [Carbon](http://www.carbondesignsystem.com), or build it using CSS
 - The app must make live API calls to fetch data - in this case, we'll be calling the [Lufthansa developer API](developer.lufthansa.com)
 - The API calls must be testable, using something like [Redux-Saga](https://redux-saga.js.org/)
 - For data storage, the app must use [Redux](https://redux.js.org/) with [Immutable.js](https://github.com/immutable-js/immutable-js)
 - Try to use new React features like [Hooks](https://reactjs.org/docs/hooks-intro.html) where possible
 - Every component, saga, reducer, etc that can be tested, should be tested

These are just some of the requirements that I could think of when I started development. More requirements will be added as it develops.

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
