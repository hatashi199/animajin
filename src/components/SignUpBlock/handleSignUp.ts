import { createUserWithEmailAndPassword, getAuth } from 'firebase/auth';
import { firebaseApp } from '../../firebase/firebaseInit';

interface handleSignUpInterface {
	email: string;
	password: string;
}

export const handleSignUp = async ({
	email,
	password
}: handleSignUpInterface) => {
	try {
		const auth = getAuth(firebaseApp);
		await createUserWithEmailAndPassword(auth, email, password);
	} catch (error) {
		console.log(error);
	}
};
