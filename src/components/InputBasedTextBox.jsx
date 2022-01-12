import React, { useState } from 'react';

const InputBasedTextBox = function () {
    const [input, setInput] = useState("69");
    return (
        <div>
            <p>{input}</p>
            <input
                type="text"
                value={input}
                onChange={event => setInput(event.target.value)}
            />
        </div>
    );
}

export default InputBasedTextBox;