import React from 'react';
import styles from './styles.module.scss';

interface DataProps {
	id: number;
	assignedName: string;
	assignedRole: string;
	name: string;
	priority: string;
	budget: string;
}

const data: DataProps[] = [
	{
		id: 1,
		assignedName: 'Sunil Joshi',
		assignedRole: 'web designer',
		name: 'Elite admin',
		priority: 'low',
		budget: '3.9',
	},
	{
		id: 2,
		assignedName: 'Andrew McDownland',
		assignedRole: 'Project Manager',
		name: 'Real Homes WP Theme',
		priority: 'high',
		budget: '24.5k',
	},
	{
		id: 3,
		assignedName: 'Christopher Jamil',
		assignedRole: 'Project Manager',
		name: 'MedicalPro WP Theme',
		priority: 'medium',
		budget: '12.8k',
	},
	{
		id: 4,
		assignedName: 'Nirav Joshi',
		assignedRole: 'Frontend Engineer',
		name: 'Hosting Press HTML',
		priority: 'critical',
		budget: '2.4',
	},
];

const columns = [
	{ id: 'id', label: 'id' },
	{ id: 'assignedName', label: 'assigned' },
	{ id: 'name', label: 'name' },
	{ id: 'priority', label: 'priority' },
	{ id: 'budget', label: 'budget' },
];

const AppTable: React.FC = () => {
	return (
		<section className={styles.app_table}>
			<table className={styles.table}>
				<thead>
					<tr className={styles.table_row}>
						{columns.map((column) => (
							<th
								key={column.id}
								className={styles.table_heading}>
								{column.label}
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{data.map((item) => (
						<tr key={item.id} className={styles.table_row}>
							{columns.map((column) => (
								<td
									key={`${item.id}-${column.id}`}
									className={`${styles.table_data} ${
										styles[column.id]
									}`}>
									{column.id === 'assignedName' ? (
										<>
											<p>{item.assignedName}</p>
											<p className={styles.role}>
												{item.assignedRole}
											</p>
										</>
									) : column.id === 'priority' ? (
										<div
											className={`${styles.chip} ${
												styles[item.priority]
											}`}>
											{item.priority}
										</div>
									) : column.id === 'budget' ? (
										<span>${item.budget}</span>
									) : (
										(
											item as unknown as {
												[key: string]: string;
											}
										)[column.id]
									)}
								</td>
							))}
						</tr>
					))}
				</tbody>
			</table>
		</section>
	);
};

export default AppTable;
