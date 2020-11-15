import React from 'react';
import TrackList from "./TrackList";
import axios from "axios";
import {Track} from "../types/Track";

type Props = {
    trackList: Array<Track>;
    favouritesList: Array<Track>;
    currencyTarget: string;
    currencyRates: Map<string, number>;
    updateTrackList: (trackList: Array<Track>) => void;
    addToFavouritesList: (track: Track) => void;
    removeFromFavouritesList: (trackId: number) => void;
}

type State = {}

class TrackListDbContainer extends React.Component<Props, State> {

    addToFavouritesList = (track: Track) => {
        this.props.addToFavouritesList(track);
    }

    removeFromFavouritesList = (trackId: number) => {
        this.props.removeFromFavouritesList(trackId);
    }

    componentDidMount() {
        axios.get('http://localhost:8080/tracks')
            .then(response => {
                this.props.updateTrackList(response.data);
            });
    }

    render() {
        return (
            <TrackList trackList={this.props.trackList}
                       currencyTarget={this.props.currencyTarget}
                       currencyRates={this.props.currencyRates}
                       addToFavouritesList={track => this.addToFavouritesList(track)}
                       removeFromFavouritesList={trackId => this.removeFromFavouritesList(trackId)}/>
        )
    }
}

export default TrackListDbContainer
