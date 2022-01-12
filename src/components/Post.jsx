import React from 'react';

RequestHandler()

function RequestHandler() {
    var formData = new FormData();
    formData.append('title', 'fff');

    fetch("http://69.com", {
        method: 'POST',
        header: {
            'Content-Type': 'application/x-www-form-urlencoded',
        },
        body: formData
    })
        .then(response => response.text())
        .then(response => {
            console.log(response)
        })
}

const Post = function (props) {
    return (
        <div className='post'>
            <div className='post__content'>
                <strong>{props.post.id}. {props.post.title}</strong>
                <div>{props.post.body}</div>
            </div>
            <div className='post__buttons'>
                <button>Delete</button>
            </div>
        </div>
    );
}

export default Post;