import { useState, createContext } from 'react';

export const SearchContext = createContext();

export const SearchContextProvider = props => {
	const [term, setTerm] = useState('');

	return (
		<SearchContext.Provider value={[term, setTerm]}>
			{props.children}
		</SearchContext.Provider>
	);
};
