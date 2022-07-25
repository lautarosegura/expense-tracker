import React, { useContext } from 'react';
import ExpenseContext from '../../../store/expenses-context';
import classes from './Resume.module.css';

const Resume = () => {
	const expenseCtx = useContext(ExpenseContext);

	const income = expenseCtx.expensesList
		.filter(e => e.type === 'income')
		.reduce((acc, el) => acc + el.amount, 0);

	const expense = expenseCtx.expensesList
		.filter(e => e.type === 'expense')
		.reduce((acc, el) => acc + el.amount, 0);

	return (
		<section className={classes['money-container']}>
			<div>
				<h4>INCOME</h4>
				<span className={`${classes.money} ${classes.plus}`}>
					${income.toFixed(2)}
				</span>
			</div>
			<div>
				<h4>EXPENSE</h4>
				<span className={`${classes.money} ${classes.minus}`}>
					${expense.toFixed(2)}
				</span>
			</div>
		</section>
	);
};

export default Resume;
