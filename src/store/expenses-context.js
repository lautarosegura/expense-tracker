import React, { useReducer } from 'react';
import ExpenseReducer from './ExpenseReducer';

const defaultExpenseContext = {
	expensesList: [],
};

const ExpensesContext = React.createContext(defaultExpenseContext);

export const ExpensesContextProvider = props => {
	const [expenseState, dispatchExpenseState] = useReducer(
		ExpenseReducer,
		defaultExpenseContext
	);

	const addExpense = expense => {
		dispatchExpenseState({ type: 'ADD_EXPENSE', value: expense });
	};

	const removeExpense = id => {
		dispatchExpenseState({ type: 'REMOVE_EXPENSE', id: id });
	};

	const expenseContext = {
		expensesList: expenseState.expensesList,
		addExpense,
		removeExpense,
	};

	return (
		<ExpensesContext.Provider value={expenseContext}>
			{props.children}
		</ExpensesContext.Provider>
	);
};

export default ExpensesContext;
