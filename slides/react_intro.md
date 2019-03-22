name: react_intro
class: middle, center

# Interactive Front-end Development

## Urmas Talimaa
## _Glia Inc (formerly SaleMove)_

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

.full-image[![JS-tooling](assets/basic-website-2014.jpg)]

---

# JavaScript function context

```js
class Foo {
  printThis() { console.log('this:', this); }; 
};
class Bar {
  printThis() { console.log('this:', this); };
}; 

(new Foo()).printThis(); 
(new Bar()).printThis();
const func = (new Foo()).printThis;
func();
const boundFunc = func.bind(document)
boundFunc();
```
---

# JavaScript function context

```js
class Foo {
  printThis() { console.log('this:', this); }; 
};
class Bar {
  printThis() { console.log('this:', this); };
}; 

* (new Foo()).printThis(); 
* (new Bar()).printThis();
const func = (new Foo()).printThis;
* func();
const boundFunc = func.bind(document)
* boundFunc();
```

---

# JavaScript function context

```js
class Foo {
  printThis() { console.log('this:', this); }; 
};
class Bar {
  printThis() { console.log('this:', this); };
}; 

(new Foo()).printThis();                      // this: Foo {}
(new Bar()).printThis();                      // this: Bar {}
const func = (new Foo()).printThis;
func();                                       // this: undefined
const boundFunc = func.bind(document)
boundFunc();                                  // this: #document
```

---

# JavaScript function context


```js
class Foo {
  constructor() {
    // this.printThis refers to the function 
    // that is defined on Foo’s prototype.
    this.printThis = this.printThis.bind(this);
    // this.printThis now refers to a new function 
    // that is bound to current instance. 
    // This is usually what you want 
    // when you need to pass functions around.
  }
  printThis() { console.log('this:', this); };
};
const func = (new Foo()).printThis;
func(); 
```

---

# JavaScript function context

```js
class Foo {
  constructor() {
    // this.printThis refers to the function 
    // that is defined on Foo’s prototype.
    this.printThis = this.printThis.bind(this);
    // this.printThis now refers to a new function 
    // that is bound to current instance. 
    // This is usually what you want 
    // when you need to pass functions around.
  }
  printThis() { console.log('this:', this); };
};
const func = (new Foo()).printThis;
func();                                     // this: Foo {}
```

---

# More on prototypical inheritance

[https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Inheritance_and_the_prototype_chain)

---

# What is a Single Page Application (SPA)?

* A web application that requires a single page load in a web browser.
* All changes to the DOM after the initial page load are done using JavaScript (via DOM APIs).
* Examples: Gmail, Facebook, Google maps, Twitter, Instagram

---

# JavaScript frameworks

* 2007 Ember
* 2009 Angular and NodeJS
* 2010 Backbone - Use models, don't hold state in DOM
* 2013 React - Declarative views, virtual DOM
* so many more...

---

# What differentiates JavaScript frameworks?

