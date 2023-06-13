import styles from './styles.module.scss';
import { MdOutlineNotificationsActive, MdOutlineMenuOpen } from 'react-icons/md';
import ProfileImage from '../../assets/ProfileImage.jpg';
import ProfileModal from './ProfileModal/ProfileModal';
import { useDispatch, useSelector } from 'react-redux';
import { openAppModal, openAppSideBar } from '../Redux/commonSlice';
import { commonAppSelector } from '../Redux/selector';
const Header = () => {
	const dispatch = useDispatch();
	const { appModal } = useSelector(commonAppSelector);

	const handleAppModal = (name: string) => {
		if (appModal === name) {
			dispatch(openAppModal(''));
		} else {
			dispatch(openAppModal(name));
		}
	};

	const handleShowAppSideBar = () =>{
		dispatch(openAppSideBar(true))
	}
	return (
		<header className={styles.header}>
			<nav>
				<section className={styles.row}>
					<div className={styles.icon_wrapper} onClick={()=>handleShowAppSideBar()}>
						<MdOutlineMenuOpen className={styles.icon} />
					</div>
					<div className={styles.icon_wrapper}>
						<MdOutlineNotificationsActive className={styles.icon} />
						<div className={styles.dot}></div>
					</div>
				</section>
				<section className={styles.row}>
					<div
						className={styles.image_wrapper}
						onClick={() => handleAppModal('profileModal')}>
						<img src={ProfileImage} alt="" />
					</div>
					<ProfileModal />
				</section>
			</nav>
		</header>
	);
};

export default Header;
