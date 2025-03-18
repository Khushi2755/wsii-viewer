import React from 'react';
import './App.css';
import Header from './components/Header';
import HubView from './components/HubView';
import LeftPanel from './components/LeftPanel';
import MainView from './components/MainView';
import ReportButton from './components/ReportButton';

const App = () => {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <LeftPanel />
        <MainView />
        <div className="right-panel">
          <HubView />
          <ReportButton />
        </div>
      </div>
    </div>
  );
};

export default App;
