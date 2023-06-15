import React from 'react';
import ReactApexChart from 'react-apexcharts';


const BarChart: React.FC = () => {
	const series = [
		{
			name: 'Earnings this month',
			data: [244, 255, 357, 156, 361, 258, 260, 230],
		},
		{
			name: 'Expense this month',
			data: [276, 385, 201, 298, 187, 205, 391, 214],
		},
	];

	const options: any = {
		chart: {
			type: 'bar',
			height: 350,
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '30%',
				endingShape: 'rounded',
				startingShape: 'rounded',
			},
		},
		dataLabels: {
			enabled: false,
		},
		stroke: {
			show: true,
			width: 2,
			colors: ['transparent'],
		},
		xaxis: {
			categories: [
				'Feb',
				'Mar',
				'Apr',
				'May',
				'Jun',
				'Jul',
				'Aug',
				'Sep',
			],
		},

		fill: {
			opacity: 1,
			colors: ['#5D87FF', '#3DD9EB'],
		},
		tooltip: {
			y: {
				formatter: function (val: number) {
					return val;
				},
			},
		},
		legend: {
			show: false,
		},
	};

	return (
		<>
			<ReactApexChart
				options={options}
				series={series}
				type="bar"
				height={350}
			/>
		</>
	);
};

export default BarChart;
