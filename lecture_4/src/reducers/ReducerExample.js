import {
  init as calculatorInit,
  reducer as calculatorReducer,
} from "./Calculator";

/*
 * A reducer is by no means a React-specific concept. This is illustrated here
 * by avoiding React usage altogether.
 */
const setupHTML = ({ initialResult, onButtonClick }) => {
  document.querySelector("#root").innerHTML =
    "<div> <button id='add'>+</button> <button id='substract'>-</button> = <span id='result'/></div>";
  const resultElement = document.querySelector("#result");

  const setResult = (result) => {
    resultElement.innerHTML = result.toString();
  };
  setResult(initialResult);

  document.querySelectorAll("button").forEach((button) => {
    button.addEventListener("click", (event) => {
      onButtonClick({ id: event.target.id, setResult });
    });
  });
  return { setResult };
};

export const start = () => {
  /*
   * It is often useful to have the initial value be defined through a function
   * instead of a simple value. Here we use the function-based initial value to
   * seed the calculator with `Math.random()`, but it could as well read the
   * value from local storage or query it from a remote server.
   *
   * Note that the only mutable state is the `result` variable on the next line
   * which itself has a very narrow scope. Everything else is defined in terms
   * of pure functions.
   */
  let result = calculatorInit();
  setupHTML({
    initialResult: result,
    onButtonClick: ({ id, setResult }) => {
      result = calculatorReducer(result, { type: id, payload: { term: 1 } });
      setResult(result);
    },
  });
};
