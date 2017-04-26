import React from 'react';
import ReactDOM from 'react-dom';

import SearchBar from './components/searchBar';

const apiKey = 'AIzaSyCkgAAW530wy9KLSvLWSYwnm9OGirTWB-w';

// create new component that should produce some HTML
const App = () => {
	return (
		<div>
			<SearchBar />
		</div>
	);
};

// once created, component must be rendered to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
