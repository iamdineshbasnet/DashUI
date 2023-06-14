import styles from './styles.module.scss';
const SecondCard = () => {
	return (
		<section className={styles.card_wrapper}>
			<header>
				<h4>Header and Footer</h4>
			</header>

			<section className={styles.card}>
				<div className={styles.featured}>
					<p>featured</p>
				</div>

				<div className={styles.card_content}>
					<h6 className={styles.card_title}>
						Special title treatment
					</h6>
					<p className={styles.card_description}>
						With supporting text below as a natural lead-in to
						additional content.
					</p>

					<button>Go Somewhere</button>
				</div>
			</section>
		</section>
	);
};

export default SecondCard;
