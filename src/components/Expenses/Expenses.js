import React from 'react';
import Balance from './Balance/Balance';
import Resume from './Balance/Resume';
import History from './History/History';
import ExpenseForm from './ExpenseForm/ExpenseForm';

const Expenses = props => {
	return (
		<div>
			<Balance />
			<Resume />
			<History />
			<ExpenseForm />
		</div>
	);
};

export default Expenses;
