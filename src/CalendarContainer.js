import { connect } from 'react-redux'
import Calendar from './Calendar'
import { fetchEvents }  from './actions';

const mapStateToProps = (state, ownProps) => {
  return {
    events: state.events,
    loading: state.loading
  }
}

const mapDispatchToProps = dispatch => {
  return {
    fetchEvents: () => {dispatch(fetchEvents())}
  }
}

const CalendarContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(Calendar)

export default CalendarContainer;