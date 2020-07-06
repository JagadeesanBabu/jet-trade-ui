import Autocomplete from "@material-ui/lab/Autocomplete";
import TextField from "@material-ui/core/TextField";
import { connect } from "react-redux";
import React from 'react'
import PropTypes from 'prop-types';
import {setActiveIndicators} from "../../actions/IndicatorAction"

class MultiSelectSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      tags: []
    };
    this.onTagsChange = this.onTagsChange.bind(this);
  }

  onTagsChange = (event, values) => {
        this.setState(
      {
        tags: values
      },
    );

    this.props.setActiveIndicators(values);

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
  setActiveIndicators: PropTypes.func.isRequired
};


export default connect(
  null,
  { setActiveIndicators }
)(MultiSelectSearch);
