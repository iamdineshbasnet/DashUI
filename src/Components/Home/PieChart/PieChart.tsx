import React from 'react';
import Chart from 'react-apexcharts';

const PieChart: React.FC = () => {
	const series = [35, 40, 25];
	const options: any = {
		chart: {
			type: 'donut',
		},
		labels: ['2020', '2021', '2022'],
		dataLabels: {
			enabled: false,
		},
		fill: {
			colors: ['#5D87FF', '#b6c9ff99', '#00000011'],
		},
		stroke: {
			show: false,
		},
		legend: {
			show: false,
		},
	};

	return (
		<section
			style={{
				maxWidth: '15rem',
				display: 'flex',
				justifyContent: 'flex-end',
			}}>
			<Chart
				options={options}
				series={series}
				type="donut"
				height={150}
			/>
		</section>
	);
};

export default PieChart;
