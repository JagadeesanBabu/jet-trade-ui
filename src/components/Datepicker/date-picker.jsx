import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import React, { Component } from 'react';
import { getTradeData } from "../../actions/tradeDataActions";
import Moment from 'moment';
import { extendMoment } from 'moment-range';
 
import { connect } from "react-redux";
import PropTypes from "prop-types";
import 'react-dates/initialize';

class DateRangeSelector extends Component {
  constructor() {
    super();
    this.state = {
      startDate: "",
      endDate: "",
      focusedInput: null,
      errors:{}

    }
   this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange = ({ startDate, endDate }) => {
    const moment = extendMoment(Moment);
    this.setState({ startDate, endDate });
    const start = moment(startDate, 'YYYY-MM-DD');
    const end   = moment(endDate, 'YYYY-MM-DD');
    const range = moment.range(start, end);
    console.log(`range values is ${range.diff('days')}`)
    this.props.getTradeData(range.diff('days'));
  }

  handleFocusChange = focusedInput => this.setState({ focusedInput });


  render() {
    return (
      <DateRangePicker
        endDate={this.state.endDate}
        endDateId="endDate"
        focusedInput={this.state.focusedInput}
        isOutsideRange={() => null}
        onDatesChange={this.handleDateChange}
        onFocusChange={this.handleFocusChange}
        startDate={this.state.startDate}
        startDateId="startDate"
        maxWidth={767} 
        minWidth={768}
      />
    );
  }
}

DateRangeSelector.propTypes = {
  getTradeData: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tradeData: state.tradeData,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getTradeData}
)(DateRangeSelector);
