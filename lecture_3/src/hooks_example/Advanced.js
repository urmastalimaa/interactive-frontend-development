import React, {useMemo, useRef, useState} from 'react';
import {fibonacci} from './fibonacci';

const useFormChange = () => {
    const [form, setForm] = useState({number: 0});

    const onFormChange = (formElement, value) => setForm({
        ...form,
        [formElement]: value
    })

    return [form, onFormChange]
}

export default function Advanced() {
    const [form, setForm] = useState({number: 0});
    /*uncomment next line you could use see custom hooks in action*/
    // const [form, onFormChange] = useFormChange();
    const [inc, setInc] = useState(0);
    const inputRef = useRef(null);

    /* by uncomment next line you could check that function is called on every render */
    // const fi = fibonacci(form.number)
    const fi = useMemo(() => fibonacci(form.number), [form.number]);

    const onSubmitHandler = (e) => {
        e.preventDefault();
        setInc(i => i + 1);
        /* as an alternative way to fix re-render issue you could call function on submit */
        // setNumber(fibonacci(form.number));
    }

    /* comment that out to see use of custom hooks */
    const onFormChange = (formElement, value) => {
        setForm({
            ...form,
            [formElement]: value
        })
    }

    const focusInput = () => {
        inputRef.current.focus();
    }

    return (
        <section className="advanced">
            <h3>Advanced example</h3>
            <p>Form re-renders {inc}</p>
            <button className="warning" onClick={focusInput}>Focus input</button>
            <form onSubmit={onSubmitHandler}>
                <section>
                    <div>
                        <label htmlFor="number">Enter Number:</label>
                        <input
                            id="number"
                            ref={inputRef}
                            type="text"
                            onChange={(e) => onFormChange('number', e.target.value)}
                            placeholder="Enter number"/>
                    </div>
                    <button>Re-render</button>
                </section>
            </form>
            {fi
                ? <p>Fibonacci is {fi}</p>
                : null}
        </section>
    );
}
