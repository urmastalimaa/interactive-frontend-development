# Exam 2021 ticket B

# Prerequisites

* Copy/clone application scaffold from lecture 7 
* Remove all components and reducers - you will not need them
* Install dependencies
* Ensure application starts with `yarn start`

# Submission

Upload zipped application under Exam 1 - Ticket B on https://courses.cs.ut.ee/2021/react/spring

It is not allowed to **copy** any code (other than the scaffold) from the
lecture materials nor from anywhere else.

The submission must be linted with the same configuration file as lecture 7: [../../lecture_7/.eslintrc](../../lecture_7/.eslintrc).

# Application requirements

Create a React application given initial set of _prices_:
```js
  [
    { id: 1, item: "Car", price: 5000},
    { id: 2, item: "Gum", price: 20},
    { id: 3, item: "Table", price: 800},
    { id: 4, item: "Meal", price: 500},
    { id: 5, item: "House", price: 10000},
    { id: 6, item: "Pillow", price: 100}
  ]
```

* Display a list showing all the prices in the form of "Car: 5000", ordered
  by the `id` field, using the `<ol>` and `<li>` tags. (6p)
* Color each item row in the list according to the `price` field: (5p)
  - if `price <= 500`, display the row in the `darkgreen` color,
  - if `500 < price <= 5000`, display the row in the `darkblue` color,
  - if `price > 5000`, display the row in the `purple` color.
* Add a button next to each item, containing the text "INFLATE!".

  If the button is clicked, **double** the price of the element retaining its
  ID and item. The inflated price must be limited to 20000.

  The row font color must also immediately change if the price falls into a new
  coloring range.

  Pay extra attention not to mutate existing state nor props! (8p)
* Add two links to the top of the application which navigate to the targeted sub-page without a page refresh.

  The links must always remain visible. (6p)
  - Link "Home" must navigate to "/" which shows the previously implemented list of prices.
  - Link "About Me" must navigate to "/aboutme" which displays a About Me page.

    Th About Me page must display *your* name and matriculation number. The list
    of prices must not be shown.
* Define and use at least 5 React components (5p)

## Deductions

* -3 points for each mutation of React props/state
* -1 point for each console.log statement left in the submission
* -1 point for each linter violation, any instructions to disable the linter will be removed
