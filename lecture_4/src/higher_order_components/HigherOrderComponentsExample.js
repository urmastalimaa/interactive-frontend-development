import React from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';

export const TextComponent = (props) =>
  <span>{props.text}</span>;

TextComponent.propTypes = {text: PropTypes.string};

export const ButtonComponent = (props) =>
  <button>{props.buttonText}</button>;

ButtonComponent.propTypes = {buttonText: PropTypes.string};

// headerWrapper is a function that accepts a React component as input.
// Returns a React Component with a specific <h1> around it.
// Allows wrapping arbitrary Components with a header.
//
// Such Higher-Order Components allow reuse of simpler components across
// different concerns. Imagine Components with _loading_ state or Components
// that needs to read something from a data-store.
export const headerWrapper = (Component, {headerText}) => {
  const ComponentWithHeader = (props) => (
    <div>
      <h1>{headerText}</h1>
      <Component {...props} />
    </div>
  );

  return ComponentWithHeader;
};

const App = () => {
  // Has same interface as TextComponent, only has a <h1> around it.
  const TextComponentWithHeader = headerWrapper(TextComponent, {headerText: 'header-text'});
  // Has same interface as ButtonComponent, only has a <h1> around it.
  const ButtonComponentWithHeader = headerWrapper(ButtonComponent, {headerText: 'button-text'});

  return (
    <div>
      <TextComponentWithHeader text='text' />
      <ButtonComponentWithHeader buttonText='button-text' />
    </div>
  );
};

export const start = () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  );
};
