name: redux_addons
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

# Middlewares for handling side effects

* We implemented middlewares on our own for sending `XMLHttpRequests` via `fetch` and connecting to `WebSockets`
* This is fine if the APIs of the objects are simple and there are no concurrency concerns.

---
 
# Middlewares for handling side effects

Asynchronous processes can get complex quite fast:

* Chaining multiple processes
* Terminating one process once another one completes

Anything that deals with non-trivial asynchronous behaviour is always far more
complex than you expect

---

# Middlewares for handling side effects

* Avoid rolling out your own concurrency framework
* Use a battle-tested library
* Good ones provide 
  * a declarative way for describing desired side effects 
  * means of composition
  * support for testing
 
---

# Managing asynchronous side effects

* [Redux Saga](https://github.com/redux-saga/redux-saga)
* Built exactly as our own middlewares
* Components know nothing about how the middleware is implemented
* Components have no references to `fetch`
* Saga middleware hooks to plain actions and dispatches other actions when required

---
  
# Observable streams

* [ReactiveX](https://reactivex.io/)
* Describe asynchronous processes as _streams_
* [Buffer example](https://reactivex.io/documentation/operators/buffer.html)

---
   
# Managing asynchronous side effects

* Declarative + Testable = Good times

---

# Keeping async under control

Sync all asynchronous steps with state in store

You don’t want to have complex, long running asynchronous behaviour that:

* has state in memory,
* changes to which are not logged
* and with state that cannot be introspected
