import React, { useState } from 'react';

export const SearchContext = React.createContext({
	term: '',
	searchHandler: () => {},
});

const SearchContextProvider = props => {
	const [term, setTerm] = useState('');

	const searchHandler = query => {
		setTerm(query);
	};

	return (
		<SearchContext.Provider
			value={{ term: term, searchHandler: searchHandler }}
		>
			{props.children}
		</SearchContext.Provider>
	);
};

export default SearchContextProvider;
