import {connect} from 'react-redux';
import {filterSet} from '../actions';

import Filter from '../components/Filter';

const mapStateToProps = (state, ownProps) => ({
  // `ownProps` can be used to access properties that were provided to the
  // container component
  filterValue: state.filter,
  text: ownProps.text
});

const mapDispatchToProps = (dispatch) => ({
  onChange: (filter) => dispatch(filterSet(filter)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Filter);
