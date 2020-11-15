import React from 'react';
import TrackListElement from "./TrackListElement";
import {Track} from "../types/Track";

type Props = {
    trackList: Track[];
    currencyTarget: string;
    currencyRates: Map<string, number>;
    addToFavouritesList: (track: Track) => void;
    removeFromFavouritesList: (trackId: number) => void;
}

const TrackList = (props: Props) => {

    const addToFavouritesList = (track: Track) => {
        props.addToFavouritesList(track);
    }

    const removeFromFavouritesList = (trackId: number) => {
        props.removeFromFavouritesList(trackId);
    }

    return (
        <div className="tracklist">
            {
                props.trackList.map(track => (
                    <TrackListElement
                        track={track}
                        currencyTarget={props.currencyTarget}
                        currencyRates={props.currencyRates}
                        addToFavouritesList={track => addToFavouritesList(track)}
                        removeFromFavouritesList={trackId => removeFromFavouritesList(trackId)}
                    />
                ))
            }
        </div>
    )
}

export default TrackList