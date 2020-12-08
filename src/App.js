import React from 'react';
import './App.css';
import LineChart from './components/Navbar/LineChart';
import Navbar from "./components/Navbar/Navbar";
import BarChart from "./components/Navbar/BarChart";
import Panel from './components/Navbar/Panel';

function App() {
  return (
    <div className="App">
      <Navbar />
      <div className="linechart">
        <LineChart />
      </div>
      <div className="Barchart">
      
        <BarChart />
        <Panel/>
      </div>
    </div>
  );
}

export default App;
