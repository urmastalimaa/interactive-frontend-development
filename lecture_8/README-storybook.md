# React Storybook

## Running the application

```
yarn install
yarn storybook
```

Open localhost:6006

## Explanation

_connected-react-router_ example is continued from.

### New Dependencies

React Storybook can be installed via the CLI interface which itself can be
installed via `yarn global add @storybook/cli`. After installation execute
`getstorybook` which installs the required version of storybook and addons that
fit your project.

* [storybook](https://github.com/storybooks/storybook)

### React Storybook

[Official documentation](https://storybook.js.org/basics/introduction/)

User interface components do not exist in isolation. While unit tests help to
validate basic properties of a component, they are of no use in developing the
look and feel.

Setting up the required state for a particular user inferface component can be
a pain when trying to do so through the application. Even more frustratingly,
this state might need to be set up again and again as you make changes to the
component. 

React Storybook (and similar tools) allow developing React Components in
isolation. They allow convenient rendering of a component in the web browser in
different states. Components that only require props (and are thus very easy to
setup) for rendering are perfectly suited for this.

#### Configuration

React Storybook does not reuse the whole application setup. It runs a separate
webpack server running the storybook application. It reuses the babel
configuration from the root directory if present.

Note that you might need to change how ES6 modules are handled in babel
configuration, depending on the webpack configuration of react storybook. In
this example, we added [a different babel
configuration](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_8/.storybook/.babelrc)
to .storybook/ which transpiles ES6 modules.

Otherwise the storybook [is
configured](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_8/.storybook/config.js)
simply to require all the stories in this example.

#### Stories

Stories are defined in the [stories
folder](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_8/stories).
Read them and their comments to understand how components can be displayed in
isolation.

#### Automatic regression testing

Now that there is a simple way to define how UI components look in isolation,
it is also easy to 

* spawn a set of browsers in a CI environment
* navigate to all the storybooks and take a screenshot of the story
* commit the images to the repository

This way all visual changes are immediately visible in commit history and pull
requests.
