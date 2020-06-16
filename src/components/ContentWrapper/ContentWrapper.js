import React, { Component } from 'react';
import App from '../App';
import { connect } from 'react-redux';

import { getIncomingDataRequest } from '../../store/Stats/States.action';

import './ContentWrapper.scss';

class ContentWrapper extends Component {
  componentDidMount() {
    this.props.handleIncomingDataGetting();
  }

  render() {
    const { loading } = this.props;
    return loading ? <div className="loader">Loading...</div> : <App />;
  }
}

const mapStateToProps = store => ({
  loading: store.stats.loading
});

const mapDispatchToProps = dispatch => ({
  handleIncomingDataGetting: () =>
    dispatch(getIncomingDataRequest())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ContentWrapper);
