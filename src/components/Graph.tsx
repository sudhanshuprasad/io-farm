import * as React from 'react';
import { LineChart } from '@mui/x-charts/LineChart';

export default function Graph({ moisture }: { moisture: number }) {
    return (
        <LineChart
            xAxis={[{ data: [1, 2, 3, 5, 8, 10], label: 'Days' }]}
            yAxis={[{ label: 'Duration in hours' }]}
            series={[
                {
                    data: [24, 55, 29, 85, 15, moisture],
                    label: 'Garden Moisture',
                },
            ]}
            width={300}
            height={200}
        />
    );
}
