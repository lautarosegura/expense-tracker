import React, { useContext } from 'react';
import ExpensesContext from '../../../store/expenses-context';
import classes from './ExpensesList.module.css';
import ExpenseItem from './ExpenseItem';

const ExpensesList = props => {
	const expContext = useContext(ExpensesContext);

	let expensesList;
	if (expContext.expensesList.length === 0) {
		expensesList = <p>No expense history.</p>;
	} else {
		expensesList = expContext.expensesList.map(expense => (
			<ExpenseItem
				type={expense.type}
				id={expense.id}
				text={expense.text}
				amount={expense.amount}
				key={expense.id}
			/>
		));
	}

	return <ul className={classes.list}>{expensesList}</ul>;
};

export default ExpensesList;
