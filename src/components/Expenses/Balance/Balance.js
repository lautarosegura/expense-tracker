import React, { useContext } from 'react';
import classes from './Balance.module.css';
import ExpenseContext from '../../../store/expenses-context';

const Balance = () => {

	const expenseCtx = useContext(ExpenseContext);
	
	const income = expenseCtx.expensesList.filter(e => e.type === 'income').reduce((acc, el) => acc + el.amount, 0);
	const expense = expenseCtx.expensesList.filter(e => e.type === 'expense').reduce((acc, el) => acc + el.amount, 0);

	return (
		<section className={classes.balance}>
			<h4>Your Balance</h4>
			<h1>${(income - expense).toFixed(2)}</h1>
		</section>
	);
};

export default Balance;
