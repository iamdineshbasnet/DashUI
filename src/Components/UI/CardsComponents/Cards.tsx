import styles from './styles.module.scss';
import FirstCard from './Card1/FirstCard';
import SecondCard from './Card2/SecondCard';
import ThirdCard from './Card3/ThirdCard';
const Cards = () => {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<section className={styles.card_wrapper}>
					<div className={styles.card}>
						<FirstCard />
					</div>
					<div className={styles.card}>
						<SecondCard />
					</div>
					<div className={styles.card}>
						<ThirdCard />
					</div>
				</section>
			</section>
		</main>
	);
};

export default Cards;
