import React from 'react';
import '../styles/LikeButton.css';

class LikeButton extends React.Component {

    constructor(props) {
        super(props);
        if(props.isLiked){
            this.state = {text: "Unlike", isLiked: true, className: "button--liked"};
        }
        else {
            this.state = {text: "Like", isLiked: false, className: "button--like"};
        }
    }

    changeState() {
        if (!this.state.isLiked) {
            this.setState({text: "Unlike", isLiked: true, className: "button--liked"});
        } else {
            this.setState({text: "Like", isLiked: false, className: "button--like"});
        }
    }

    render() {
        return (
            <div>
                <div className="button-wrapper">
                    <div className={this.state.className} onClick={
                        () => {
                            this.props.updateLike(!this.state.isLiked);
                            this.changeState();
                        }
                    }>
                        <div className="button__text">{this.state.text}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LikeButton;