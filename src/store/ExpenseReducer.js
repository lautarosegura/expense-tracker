const defaultExpenseContext = {
	expensesList: [],
};

const ExpenseReducer = (state, action) => {
	if (action.type === 'ADD_EXPENSE') {
		return {
			...state,
			expensesList: [action.value, ...state.expensesList],
		};
	}

	if (action.type === 'REMOVE_EXPENSE') {
		return {
			...state,
			expensesList: state.expensesList.filter(
				expense => expense.id !== action.id
			),
		};
	}

	return defaultExpenseContext;
};

export default ExpenseReducer;