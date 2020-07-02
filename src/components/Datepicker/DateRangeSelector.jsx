import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import React, { Component } from 'react';
import { setDateRange } from "../../actions/dateRangeActions";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import 'react-dates/initialize';

class DateRangeSelector extends Component {
  constructor() {
    super();
    this.state = {
      startDate: "",
      endDate: "",
      focusedInput: null

    }
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange = ({ startDate, endDate }) => {
    this.setState({ 
      startDate:startDate, 
      endDate:endDate });

     if (startDate && endDate) {
      this.props.setDateRange(startDate,endDate);
     }
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
  setDateRange: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};



export default connect(
  null,
  { setDateRange}
)(DateRangeSelector);
