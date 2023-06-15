import styles from './styles.module.scss';
import { ToastContainer, toast, ToastOptions } from 'react-toastify';
import { FaCheckCircle } from 'react-icons/fa';
import { IoMdAlert } from 'react-icons/io';
import { MdInfo } from 'react-icons/md';
import { TbAlertTriangleFilled } from 'react-icons/tb';
import {
	BsEmojiSunglasses,
	BsEmojiWinkFill,
	BsEmojiSunglassesFill,
	BsFillEmojiSmileUpsideDownFill,
} from 'react-icons/bs';
import 'react-toastify/dist/ReactToastify.css';

const Alerts = () => {
	const toastConfig = {
		primary: {
			message: 'primary alert!',
			background: '#5d87ff',
			progressColor: '#5d87ff',
			icon: (
				<BsEmojiSunglasses
					style={{ marginRight: '1rem', fontSize: '2rem' }}
				/>
			),
		},
		secondary: {
			message: 'secondary alert!',
			background: '#49beff',
			progressColor: '#49beff',
			icon: (
				<BsEmojiWinkFill
					style={{ marginRight: '1rem', fontSize: '2rem' }}
				/>
			),
		},
		success: {
			message: 'Success Alert!',
			background: '#13deb9',
			progressColor: '#13deb9',
			icon: (
				<FaCheckCircle
					style={{ marginRight: '1rem', fontSize: '2rem' }}
				/>
			),
		},
		danger: {
			message: 'danger alert!',
			background: '#fa896b',
			progressColor: '#fa896b',
			icon: (
				<IoMdAlert style={{ marginRight: '1rem', fontSize: '2rem' }} />
			),
		},
		warning: {
			message: 'warning alert!',
			background: '#ffae1f',
			progressColor: '#ffae1f',
			icon: (
				<TbAlertTriangleFilled
					style={{ marginRight: '1rem', fontSize: '2rem' }}
				/>
			),
		},
		info: {
			message: 'info alert!',
			background: '#539bff',
			progressColor: '#539bff',
			icon: <MdInfo style={{ marginRight: '1rem', fontSize: '2rem' }} />,
		},
		light: {
			message: 'light alert!',
			background: '#2a3547',
			progressColor: '#2a3547',
			icon: (
				<BsEmojiSunglassesFill
					style={{ marginRight: '1rem', fontSize: '2rem' }}
				/>
			),
		},
		dark: {
			message: 'dark alert!',
			background: '#f6f9fc',
			progressColor: '#f6f9fc',
			icon: (
				<BsFillEmojiSmileUpsideDownFill
					style={{ marginRight: '0.5rem', fontSize: '2rem' }}
				/>
			),
		},
	};

	const handleToast = (name: string, type: keyof typeof toastConfig) => {
		const { message, background, icon, progressColor } = toastConfig[type];
		const toastOptions: ToastOptions = {
			position: 'top-right',
			autoClose: 3000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: true,
			draggable: true,
			progress: undefined,
			style: {
				color: background,
				fontSize: '1.6rem',
				textTransform: 'capitalize',
			},
			progressStyle: { background: progressColor },
		};

		if (name === 'dark') {
			toastOptions.theme = 'dark';
		}

		const toastId = toast(message, toastOptions);

		toast.update(toastId, {
			render: (
				<div style={{ display: 'flex', alignItems: 'center' }}>
					{icon}
					{message}
				</div>
			),
		});
	};

	return (
		<main className={styles.main}>
			<ToastContainer />
			<section className={styles.section}>
				<div className={styles.outer_card}>
					<ul className={styles.lists}>
						<li>
							<h6>Alerts</h6>
							<div className={styles.inner_card}>
								<div className={styles.button_wrapper}>
									<button
										className={styles.primary}
										onClick={() =>
											handleToast('primary', 'primary')
										}>
										A simple primary alert—check it out!
									</button>
									<button
										className={styles.secondary}
										onClick={() =>
											handleToast(
												'secondary',
												'secondary'
											)
										}>
										A simple secondary alert—check it out!
									</button>
									<button
										className={styles.success}
										onClick={() =>
											handleToast('success', 'success')
										}>
										A simple success alert—check it out!
									</button>
									<button
										className={styles.danger}
										onClick={() =>
											handleToast('danger', 'danger')
										}>
										A simple danger alert—check it out!
									</button>
									<button
										className={styles.warning}
										onClick={() =>
											handleToast('warning', 'warning')
										}>
										A simple warning alert—check it out!
									</button>
									<button
										className={styles.info}
										onClick={() =>
											handleToast('info', 'info')
										}>
										A simple info alert—check it out!
									</button>
									<button
										className={styles.light}
										onClick={() =>
											handleToast('light', 'light')
										}>
										A simple light alert—check it out!
									</button>
									<button
										className={styles.dark}
										onClick={() =>
											handleToast('dark', 'dark')
										}>
										A simple dark alert—check it out!
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

export default Alerts;
