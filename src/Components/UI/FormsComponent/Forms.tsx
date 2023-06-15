import { useState } from 'react';
import styles from './styles.module.scss';
import { FaCheck } from 'react-icons/fa';
const Forms = () => {
	const [checkOut, setCheckOut] = useState<boolean>(false);
	
	const handleCheckOutField = () => {
		setCheckOut(!checkOut);
	};
	return (
		<main className={styles.main}>
			<section className={styles.section}>
				<div className={styles.outer_card}>
					<ul className={styles.lists}>
						<li>
							<h6>Forms</h6>
							<div className={styles.inner_card}>
								<form action="#">
									<section className={styles.input_group}>
										<div className={styles.input_field}>
											<label htmlFor="email">
												Email address 
											</label>
											<input
												id="email"
												type="email"
												autoComplete="off"
												placeholder="eg. johndoe@gmail.com"
											/>
										</div>
										<p className={styles.note_text}>
											We'll never share your email with
											anyone else.
										</p>
									</section>
									<section className={styles.input_group}>
										<div className={styles.input_field}>
											<label htmlFor="password">
												Password
											</label>
											<input
												id="password"
												type="password"
												autoComplete="off"
												placeholder="********"
											/>
										</div>
									</section>
									<section className={styles.input_group}>
										<div
											className={styles.check_field}
											onClick={handleCheckOutField}>
											<div
												className={`${
													styles.checkbox
												} ${
													checkOut && styles.selected
												}`}>
												<FaCheck
													className={`${
														styles.icon
													} ${
														checkOut && styles.show
													}`}
												/>
											</div>
											<label htmlFor="checkmeout">
												Check me out
											</label>
										</div>
									</section>
									<button type='button'>submit</button>
								</form>
							</div>
						</li>
						<li>
							<h6>Disabled forms</h6>
							<div className={styles.inner_card}>
									<h6 className={styles.sub_heading}>Disabled fieldset example</h6>
								<form action="#">
									<section className={styles.input_group}>
										<div className={styles.input_field}>
											<label className={styles.disabled}>
												Disabled input
											</label>
											<input
												disabled
												type="text"
												autoComplete="off"
												placeholder="Disabled input"
											/>
										</div>
									</section>
									<section className={styles.input_group}>
										<div className={styles.input_field}>
											<label className={styles.disabled}>
												Disabled select menu
											</label>
											<select name="" id="" disabled>
												<option value="">
													Disabled Select
												</option>
											</select>
										</div>
									</section>
									<section className={styles.input_group}>
										<div
											className={`${styles.check_field} ${styles.disabled}`}>
											<div
												className={`${styles.checkbox}  `}></div>
											<label htmlFor="cantcheckthis">
												Can't check this
											</label>
										</div>
									</section>
									<button disabled>submit</button>
								</form>
							</div>
						</li>
					</ul>
				</div>
			</section>
		</main>
	);
};

export default Forms;
