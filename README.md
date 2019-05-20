This is a lighter version of Github.

## Notes from Author

The code was made in 3 days on go-horse mode, so flaw in archtecture aspects and automated tests, so take this into consideration

## Challenge

A description of what is expected and what I marked as I could possibly do.

### Requisites

- [x] Connect to Github API;

- [x] List all public repositories from an user (first version: reactjs user); -> Searched user

- [x] List all the last 20 commits of repo after being clicked; -> Searched repo

- [x] Commits list should have a search field;

### Bonus Tasks

- [x] Use some modern css solution (CSS Modules, Styled-components, etc); -> Styled-components

- [ ] Endless scrolling for the commits page; -> See Issues

- [ ] Make it possible to change the order the repositories are shown (By stars, name, etc);

- [ ] Component Library (Storybook.js, Styleguidist, etc);

- [x] Server side rendering; -> NextJS

### Solution
- [x] Use reactjs, you can start with a simple create-react-app structure and work from there; -> create-next-app

- [x] Use some state managing solution; -> Redux / Redux-thunk

- [x] Use ES6+ features and write down in the readme why you used and for what, for at least 2 of them; -> It will be discussed in the end of README

- [ ] Write unit tests and any other test you may find helpful or important to have; -> Dont have time

- [X] Keep performance and corner cases in mind;

- [X] Be creative and show us what you got;

### Personal Bonus Tasks

- [ ] List events;

- [x] Search user repo;

- [x] Search repo;

- [x] Search user;

- [ ] Organize code, extracting solid components, APIs and entities/models

## Stack

It will be used:

- [CRA](https://github.com/facebook/create-react-app): The most common React boilerplate

- [ReactJS](https://reactjs.org/): A modern web development framework

- [Redux](https://redux.js.org/): For state management

- [Github API](https://developer.github.com/v3/): The API that the project is connected

- [Material-UI](https://material-ui.com/): The most popular React UI framework - Removed, changed theming functions to styled-components

- [Styled-Components](https://www.styled-components.com/): Styles CSS as a component

- [TypeScript](https://www.typescriptlang.org/): Typed superset of JavaScript - Removed, already added NextJS for SSR (hard work)

- [Jest](https://jestjs.io/): A JavaScript testing framework

- [Storybook](https://github.com/storybooks/storybook): Its a components exposed book

This is the main stack of the project, it will be based on scalability (not as a simple challenge!)

## Available Scripts

In the project directory, you can run:

### `yarn dev`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
Your app is ready to be deployed!
