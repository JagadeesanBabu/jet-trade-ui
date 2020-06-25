import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { connect } from "react-redux";
import React, { Component } from 'react'
import { getTradeData } from "../../actions/tradeDataActions";

const TabPanel = (props) => {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`scrollable-auto-tabpanel-${index}`}
      aria-labelledby={`scrollable-auto-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired
};

function a11yProps(index) {
  return {
    id: `scrollable-auto-tab-${index}`,
    'aria-controls': `scrollable-auto-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    width: '100%',
    backgroundColor: theme.palette.background.paper,
  },
}));



class ScrollableTabsButtonAuto extends Component {

  constructor() {
    super();
    this.state = {
      value: 0,
      errors: {}

    }
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange = (event, value ) => {
    this.setState({value});
    console.log(`value is ${value}`);
    this.getTradeDataByInputDate(value);
  }
  getTradeDataByInputDate = (index) => {
    switch (index) {
      case 0:
        this.props.getTradeData(5);
        break;
      case 1:
        this.props.getTradeData(7);
        break;
      case 2:
        this.props.getTradeData(10);
        break; 
      case 3:
        this.props.getTradeData(30);
        break;
      case 4:
        this.props.getTradeData(90);
        break;
      case 5:
        this.props.getTradeData(180);
        break;
      case 6:
        this.props.getTradeData(365);
        break;
      default:
        this.props.getTradeData(5);
    }

  }
  render() {
    return (
      <div className={useStyles.root}>
        <AppBar position="static" color="default">
          <Tabs
            value={this.state.value}
            indicatorColor="primary"
            textColor="primary"
            variant="scrollable"
            scrollButtons="auto"
            aria-label="scrollable auto tabs example"
          >
            <Tab label="5D" onClick={(event) => {this.handleChange(event, 0)} } {...a11yProps(0)} />
            <Tab label="1W" onClick={(event) => {this.handleChange(event, 1)} } {...a11yProps(1)} />
            <Tab label="10D" onClick={(event) => {this.handleChange(event, 2)} } {...a11yProps(2)} />
            <Tab label="1M" onClick={(event) => {this.handleChange(event, 3)} } {...a11yProps(3)} />
            <Tab label="3M" onClick={(event) => {this.handleChange(event, 4)} } {...a11yProps(4)} />
            <Tab label="6M" onClick={(event) => {this.handleChange(event, 5)} } {...a11yProps(5)} />
            <Tab label="1Y" onClick={(event) => {this.handleChange(event, 6)} } {...a11yProps(6)} />
          </Tabs>
        </AppBar>

        <TabPanel value={this.state.value} index={0}/>
        <TabPanel value={this.state.value} index={1}/>
        <TabPanel value={this.state.value} index={2}/>
        <TabPanel value={this.state.value} index={3}/>
        <TabPanel value={this.state.value} index={4}/>
        <TabPanel value={this.state.value} index={5}/>
        <TabPanel value={this.state.value} index={6}/>

      </div>
    );
  }
}

ScrollableTabsButtonAuto.propTypes = {
  getTradeData: PropTypes.func.isRequired,
  errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
  tradeData: state.tradeData,
  errors: state.errors
});

export default connect(
  mapStateToProps,
  { getTradeData }
)(ScrollableTabsButtonAuto);





