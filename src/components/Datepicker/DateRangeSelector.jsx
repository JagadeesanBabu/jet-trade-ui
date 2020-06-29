import { DateRangePicker } from "react-dates";
import "react-dates/lib/css/_datepicker.css";
import React, { Component } from 'react';
import { getTradeData } from "../../actions/tradeDataActions";
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
      errors: {}

    }
    this.handleDateChange = this.handleDateChange.bind(this);
  }

  handleDateChange = ({ startDate, endDate }) => {
    
    this.setState({ 
      startDate:startDate, 
      endDate:endDate });

    this.props.getTradeData({
      startDate:startDate,
      endDate:endDate
    });
   
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

const mapStateToProps = state => (
  
  {
  tradeData: state.tradeData,
  errors: state.errors,
  dateObjects: {
    startDate:state.startDate,
    endDate:state.endDate
  }
});

export default connect(
  mapStateToProps,
  { getTradeData}
)(DateRangeSelector);
