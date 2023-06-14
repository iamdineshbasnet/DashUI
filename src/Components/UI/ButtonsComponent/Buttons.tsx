import styles from './styles.module.scss';
const Buttons = () => {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<div className={styles.outer_card}>
					<ul className={styles.lists}>
						<li>
							<h6>Buttons</h6>
							<div className={styles.inner_card}>
								<div className={styles.button_wrapper}>
									<button className={styles.primary}>
										primary
									</button>
									<button className={styles.secondary}>
										secondary
									</button>
									<button className={styles.success}>
										success
									</button>
									<button className={styles.danger}>
										danger
									</button>
									<button className={styles.warning}>
										warning
									</button>
									<button className={styles.info}>
										info
									</button>
									<button className={styles.light}>
										light
									</button>
									<button className={styles.dark}>
										dark
									</button>
									<button className={styles.link}>
										link
									</button>
								</div>
							</div>
						</li>
						<li>
							<h6>Outline buttons</h6>
							<div className={styles.inner_card}>
								<div className={styles.button_wrapper}>
									<button className={styles.primary_outlined}>
										primary
									</button>
									<button
										className={styles.secondary_outlined}>
										secondary
									</button>
									<button className={styles.success_outlined}>
										success
									</button>
									<button className={styles.danger_outlined}>
										danger
									</button>
									<button className={styles.warning_outlined}>
										warning
									</button>
									<button className={styles.info_outlined}>
										info
									</button>
									<button className={styles.light_outlined}>
										light
									</button>
									<button className={styles.dark_outlined}>
										dark
									</button>
									<button className={styles.link_outlined}>
										link
									</button>
								</div>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
};

export default Buttons;
