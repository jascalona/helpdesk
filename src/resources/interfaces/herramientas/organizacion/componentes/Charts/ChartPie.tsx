import * as React from 'react';
import { PieChart } from '@mui/x-charts/PieChart';

interface props{
  width: number,
  height: number
}

function BasicPie({width, height}: props) {
  return (
    <PieChart 
      series={[
        {
          data: [
            { id: 0, value: 10, label: 'series A', },
            { id: 1, value: 15, label: 'series B' },
            { id: 2, value: 20, label: 'series C' },
          ],
        },
      ]}
      width={width}
      height={height}
    />
  );
}
export default BasicPie