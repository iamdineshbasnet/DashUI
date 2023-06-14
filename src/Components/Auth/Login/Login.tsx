import { useState } from 'react';
import styles from './styles.module.scss';
import Logo from '../../../assets/Logo.svg';
import { FaCheck } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const Login = () => {
    const navigate = useNavigate()
	const [checkOut, setCheckOut] = useState<boolean>(false);

	const handleCheckOutField = () => {
		setCheckOut(!checkOut);
	};

    const createAccount = () =>{
        navigate("/register")
    }

    const handleSubmit = () =>{
        navigate("/")
    }
	return (
		<main className={styles.main}>
			<section className={styles.card}>
				<div className={styles.logo_wrapper}>
					<img src={Logo} alt="" />
				</div>

				<div className={styles.title}>
					<p>Your social campaigns</p>
				</div>
				<form action="#" onSubmit={handleSubmit}>
					<div className={styles.input_group}>
						<label htmlFor="username">username</label>
						<input type="text" id="username" autoComplete='off' />
					</div>
					<div className={styles.input_group}>
						<label htmlFor="password">password</label>
						<input type="password" id="password" />
					</div>
					<div className={styles.checkbox_wrapper}>
						<section className={styles.row}>
							<div
								className={styles.check_field}
								onClick={handleCheckOutField}>
								<div
									className={`${styles.checkbox} ${
										checkOut && styles.selected
									}`}>
									<FaCheck
										className={`${styles.icon} ${
											checkOut && styles.show
										}`}
									/>
								</div>
								<label htmlFor="">Remeber me </label>
							</div>
						</section>

                        <section className={styles.row}>
                            <p className={styles.forgot_password}>Forgot password?</p>
                        </section>
					</div>

                    <button type='submit'>sign in</button>

                    <div className={styles.create_account}>
                        <p className={styles.text}>New to DashUI?</p>
                        <p className={styles.link} onClick={createAccount}>Create an account</p>
                    </div>
				</form>
			</section>
		</main>
	);
};

export default Login;
