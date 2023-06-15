import React from 'react'
import styles from './styles.module.scss';

const SamplePage: React.FC = () => {
  return (
    <main className={styles.main}>
			<section className={styles.section}>
				<div className={styles.outer_card}>
					<ul className={styles.lists}>
						<li>
							<h6>Sample Page</h6>
							<div className={styles.inner_card}>
                                <p>This is a sample page</p>
                            </div>
						</li>
					</ul>
				</div>
			</section>
		</main>
  )
}

export default SamplePage