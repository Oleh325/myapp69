import React, { useState } from 'react';
import MyInput from './UI/Input/MyInput.jsx';
import MyButton from './UI/Button/MyButton.jsx';
import PostList from './PostList';

function Posts() {
    const [posts, setPosts] = useState([
        { id: "1", title: "C#", body: "C# is the best programming language" },
        { id: "2", title: "Java", body: "Java is also nice" },
        { id: "3", title: "???", body: "But do you know what is the best?" },
        { id: "0", title: "Nadiyka", body: "Yup" }
    ]);
    const [post, setPost] = useState({title: '', body: ''});
    const addNewPost = (e) => {
        e.preventDefault();
        setPosts([...posts, {...post, id: Date.now()}]);
        setPost({title: '', body: ''});
    }
    return (
        <div>
            <div>
                <form>
                    {/*Controlled input*/}
                    <MyInput
                        value={post.title}
                        onChange={e => setPost({...post, title: e.target.value})}
                        type="text"
                        placeholder="Name"
                    />
                    {/*Uncontrolled input*/}
                    <MyInput
                        value={post.body}
                        onChange={e => setPost({...post, body: e.target.value})}
                        type="text"
                        placeholder="Description"
                    />
                    <MyButton onClick={addNewPost}>Create</MyButton>
                </form>
            </div>
            <PostList posts={posts} title="Posts"/>
        </div>
    );
}

export default Posts;