Most framework designs are flavours of the [Model-View-Controller](https://en.wikipedia.org/wiki/Model–view–controller) (MVC) pattern

* Model holds data and logic
* View presents data
* Controller passes data from model to views,  accepts input from views and passes to model

---

# What differentiates JavaScript frameworks?

Differences usually come from

* Template engine / support
* Data-flow
* State management
* Composition of views/controllers (means of composition)

---

# React

* React solves View (with a bit of Controller) in Model - View - Controller.
* Solves 1 problem and it solves it well - building reusable and testable components.
* Library, not a framework. Doesn't make assumptions about your application, can use it in any existing application without problems!
  * Not all batteries are included!
  * Significant assembly might be required
* Simple and declarative.

---

# What is React

* Works in native mobile applications through React Native.
* Can be used to implement high-performance UIs
* Scales when used in big teams.
* [https://reactjs.org/](https://reactjs.org/)
* Rethinking best practices by Pete Hunt: [https://www.youtube.com/watch?v=DgVS-zXgMTk](https://www.youtube.com/watch?v=DgVS-zXgMTk)
* Excellent documentation
* A lot of low-effort tutorials and blogosphere noise

---

# React Developer Tools

* [For chrome](https://chrome.google.com/webstore/detail/react-developer-tools/fmkadmapgofadopljbjfkapdkoienihi?hl=en)
* [For firefox](https://addons.mozilla.org/en-US/firefox/addon/react-devtools/)
* Open browser console and find out the state of each component

---

# Let's get a taste of React

.full-image[![Exploration](assets/Alli-flower.jpg)]

---

# Templating

Traditional web development suggested
* All markup should be in templates
* Templates can be reused for different data

In practice
* Templates introduce another (templating) language
* It is usually not obvious what data a template needs
* Refactoring templates can be difficult. It is not trivial to understand if, how and in how many places a template is used
* Templating languages usually have limited capabilities
* Often hard to test and debug

---

# Templating

Composing templates can be problematic

* How to pass data to a nested template from a controller?
* How does a controller receive input (e.g from text fields) from a nested template?

The solutions are usually rather complex

---

# Control flow in templates

* Reinvents JavaScript concepts (scope, context, control flow)
  * Sometimes through custom template-directives e.g ng-repeat
* HTML - HyperText Markup Language, not a programming language

---

# React

Problem:

>> * Templates often do not work as well as we’d want

Solution:

>> * Markup is defined using JavaScript. 
>> * Can be done with JSX or plain JavaScript.

Drawback:

>> * Does not work whatsoever when JavaScript disabled

???

Remember, we are only talking in the context of actual applications, so falling
back when JavaScript is disabled is not too much of an issue here.

---

# JSX

```js
<button className='comment-form' onClick={props.onSubmit}>
  {props.text}
</button>
```


---

# JSX

* [https://reactjs.org/docs/introducing-jsx.html](https://reactjs.org/docs/introducing-jsx.html)
* Optional in React (recommended in this course).
* By far the most controversial part of React.
* _Looks like_ HTML, but is a representation of HTML in JavaScript.
* Transpiled to JavaScript (e.g by a babel plugin)

_Reminder_

>> Nothing works when user disables JavaScript. You are building an application, right?

---

# JSX

* Simplifies mapping JavaScript views to the HTML they generate.
* Allows using JavaScript to generate all the markup.
  * No control flow through HTML extensions or another templating language!

---

# Hyperscript

* Alternative to JSX
* [https://github.com/dominictarr/hyperscript](https://github.com/dominictarr/hyperscript)

Pros:

* No transpiling
* Boils down to the same elements

Cons:

* Less resemblance to the rendered HTML

---

from https://github.com/hyperhype/hyperscript

```js
var h = require('hyperscript')
h('div#page',
  h('div#header',
    h('h1.classy', 'h', { style: {'background-color': '#22f'} })),
  h('div#menu', { style: {'background-color': '#2f2'} },
    h('ul',
      h('li', 'one'),
      h('li', 'two'),
      h('li', 'three'))),
  h('h2', 'content title',  { style: {'background-color': '#f22'} }),
  h('p',
    "so it's just like a templating engine,\n",
    "but easy to use inline with javascript\n"),
  h('p',
    "the intention is for this to be used to create\n",
    "reusable, interactive html widgets. "))
```

---

# React vs ReactDOM?

* _React_ is a view library
* _ReactDOM_ renders _React_ views in _DOM_
* Other renderers are possible
* React Native renders React views using native (mobile) UI elements

---

# Data flow

Goals:

* Getting data from JavaScript to HTML

  `Controller -> View`
* Getting data from HTML (e.g inputs) to JavaScript

  `View -> Controller`

---

# Implicit two-way databinding

[Example](https://www.w3schools.com/angular/angular_databinding.asp)

* When data in the model changes, 

  the view reflects the change, 

* and when data in the view changes, 

  the model is updated as well.

---

# Implicit two-way databinding

Easy and interactive in the beginning

But, 
* an update to one view 
* can cause a model to update, 
* which can cause a different view to update, 
* which can cause another...

---

# Implicit two-way databinding

* can lead to performance issues
* updates to controllers and views can happen with no apparent reason
* data flow can be hard to understand

---

# React - one way data flow, explicit updates

* React components have props.
* `props` are immutable.
* `props` can have default values and be passed from parent component.
* If parent changes props of a child, child is fully re-rendered
  * Old child instance is thrown away
  * Child does not need to worry about partial updates
* A child component can never instruct its parent to change (one-way data flow)

---

# Props example

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/props_example)

---

# State management

State - the values of props (and internal state) of all components at one point
in time.

State management is the hardest thing to get right in an interactive application.

---

# State management

* All the state in an application is usually linked in some way
* Components which have/handle application state are less reusable
* Breaking up state management logic into different models/controllers needs a good
reason.
  * Managing state of one button/field in multiple places makes reasoning about the element state very hard
* Managing overlapping slices of state all across the application is a maintenance nightmare.

---

# React - isolate state mutations

* Each React component can have state.
* State can only be changed by the very component that defines it
  * No surprise updates to state!
  * 
  ```js
    this.setState(newState);
  ```
  * If state is an object, new state is merged into the old one

---

# React - isolate state mutations

* Component and its children re-render **whenever state or props change**
* Child components can only use callback functions to notify parents about
  updates
  * No implicit `View -> Controller` data-binding
  * The callback function in a parent can in turn invoke a callback that it got
    from its parent all the way to the root component

---

```jsx
import React, {Component} from 'react';   

class OneClickButton extends Component {
  constructor(props) { 
    super(props);
    this.state = {
      buttonClickedAtLeastOnce = false; 
    }
  } 

  setButtonToClicked(event) {
    this.setState({buttonClickedAtLeastOnce: true});  
  } 

  render() { 
    // State should hold logical values, 
    // any text or view-related values should
    // be kept in `render`
    const text = this.state.buttonClickedAtLeastOnce
      ? "Click me"
      : "Clicked"; 

    return 
      <button onClick={this.setButtonToClicked.bind(this)}>
        {text}
      </button>;
  } 
}
```

???

Data flows up

---

# Where to hold state?

* Identify components that depend on shared state
* Identify a common parent of those components
* Either the common parent or a component higher up should own the state
  * Components should have only state that they are fully responsible of
  * A component dealing with very particular state is not reusable
  * General application state should be pushed to root component

---

# Keeping most state in root component

* All child components are re-rendered when state changes
* Simple, modular and fast.

---

.full-image[![React component hierarcy](assets/react-component-hierarchy.png)]

.footer[From: https://blog.risingstack.com/the-react-js-way-flux-architecture-with-immutable-js/]

???

Picture from: https://blog.risingstack.com/the-react-js-way-flux-architecture-with-immutable-js/

---

# State example

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_2/src/state_example)

---

# What about performance?

Isn’t re-rendering everything whenever a smallest thing changes slow?

---

# Virtual DOM

* Changing the DOM has historically been very slow 
  * DOM API is not declarative, relies on mutations, optimizations are difficult
  * 
  ```js
    element.innerHTML = "...";
  ```
* Re-rendering DOM elements causes flickering and loses DOM state (e.g _focus_).
* _Virtual DOM_ - a virtual representation of the real DOM in JavaScript

---
  
# Virtual DOM

On every update
* Build new Virtual DOM subtree
* Diff it against the old subtree
* Compute the minimal set of real DOM mutations and put them into a queue
* Batch execute all the real DOM mutations

.right-image[![Need to go deeper](assets/need-to-go-deeper.jpg)]

.footer[[https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/](https://reactkungfu.com/2015/10/the-difference-between-virtual-dom-and-dom/)]

---

# Virtual DOM

* All DOM operations done on **virtual** DOM
* **Real** DOM changed in batches
* Automatic event (e.g _click_) delegation
* Seamless user experience when re-rendering all the time

???

Virtual DOM is not unique to React.
It's now used in a variety of libraries and also on its own.
This signals that Virtual DOM is a good idea regardless of React.

---

.full-image[![Doom 3 rendering cycle](assets/doom-3-rendering.jpg)]
.full-image[![React rendering cycle](assets/react-rendering.jpg)]

.footer[[https://lincolnloop.com/blog/architecting-your-app-react- part-1/](https://lincolnloop.com/blog/architecting-your-app-react- part-1/)]


???

Similarities between vDOM and Doom3 rendering cycles.

---

# Well-defined React Components

* A good React Component is a _pure function_ of its props
  > A _pure function_ is a function where the return value is only determined
  > by its input values, without observable side effects
* _Composition_ of such pure React Components is also _pure function of its props_
* Implement React components as pure functions of props, no classes required
* [Official documentation](https://reactjs.org/docs/components-and-props.html#functional-and-class-components)

---

# Pure function component example

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_2/src/pure_function_example)

---

# Prop validation

* React provides tools to validate type and presence of component props.
* This run-time validation is only performed in development environment.
* Errors/warnings can be seen in tests(!) or browser console.
* [Official documentation](https://reactjs.org/docs/typechecking-with-proptypes.html)

---

# Props validation example

[Code example](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_2/src/pure_function_example#prop-validation)

---

# Form fields

* React component and its state must reflect the DOM and its state
* How to link React components with inputs?

---

# Form fields

* 
```js
  const field = <input type="text">;
```
  Define _text_ input field
* 
```js
  const field = <input value={someValue}>;
```  
  Set value of the input field. If value is a constant, input **cannot be
  changed** by user.

---

# Form fields

* 
```js
  const field = <input onChange={someFunction}>;
```
  Callback function invoked whenever input changed by user
* 
```js
  const field = <input onKeyUp={someFunction}>;
```  
  Callback invoked when any  button is released (can check for `keyCode`)

---

# User input example
[Code example](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_2/src/user_input_example/README.md)

---

# Constructing pure functions

* Two basic JavaScript constructs:
  * **Objects** (key -> value)
  * **Arrays**
* ES5 is lacking ways to easily construct new objects without mutating
* Always use pure functions to create new props or state, **never mutate**
  _props_ or _state_
* Avoid mutation whenever you can

[Creating new arrays/objects without mutations](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/lecture_1/src/PureFunctions.js)

---

# React official guides

Excellent tutorials, examples and API documentation

* [Getting started](https://reactjs.org/docs/getting-started.html)
* [Hello word](https://reactjs.org/docs/hello-world.html)
* [Adding React to a website](https://reactjs.org/docs/add-react-to-an-existing-app.html)


---

# Homework

[Requirements](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/homework/thump/exercise2.md)

**Only submit what is yours**

Deadline 31/03/2019 23:59

Unit tests for **React components only** are **not** mandatory

---

# Homework

If you need to provide further information, include it in README.md.

Submit zipped file to https://courses.cs.ut.ee/2019/react/Main/Submit

Don’t include node_modules/ or .git/, .hg/, .svn/, make sure that your zipped
file size is reasonable. You can use/modify/extend [this
script](https://gist.github.com/urmastalimaa/70edc0728cb711234f42) (usage:
`node zipHomework.js`) to automate zipping.

---

.full-image[![Homework-2-result](assets/homework-2-result.gif)]
