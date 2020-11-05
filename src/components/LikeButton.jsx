import React from 'react';
import '../styles/LikeButton.css';

class LikeButton extends React.Component {

    constructor(props) {
        super(props);
        this.state = props.isLiked?
            {text: "Unlike", isLiked: true, className: "button--liked"}:
            {text: "Like", isLiked: false, className: "button--like"};
    }

    changeState() {
        this.setState(
            this.state.isLiked?
                {text: "Like", isLiked: false, className: "button--like"}:
                {text: "Unlike", isLiked: true, className: "button--liked"},
            () => {
                this.props.updateLike(this.state.isLiked)
            }
        );
    }

    render() {
        return (
            <div>
                <div className="button-wrapper">
                    <div className={this.state.className} onClick={() => this.changeState()}>
                        <div className="button__text">{this.state.text}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LikeButton;