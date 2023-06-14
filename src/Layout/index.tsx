import { ReactNode } from 'react';
import Header from '../Components/Header/Header';
import Sidebar from '../Components/sidebar/Sidebar';

interface LayoutProps {
	children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
	return (
		<>
			<Header />
			<Sidebar />
			{children}
		</>
	);
};

export default Layout;
