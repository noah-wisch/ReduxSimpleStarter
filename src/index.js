import React from 'react';
import ReactDOM from 'react-dom';

// create new component
// should produce some HTML
const App = () => {
	return <div>hi!</div>;
};

// once created, component must be rendered to DOM
ReactDOM.render(<App />, document.querySelector('.container'));
