
import './ChartWrapper.css';
import React, { Component } from 'react';
import { connect } from "react-redux";
import { getTradeData } from "../../actions/tradeDataActions";
import PropTypes from "prop-types";
import { buildChart } from "../builders/builderChart";



class Chartwrapper extends Component {
    constructor() {
        super();
        this.state = {
            errors: {}
        }
    }

    componentDidMount() {
        this.props.getTradeData();
        if (this.props.errors) {
            this.setState({ errors: this.props.errors });
        }
    }

    render() {
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
    errors: state.errors
});

export default connect(
    mapStateToProps,
    { getTradeData }
)(Chartwrapper);
