import React from 'react';
import LikeButton from "./LikeButtonRound";
import TrackListElement from "./TrackListElement";

class Track extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return(
            <div className="tracklist">
                {/*{this.props.match.params.id}*/}
            </div>
        )
    }
}

export default Track