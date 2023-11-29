import Home from '../pages/Home';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

interface RoutesInterface {
	path: string;
	Page: React.FC;
	label: string;
}

export const routes: RoutesInterface[] = [
	{
		path: '/',
		Page: Home,
		label: 'home'
	},
	{
		path: '/signIn',
		Page: SignIn,
		label: 'signIn'
	},
	{
		path: '/signUp',
		Page: SignUp,
		label: 'signUp'
	}
];
