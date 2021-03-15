import ReactDOM from "react-dom";
import PathToHooks from "./path_to_hooks/App";
import DebuggingApp from "./debugging/App";

let currentApp = <PathToHooks />;
if (document.location.search.match(/progress=debugging/)) {
  currentApp = <DebuggingApp />;
}

ReactDOM.render(currentApp, document.getElementById("root"));
