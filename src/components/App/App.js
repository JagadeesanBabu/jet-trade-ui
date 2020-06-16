import React from 'react';
import { ChartWrapper } from '../../containers';
import { connect } from 'react-redux';

import './App.scss';

const App = props => {
  const { incomingData } = props.stats;

  const lineSettings = {

  };

  return (
    <div className="App">
      <h2>Trade Data By Basic View</h2>
      <ChartWrapper data={incomingData} settings={lineSettings} />
    </div>
  );
};

const mapStateToProps = store => ({
  stats: store.stats
});
export default connect(mapStateToProps)(App);
