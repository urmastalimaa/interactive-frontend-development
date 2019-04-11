# Redux comment list example

## Running the application

```
yarn install && yarn test && yarn start
```

Open _Redux combine reducers example_ subpage.

## New dependencies

* [eslint-plugin-react-redux](https://github.com/DianaSuvorova/eslint-plugin-react-redux)
  has been added to [package.json](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_4/package.json#L26)

## New functionality


The application now has a [`Filter`](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_4/src/redux_combine_reducers/components/Filter.js) to filter comments
by text or author.

[`CommentForm`](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_4/src/redux_combine_reducers/components/CommentForm.js) has been reverted to hold the
input state in the component as it is not important for the rest of the
application until a comment has been submitted.

## Actions

This example application has [2 actions](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_4/src/redux_combine_reducers/actions/index.js) that capture all
user interactions.

* `COMMENT_SUBMITTED`
* `FILTER_SET`

### Reducers

Two reducers are combined in [`./reducers/index.js`](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_4/src/redux_combine_reducers/reducers/index.js) under
different namespaces using `combineReducers` from `redux`.

* [`CommentListReducer`](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_4/src/redux_combine_reducers/reducers/CommentListReducer.js) handles submission
  of new comments and provides a selector function to apply a filter to a list
  of comments.
* [`CommentFilterReducer`](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_4/src/redux_combine_reducers/reducers/CommentFilterReducer.js) simply stores
  the current filter value.

Note that both the reducers are fully tested as they contain all the
application logic.

### Container components

Multiple containers are used to avoid collecting all properties and callbacks
in the root component. 

* [`CommentFormContainer`](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_4/src/redux_combine_reducers/containers/CommentFormContainer.js) wraps `CommentForm`
* [`CommentListContainer`](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_4/src/redux_combine_reducers/containers/CommentListContainer.js) wraps `CommentList`
* [`FilterContainer`](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_4/src/redux_combine_reducers/containers/FilterContainer.js) wraps `Filter`

Note that container components are not reusable as they are tied to a specific
part of application state.
