import React from 'react';
import './App.css';
import Header from "./components/Header";
import TrackList from "./components/TrackList";
import Track from "./components/Track";
import PropTypes from 'prop-types'
import {BrowserRouter, Route} from "react-router-dom";
import NoFavouritesPage from "./components/NoFavouritesPage/NoFavouritesPage";
import axios from "axios";

class App extends React.Component {

    /////// HARDCODED VERSION ///////

    // state = {
    //         favouritesList: [],
    //         trackList: [
    //             {
    //                 id: 1,
    //                 name: "Quirkyuiop",
    //                 artist: "Flume",
    //                 label: "Future Classic",
    //                 platform: "Tracks For Aslanbeks",
    //                 genres: ["Flumestep", "Pop"],
    //                 bpm: 120,
    //                 key_: "C",
    //                 daw: "FL Studio",
    //                 duration: 191,
    //                 price: 199,
    //                 currency: "USD",
    //                 dateCreated: new Date(),
    //                 dateSold: new Date(),
    //                 status: "ONSALE",
    //                 coverImage: "https://avatars.mds.yandex.net/get-pdb/2797093/7f679526-0905-46e3-a11c-028489d4eb91/s1200",
    //                 isLiked: false
    //             },
    //             {
    //                 id: 2,
    //                 name: "Learning React",
    //                 artist: "Jendose",
    //                 label: "Future Classic",
    //                 platform: "Beatgun",
    //                 genres: ["Future Bass"],
    //                 bpm: 135,
    //                 key_: "D",
    //                 daw: "Ableton Live",
    //                 duration: 191,
    //                 price: 199,
    //                 currency: "USD",
    //                 dateCreated: new Date(),
    //                 dateSold: new Date(),
    //                 status: "SOLD",
    //                 coverImage: "https://avatars.mds.yandex.net/get-pdb/2848662/0824dd1a-09c2-4432-9005-b75196dd9b5d/s1200",
    //                 isLiked: false
    //             },
    //             {
    //                 id: 3,
    //                 name: "Innovation",
    //                 artist: "Eisencore",
    //                 label: "Monstercat",
    //                 platform: "House of Tracks",
    //                 genres: ["Drum'n'bass", "Neurofunk", "Dubstep", "Drumstep", "Hardstyle"],
    //                 bpm: 160,
    //                 key_: "Am",
    //                 daw: "Studio One",
    //                 duration: 191,
    //                 price: 199,
    //                 currency: "USD",
    //                 dateCreated: new Date(),
    //                 dateSold: new Date(),
    //                 status: "ONSALE",
    //                 coverImage: "https://avatars.mds.yandex.net/get-pdb/2884150/6ae36f98-bd6d-4b0e-b837-15bddc7bf558/s1200",
    //                 isLiked: false
    //             }
    //         ],
    //         currencyRates: {'USD': 1, 'EUR': 0.86, 'RUB': 79.3}
    // };
    //
    // isLiked = (trackId) => {
    //     // return this.state.favouritesList != null ?
    //     //     this.state.favouritesList.findIndex(track => track.id === trackId) !== -1 :
    //     //     false;
    //     return this.state.favouritesList.findIndex(track => track.id === trackId) !== -1;
    // }
    //
    // componentDidMount() {
    //     // this.setState({trackList: this.state.favouritesList.map(track => track.isLiked = this.isLiked(track.id))});
    //     let changedTrackList = [];
    //         for (let i = 0; i < this.state.trackList.length; i++) {
    //             let changedTrack = this.state.trackList[i];
    //             changedTrack.isLiked = this.isLiked(changedTrack.id);
    //             changedTrackList.push(changedTrack);
    //         }
    //         this.setState({trackList: changedTrackList});
    // }

    /////// SERVER VERSION ///////

    state = {
        favouritesList: [],
        trackList: [],
        currencyRates: {'USD': 1, 'EUR': 0.86, 'RUB': 79.3}
    };

    async componentDidMount() {
        // axios.post('http://localhost:8080/tracks-post',{option: 0}).then(response => {this.setState({trackList: response.data})});
        axios.get('http://localhost:8080/tracks')
            .then(response => {
                // debugger
                this.setState({trackList: response.data})
            });

        // this.setState({trackList: this.state.favouritesList.map(track => track.isLiked = this.isLiked(track.id))});

        // let changedTrackList = [];
        // for (let i = 0; i < this.state.trackList.length; i++) {
        //     let changedTrack = this.state.trackList[i];
        //     changedTrack.isLiked = this.isLiked(changedTrack.id);
        //     changedTrackList.push(changedTrack);
        // }
        // this.setState({trackList: changedTrackList});
    }

    //--------------------------------------------------

    addToFavouritesList = (track) => {
        this.setState({favouritesList: [track].concat(this.state.favouritesList)});
    }

    removeFromFavouritesList = (trackId) => {
        this.setState({favouritesList: this.state.favouritesList.filter(track => track.id !== trackId)});
    }


    render() {
        return (
            <BrowserRouter>
                <div className="wrapper">
                    <Header/>
                    <div className='content'>
                        <div className="container">
                            <Route exact path='/tracks'
                                   render={() =>
                                       <TrackList trackList={this.state.trackList}
                                                  currencyRates={this.state.currencyRates}
                                                  addToFavouritesList={track => this.addToFavouritesList(track)}
                                                  removeFromFavouritesList={trackId => this.removeFromFavouritesList(trackId)}/>
                                   }
                            />
                            <Route path='/favorites'
                                   render={() => this.state.favouritesList.length !== 0 ?
                                       <TrackList trackList={this.state.favouritesList}
                                                  currencyRates={this.state.currencyRates}
                                                  addToFavouritesList={track => this.addToFavouritesList(track)}
                                                  removeFromFavouritesList={trackId => this.removeFromFavouritesList(trackId)}/> :
                                       <NoFavouritesPage/>
                                   }
                            />
                            <Route exact path='/tracks/:id'
                                   render={() =>
                                       <Track/>
                                   }
                            />
                        </div>
                    </div>
                </div>
            </BrowserRouter>
        );
    }

}

export default App;
