import React, { useState } from 'react';
import Counter from './components/Counter';
import ClassCounter from './components/ClassCounter';
import InputBasedTextBox from './components/InputBasedTextBox';
import Post from './components/Post';
import MyInput from './components/UI/Input/MyInput.jsx';
import MyButton from './components/UI/Button/MyButton.jsx';
import "./styles/App.css";

function App() {
	const [posts, setPosts] = useState([
        { id: "1", title: "C#", body: "C# is the best programming language" },
        { id: "2", title: "Java", body: "Java is also nice" },
        { id: "3", title: "???", body: "But do you know what is the best?" },
        { id: "0", title: "Nadiyka", body: "Yup" }
    ]);
    const [title, setTitle] = useState('');
    const [body, setBody] = useState('');
    const addNewPost = (e) => {
        const newPost = {
            id: Date.now(),
            title,
            body
        }
        e.preventDefault();
        setPosts([...posts, newPost]);
        console.log(newPost);
    }
	return (
		<div className="App">
			<ClassCounter />
			<Counter />
			<InputBasedTextBox />
			<div>
            <form>
                {/*Controlled input*/}
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Name"
                />
                {/*Uncontrolled input*/}
                <MyInput
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    type="text"
                    placeholder="Description"
                />
                <MyButton onClick={addNewPost}>Create</MyButton>
            </form>
        </div>
			<h1 style={{ textAlign: 'center' }}>Posts</h1>
			{posts.map(post =>
				<Post post={post} key={post.id} />
			)}
		</div>
	);
}

export default App;
