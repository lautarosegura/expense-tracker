import React, { useRef, useContext } from 'react';
import classes from './ExpenseForm.module.css';
import Button from '../../UI/Button';
import ExpenseContext from '../../../store/expenses-context';

const ExpenseForm = props => {
	const textInputRef = useRef();
	const amountInputRef = useRef();

	const expenseCtx = useContext(ExpenseContext);

	const expenseSubmitHandler = event => {
		event.preventDefault();

		const text = textInputRef.current.value;
		const amount = amountInputRef.current.value;
		if (amount.trim().length === 0) {
			amountInputRef.current.focus();
			return;
		}
		if (text.trim().length === 0) {
			textInputRef.current.focus();
			return;
		}

		const type = +amount >= 0 ? 'income' : 'expense';

		const expense = {
			type,
			id: Math.random().toString(),
			text,
			amount: Math.abs(+amount),
		};

		expenseCtx.addExpense(expense);
	};
	return (
		<section className={classes.formSection}>
			<h3 className={classes['underlined-form-title']}>Add new transaction</h3>
			<form onSubmit={expenseSubmitHandler}>
				<div>
					<label className={classes.label} htmlFor="text">
						Text
					</label>
					<input
						className={classes.input}
						type="text"
						ref={textInputRef}
						id="text"
						required
						placeholder="Enter text..."
					/>
				</div>
				<div>
					<label className={classes.label} htmlFor="text">
						Amount (negative-expense, positive - income)
					</label>
					<input
						className={classes.input}
						type="number"
						ref={amountInputRef}
						id="amount"
						required
						placeholder="Enter amount..."
					/>
				</div>
				<div>
					<Button type="submit">Add Transaction</Button>
				</div>
			</form>
		</section>
	);
};

export default ExpenseForm;
