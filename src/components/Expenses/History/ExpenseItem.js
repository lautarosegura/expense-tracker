import React, { useContext } from 'react';
import ExpenseContext from '../../../store/expenses-context';
import classes from './ExpenseItem.module.css';
const ExpenseItem = props => {
	const expenseCtx = useContext(ExpenseContext);

	const classesList = `${classes['list-item']} ${
		props.type === 'income' ? `${classes.plus}` : `${classes.minus}`
	}`;

	return (
		<li
			className={classesList}
			onClick={() => expenseCtx.removeExpense(props.id)}
		>
			<span>{props.text}</span>
			<span className={classes.hidden}>Click to remove</span>
			<span>
				{props.type === 'income' ? '+' : '-'}${props.amount.toFixed(2)}
			</span>
		</li>
	);
};

export default ExpenseItem;
