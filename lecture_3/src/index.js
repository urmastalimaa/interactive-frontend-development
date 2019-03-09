import React from 'react';
import ReactDOM from 'react-dom';
import TypesOfComponents from './types_of_components/App';
import DebuggingApp from './debugging/App';

let currentApp = <TypesOfComponents />;
if (document.location.search.match(/progress=debugging/)) {
  currentApp = <DebuggingApp />;
}

ReactDOM.render(currentApp, document.getElementById('root'));
