import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import TrackList from "./components/TrackList";
import TrackPage from "./components/TrackPage";
import {BrowserRouter, Route} from "react-router-dom";
import NoFavouritesPage from "./components/NoFavouritesPage/NoFavouritesPage";
import TrackListDbContainer from "./components/TrackListDbContainer";
import {Track} from "./types/Track";

const App = () => {

    const [trackList, updateTrackList] = useState<Track[]>([]);
    const [favouritesList, updateFavouritesList] = useState<Track[]>([]);

    useEffect(() => {
        const updatedTrackList: Track[] = trackList;
        updatedTrackList.forEach((track: Track) => {
            track.isLiked = false
        });
        favouritesList.forEach((likedTrack: Track) => {
            const currentTrack = updatedTrackList.find((track: Track) => likedTrack.id === track.id);
            if (currentTrack) {
                currentTrack.isLiked = true;
            }
        });
        updateTrackList(updatedTrackList);
    }, [favouritesList]);

    const currencyRates = new Map([
        ['USD', 1],
        ['EUR', 0.86],
        ['RUB', 79.3]
    ]);

    const addToFavouritesList = (track: Track) => {
        updateFavouritesList([track].concat(favouritesList));
    }

    const removeFromFavouritesList = (trackId: number) => {
        updateFavouritesList(favouritesList.filter(track => track.id !== trackId));
    }

    return (
        <BrowserRouter>
            <div className="wrapper">
                <Header/>
                <div className='content'>
                    <div className="container">
                        <Route exact path='/tracks'
                               render={() =>
                                   <TrackListDbContainer trackList={trackList}
                                                         favouritesList={favouritesList}
                                                         currencyTarget="USD"
                                                         currencyRates={currencyRates}
                                                         updateTrackList={trackList => updateTrackList(trackList)}
                                                         addToFavouritesList={track => addToFavouritesList(track)}
                                                         removeFromFavouritesList={trackId => removeFromFavouritesList(trackId)}/>
                               }
                        />
                        <Route path='/favorites'
                               render={() => favouritesList.length !== 0 ?
                                   <TrackList trackList={favouritesList}
                                              currencyTarget="USD"
                                              currencyRates={currencyRates}
                                              addToFavouritesList={track => addToFavouritesList(track)}
                                              removeFromFavouritesList={trackId => removeFromFavouritesList(trackId)}/> :
                                   <NoFavouritesPage/>
                               }
                        />
                        <Route exact path='/tracks/:id'
                               render={() =>
                                   <TrackPage/>
                               }/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
