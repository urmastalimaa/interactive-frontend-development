# Exam 2021 ticket A

# Prerequisites

* Copy/clone application scaffold from lecture 7 or homework 7 solution
* Remove all components and reducers - you will not need them
* Install dependencies
* Ensure application starts with `yarn start`

# Submission

Upload zipped application under Exam 1 - Ticket A on https://courses.cs.ut.ee/2021/react/spring

It is not allowed to **copy** any code (other than the scaffold) from the
lecture materials nor from anywhere else.

The submission must be linted with the same configuration file as lecture 7: [../../lecture_7/.eslintrc](../../lecture_7/.eslintrc).

# Application requirements

Create a React application given initial set of _words_:
```js
  [
    { id: 1, color: "blue", word: "Hey"},
    { id: 2, color: "blue", word: "Jude,"},
    { id: 3, color: "red", word: "don't"},
    { id: 4, color: "green", word: "make"},
    { id: 5, color: "red", word: "it"},
    { id: 6, color: "red", word: "bad"}
  ]
```

* Display a list showing all the words contained in the `word` field, ordered
  by the `id` field, using the `<ul>` and `<li>` tags. (6p)
* Color each word in the list according to the `color` field: (5p)
  - if `color == 'blue'`, display text in the `aqua` color,
  - if `color == 'red'`, display text in the `coral` color,
  - if `color == 'green'`, display text in the `forestgreen` color.
* Add a button next to each word, containing the text "PAINT".

  If the button is clicked, change the color of the element retaining its ID
  and text.

  Should the `color` field change, the font text color of the word must also
  immediately change.

  Pay extra attention not to mutate existing state nor props! (8p)

  - If `color == 'blue'`, change `color` to `red`,
  - if `color == 'red'`, keep the same color,
  - if `color == 'green'`, change `color` to `blue`.
* Add two links to the top of the application which navigate to the targeted sub-page without a page refresh.

  The links must always remain visible. (6p)
  - Link "Home" must navigate to "/" which shows the previously implemented list of words.
  - Link "About" must navigate to "/about" which displays an About page.

    The About page must display *your* name and matriculation number. The list
    of colors must not be shown.
* Define and use at least 5 React components (5p)

## Deductions

* -3 points for each mutation of React props/state
* -1 point for each console.log statement left in the submission
* -1 point for each linter violation, any instructions to disable the linter will be removed
