import Header from './components/Header/Header';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';

const AnimajinApp: React.FC = () => {
	return (
		<>
			<Header />
			<SignUp />
			<SignIn />
		</>
	);
};

export default AnimajinApp;
