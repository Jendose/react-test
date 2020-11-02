import React from 'react';
import TrackListElement from "./TrackListElement";
class TrackList extends React.Component {
    constructor(props) {
        super(props);
    }

    addToFavouritesList = (track) => {
        this.props.addToFavouritesList(track);
    }

    removeFromFavouritesList = (trackId) => {
        this.props.removeFromFavouritesList(trackId);
    }

    trackList = this.props.trackList.map(track => (
        <TrackListElement
            id={track.id}
            name={track.name}
            artist={track.artist}
            label={track.label}
            platform={track.platform}
            genres={track.genres}
            bpm={track.bpm}
            key_={track.key_}
            daw={track.daw}
            duration={track.duration}
            currency={track.currency}
            currencyTarget={track.currencyTarget}
            price={track.price}
            dateCreated={track.dateCreated}
            dateSold={track.dateSold}
            status={track.status}
            coverImage={track.coverImage}

            isLiked={track.isLiked}

            currencyRates={this.props.currencyRates}
            addToFavouritesList={track => this.addToFavouritesList(track)}
            removeFromFavouritesList={trackId => this.removeFromFavouritesList(trackId)}
        />
    ));

    render() {
        return (
            <div className="tracklist">
                {this.trackList}
            </div>
        )
    }
}

export default TrackList