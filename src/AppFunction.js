import React, {useEffect, useState} from 'react';
import './App.css';
import Header from "./components/Header";
import TrackList from "./components/TrackList";
import Track from "./components/Track";
import PropTypes from 'prop-types'
import {BrowserRouter, Route} from "react-router-dom";
import NoFavouritesPage from "./components/NoFavouritesPage/NoFavouritesPage";
import axios from "axios";

const App = () => {

    /////// HARDCODED VERSION ///////

    // const [trackList, updateTrackList] = useState([
    //     {
    //         id: 1,
    //         name: "Quirkyuiop",
    //         artist: "Flume",
    //         label: "Future Classic",
    //         platform: "Tracks For Aslanbeks",
    //         genres: ["Flumestep", "Pop"],
    //         bpm: 120,
    //         key_: "C",
    //         daw: "FL Studio",
    //         duration: 191,
    //         price: 199,
    //         currency: "USD",
    //         dateCreated: new Date(),
    //         dateSold: new Date(),
    //         status: "ONSALE",
    //         coverImage: "https://avatars.mds.yandex.net/get-pdb/2797093/7f679526-0905-46e3-a11c-028489d4eb91/s1200",
    //         isLiked: false
    //     },
    //     {
    //         id: 2,
    //         name: "Learning React",
    //         artist: "Jendose",
    //         label: "Future Classic",
    //         platform: "Beatgun",
    //         genres: ["Future Bass"],
    //         bpm: 135,
    //         key_: "D",
    //         daw: "Ableton Live",
    //         duration: 191,
    //         price: 199,
    //         currency: "USD",
    //         dateCreated: new Date(),
    //         dateSold: new Date(),
    //         status: "SOLD",
    //         coverImage: "https://avatars.mds.yandex.net/get-pdb/2848662/0824dd1a-09c2-4432-9005-b75196dd9b5d/s1200",
    //         isLiked: false
    //     },
    //     {
    //         id: 3,
    //         name: "Innovation",
    //         artist: "Eisencore",
    //         label: "Monstercat",
    //         platform: "House of Tracks",
    //         genres: ["Drum'n'bass", "Neurofunk", "Dubstep", "Drumstep", "Hardstyle"],
    //         bpm: 160,
    //         key_: "Am",
    //         daw: "Studio One",
    //         duration: 191,
    //         price: 199,
    //         currency: "USD",
    //         dateCreated: new Date(),
    //         dateSold: new Date(),
    //         status: "ONSALE",
    //         coverImage: "https://avatars.mds.yandex.net/get-pdb/2884150/6ae36f98-bd6d-4b0e-b837-15bddc7bf558/s1200",
    //         isLiked: false
    //     }
    // ]);
    // const [favouritesList, updateFavouritesList] = useState([]);
    //
    // const isLiked = (trackId) => {
    //     return favouritesList.findIndex(track => track.id === trackId) !== -1;
    // }
    //
    // useEffect(() => {
    //     updateTrackList(trackList.map(track => {
    //         track.isLiked = isLiked(track.id);
    //         return track;
    //     }));
    // }, []);

    /////// SERVER VERSION ///////

    const [trackList, updateTrackList] = useState([]);
    const [favouritesList, updateFavouritesList] = useState([]);

    const isLiked = (trackId) => {
        return favouritesList.findIndex(track => track.id === trackId) !== -1;
    }


    useEffect(() => {
        // axios.post('192.168.1.33:8080/tracks/',0).then(response => {trackList = response.data});
        axios.get('http://localhost:8080/tracks')
            .then(response => {
                // debugger
                updateTrackList(response.data);
            });
    }, []);

    useEffect(() => {
        updateTrackList(trackList.map(track => {
            track.isLiked = isLiked(track.id);
            return track;
        }));

    }, []);

    const currencyRates = {'USD': 1, 'EUR': 0.86, 'RUB': 79.3};

    const addToFavouritesList = (track) => {
        updateFavouritesList([track].concat(favouritesList));
    }

    const removeFromFavouritesList = (trackId) => {
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
                                   <TrackList trackList={trackList}
                                              currencyRates={currencyRates}
                                              addToFavouritesList={track => addToFavouritesList(track)}
                                              removeFromFavouritesList={trackId => removeFromFavouritesList(trackId)}/>
                               }
                        />
                        <Route path='/favorites'
                               render={() => favouritesList.length !== 0 ?
                                   <TrackList trackList={favouritesList}
                                              currencyRates={currencyRates}
                                              addToFavouritesList={track => addToFavouritesList(track)}
                                              removeFromFavouritesList={trackId => removeFromFavouritesList(trackId)}/> :
                                   <NoFavouritesPage/>
                               }
                        />
                        <Route exact path='/tracks/:id'
                               render={() =>
                                   <Track/>
                               }/>
                    </div>
                </div>
            </div>
        </BrowserRouter>
    );
}

export default App;
