import React from 'react';
import PropTypes from 'prop-types';

export default function Header({onToggle, currentView}) {
    return (
        <div className="header">
            <h3>Hooks Example</h3>
            <button className="secondary" onClick={onToggle}>Toggle View ({currentView}) </button>
        </div>
    );
}

Header.propTypes = {
    onToggle: PropTypes.func.isRequired,
    currentView: PropTypes.string.isRequired
}
