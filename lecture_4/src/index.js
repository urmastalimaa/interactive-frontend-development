import {start as startReduxExample} from './redux_introduction/ReduxExample';
import {start as startReduxBasics} from './redux_basics/ReduxBasics';
import {start as startReduxCombineReducers} from './redux_combine_reducers/ReduxCombineReducers';
import {start as startHigherOrderComponents} from './higher_order_components/HigherOrderComponentsExample';

if (document.location.search.match(/progress=redux_intro/)) {
  startReduxExample();
} else if (document.location.search.match(/progress=redux_basics/)) {
  startReduxBasics();
} else if (document.location.search.match(/progress=redux_combine_reducers/)) {
  startReduxCombineReducers();
} else if (document.location.search.match(/progress=higher_order_components/)) {
  startHigherOrderComponents();
} else {
  startReduxExample();
}
