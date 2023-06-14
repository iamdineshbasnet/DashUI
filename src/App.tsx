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
function App() {
	return (
		<>
			<Provider store={store}>
				<Layout />
				<Routes>
					<Route path="/" element={<Dashboard />} />
					<Route path="/buttons" element={<Buttons />} />
					<Route path="/alerts" element={<Alerts />} />
					<Route path="/cards" element={<Cards />} />
					<Route path="/forms" element={<Forms />} />
					<Route path="/typography" element={<Typography />} />
				</Routes>
			</Provider>
		</>
	);
}

export default App;
