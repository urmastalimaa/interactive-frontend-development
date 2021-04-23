name: bidirectional
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

# Evaluating libraries/frameworks

* What are the basic abstractions? 
* How well do they **compose**?

---
 
# React & Redux (reducers)

* Stateless React components
  * compose trivially through containment 
  * **no state**, no _gotchas_, no complexity
* Reducers
  * **Pure functions** compose whichever way you want
  * Most notably, through name-spacing
 
---

# React & Redux (reducers)

* New abstractions or small helper functions are easy to use because the core
  abstractions are pure functions

```js
(props) => pseudoHtml
```

```js
(action, previousState) => newState
```
 
---

# Why all this functional programming nonsense?

Can’t I just hack things together?

.right-image[![Prepare yourself](assets/prepare-functional.jpg)]

---

# Why all this functional programming nonsense?

* It **is not difficult** to hack together a prototype
* It **is difficult** to build maintainable software
  
---

# Communication with remote servers

* HTTP APIs can be consumed in browsers via `fetch`
* `fetch` is **unidirectional**, a server cannot make a request to the browser
  * e.g. _You have one new message_
* Some web applications require **bidirectional** communication to push updates to the browser

---

# Long polling

* HTTP requests can be hacked to achieve bidirectional communication
* [https://en.wikipedia.org/wiki/Push_technology#Long_polling](https://en.wikipedia.org/wiki/Push_technology#Long_polling)

---

# Long polling

* Client sends request to Server
* Server does not respond immediately and keeps connection open 
* When the server has information to _push_ to the Client, the Server sends a response to the open connection
* Client receives response from Server containing the pushed information
* Client immediately sends a new request to Server
* Rinse and repeat, connection kept open until user on page

---

# WebSockets

* All modern Web Browsers support
  [WebSockets](https://developer.mozilla.org/en-US/docs/Web/API/WebSocket)
  which is a saner alternative
* Note that simply polling (requesting data at an interval) is a valid
  simplification for many applications

---

# WebSockets
   
* `connection.onopen = callback`

  connection between Client and Server is established

* `connection.onclose = callback`

  connection is closed by Server or Client or when connection is disrupted

* `connection.onmessage = callback`

  Client received messages pushed from Server
             
---

# WebSockets

* `connection.send(utf8String)`

   send string-type message to Server (binary messages also supported)

* `connection.close()`

   close connection from Client
             
---

# Websockets

.left-half[

Websockets (and web requests) are an epitome of mutable state.


You never know **what**, **if** and **when** is coming from them.


Put them under tight supervision, **do not** leak them all over our beautiful application code

]

.right-half[![Say mutable state one more time](assets/mutable-state-one-more.jpg)]

---

# Code example

[WebSocket example app](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_6)

---

# Testing WebSockets

* WebSocket connections are initiated using the WebSocket global
* WebSocket connections are inherently stateful
* All this make testing WebSockets directly rather inconvenient

---

# Testing WebSockets

Some libraries provide mock implementations of WebSocket global
([https://github.com/thoov/mock-socket](https://github.com/thoov/mock-socket))

But generally, it is simplest to 

* avoid depending on intimate details of the WebSocket interface
* provide a mock using simple "stub" functions 

[WebSocket example app test](https://github.com/urmastalimaa/interactive-frontend-development/tree/master/lecture_6/test/AppTest.js)

---

# My advisor on distributed systems

This is not a course on distributed systems, but...

.full-image[![My advisor on distributed systems](assets/Alli-advisor-distributed.jpg)]

---

# Distributed systems

From the moment a remote Server is introduced, a distributed system is created

In a distributed system it is important to understand

* who **owns** (modifies and can be queried for) what information
* how updates are broadcasted / subscribed to
* what are the message delivery guarantees of communication channels

---

# Distributed systems

It is **very easy** to create an inconsistent system


Difficulting in retaining consistency increases when more moving parts are
added to a system (e.g multiple processes for load balancing/resiliency)

---

# Distributed systems

Before using any technology that can be _connected_ to

* HTTP requests,
* WebSockets,
* (NoSQL, relational) databases,
* etc

understand message **delivery and consistency guarantees**

---

# WebSocket delivery guarantees

* WebSockets use a single TCP connection,
* messages are guaranteed to arrive **in-order** and **exactly-once**
* as long as the connection is alive
* [https://tools.ietf.org/html/rfc6455](https://tools.ietf.org/html/rfc6455)


**As long as the connection is alive**

???

In practice connections are arbitrarily closed all the time

---

# Distributed systems discussion

Let’s say we add a new feature to the homework application where

All players

- connect to a WebSocket server and
- one player can start 2 games concurrenctly
- only the player who started a game can close it
- any player can play along any game
- maximally 10 open games are allowed altogether

Detect potential problems in this distributed system

---

# Object updates with WebSockets

_Word of caution from personal experience_

When pushing updates about large objects (collections) it seems to be a good
idea to send _partial updates_ instead of whole objects

---

# Object updates with WebSockets

When integer set changes

1. {1,2,3}
2. {1,2,3,4}
3. {1,3,4}

Server sends
1. Initial: {1,2,3}
2. Add 4 
3. REMOVE 2

---

# Object updates with WebSockets

* As message order is guaranteed, such updates can be used to maintain the set

--

**Unless**

* Update handler encounters unexpected error client side
* Server encounters error sending update

---

# Object updates with WebSockets

**Unless**

* Connection drops and server doesn't re-send the whole object
* Connection drops and server starts loading the whole object (from database),
  but an update comes in just before it finishes and the client ends up missing the update


If anything fails, the maintained object is inconsistent **until user reconnects (refreshes)**

---

# Object updates with WebSockets

* The message order guarantee is only for a single WebSocket connection
* This needs to be considered when building any protocol on top of WebSockets
* Try to use something that is battle-tested instead of homebrewing complex
  protocols on top of the low level WebSocket API
* Or just send full state objects as long as you can...

---

# WebSocket request-response?

* WebSocket is a low level protocol
* It does not have request - response semantics
* It barely has any semantics at all.


* If you need it, don’t try to build it yourself
* [http://wamp-proto.org/](http://wamp-proto.org/)
* [https://www.npmjs.com/package/json-rpc2](https://www.npmjs.com/package/json-rpc2)

---

# Homework

[Requirements](https://github.com/urmastalimaa/interactive-frontend-development/blob/master/homework/mathemagician/exercise6.md)

* Deadline 25/04/2021 23:59
* Submit zipped file to https://courses.cs.ut.ee/2021/react/Main/Submit
* Tests will give significant points
* **Only submit what is yours**

---

<video width="100%" height="50%" controls>
  <source src="assets/homework-mathemagician-6-result.m4v" type="video/mp4">
  Your browser does not support the video tag.
</video> 

---

.full-image[![Joy of programming ... with Bob ross](assets/joy-of-programming.png)]

.footer[Courtesy of https://twitter.com/onquality/status/436608223240802304]
