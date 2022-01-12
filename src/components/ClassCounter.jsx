import React from 'react';

class ClassCounter extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            count: 69
        }
        this.like = this.like.bind(this);
        this.dislike = this.dislike.bind(this);
    }

    like() {
        this.setState({ count: this.state.count + 1 });
    }

    dislike() {
        this.setState({ count: this.state.count - 1 });
    }

    render() {
        return (
            <div>
                <h1>{this.state.count}</h1>
                <button onClick={this.like}>Like</button>
                <button onClick={this.dislike}>Dislike</button>
            </div>
        )
    }
}

export default ClassCounter;