import styles from './styles.module.scss';

const ThirdCard = () => {
	return (
		<section className={styles.card_wrapper}>
			<header>
				<h4>Title, Text and Links</h4>
			</header>

			<section className={styles.card}>
				<div className={styles.card_content}>
					<h6 className={styles.card_title}>Card title</h6>
					<p className={styles.card_subtitle}>Card subtitle</p>
					<p className={styles.card_description}>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>

					<div className={styles.button_wrapper}>
						<button>
							<a href="">Card link </a>
						</button>
						<button>
							<a href="">Another link</a>
						</button>
					</div>
				</div>
			</section>
		</section>
	);
};

export default ThirdCard;
