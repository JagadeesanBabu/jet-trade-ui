import React from 'react';
import './App.css';
import { Provider } from "react-redux";
import store from './store';
import Header from "./components/layout/Header";
import "bootstrap/dist/css/bootstrap.min.css";
import ScrollableTabsButtonAuto from './components/tabs/ScrollableTabsButtonAuto';
import ContentWrapper from './components/container/ContentWrapper';


function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <ScrollableTabsButtonAuto />
        <ContentWrapper/>
      </div>
    </Provider>
  );
}

export default App;
