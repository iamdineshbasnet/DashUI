import styles from './styles.module.scss';
import CardMedia from '../../../../assets/CardMedia.jpg'
const FirstCard = () => {
	return (
		<section className={styles.card_wrapper}>
			<header>
				<h4>Card</h4>
			</header>

			<section className={styles.card}>
				<div className={styles.card_media}>
                    <img src={CardMedia} alt="card media" />
                </div>
				<div className={styles.card_content}>
					<h6 className={styles.card_title}>Card Title</h6>
					<p className={styles.card_description}>
						Some quick example text to build on the card title and
						make up the bulk of the card's content.
					</p>

                    <button>Go Somewhere</button>
				</div>
			</section>
		</section>
	);
};

export default FirstCard;
