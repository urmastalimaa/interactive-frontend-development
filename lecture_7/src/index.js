import {start as startConnectedReactRouterExample}
  from './connected-react-router/ConnectedReactRouterExample';

import {start as startRouterBasicsExample}
  from './router-basics/RouterBasicsExample';

import {start as startReduxSelectorCacheExample}
  from './redux-selector-cache/ReduxSelectorCacheExample';

const progress = sessionStorage['progress'] || '';

if (progress.match(/connected_react_router/)) {
  startConnectedReactRouterExample();
} else if (progress.match(/redux_selector_cache/)) {
  startReduxSelectorCacheExample();
} else {
  startRouterBasicsExample();
}
