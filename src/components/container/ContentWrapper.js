import React, { Component } from 'react';
import { connect } from "react-redux";
import { actionCreator } from "../../actions/actionCreator";
import PropTypes from "prop-types";
import { Chartwrapper } from '../Chartwrapper/Chartwrapper';
import '../Chartwrapper/ChartWrapper.css';

class ContentWrapper extends Component {
    constructor(props) {
        super(props);
        this.state = {
            errors: {}
        }
    }

    componentDidMount() {
        this.props.actionCreator();
        if (this.props.errors) {
            this.setState({ errors: this.props.errors });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.tradeData.activeIndicators !== nextProps.tradeData.activeIndicators) {
            this.props.actionCreator(nextProps.tradeData.dateRanges, nextProps.tradeData.activeIndicators.activeIndicators);
        }

        if (this.props.tradeData.dateRanges !== nextProps.tradeData.dateRanges) {
            this.props.actionCreator(nextProps.tradeData.dateRanges, nextProps.tradeData.activeIndicators.activeIndicators);
        }
    }

    chartByBasic() {
        let data = this.props.tradeData;
        //trade data by basic
        return data.tradeData ? <Chartwrapper data={data.tradeData} type="BASIC" /> :
                <div/>;
    }

    chartByIndicators() {
        let data = this.props.tradeData;
        let indicatorNames = this.props.tradeData.activeIndicators.activeIndicators;
        if (indicatorNames && data.tradeDataRSI) {
           const chartWrappers = indicatorNames.map((indicator, i) => {
                switch (indicator.id) {
                    case "RSI":
                        return (<Chartwrapper data={data.tradeDataRSI} type={indicator.id} />);
                     case "MACD":
                         return (<p>macd work in progress</p>);
                     default:
                         return <div/>


               }
            });
            return chartWrappers;
        }
    }


    render() {
        return (
            <>
                <div className="chart-wrapper-new">
                    {this.chartByBasic()}
                    <br/>
                    {this.chartByIndicators()}

                </div>
            
                
            </>
        );
    }


}

ContentWrapper.propTypes = {

    tradeData: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    tradeData: state.tradeData,
    errors: state.errors
});


export default connect(
    mapStateToProps,
    { actionCreator }
)(ContentWrapper);
