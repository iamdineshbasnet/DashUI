import React from 'react';
import styles from './styles.module.scss';

interface timelineProps {
	id: number;
	time: string;
	text: string;
	colorCode: string;
	highlight: boolean;
	tag: string;
}

const timelineArray: timelineProps[] = [
	{
		id: 1,
		time: '09:00 AM',
		text: 'Payment received from John Doe of $385.90',
		colorCode: '#5d87ff',
		highlight: false,
        tag: ''
	},
	{
		id: 2,
		time: '10:30 AM',
		text: 'New sale recorded',
		colorCode: '#13deb9',
		highlight: true,
        tag: '#ML-3467'
	},
	{
		id: 4,
		time: '12:00 pm',
		text: 'Payment was made of $64.95 to Michael',
		colorCode: '#fa896b',
		highlight: false,
        tag: ''
	},
	{
		id: 3,
		time: '01:30 pm',
		text: 'New sale recorded',
		colorCode: '#ffae1f',
		highlight: true,
        tag: '#ML-3467'
	},
	{
		id: 5,
		time: '03:00 pm',
		text: 'New arrival recorded',
		colorCode: '#5d87ff',
		highlight: true,
        tag: '#ML-3467'
	},
	{
		id: 6,
		time: '04:30 pm',
		text: 'Payment Done',
		colorCode: '#5d87ff',
		highlight: false,
        tag: ''
	},
];

const Timeline: React.FC = () => {
	return (
		<section className={styles.timeline}>
			{timelineArray?.map((timeline) => {
				return (
					<div className={styles.timeline_item} key={timeline?.id}>
						<div className={styles.timeline_time}>
							{timeline?.time}
						</div>
						<div
							className={styles.timeline_dot}
							style={{
								border: `.2rem solid ${timeline?.colorCode}`,
							}}>
							<div className={styles.vertical_line}></div>
						</div>
						<div className={styles.timeline_content}>
							<p
								className={`${
									timeline?.highlight && styles.bold
								}`}>
								{timeline?.text}
							</p>
							<a href="">{timeline?.tag}</a>
						</div>
					</div>
				);
			})}
		</section>
	);
};

export default Timeline;
