# React Storybook

## Running the application

```
yarn install
yarn storybook
```

Open http://localhost:6006

## Explanation

Lecture 7 example is continued from

### New Dependencies

React Storybook can be installed via the auto-configuring CLI interface
executing `yarn dlx --package @storybook/cli sb init`.

- [storybook](https://github.com/storybooks/storybook)

### React Storybook

[Official documentation](https://storybook.js.org/docs/react/get-started/introduction)

User interface components do not exist in isolation. While unit tests help to
validate basic properties of a component, they are of no use in developing the
look and feel.

Setting up the required state for a particular user interface component can be
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
configuration from the root directory if present. The auto-configuring CLI
interface tries to automatically identify and configure the storybook such that
further configuration is rarely required.

Configuration files are stored in [.storybook folder](./.storybook).

#### Stories

Stories are defined in the [stories folder](./src/stories/). Read them and
their comments to understand how components can be displayed in isolation.

In progressing complexity:

- [Comment story](./src/stories/Comment.stories.js)
- [CommentList story](./src/stories/CommentList.stories.js)
- [CommentForm story](./src/stories/CommentForm.stories.js)
- [CommentListWithServer story](./src/stories/CommentListWithServer.stories.js)
- [App story](./src/stories/App.stories.js)

#### Automatic regression testing

Now that there is a simple way to define how UI components look in isolation,
it is also easy to

- spawn a set of browsers in a CI environment
- navigate to all the storybooks and take a screenshot of the story
- commit the images to the repository

This way all visual changes are immediately visible in commit history and pull
requests.
