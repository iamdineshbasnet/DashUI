import React from 'react';
import Chart from 'react-apexcharts';
import 'apexcharts/dist/apexcharts.css';

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
		tooltip: {
			theme: 'dark',
			enabled: true,
		},
	};

	return (
		<section id="pie_chart">
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
