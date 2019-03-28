import React, {useState, useRef, forwardRef, useImperativeHandle} from 'react';
import PropTypes from 'prop-types';

// Here we define a custom hook that simplifies tracking the value of a single
// input. It's a very thin wrapper around `useState`. All custom hooks should
// follow the naming convention of `setXXX`.
const useInputState = (initialValue) => {
  const [val, setVal] = useState(initialValue);
  const handleInputChange = (event) => setVal(event.target.value);
  return [val, handleInputChange, setVal];
};

// This is functionally equivalent to the ControlledCommentForm.
// The style is however much different.
// It uses declarative, functional style over class and instance-based style.
let HooksCommentForm = (props, ref) => {
  // `useState` can be used to use local state in functional components
  // `useState` can be called multiple times, call-order is used to distinguish
  // the different pieces of state.
  //
  // Note that `const [x, y] = someFunc();` uses destructuring syntax in which
  // `x` will be assigned the value of the first element of the array returned
  // by `someFunc` and `y` will be assigned the second value of the array.
  //
  // https://reactjs.org/docs/hooks-reference.html#usestate
  const [author, setAuthor] = useState('');
  const onAuthorChange = (event) => setAuthor(event.target.value);

  const [text, onTextChange, setText] = useInputState('');

  const submit = () => {
    // If multiple calls to state hooks need to be done at the same time,
    // consider consolidating those into one state item. This is not done here
    // to demonstrate multiple `useState` calls.
    setAuthor('');
    setText('');
    props.onSubmit({author, text});
  };

  // Refs can also be used via hooks in functional components.
  // This is essentially the same as it is in class-based components.
  //
  // https://reactjs.org/docs/hooks-reference.html#useref
  const authorInput = useRef();

  // `useImperativeHandle` allows defining functions on this component that can
  // be called by the parent via `someRef.current.someFunction()`
  //
  // https://reactjs.org/docs/hooks-reference.html#useimperativehandle
  useImperativeHandle(ref, () => ({
    focus: () => {
      authorInput.current.focus();
    }
  }));

  return (
    <div className='comment-form'>
      <h3>Controlled form with hooks</h3>
      <input
        ref={authorInput}
        name="author"
        type="text"
        placeholder="Your name"
        value={author}
        onChange={onAuthorChange}
      />
      <input
        name="text"
        type="text"
        placeholder="Say something..."
        value={text}
        onChange={onTextChange}
      />
      <button type='submit' onClick={submit}>
        {props.text}
      </button>
    </div>
  );
};

// `forwardRef` allows the parent component to take a ref to this functional
// component.
// By default, functional components cannot be taken a `ref` to.
// It would essentially only be necessary if the component is exposing an
// imperative handle.

// https://reactjs.org/docs/react-api.html#reactforwardref
HooksCommentForm = forwardRef(HooksCommentForm);

HooksCommentForm.propTypes = {
  onSubmit: PropTypes.func.isRequired,
  text: PropTypes.string
};

export default HooksCommentForm;
