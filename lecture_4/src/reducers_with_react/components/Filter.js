import PropTypes from "prop-types";

/*
 * Filter has no local state, the filter value is maintained
 * externally.
 */
const Filter = (props) => {
  return (
    <div className="filter">
      <h3>Filter comments</h3>
      <input
        name="filter"
        type="text"
        placeholder="type here to filter"
        value={props.value}
        onChange={(event) => props.onChange(event.target.value)}
      />
    </div>
  );
};

Filter.propTypes = {
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
};

export default Filter;
