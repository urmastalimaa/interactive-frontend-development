# User input example

# Introduction to React

## Running the application

```
yarn install && yarn start
```

Open _User input example_ subpage.

## User input

[React documentation on forms][react-forms]

## Components in the example

- [`App`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/user_input_example/App.js)
  has been updated to add a new comment to local state whenever a comment is
  submitted from `CommentForm`. This is done by passing a callback function to
  `CommentForm`.
- [`CommentForm`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/user_input_example/CommentForm.js)
  has been added two text inputs, one that can be changed and one that cannot.
  Read the component documentation (and React official documentation) on how
  controlled and uncontrolled components work.

## Function context

Function context and `this` are often misunderstood in JavaScript. Read about
function context in [MDN documentation][mdn-this]. In this example
[`App`](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/user_input_example/App.js#L29)
binds the `handleCommentSubmit` function to the current `App` instance to be
able to pass the function as a callback to `CommentForm` while keeping the
function context as the current instance of the CommentForm.

[react-forms]: https://reactjs.org/docs/forms.html
[mdn-this]: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/this
