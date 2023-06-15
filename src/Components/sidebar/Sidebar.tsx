import { useState } from 'react';
import styles from './styles.module.scss';
import Logo from '../../assets/Logo.svg';
import {
	MdOutlineDashboard,
	MdOutlineSmartButton,
	MdOutlineEmojiEmotions,
	MdOutlineMenuOpen,
} from 'react-icons/md';
import {
	IoAlertCircleOutline,
	IoDocumentTextOutline,
	IoLogInOutline,
	IoPersonAddOutline,
} from 'react-icons/io5';
import { GoVersions } from 'react-icons/go';
import { TbTypography } from 'react-icons/tb';
import { LuChrome } from 'react-icons/lu';
import { useNavigate } from 'react-router-dom';
import { commonAppSelector } from '../Redux/selector';
import { useSelector, useDispatch } from 'react-redux';
import { openAppSideBar } from '../Redux/commonSlice';

const Sidebar = () => {

	// dispatch
	const dispatch = useDispatch()
	// hooks
	const navigate = useNavigate();

	//states
	const [activeItem, setActiveItem] = useState<string>('dashboard');

	// selector
	const { showAppSideBar } = useSelector(commonAppSelector);

	const handleActiveItem = (name: string) => {
		setActiveItem(name);
		dispatch(openAppSideBar(false))
		if (name === 'dashboard') {
			navigate('/');
		} else {
			navigate(`/${name}`);
		}
	};

	const handleCloseSideBar = () =>{
		dispatch(openAppSideBar(false))
	}

	return (
		<aside className={`${styles.aside} ${showAppSideBar && styles.active}`}>
			<div className={styles.close_icon} onClick={()=>handleCloseSideBar()}>
				<MdOutlineMenuOpen className={styles.icon} />
			</div>
			<section className={styles.section}>
				<div className={styles.logo}>
					<img src={Logo} alt="Dashboard" />
				</div>

				<div className={styles.list_wrapper}>
					<section className={styles.list}>
						<h6 className={styles.title}>home</h6>
						<ul className={styles.items}>
							<li
								onClick={() => handleActiveItem('dashboard')}
								className={`${
									activeItem === 'dashboard' && styles.active
								}`}>
								<MdOutlineDashboard className={styles.icon} />
								<p>Dashboard</p>
							</li>
						</ul>
					</section>
					<section className={styles.list}>
						<h6 className={styles.title}>ui components</h6>
						<ul className={styles.items}>
							<li
								onClick={() => handleActiveItem('buttons')}
								className={`${
									activeItem === 'buttons' && styles.active
								}`}>
								<MdOutlineSmartButton className={styles.icon} />
								<p>buttons</p>
							</li>
							<li
								onClick={() => handleActiveItem('alerts')}
								className={`${
									activeItem === 'alerts' && styles.active
								}`}>
								<IoAlertCircleOutline className={styles.icon} />
								<p>alerts</p>
							</li>
							<li
								onClick={() => handleActiveItem('cards')}
								className={`${
									activeItem === 'cards' && styles.active
								}`}>
								<GoVersions className={styles.icon} />
								<p>card</p>
							</li>
							<li
								onClick={() => handleActiveItem('forms')}
								className={`${
									activeItem === 'forms' && styles.active
								}`}>
								<IoDocumentTextOutline
									className={styles.icon}
								/>
								<p>Forms</p>
							</li>
							<li
								onClick={() => handleActiveItem('typography')}
								className={`${
									activeItem === 'typography' && styles.active
								}`}>
								<TbTypography className={styles.icon} />
								<p>typography</p>
							</li>
						</ul>
					</section>
					<section className={styles.list}>
						<h6 className={styles.title}>auth</h6>
						<ul className={styles.items}>
							<li
								onClick={() => handleActiveItem('login')}
								className={`${
									activeItem === 'login' && styles.active
								}`}>
								<IoLogInOutline className={styles.icon} />
								<p>login</p>
							</li>
							<li
								onClick={() => handleActiveItem('register')}
								className={`${
									activeItem === 'register' && styles.active
								}`}>
								<IoPersonAddOutline className={styles.icon} />
								<p>register</p>
							</li>
						</ul>
					</section>
					<section className={styles.list}>
						<h6 className={styles.title}>extra</h6>
						<ul className={styles.items}>
							<li
								onClick={() => handleActiveItem('icons')}
								className={`${
									activeItem === 'icons' && styles.active
								}`}>
								<MdOutlineEmojiEmotions
									className={styles.icon}
								/>
								<p>icons</p>
							</li>
							<li
								onClick={() => handleActiveItem('samplepage')}
								className={`${
									activeItem === 'samplepage' && styles.active
								}`}>
								<LuChrome className={styles.icon} />
								<p>sample page</p>
							</li>
						</ul>
					</section>
				</div>
			</section>
		</aside>
	);
};

export default Sidebar;
