import {useEffect, useState} from 'react';

const useAmazing = () => {
    useEffect(() => {
        console.log('You are amazing ✨')
    }, [])
}

export default function Basic() {
    const [number, setNumber] = useState(0);

    const upHandler = () => {
        setNumber(number + 1);
    }

    const downHandler = () => {
        setNumber(number - 1);
    }

    useEffect(() => {
        console.log('Run once on INIT');
        return () => console.log('Run once on REMOVE')
    }, [])

    useEffect(() => {
        console.log(`Run every time on change ${number}`);
    }, [number])

    /* uncomment next line to se custom hooks in action */
    // useAmazing();

    return (
        <section className="basic">
            <h3 className="text-title">Basic Example</h3>
            <p className="value">Number is: {number}</p>
            <section className="actions">
                <button onClick={upHandler}>Up ⬆️</button>
                <button onClick={downHandler} disabled={number === 0}>Down ⬇️</button>
            </section>
        </section>
    )
}
