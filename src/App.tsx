import { Provider } from 'react-redux';
import Layout from './Layout';
import { store } from './Utils/store/store';
import { Routes, Route } from 'react-router-dom';
import Buttons from './Components/UI/ButtonsComponent/Buttons';
import Dashboard from './Components/Home/Dashboard/Dashboard';
import Alerts from './Components/UI/AlertsComponent/Alerts';
import Cards from './Components/UI/CardsComponents/Cards';
import Typography from './Components/UI/TypographyComponents/Typography';
import Forms from './Components/UI/FormsComponent/Forms';
import Login from './Components/Auth/Login/Login';
import Register from './Components/Auth/Register/Register';
import Icons from './Components/Extra/Icons/Icons';
function App() {
	return (
		<>
			<Provider store={store}>

				<Routes>
					<Route path="/" element={<Layout><Dashboard /></Layout>} />
					<Route path="/buttons" element={<Layout><Buttons /></Layout>} />
					<Route path="/alerts" element={<Layout><Alerts /></Layout>} />
					<Route path="/cards" element={<Layout><Cards /></Layout>} />
					<Route path="/forms" element={<Layout><Forms /></Layout>} />
					<Route path="/typography" element={<Layout><Typography /></Layout>} />
					<Route path="/login" element={<><Login /></>} />
					<Route path="/register" element={<><Register /></>} />
					<Route path="/icons" element={<Layout><Icons /></Layout>} />
				</Routes>
			</Provider>
		</>
	);
}

export default App;
