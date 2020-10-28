import React from 'react';
import '../styles/LikeButton.css';

class LikeButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = {text: "Like", isLiked: false, className: "button--like"};
    }

    changeState() {
        if (!this.state.isLiked) {
            this.setState({text: "Liked", isLiked: true, className: "button--liked"});
        } else {
            this.setState({text: "Like", isLiked: false, className: "button--like"});
        }
    }

    render() {
        return (
            <div>
                <div className={this.state.className} onClick={() => this.changeState()}>
                    <div className="button__text">{this.state.text}</div>
                </div>
            </div>
        )
    }
}

export default LikeButton;