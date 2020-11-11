import React from 'react';
import '../styles/TrackListElement.css';
import LikeButton from "./LikeButton/LikeButton";
import {NavLink} from "react-router-dom";
import {Track} from "../types/Track";

type Props = {
    track: Track;
    currencyTarget: string;
    currencyRates: Map<string, number>;
    addToFavouritesList: (track: Track) => void;
    removeFromFavouritesList: (trackId: number) => void;
}

type State = {
    id: number;
    isLiked: boolean;
    status: string | null;
    statusText: string; // TODO: make a enum Status and store text values there
}

class TrackListElement extends React.Component<Props, State> {

    state = {
            id: this.props.track.id,
            isLiked: false,
            status: this.props.track.status,
            statusText: (this.props.track.status === 'ONSALE' ? 'On sale' : this.props.track.status === 'SOLD' ? 'Sold' : 'Undefined')
    }

    // track : Track = {
    //     id: this.props.id,
    //     name: this.props.name,
    //     artist: this.props.artist,
    //     label: this.props.label,
    //     platform: this.props.platform,
    //     genres: this.props.genres,
    //     bpm: this.props.bpm,
    //     key_: this.props.key_,
    //     daw: this.props.daw,
    //     duration: this.props.duration,
    //     price: this.props.price,
    //     currency: this.props.currency,
    //     dateCreated: this.props.dateCreated,
    //     dateSold: this.props.dateSold,
    //     status: this.props.status,
    //     coverImage: this.props.coverImage,
    //     isLiked: true
    // }

    // convertCurrency = (value, currency1, currency2, rates) => {
    //     let z = 0;
    //     if (currency1===currency2){
    //         return value + " " + rates[currency2.key];
    //     }
    //     else if (currency1!=='USD'){
    //         z = value*rates[currency1.value];
    //         return  Math.ceil((z/rates[currency2.value])*100)/100 + " " + rates[currency2.key];
    //     }
    //     else {
    //         return Math.ceil((value*rates[currency2.value])*100)/100 + " " + rates[currency2.key];
    //     }
    // }

    toHMS = (secondsNumber: number) => {
        let hours: number | string = Math.floor(secondsNumber / 3600);
        let minutes: number | string = Math.floor((secondsNumber - (hours * 3600)) / 60);
        let seconds: number | string = secondsNumber - (hours * 3600) - (minutes * 60);

        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (hours !== 0){
            if (minutes < 10) {
                minutes = "0" + minutes;
            }
            return hours + ':' + minutes + ':' + seconds;
        }
        else return minutes + ':' + seconds;
    }

    coverImageStyle = {
        backgroundImage: "url(" + this.props.track.coverImage + ")"
    }

    updateLike = (value: boolean) => {
        this.setState(
            {isLiked: value},
            () => {
                this.state.isLiked ?
                    this.props.addToFavouritesList(this.props.track) :
                    this.props.removeFromFavouritesList(this.state.id)
            });
    }

    render() {
        return (
            <div>
                <div className={this.state.status === "ONSALE" ? "card" : "card--red"}>
                    <div className="card__info--buy">
                        {this.props.track.price != null ?
                            <div className="info--buy__price">
                                {this.props.track.price + " "}{this.props.track.currency}
                                {/*{this.convertCurrency(this.props.price, this.props.currency, this.props.currencyTarget, this.props.currencyRates)}*/}
                            </div> : <div className="info--buy__price"> —</div>}
                        <div className="info--buy__status">{this.state.statusText}</div>
                    </div>
                    <div className="card__info">
                        <div className="info__title">
                            {this.props.track.name != null ? <NavLink to={'/tracks/' + this.props.track.id}
                                                                className="title-element">{this.props.track.name}</NavLink> :
                                <div className="text-block"> —</div>}
                            {this.props.track.artist != null && <div className="title-wrapper">
                                <div className="text-block">by</div>
                                <div className="title-element">{this.props.track.artist}</div>
                            </div>}
                        </div>
                        <div className="info__body">
                            <div className="info__listen">
                                <div className="info__cover-image-wrapper">
                                    <div className="info__cover-image" style={this.coverImageStyle}/>
                                </div>
                                {this.props.track.duration != null ?
                                    <div className="text-block--time">{this.toHMS(this.props.track.duration)}</div> :
                                    <div className="text-block"> —</div>}
                            </div>
                            <div className="info__properties">
                                {/*<div className={this.state.isLiked?"lll":"nnn"}>TEST</div>*/}
                                <div className="properties__row">
                                    <div className="properties__cell">
                                        <div className="text-block">BPM:</div>
                                        {this.props.track.bpm != null ?
                                            <div className="properties-element">{this.props.track.bpm}</div> :
                                            <div className="text-block"> —</div>}
                                    </div>
                                    <div className="properties__cell">
                                        <div className="text-block">Key:</div>
                                        {this.props.track.key_ != null ?
                                            <div className="properties-element">{this.props.track.key_}</div> :
                                            <div className="text-block"> —</div>}
                                    </div>
                                    <div className="properties__cell">
                                        <div className="text-block">DAW:</div>
                                        {this.props.track.daw != null ?
                                            <div className="properties-element">{this.props.track.daw}</div> :
                                            <div className="text-block"> —</div>}
                                    </div>
                                </div>
                                <div className="properties__row">
                                    <div
                                        className="text-block">{this.props.track.genres && this.props.track.genres.length > 1 ? "Genres:" : "Genre:"}</div>
                                    <div className="properties__cell--genre">
                                        {this.props.track.genres && this.props.track.genres.map((genre) => {
                                            return <div /*key={genre.id}*/ className="properties-element">{genre}</div>
                                        })}
                                    </div>
                                </div>
                                <div className="properties__row">
                                    <div className="properties__cell">
                                        <div className="text-block">Label:</div>
                                        {this.props.track.label != null ?
                                            <div className="title-element--small">{this.props.track.label}</div> :
                                            <div className="text-block"> —</div>}
                                    </div>
                                    <div className="properties__cell">
                                        <div className="text-block">Platform:</div>
                                        {this.props.track.platform != null ?
                                            <div className="title-element--small">{this.props.track.platform}</div> :
                                            <div className="text-block"> —</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LikeButton isLiked={this.state.isLiked} shape="right-side" updateLike={booleanValue => this.updateLike(booleanValue)}/>
                </div>
            </div>
        )
    }
}

export default TrackListElement