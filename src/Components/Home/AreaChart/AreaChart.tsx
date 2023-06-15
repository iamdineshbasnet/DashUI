import React from 'react';
import Chart from 'react-apexcharts';

const AreaChart: React.FC = () => {
	const series = [
		{
			name: 'Earnings',
			data: [
				15, 27, 25, 29, 27, 28, 24, 25, 24, 25, 26, 24, 23, 32, 24, 25,
				22, 25, 26, 28, 12,
			],
		},
	];
	const options: any = {
		chart: {
			type: 'area',
			height: 400,
			toolbar: {
				autoSelected: 'zoom',
				show: false,
			},
			zoom: {
				enabled: false,
			},
		},
		dataLabels: {
			enabled: false,
		},
		markers: {
			show: false,
			enabled: false,
		},
		stroke: {
			curve: 'smooth',
		},
		yaxis: {
			labels: {
				formatter: (value: number) => {
					if (value) {
						return value;
					}
					return value;
				},
			},
		},
		xaxis: {
			type: 'datetime',
			categories: [
				'2023-01-19T00:00:00.000Z',
				'2023-01-19T01:30:00.000Z',
				'2023-01-19T02:30:00.000Z',
				'2023-01-19T03:30:00.000Z',
				'2023-01-19T04:30:00.000Z',
				'2023-01-19T05:30:00.000Z',
				'2023-01-19T06:30:00.000Z',
				'2023-01-19T07:30:00.000Z',
				'2023-01-19T08:30:00.000Z',
				'2023-01-19T09:30:00.000Z',
				'2023-01-19T10:30:00.000Z',
				'2023-01-19T11:30:00.000Z',
				'2023-01-20T00:00:00.000Z',
				'2023-01-20T01:30:00.000Z',
				'2023-01-20T02:30:00.000Z',
				'2023-01-20T03:30:00.000Z',
				'2023-01-20T04:30:00.000Z',
				'2023-01-20T05:30:00.000Z',
				'2023-01-20T06:30:00.000Z',
				'2023-01-20T07:30:00.000Z',
			],
			labels: {
				formatter: (value: string) => {
					if (value) {
						return "";
					}
					return "";
				},
			},
			tooltip: {
				theme: 'dark',
				followCursor: true,
				enabled: true,
				fixed: {
					enabled: false,
					position: 'top',
					offsetX: 0,
					offsetY: 0,
				},
				style: {
					backgroundColor: 'red',
					fontSize: '1px'
				},
				y: {
					formatter: function (val: number) {
						return val;
					},
				},
			},
		},
		grid: {
			show: false,
		},
		legend: {
			show: false,
		},
	};

	return (
		<section
			id="area_chart"
			style={{
				minWidth: '900px',
				maxWidth: '100%',
			}}>
			<Chart
				options={options}
				series={series}
				type="area"
				height="120px"
				width="100%"
			/>
		</section>
	);
};

export default AreaChart;
