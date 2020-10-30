import React, {useState} from 'react';
import './App.css';
import Header from "./components/Header";
import TrackListElement from "./components/TrackListElement";

const App = () => {
    const [favouritesList, updateFavouritesList] = useState([]);

    const updateData = (track) => {
        updateFavouritesList(favouritesList.concat([track]));
    }

    const rates={'USD':1,'EUR':0.86,'RUB':79.3};

    return (
        <div className="wrapper">
            <Header/>
            <div className='content'>
                <div className="container">
                    <div className="tracklist">
                        <TrackListElement
                            updateData={updateData}
                            currencyRates={rates}
                            currency="USD"
                            currencyTarget="RUB"
                            price={199}
                            status="ONSALE"
                            name="Qwertyuiop 1234567890"
                            artist="Flume"
                            label="Future Classic"
                            platform="Tracks For Aslanbeks"
                            genres={["Midtempo", "Dubstep"]}
                            bpm={120}
                            key_="A#"
                            daw="FL Studio"
                            duration={191}
                            coverImage="https://avatars.mds.yandex.net/get-pdb/2797093/7f679526-0905-46e3-a11c-028489d4eb91/s1200"
                        />
                        <TrackListElement
                            updateData={updateData}
                            currencyRates={rates}
                            currency="RUB"
                            currencyTarget="RUB"
                            price={20000}
                            status="SOLD"
                            name="Difficulties"
                            artist="Jendose"
                            label="Future Classic"
                            platform="Beatgun"
                            genres={["Future Bass"]}
                            bpm={120}
                            key_="A#"
                            daw="Ableton Live"
                            duration={212}
                            coverImage="https://avatars.mds.yandex.net/get-pdb/2748645/d2cb72e5-acf1-4450-a225-fd7f92f5f2dc/s1200"
                        />
                        <TrackListElement
                            updateData={updateData}
                            currencyRates={rates}
                            currency="EUR"
                            currencyTarget="RUB"
                            price={50}
                            status="ONSALE"
                            name="Death"
                            platform="House of Tracks"
                            label="Future Classic"
                            platform="Beatgun"
                            genres={["Drum'n'bass", "Dubstep", "Neurofunk","Glitch"]}
                            bpm={120}
                            key_="A#"
                            daw="Ableton Live"
                            duration={304}
                            coverImage="https://avatars.mds.yandex.net/get-pdb/2730788/8cbceaec-d06e-483f-af00-33fdba2bbfe5/s1200"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;
