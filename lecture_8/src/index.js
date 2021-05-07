import ReactDOM from "react-dom";
import App from "./components/App";
import ReduxApp from "./components/ReduxApp";

if (document.location.search.match(/progress=redux$/)) {
  ReactDOM.render(<ReduxApp />, document.getElementById("root"));
} else {
  ReactDOM.render(<App />, document.getElementById("root"));
}
