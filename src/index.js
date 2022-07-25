import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { ExpensesContextProvider } from './store/expenses-context';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
	<ExpensesContextProvider>
		<App />
	</ExpensesContextProvider>
);

