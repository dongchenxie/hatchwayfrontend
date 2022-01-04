import React, { useState, useEffect } from 'react';
import Students from './components/Students';
const App = () => {
	const [error, setError] = useState(null);
	const [isLoaded, setIsLoaded] = useState(false);
	const [students, setStudents] = useState([]);

	useEffect(() => {
		fetch('https://api.hatchways.io/assessment/students')
			.then((res) => res.json())
			.then(
				(res) => {
					setIsLoaded(true);
					setStudents(res.students);
				},
				(error) => {
					setIsLoaded(true);
					setError(error);
				}
			);
	}, []);
	if (error) {
		return <div>Error:{error.message}</div>;
	} else if (!isLoaded) {
		return <div>Loading...</div>;
	} else {
		return (
			<div>
				<Students students={students} />
			</div>
		);
	}
};

export default App;
