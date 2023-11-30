import { Route, Routes } from 'react-router-dom';
import Header from './components/Header/Header';
import { routes } from './routes/routes';

const AnimajinApp: React.FC = () => {
	return (
		<>
			<Header />
			<Routes>
				{routes &&
					routes.map((route) => {
						return (
							<Route
								key={route.label}
								path={route.path}
								element={<route.Page />}
							/>
						);
					})}
			</Routes>
		</>
	);
};

export default AnimajinApp;
