import React, {useState} from 'react';
import Basic from './Basic';
import Advanced from './Advanced';

import '../../css/hooks.css';
import Header from './Header';

export default function App() {
    const [currentView, setCurrentView] = useState('basic');

    /* simple toogle views for two examples */
    const toggleView = () => {
        if(currentView === 'basic') {
            return setCurrentView('advanced');
        }
        setCurrentView('basic');
    }

    return (
        <section className="hooks_example">
            <Header onToggle={toggleView} currentView={currentView}/>
            <section className="container">
                {currentView === 'basic' ? <Basic/> : <Advanced/>}
            </section>
        </section>
    )
}
