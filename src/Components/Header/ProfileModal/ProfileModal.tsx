import styles from './styles.module.scss';
import { IoPersonOutline } from 'react-icons/io5';
import { MdOutlineEmail, MdOutlineChecklistRtl } from 'react-icons/md';
import { commonAppSelector } from '../../Redux/selector';
import { useSelector, useDispatch } from 'react-redux';
import { openAppModal } from '../../Redux/commonSlice';
const ProfileModal = () => {
	const dispatch = useDispatch();
	const { appModal } = useSelector(commonAppSelector);

	const handleNavigation = () => {
		dispatch(openAppModal(''));
	};
	return (
		<section
			className={`${styles.profile_modal} ${
				appModal === 'profileModal' && styles.active
			}`}>
			<div className={styles.container}>
				<ul className={styles.list}>
					<li onClick={() => handleNavigation()}>
						<IoPersonOutline className={styles.icon} />
						<p className={styles.text}>my profile</p>
					</li>
					<li onClick={() => handleNavigation()}>
						<MdOutlineEmail className={styles.icon} />
						<p className={styles.text}>my account</p>
					</li>
					<li onClick={() => handleNavigation()}>
						<MdOutlineChecklistRtl className={styles.icon} />
						<p className={styles.text}>my task</p>
					</li>
					<div className={styles.button_wrapper}>
						<button>logout</button>
					</div>
				</ul>
			</div>
		</section>
	);
};

export default ProfileModal;
