import React from 'react';
import { VictoryBar, VictoryChart } from 'victory';

const donations = [
  { year: 2019, donations: 13000 },
  { year: 2020, donations: 126500 },
  { year: 2021, donations: 4250 },
  { year: 2022, donations: 470000 }
];
export default function MyCharts() {
  return (
    <VictoryChart domainPadding={20}>
      <VictoryBar data={donations}
        x={row => String(row.year)}
        y={row => `${row.donations}`}/>
    </VictoryChart>
    
  );
}