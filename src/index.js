import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import { BarChart,Bar,XAxis,YAxis,Tooltip} from 'recharts'
import App from './App';
import { BarChart } from 'recharts';



ReactDOM.render(
  <div>
    <App />
       <BarChart />
  </div>,

  document.getElementById("root")
);


