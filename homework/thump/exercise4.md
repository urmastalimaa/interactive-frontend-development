# Homework 4 - The Human Metronome Project

**All installation, running, style and submission requirements from Homework 1 still apply.**

This homework refactors and adds to the functionality that was built for homework 3.

# New functionality

* Show player average miss percentage next to total miss
* _miss percentage_ = (miss / frequency) * 100%
* _average miss percentage_ = miss percentage of each try averaged

# React-Redux containers

* Create **two** different _container components_ using `connect` from react-redux
* Only form component state is allowed to be in React, all other state **must** be moved to Redux store

# Selector functions

* Create (minimally) **two** _selector_ functions, find appropriate use cases for them
* Selector functions must be tested

# Redux store

* Keep **minimal** state in the store
  * Having state (in store) that can be derived from other state in store will not get maximum points

# Actions

* All actions must follow the Flux action pattern
* Action names must describe **what happened** (the user interaction), not what to do

# Reducers

* All reducers must be **pure functions**
* All reducer code paths must be tested

# Application layout

* Use the suggested folder structure

# Redux Developer Tools

* Integrate Redux store with Redux Developer Tools
* Make sure that Redux action history is readable and understandable (like prose)
