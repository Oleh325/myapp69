import React, { useRef, useState } from 'react';
import MyButton from './UI/Button/MyButton';
import MyInput from './UI/Input/MyInput';

function CreatePost() {
    const [title, setTitle] = useState('');
    const bodyInputRef = useRef();
    const addNewPost = (e) => {
        e.preventDefault()
        console.log(title);
        console.log(bodyInputRef.current.value);
    }

    return (
        <div>
            <form>
                <MyInput
                    value={title}
                    onChange={e => setTitle(e.target.value)}
                    type="text"
                    placeholder="Name"
                />
                <MyInput
                    ref={bodyInputRef}
                    type="text"
                    placeholder="Description"
                />
                <MyButton onClick={addNewPost}>Create</MyButton>
            </form>
        </div>
    );
}

export default CreatePost;
