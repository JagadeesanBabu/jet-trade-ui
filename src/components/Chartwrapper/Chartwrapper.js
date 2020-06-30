
import './ChartWrapper.css';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTradeData } from "../../actions/tradeDataActions";
import { actionCreator } from "../../actions/actionCreator";
import { getTradeDataByRSI } from "../../actions/tradeDataActionsRsi";
import PropTypes from "prop-types";
import { buildChart } from "../builders/builderChart";

class Chartwrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            dateRange: {},
            errors: {}
        }
    }

    componentDidMount() {
        this.props.actionCreator();
        if (this.props.errors) {
            this.setState({ errors: this.props.errors });
        }
    }

    componentDidUpdate(prevProps) {
        if (this.props.tradeData.dateRanges !== prevProps.tradeData.dateRanges) {
        this.props.actionCreator(this.props.tradeData.dateRanges);
    
        }
    }

    render() {
        //rsi comes in the tradeData object
        const data = this.props.tradeData;
        return (
            <div className="chart-wrapper">
                {buildChart(data)}
            </div>
        )
    }


}

Chartwrapper.propTypes = {
    getTradeData: PropTypes.func.isRequired,
    tradeData: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    tradeData: state.tradeData,
    dateRange: state.tradeData.dateRanges,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    { actionCreator }
)(Chartwrapper);
