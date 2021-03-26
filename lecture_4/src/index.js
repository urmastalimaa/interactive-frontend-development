import { start as startReducerExample } from "./reducers/ReducerExample";
import { start as startReducersWithReactExample } from "./reducers_with_react/index.js";
import "../css/index.css";

if (document.location.search.match(/progress=reducers$/)) {
  startReducerExample();
} else if (document.location.search.match(/progress=reducers_with_react/)) {
  startReducersWithReactExample();
} else {
  startReducerExample();
}
