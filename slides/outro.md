name: outro
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

# Thanks for hanging on

I hope you

* learned something
* had a bit of fun
* got angry at least once (need to have some emotion to be memorable)

---

# Thanks for hanging on

You now have an idea about techniques for building arbitrary user interfaces

Actual projects are never clean examples, but good guidelines direct us towards
a maintainable application

---
 
# Front end development

* Often regarded as an afterthought - just hack it together
* Front-ends tend to influence back-end design
* Front-end applications need logs and error reports too
* Just because it is JavaScript does not mean that the code can be garbage

---
 
# Front end development

* Keep it **simple**

  Composition! Pure functions!

* Keep it **declarative**

  Easy to read and understand!

* Keep it **testable**

  Less bugs!

---

# Front end development

* Keep it **traceable**

  Logs! Reproducible behaviour!

* Keep **concerns separated**

  Domain logic, user interactions, presentation

---
 
# Exam

* Multiple choice questions
* One/two written questions
* All questions from slides + GitHub lecture chapters
* 17.05 14:15

---
 
# Sample exam questions

Following sample question list is **not comprehensive**


If you understand the **core concepts**, **principles** and **terminology** of
the technologies/techniques discussed on the slides you will have no problem
answering the questions

---
 
# Sample question

What is a _transpiler_?

---
 
# Sample question

Identify/characterize a

* Pure function
* Stateful function
* Stateless function

---
 
# Sample question

Characterize
* State
* Identity
* Shared mutable state

---
 
# Sample question

Identify/write a pure function React component
 
---

# Sample question

Identify/characterize Redux

* action creators 
* actions
* reducers
* middlewares
 
---

# Sample question

Which of the following characterizes `fetch` / `WebSocket`?

---
 
# Sample question

What is the `history` API in the context of web applications?
 
---

# Sample question

How to pause JavaScript execution at a specific line in JavaScript in a web browser?

---
 
# Sample question

Write a React component named `Names`, that when provided array of arbitrary
names ({names: [‘foo’, ‘bar’]}) as props will output the following HTML
equivalent 

```html
<ul id="names">
  <li>foo</li> 
  <li>bar</li>
</ul>
```
