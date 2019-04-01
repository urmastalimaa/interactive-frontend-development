import React from 'react';
import PropTypes from 'prop-types';

// Filter state is kept in sync with application state.
const Filter = (props) => {
  return (
    <div className='filter'>
      <h3>{props.text}</h3>
      <input
        name="filter"
        type="text"
        placeholder="type here to filter"
        value={props.filterValue}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  text: PropTypes.string.isRequired,
  filterValue: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
