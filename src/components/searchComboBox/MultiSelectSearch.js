import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import React from 'react'
import PropTypes from 'prop-types';
import { getTradeDataByRSI } from "../../actions/tradeDataActionsRsi";

class MultiSelectSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
    this.onTagsChange = this.onTagsChange.bind(this);
  }

  onTagsChange = (event, values) => {
    const startDate = (this.props.dateObjects && this.props.dateObjects.startDate) ? this.props.dateObjects.startDate : null;
    const endDate = (this.props.dateObjects && this.props.dateObjects.endDate) ? this.props.dateObjects.endDate : null;
    this.setState(
      {
        tags: values
      },
    );
    if (startDate && endDate) {
      this.props.getTradeDataByRSI({
        startDate: startDate,
        endDate: endDate
      });
    }
    else {
      this.props.getTradeDataByRSI();
    }

  };

  render() {
    return (
      <div style={{ width: 500 }}>
        <Autocomplete
          multiple
          options={top10Indicators}
          getOptionLabel={option => option.title}
          onChange={this.onTagsChange}
          renderInput={params => (
            <TextField
              {...params}
              variant="standard"
              label="select indicators"
              placeholder="indicators"
              margin="normal"
              fullWidth
            />
          )}
        />
      </div>
    );
  }
}

const top10Indicators = [
  { title: "Relative Strength", id: "RSI" },
  { title: "Moving average convergence divergence(MACD)", id: "MACD" }
];

MultiSelectSearch.propTypes = {
  getTradeDataByRSI: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  dateObjects: state.tradeData.dateObjects,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getTradeDataByRSI }
)(MultiSelectSearch);
