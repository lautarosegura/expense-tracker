import React from 'react';
import classes from './History.module.css';
import ExpensesList from './ExpensesList'

const History = props => {
	return <section>
		<h3 className={classes['underlined-title']}>History</h3>
		<ExpensesList />
	</section>
}

export default History;