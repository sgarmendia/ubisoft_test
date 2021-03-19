import { useState, useEffect } from 'react'

import gamesAPI from '../api';

export const useFetch = request => {
	const [response, setResponse] = useState([]);
	const [error, setError] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const fetchData = async () => {
			setIsLoading(true);
			try {
				const data = await gamesAPI(request);
				setResponse(data);
			} catch (error) {
				setError(error);
			} finally {
				setIsLoading(false);
			};
		};

		fetchData();
	}, []);

	return { response, error, isLoading };
};