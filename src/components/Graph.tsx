import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Graph() {
    return (
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10], label: 'DAys' }]}
            yAxis={[{ label: 'Duration in hours' }]}
            series={[
                {
                    data: [2, 5.5, 2, 8.5, 1.5, 5],
                    label: 'Garden Pump',
                },
            ]}
            width={500}
            height={300}
        />
    );
}
