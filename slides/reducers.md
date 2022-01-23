name: reducers
class: middle, center

# Interactive Front-end Development

## Urmas Talimaa
## _Glia Inc_

???

<!-- Dummy notes to check presenter display  -->

Presenter display slide notes

Pre-lecture checklist

* Switching between mirroring and non-mirroring works
* Unrelated tabs and windows closed or minimized
* Do not disturb mode **ON**
* Slides cloned, one has presenters mode on
* Dependencies installed and scripts are working for lecture example code
* Terminal(s) open with code and window to run scripts

---

# Feedback

* When a React component is 50+ lines long, it’s time to refactor
                     
---

# React and State

* Components managing application state get complex very fast
* Application logic should be separate from the view layer

---
  
# State

* **Value** - something that does not change
* **Identity** - A stable logical entity associated with a series of different
  **values** over time
* **State** - the **value** an entity with a specific **identity** has at a
  particular point in **time**
* **Stateful function** - If a function is invoked with same arguments at two
  different points in time and it returns different values then it is stateful.
  * It is not a pure function
   
---

# Pure functions and stateful functions

Pure function: 
```js
const addOne = (x) => x+1;
```

Stateful function:

```js
private int _number = 0;
 function int addOne() {
   _number++;
   return _number;
}
```
   
---

# Stateful objects

* Objects which change through time
  * Class instances with internal, mutable state
  * Objects which properties are mutated
  * Arrays which are inserted into / removed from

---

# Stateful objects

```js
accountBalance.deduct(fee);
```

---

# Stateful objects

* Can reach unexpected or illegal states
* Comparing is hard and expensive
* Hard to test
  * Need to identify all possible states that can be reached through mutation 
* Poor behaviour in concurrent environment
* Can be more fast and memory efficient

---

# Immutable objects - Values

* Easy to reason about
  * All possibilities are captured by parameters
* Easy to test
* Safe to change i.e. create new objects from
* Safe optimizations (structural sharing, object caches)
* Excellent in concurrent environments
* Usually slower and require more memory  

---

# Final boss: mutable state

* Mutable state is hard to get right 
  * [State, You’re Doing It Wrong](https://vimeo.com/46276948)
* Every application has at least some mutable state. It is how you manage it
  that decides your happiness.

---

# Final boss: mutable state

Global, mutable state that you modify directly is:

* Impossible to reason about and test
* Small code changes can have unexpected consequences
* Hard to test + hard to change = impossible to maintain
* [https://programmers.stackexchange.com/a/148109](https://programmers.stackexchange.com/a/148109)

.right-image[![Mutable State](assets/mutable-state.jpg)]
      
---

# Final boss: mutable state

The moment you are afraid to change your own program is the time to rethink your methodology.

---
   
.full-image[![Mutable State - Inevitable fail](assets/mutable-state--inevitable-fail.jpg)]

---

# How do we want our state?

* Immutable
* Testable
* Traceable
* New state created in a predictable, explicit manner

---
  
# Elm and Elm architecture

* Elm is a programming language based on Haskell
* It uses a functional programming and makes heavy use of **pure functions**.

---

# Elm architecture

* Model - State
* Update - composition of pure functions called actions that transform the
  model
* View translates state to HTML
* Can be used for the whole application or any sub-system

.right-image[![Elm Architecture](assets/elm_runtime.png)]

---

# "Update" = Reducer

Reducer in general is a function that takes

* an object of type A and
* an object of type B
* returns an object of type A


* 
  ```haskell
  reduce (+) 0 [1, 2, 3] => 6
  ```

---

# Application state reducers

```haskell
reducer :: (state, action) => state
```

Reducer is a **pure function** that returns new state based on previous state
and an action. It contains application logic, interpreting how to change
application state whenever something (an action) happened.

---

# Application state reducers

Reducers must always be pure functions. You should never:
* Mutate arguments
* Mutate state object
* Send HTTP requests
* Call non-pure functions, e.g. `Date.now()` or `Math.random()`

---

# Action format

* [https://github.com/acdlite/flux-standard-action](https://github.com/acdlite/flux-standard-action)
* Standard, human-readable format

```js
{
  type: 'ADD_TODO',
  payload: {
    text: 'Remember milk.'
  }
}
```

---

# Reducer-based application example

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_4/src/redux_introduction/README.md)

---

# Reducers in React

Very good fit for React applications

* Efficiently rendering whole component trees based on changed state is _what React does_
* React ecosystem adopted the architecture via [ReduxJS](https://redux.js.org)
* Newer React versions have incorporated reducers via [`useReducer` hook](https://reactjs.org/docs/hooks-reference.html#usereducer)

---

# Reducers in React

From [React documentation](https://reactjs.org/docs/hooks-reference.html#usereducer):

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

---

# Reducers in React

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
```

* Hook handles updating `state` when `dispatch` is called
* `dispatch` must be called with an `action`, an object describing **what happened**
  ```js
  dispatch({type: 'FOOD_DESIRED', payload: 'fries' });
  ```
* `initialArg` or `init(initialArg)` for creating initial state, latter is _lazy_

---

# Reducers in React

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
return <CommentForm onSubmit=`(commentAttributes) => dispatch(submitComment(commentAttributes))` />;
```

* Import _action creator_ functions to encapsulate action types
* _action creator_ functions can have side effects

```
const submitComment = (commentAttributes) => ({
  type: "submitComment",
  payload: {
    ...commentAttributes,
    submitTime: Date.now()
  }
});
```

---

# Reducers in React

```js
const [state, dispatch] = useReducer(reducer, initialArg, init);
return <Comments comments=`filterComments(state)` />;
```

* Use _selector_ functions to calculate props from state
* For maximum encapsulation use _selector_ functions to access any field in `state`

---

# Reducers in React

* [Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_4/src/reducers_with_react/README.md)

---
      
# How to lose everything

* A reducer must never mutate state!
* No objects in old state should be mutated
  * ~~state.foo = 'bar';~~
  * ~~state.foos[1] = 'bar';~~
  * ~~state.foos.push(‘bar’);~~
  * Violations will cause faulty application behaviour

---

# Testing reducers

```js
// As simple as can be

test("...", () => {
    const initialState = initializer();
    const state = reducer(initialState, myActionCreator(myPayload));
    expect(mySelectorFunction(state)).toEqual(...);
});
```

---

# Testing reducers

* If all application logic is contained in reducers, all application logic can be tested without UI
* Testing without UI is simpler
* Testing without UI is much faster
* UI tests can only test main flows

---

# Reducers testing example

* [Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_4/test/CommentsTest.js)
 
---

# Homework

[Requirements](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/homework/mathemagician/exercise4.md)

* Deadline 11/04/2021 23:59 (Sunday 2 weeks from now!)
* Submit zipped file to [https://courses.cs.ut.ee/2021/react/spring/](https://courses.cs.ut.ee/2021/react/spring/)
* Tests will give significant points
* **Only submit what is yours**

---

<video width="100%" height="50%" controls>
  <source src="assets/homework-mathemagician-4-result.m4v" type="video/mp4">
  Your browser does not support the video tag.
</video> 
