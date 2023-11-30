import {
	createUserWithEmailAndPassword,
	getAuth,
	updateProfile
} from 'firebase/auth';
import { firebaseApp } from '../../firebase/firebaseInit';
import { FirebaseError } from 'firebase/app';

interface handleSignUpInterface {
	email: string;
	username: string;
	password: string;
}

export const handleSignUp = async ({
	email,
	username,
	password
}: handleSignUpInterface): Promise<string> => {
	try {
		const auth = getAuth(firebaseApp);
		const userData = await createUserWithEmailAndPassword(
			auth,
			email,
			password
		);

		userData &&
			(await updateProfile(userData.user, { displayName: username }));
		return 'User created correctly';
	} catch (error: unknown) {
		if (error instanceof FirebaseError) {
			switch (error.code) {
				case 'auth/email-already-in-use':
					return 'This email already exist';
				case 'auth/invalid-email':
					return 'Invalid email';
				case 'auth/weak-password':
					return 'Weak password';
				default:
					return 'Operation not allowed';
			}
		}

		return 'Unknown error';
	}
};
