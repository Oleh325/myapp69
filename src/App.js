import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import InputBasedTextBox from './components/InputBasedTextBox';
import Post from './components/Post';
import "./styles/App.css";
import CreatePost from './components/CreatePost';

function App() {
	const [posts, setPosts] = useState([
		{ id: "1", title: "C#", body: "C# is the best programming language" },
		{ id: "2", title: "Java", body: "Java is also nice" },
		{ id: "3", title: "???", body: "But do you know what is the best?" },
		{ id: "0", title: "Nadiyka", body: "Yup" }
	]);
	return (
		<div className="App">
			<ClassCounter />
			<Counter />
			<InputBasedTextBox />
			<CreatePost />
			<h1 style={{ textAlign: 'center' }}>Posts</h1>
			{posts.map(post =>
				<Post post={post} key={post.id} />
			)}
		</div>
	);
}

export default App;
