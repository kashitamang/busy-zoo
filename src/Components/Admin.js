import React from 'react';
import MyCharts from './MyCharts';
import MyTable from './MyTable';
import MyPieChart from './MyPieChart';

export default function Admin() {
  return (
    <div>
      <h1>Welcome to admin</h1>
      <h2>Donations over the years</h2>
      <MyCharts/>
      <h2>Animals Here</h2>
      <MyPieChart/>
      <MyTable/>
    </div>
  );
}
