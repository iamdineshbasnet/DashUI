import React, { useState } from 'react';
import ReactApexChart from 'react-apexcharts';

interface ChartData {
	name: string;
	data: number[];
}

const BarChart: React.FC = () => {
	const [series, setSeries] = useState<ChartData[]>([
		{
			name: 'Earnings this month',
			data: [244, 255, 357, 156, 361, 258, 260, 230],
		},
		{
			name: 'Expense this month',
			data: [276, 385, 201, 298, 187, 205, 391, 214],
		},
	]);

	const [options, setOptions] = useState<any>({
		chart: {
			type: 'bar',
			height: 350,
		},
		plotOptions: {
			bar: {
				horizontal: false,
				columnWidth: '30%',
				enableRounded: true,
				borderRadiusApplication: 'around',
				borderRadius: 0,
				isFunnel3d: true,
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
		}
	});

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
