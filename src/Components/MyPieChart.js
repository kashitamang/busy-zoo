import React from 'react';
import { VictoryPie, VictoryChart } from 'victory';

const animals = [
  { type: 'dophin', quantity: 15 },
  { type: 'bison', quantity: 4 },
  { type: 'giraffe', quantity: 2 },
  { type: 'deer', quantity: 8 }
];

export default function MyPieChart() {
  return (
    <VictoryChart domainPadding={20}>
      <VictoryPie data={animals}
        x={row => String(row.type)}
        y={row => `${row.animals}`}/>
    </VictoryChart>
    
  );
}

















