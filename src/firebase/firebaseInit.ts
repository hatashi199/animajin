import { initializeApp } from 'firebase/app';

// AnimajinApp Firebase configuration
const firebaseConfig = {
	apiKey: 'AIzaSyBvZ59X9jv7Kmcz0ByN6jeRwIsdi0c71lI',
	authDomain: 'animajin-d7f93.firebaseapp.com',
	projectId: 'animajin-d7f93',
	storageBucket: 'animajin-d7f93.appspot.com',
	messagingSenderId: '895156942975',
	appId: '1:895156942975:web:0ec843bc6a249355b2674a'
};

// Initialize Firebase
export const firebaseApp = initializeApp(firebaseConfig);
