This project was bootstrapped with a custom made boilerplate for [React](https://reactjs.org/) made by myself using [Parcel](https://parceljs.org/). 
The boilerplate repo is publicly available at [parcel-react](https://github.com/sgarmendia/parcel-react).

# Ubisoft

## RUNNING THE APP

Please execute the following commands in your terminal. 
First clone the repo:

```
    git clone [repo url]
```
If you don't have [Parcel](https://parceljs.org/) globally installed, you may install it as a dev dependency:

```
    npm install --save-dev parcel-bundler
```

Then install the App:

```
    npm install
```

Start the App:

```
    npm start
```

This command runs the app in the development mode.<br>
Open [http://localhost:1234](http://localhost:1234) to view it in the browser.


To launch the test runner in the interactive watch mode you may execute:
```
    npm test
```
Basic tests are performed for the App using [jest](https://jestjs.io/) and [testing-library](https://testing-library.com/).
 
For `App.js` component and its children, testing is performed regarding rendering and interaction with `React context API` as well as user click events.


## Folder Structure

After installing, your project should look like this:

```
ubisoft/
    .cache/
    dist/
    node_modules/
    src/
        api/
            index.js
            /games
                index.js
            /platforms
                index.js
        assets/
            logo/
                logo.png
                ubi_logo.png
        gamesContext/
            index.js
        hooks/
            useFetch.js
        styles/
            _catalog.scss
            _game.scss
            _header.scss
            _loader.scss
            _navigation.scss
            _normalize.scss
            _variables.scss
            main.scss
        views/
            Catalog/
                GameCard.js
                index.js
                Navigation.js
                ScrollToTop.js
            ErrorBoundary/
                index.js
            Game/
                index.js
            Header/
                index.js
            Loader/
                index.js
        App.js
        App.test.js
        favicon.ico
        index.html
        index.js
    .babelrc
    .gitignore
    fileMock.js
    jest-setup.js
    package-lock.json
    package.json
    README.md
```
I have coded this App following the [airbnb](https://github.com/airbnb/javascript) style guide as much as possible.

 This architecture is based in large part in the [CONTAINER PATTERN](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0) recommended by [Dan Abramov](https://github.com/gaearon). Although, the use of `context API` changes this paradigm.
 
The `App.js` component is designed as a container that manages the state for child components and makes the mocked Api calls.
A fake interaction with an API is simulated in order show more realistic behaviour. All data provided for games and platforms is retrieved in this way.
Mocked Api calls are handled with async/await features from es6/es7 js using a custom made `useFetch` hook.

For this App I chose to manage the global state with the `useContext` hook.
I am not implementing Redux because for an App of this size I believe it is an absolute overkill. However I have extensive experience with the Redux ecosystem, including middlewares and advanced Redux patterns. 

An intentional effort was put on my part to keep the App small and efficient. Therefore, the bare minimum packages were installed.

Additionally an `ErrorBoundary` component renders a page that catches any global errors.

-----------

made with ❤️ by Simon Garmendia...
