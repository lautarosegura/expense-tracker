import React from 'react';
import Header from './components/Header/Header';
import Container from './components/UI/Container';
import Expenses from './components/Expenses/Expenses';

function App() {
	return (
		<Container>
			<Header />
			<Expenses />
		</Container>
	);
}

export default App;

