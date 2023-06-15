import React from 'react';
import styles from './styles.module.scss';

const Icons: React.FC = () => {
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<div className={styles.outer_card}>
					<ul className={styles.lists}>
						<li>
							<h6>Icons</h6>
							<div className={styles.inner_card}>
                                <iframe src="https://tabler-icons.io/" ></iframe>
                            </div>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
};

export default Icons;
