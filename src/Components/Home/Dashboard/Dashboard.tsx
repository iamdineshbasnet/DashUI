import React from 'react';
import AreaChart from '../AreaChart/AreaChart';
import BarChart from '../BarChart/BarChart';
import PieChart from '../PieChart/PieChart';
import styles from './styles.module.scss';
import { LuArrowDownRight, LuArrowUpLeft } from 'react-icons/lu';
import { FaDollarSign } from 'react-icons/fa';
import ProductCard from '../ProductCard/ProductCard';
import Teddy from './../../../assets/teddy.jpg';
import Canon from './../../../assets/Canon.jpg';
import Burger from './../../../assets/Burger.jpg';
import Airpods from './../../../assets/Airpods.jpg';
import Timeline from '../Timeline/Timeline';
import AppTable from '../Table/AppTable';
interface prodcutListProps {
	uuid: number;
	name: string;
	imageUrl: string;
	price: string;
	offerPrice: string;
	alt: string;
}

const productList: prodcutListProps[] = [
	{
		uuid: 1,
		name: 'Airpods Pro',
		alt: 'airpods',
		imageUrl: Airpods,
		price: '165',
		offerPrice: '150',
	},
	{
		uuid: 2,
		name: 'Canon Canonet 28',
		alt: 'canon  ',
		imageUrl: Canon,
		price: '120',
		offerPrice: '100',
	},
	{
		uuid: 3,
		name: 'Vegan quinoa burger',
		alt: 'burger',
		imageUrl: Burger,
		price: '40',
		offerPrice: '30',
	},
	{
		uuid: 4,
		name: 'cute soft teddybear',
		alt: 'teddy',
		imageUrl: Teddy,
		price: '10',
		offerPrice: '5',
	},
];
const Dashboard: React.FC = () => {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<section className={styles.row}>
					<div className={`${styles.left} ${styles.card_wrapper}`}>
						<div className={styles.card}>
							<section className={styles.top_row}>
								<h4>sales overview</h4>
							</section>

							<BarChart />
						</div>
					</div>
					<div className={`${styles.right} ${styles.card_wrapper}`}>
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
										<div className={styles.text}>
											<div
												className={`${styles.circle} ${styles.filled_circle}`}></div>
											2023
										</div>
										<div className={styles.text}>
											<div
												className={styles.circle}></div>
											2023
										</div>
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
									<h4>$6,265 </h4>
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

				<section className={`${styles.row} ${styles.table_row}`}>
					<div className={`${styles.left} ${styles.card_wrapper} ${styles.timeline_container}`}>
						<div className={styles.card}>
							<section className={styles.top_row}>
								<h4>Recent transaction</h4>
							</section>

							<Timeline />
						</div>
					</div>
					<div
						className={`${styles.left} ${styles.card_wrapper} ${styles.table_container}`}>
						<div className={styles.card}>
							<section className={styles.top_row}>
								<h4>Recent transaction</h4>
							</section>

							<section className={styles.scroll}>
								<AppTable />
							</section>
						</div>
					</div>
				</section>

				<section className={`${styles.row} ${styles.product_row}`}>
					{productList?.map((product) => {
						return (
							<React.Fragment key={product?.uuid}>
								<ProductCard product={product} />
							</React.Fragment>
						);
					})}
				</section>


				<section className={` ${styles.footer}`}>
					<h3>Design and Developed by <a href="https://github.com/iamdineshbasnet">Dinesh Basnet</a></h3>
				</section>
			</section>
		</main>
	);
};

export default Dashboard;
