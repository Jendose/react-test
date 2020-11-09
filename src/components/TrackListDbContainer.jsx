import React from 'react';
import TrackList from "./TrackList";
import axios from "axios";

class TrackListDbContainer extends React.Component{

    // state = {
    //
    // }

    addToFavouritesList = (track) => {
        this.props.addToFavouritesList(track);
    }

    removeFromFavouritesList = (trackId) => {
        this.props.removeFromFavouritesList(trackId);
    }

    // componentDidMount() {
    //     axios.get('http://localhost:8080/tracks')
    //         .then(response => {
    //             const updatedTrackList = response.data;
    //             this.props.favouritesList.forEach(likedTrack => {
    //                 updatedTrackList.find(track => likedTrack.id === track.id).isLiked = true;
    //             })
    //             this.props.updateTrackList(updatedTrackList);
    //         });
    // }

    componentDidMount() {
        axios.get('http://localhost:8080/tracks')
            .then(response => {
                this.props.updateTrackList(response.data);
            });
    }

    render() {
        return(
            <TrackList trackList={this.props.trackList}
                       currencyRates={this.props.currencyRates}
                       addToFavouritesList={track => this.addToFavouritesList(track)}
                       removeFromFavouritesList={trackId => this.removeFromFavouritesList(trackId)}/>
        )
    }
}

export default TrackListDbContainer
