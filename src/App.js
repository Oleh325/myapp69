import React from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import InputBasedTextBox from './components/InputBasedTextBox';
import "./styles/App.css";
import Posts from "./components/Posts.jsx";

function App() {
	return (
		<div className="App">
			<ClassCounter />
			<Counter />
			<InputBasedTextBox />
			<Posts/>
		</div>
	);
}

export default App;
