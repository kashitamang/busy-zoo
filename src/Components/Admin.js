import React from 'react';
import MyCharts from './MyCharts';
import MyTable from './MyTable';

export default function Admin() {
  return (
    <div>
      <h1>Welcome to admin</h1>
      <h3>Charts</h3>
      <MyCharts/>

      <MyTable/>
    </div>
  );
}
