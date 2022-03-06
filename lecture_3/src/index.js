import ReactDOM from "react-dom";
import PathToHooks from "./path_to_hooks/App";
import DebuggingApp from "./debugging/App";
import HooksExample from "./hooks_example/App";

let currentApp = <PathToHooks />;
if (document.location.search.match(/progress=debugging/)) {
  currentApp = <DebuggingApp />;
} else if (document.location.search.match(/progress=hooks/)) {
  currentApp = <HooksExample />;
}

ReactDOM.render(currentApp, document.getElementById("root"));
