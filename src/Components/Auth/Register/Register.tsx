import styles from './styles.module.scss';
import Logo from '../../../assets/Logo.svg';
import { useNavigate } from 'react-router-dom';

const Register = () => {
    const navigate = useNavigate()

    const goToSignIn = () =>{
        navigate("/login")
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
				<form action="#">
					<div className={styles.input_group}>
						<label htmlFor="name">name</label>
						<input type="text" id="name" autoComplete='off' />
					</div>
					<div className={styles.input_group}>
						<label htmlFor="email">email address</label>
						<input type="email" id="email" autoComplete='off' />
					</div>
					<div className={styles.input_group}>
						<label htmlFor="password">password</label>
						<input type="password" id="password" />
					</div>
					

                    <button type='submit' onClick={goToSignIn}>sign up</button>

                    <div className={styles.create_account}>
                        <p className={styles.text}>Already have an Account?</p>
                        <p className={styles.link} onClick={goToSignIn}>Sign In</p>
                    </div>
				</form>
			</section>
		</main>
	);
};

export default Register;
