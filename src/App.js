import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from './store';
import Chartwrapper from './components/Chartwrapper/Chartwrapper';
import { BrowserRouter as Router, Route } from "react-router-dom";
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import DateRangeSelector from './components/Datepicker/DateRangeSelector';
import ScrollableTabsButtonAuto from './components/tabs/ScrollableTabsButtonAuto';


function App() {
  return (
    <Provider store={store}>
    <Router>
    <div className="App">
    <Header />
    
    <Route component={ScrollableTabsButtonAuto} />
    <Route component={Chartwrapper} />
    </div>
    </Router>
    </Provider>
  );
}

export default App ;
