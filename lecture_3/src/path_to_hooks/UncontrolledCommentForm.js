import {useRef} from 'react';
import PropTypes from 'prop-types';

// Example of uncontrolled form
function CommentForm(props) {
    const authorInput = useRef();
    const textInput = useRef();

    const focus = () => {
        authorInput.current.focus();
    }

    const onSubmit = () => {
        // Get author, text values from input refs
        const author = authorInput.current.value;
        const text = textInput.current.value;

        // Clear inputs by directly manipulating DOM because the values are not
        // synced with this component state.
        authorInput.current.value = '';
        textInput.current.value = '';

        props.onSubmit({author, text});
    }

    return (
        <div className="comment-form" title="Uncontrolled form">
            <h3>Uncontrolled form</h3>
            <label htmlFor="uncontrolled-form-author-input">Author</label>
            <input
                id="uncontrolled-form-author-input"
                ref={authorInput}
                name="author"
                type="text"
                placeholder="Your name"
            />
            <label htmlFor="uncontrolled-form-text-input">Text</label>
            <input
                id="uncontrolled-form-text-input"
                ref={textInput}
                name="text"
                type="text"
                placeholder="Say something..."
            />
            <button type="submit" onClick={onSubmit}>
                {props.text}
            </button>
        </div>
    );
}

CommentForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    text: PropTypes.string,
};

export default CommentForm;
