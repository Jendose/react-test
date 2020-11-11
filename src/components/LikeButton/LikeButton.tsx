import React from 'react';
import style from './LikeButton.module.css';

type Props = {
    isLiked: boolean;
    shape: "right-side" | "round";
    updateLike: (value: boolean) => void;
}

type State = {
    text: string;
    isLiked: boolean;
    className: string;
}

// TODO: change logic of attaching styles to button so than round shape will have no padding
class LikeButton extends React.Component<Props, State> {

    state = this.props.isLiked?
            {text: "Unlike", isLiked: true, className: this.props.shape}:
            {text: "Like", isLiked: false, className: "square"};

    changeState() {
        this.setState(
            this.state.isLiked?
                {text: "Like", isLiked: false, className: "square"}:
                {text: "Unlike", isLiked: true, className: this.props.shape},
            () => {
                this.props.updateLike(this.state.isLiked)
            }
        )
    }

    render() {
        return (
            <div>
                <div className={style.buttonWrapper}>
                    <div className={style[this.state.className]} onClick={() => this.changeState()}>
                        <div className={style.text}>{this.state.text}</div>
                    </div>
                </div>
            </div>
        )
    }
}

export default LikeButton;