name: react_2
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

# Linting?

Quality code does not have

* unused vars
* inconsistent formatting
* arbitrary `console.log` statements

---

# Linting?

* They leave a bad impression about a product and by proxy - its creator
* I’d rather not make rules and deduct points for such noise when it is
  trivially avoidable
* **Use a linter**
* **Use a formatter** ([e.g. Prettier](https://prettier.io/docs/en/install.html))
  
---

# Thinking in React

More on concepts covered in previous seminar:
https://reactjs.org/docs/thinking-in-react.html
   
---

# Don’t let challenges weigh you down

.full-image[![Älli-down](assets/Alli-down.jpg)]
  
---

# Types of Components

In the end, it is all about state...

---

# Stateless views

* Concerned with how things look
* Do not care about data flow
  * Receive data and callbacks exclusively through props
  * Can almost always be pure functions
  * Rarely have state
* Have no dependencies on other libraries/frameworks
  
---

# Stateless views

* Trivially reusable 
  * Just pass different props
* Easy to test
  * Check whether it renders in all execution branches
* Composition of stateless views is itself a stateless view

---

# Forms

* Receive input from users
* Have **local** state concerning current form state
* Feed data to parent components

---

# Application logic containers

* Provide data to presentational components
* Pass data from forms to application logic to progress application state
* May interact with external services
* Always have state
  
---

# Separation of concerns

* Let views just display data
* Application logic containers should not handle UI concerns
* Alas, React components are not well suited to host application logic
  * Testing through UI is difficult and wasteful
  * Application logic should not concern itself with a specific view library
* What gives?

???

As previously noted, React is mostly just a view library.
  
---

# Path to hooks

[Code Example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_3/src/path_to_hooks/README.md)

---

# React inverse data-flow

* HTML form elements (input, select, textarea) inherently hold state 
* [https://reactjs.org/docs/forms.html](https://reactjs.org/docs/forms.html)
* React offers a few ways to deal with such elements
  * [Controlled components](https://reactjs.org/docs/forms.html#controlled-components)
  * [Uncontrolled components](https://reactjs.org/docs/uncontrolled-components.html)
     
---

# Controlled components

* State is fully synced between React and DOM
* Bind input value with component state
* Change component state when input changes (onChange)
  
---

# Uncontrolled components

* React and DOM state not synced
* Do not bind element value to React state
* Get element value from DOM when required
  > (e.g. when a submit button is clicked)

* Uncontrolled components can be simpler
* Usually prefer controlled components to _capture_ all the state
 
---

# React inverse data flow

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_3/src/path_to_hooks/README.md)
   
---

# Component lifecycle

* In addition to render and constructor, React provides hooks that are executed at different points in component lifecycle
* Allows integration with externals
  * Create an external element when React component is mounted, e.g. using another library or framework
  * Update the external element when props or state change
  * Remote the external element from DOM when React component unmounted
* Allows side effects (e.g network requests or DOM focus) when component is mounted/unmounted or props change
   
---

# Component lifecycle

* Documentation: https://reactjs.org/docs/react-component.html#the-component-lifecycle

---

# React hooks

* Functional components are excellent for readability and performance
* Requiring just a bit of state would force to convert to a class-based component
* Class based components are much harder to understand as they can do **anything**
* It is much better to limit ourselves and use generic patterns to augment functional components

---

# React hooks

Imagine a class-based component with two inputs:

```js
  constructor(props) {
    super(props);
    this.state = {x: 0, y: 1};
  }

  render() {
    return 
      <div>
        <input value={this.state.x} onChange={this.setX}/>
        <input value={this.state.y} onChange={this.setY}/>
      </div>
  }
```

---

# React hooks

We can generalize using simple state reading and setting by

```js
const useState = (instance, initialValue) => {
  // Internal bookkeeping to identify state key
  instance.__stateCounter = (instance.__stateCounter || 0) + 1;
  const key = instance.__stateCounter;

  // Initial value
  instance.state[key] = initialValue;

  // Getter + setter
  return [
    () => instance.state[key],
    (val) => instance.setState({ [key]: val })
  ]
};
```

---

# React hooks

```js
  constructor(props) {
    super(props);
    this.state = {};

    const {get: getX, set: setX} = useState(this, 0);
    this.getX = getX; this.setX = setX;

    const {get: getY, set: setY} = useState(this, 1);
    this.getY = getY; this.setY = setY;
  }

  render() {
    return 
      <div>
        <input value={this.getX()} onChange={this.setX}/>
        <input value={this.getY()} onChange={this.setY}/>
      </div>
  }
```

???


It is no longer necessary to define setX and setY manually, nor give names to the state keys.
This is a victory, but there is a lot of noise. This noise can however be removed in a functional component.

---

# React hooks

Imagine having access to React internals

```js
const useState = (initialValue) => {
  // Internal magic
  const instance = getCurrentInstance();
  const key = generateKey();

  // Initial value
  instance.state[key] = initialValue;

  // Getter + setter
  return [
    instance.state[key], // Can now be a simple value instead of a getter
    (val) => instance.setState({ [key]: val })
  ]
};
```

---

# React hooks

```js
const MyInput = () => {
  const [x, setX] = useState("initial-x");
  const [y, setY] = useState("initial-y");
  return 
    <div>
      <input value={x} onChange={(event) => setX(event.target.value)} />
      <input value={y} onChange={(event) => setY(event.target.value)} />
    </div>;
};
```

---

# React hooks

* All other hooks work similarly, targeting the _current instance_
* Hooks must be called on the top-level as they generate an _ID_ for the hook!
  * Calling any hook inside an `if` is a egregious bug!
* Functional components using hooks:
  * Greatly improve readability as the hooks repeat standard patterns
  * Sacrifice readability for the uninitiated by being _magic_
  * Allow injecting application logic to the UI without needing class-based components

---

# React hooks

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_3/src/path_to_hooks/README.md)
    
---

# Testing React components

* Code that isn’t tested can’t be believed
* React elements need to be rendered somehow to assert their behaviour 
* [https://reactjs.org/docs/testing.html](https://reactjs.org/docs/testing.html)
* We'll be using [React Testing Library](https://testing-library.com/docs/react-testing-library/intro/)
     
---

# Why React Testing Library

* It strongly encourages writing _accessible_ UIs
* It is not brittle as it renders the component to an actual DOM
* Drawback: It requires a [headless DOM](https://github.com/jsdom/jsdom) to be setup for running tests in NodeJS

```js
import { render } from "@testing-library/react";
/* ... */
  render(<MyComponent myText={'foo'} />);
  screen.getByText('foo'); // throws error when text cannot be found
```

---

# User events

* Trigger events just as in an actual web browser
* Use helper functions to ensure that all necessary DOM events are triggered
  * _In what order are keyup, keydown, keypress, change triggered?_
  * The helper function from `user-event` knows

```js
import userEvent from "@testing-library/user-event";
/* ... */
  userEvent.type(screen.getByRole("textbox", { name: "Author" }), "foo");
```
   
---

# React testing example

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_3/test/README.md)

---
   
# Debugging in Browser

* Developer console allows you to assign variables, run functions, set
  breakpoints etc
* To stop JavaScript evaluation at a certain point
  * Add `debugger;` statement to source code (you can obviously only do this in
    development)
* Learn Developer tools for your favorite browser, it is an invaluable skill 
  * [https://developer.chrome.com/devtools](https://developer.chrome.com/devtools)
  * [https://developer.mozilla.org/son/docs/Tools](https://developer.mozilla.org/son/docs/Tools)
     
---

# Debugging in Browser

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_3/src/debugging/README.md)
   
---

# Debugging in NodeJS

* Unit tests can be ran in NodeJS
* How to debug confusing errors?
* `--inspect` instructs NodeJS to allow attaching Chrome DevTools to Node.js
* `--inspect-brk` will break on the first line of application

These features are mostly experimental and change often. Consult latest
documentation.

[https://nodejs.org/en/docs/guides/debugging-getting-started/](https://nodejs.org/en/docs/guides/debugging-getting-started/)
  
---

# Debugging Jest tests using Chrome Dev Tools

* `node --inspect-brk node_modules/.bin/jest --runInBand`
* Open chrome://inspect and select the device
* Other integrations (including Visual Studio, WebStorm) [are
  available](https://nodejs.org/en/docs/guides/debugging-getting-started/#inspector-clients)
* Execution breaks on first line (hit continue or set breakpoints)
* Execution breaks on every breakpoint/`debugger`;
   
---

# Debugging Jest tests

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_3/test/README.md)
   
---

# Testing callbacks

* How to use create callback functions and assert if and with what arguments
  they are called?
* Use stubs/mocks
* [Jest mock functions](https://jestjs.io/docs/mock-functions)
    
---

# Testing callbacks

```js
const onClick = jest.fn();
const button = shallow(<button onClick={() => onClick('foo')} />);

button.simulate('click');

expect(onClick).toHaveBeenCalledWith('foo');
```
  
---

# Stub callback example

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_3/test/components/CommentFormTest.js#L45)
   
---

# Homework

[Requirements](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/homework/mathemagician/exercise3.md)

* Deadline 28/03/2021 23:59
* Submit zipped file to https://courses.cs.ut.ee/2021/react/Main/Submit
* React tests are a focal point of this homework, omitting them loses a lot of points
* **Only submit what is yours**

---

<video width="100%" height="50%" controls>
  <source src="assets/homework-mathemagician-3-result.m4v" type="video/mp4">
  Your browser does not support the video tag.
</video> 
