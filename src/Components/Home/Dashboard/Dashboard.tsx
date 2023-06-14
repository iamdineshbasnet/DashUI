import AreaChart from '../AreaChart/AreaChart';
import BarChart from '../BarChart/BarChart';
import PieChart from '../PieChart/PieChart';
import styles from './styles.module.scss';
import { LuArrowDownLeft, LuArrowDownRight, LuArrowUpLeft } from 'react-icons/lu';
import { FaDollarSign } from 'react-icons/fa';
const Dashboard = () => {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<section className={styles.row}>
					<div className={styles.left}>
						<div className={styles.card}>
							<section className={styles.top_row}>
								<h4>sales overview</h4>
							</section>

							<BarChart />
						</div>
					</div>
					<div className={styles.right}>
						<div className={styles.card}>
							<section className={styles.top_row}>
								<h4>Yearly Breakup</h4>
							</section>

							<section className={styles.pie_card_content}>
								<div>
									<h4>$36,355</h4>
									<div className={styles.text}>
										<section
											className={styles.icon_wrapper}>
											<LuArrowUpLeft
												className={styles.icon}
											/>
										</section>
										<p>
											+9% <span>last year</span>
										</p>
									</div>

									<div className={styles.date}>
										<p>
											<div
												className={`${styles.circle} ${styles.filled_circle}`}></div>
											2023
										</p>
										<p>
											<div
												className={styles.circle}></div>
											2023
										</p>
									</div>
								</div>
								<PieChart />
							</section>
						</div>
						<div className={styles.card}>
							<section className={styles.top_row}>
								<h4>Monthly Earnings</h4>

								<div className={styles.icon_wrapper}>
									<FaDollarSign className={styles.icon} />
								</div>
							</section>

              <section className={styles.area_card_content}>
								<div>
									<h4>$6,265</h4>
									<div className={styles.text}>
										<section
											className={styles.icon_wrapper}>
											<LuArrowDownRight
												className={styles.icon}
											/>
										</section>
										<p>
											+9% <span>last year</span>
										</p>
									</div>

									
								</div>
							</section>

							<section className={styles.area_chart_wrapper}>
								<AreaChart />
							</section>
						</div>
					</div>
				</section>
			</section>
		</main>
	);
};

export default Dashboard;
