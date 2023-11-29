import React from 'react';
import ReactDOM from 'react-dom/client';
import AnimajinApp from './AnimajinApp.tsx';
import './css/index.css';
import { BrowserRouter } from 'react-router-dom';

ReactDOM.createRoot(document.getElementById('root')!).render(
	<React.StrictMode>
		<BrowserRouter>
			<AnimajinApp />
		</BrowserRouter>
	</React.StrictMode>
);
