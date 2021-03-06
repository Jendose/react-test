import React from 'react';
import '../styles/TrackListElement.css';
import LikeButton from "./LikeButton";
import {NavLink} from "react-router-dom";

class TrackListElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            id: props.id,
            isLiked: false,
            currency: props.currency,
            status: props.status,
            statusText: (props.status === 'ONSALE' ? 'On sale' : props.status === 'SOLD' ? 'Sold' : 'Undefined')
        }
    }

    track = {
        id: this.props.id,
        name: this.props.name,
        artist: this.props.artist,
        label: this.props.label,
        platform: this.props.platform,
        genres: this.props.genres,
        bpm: this.props.bpm,
        key_: this.props.key_,
        daw: this.props.daw,
        duration: this.props.duration,
        price: this.props.price,
        currency: this.props.currency,
        dateCreated: this.props.dateCreated,
        dateSold: this.props.dateSold,
        status: this.props.status,
        coverImage: this.props.coverImage,
        isLiked: true
    }

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

    toHMS = (minutesNumber) => {
        let sec_num = parseInt(minutesNumber, 10); // don't forget the second param
        let hours = Math.floor(sec_num / 3600);
        let minutes = Math.floor((sec_num - (hours * 3600)) / 60);
        let seconds = sec_num - (hours * 3600) - (minutes * 60);

        if (hours < 10) {
            hours = "0" + hours;
        }
        if (minutes < 10) {
            minutes = "0" + minutes;
        }
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        if (hours == 0) return minutes + ':' + seconds;
        else return hours + ':' + minutes + ':' + seconds;
    }

    coverImageStyle = {
        backgroundImage: "url(" + this.props.coverImage + ")"
    }

    updateLike = (booleanValue) => {
        this.setState(
            {isLiked: booleanValue},
            () => {
                this.state.isLiked ?
                    this.props.addToFavouritesList(this.track) :
                    this.props.removeFromFavouritesList(this.state.id)
            });
    }

    render() {
        return (
            <div>
                <div className={this.state.status === "ONSALE" ? "card" : "card--red"}>
                    <div className="card__info--buy">
                        {this.props.price != null ?
                            <div className="info--buy__price">
                                {this.props.price + " "}{this.props.currency}
                                {/*{this.convertCurrency(this.props.price, this.props.currency, this.props.currencyTarget, this.props.currencyRates)}*/}
                            </div> : <div className="info--buy__price"> —</div>}
                        <div className="info--buy__status">{this.state.statusText}</div>
                    </div>
                    <div className="card__info">
                        <div className="info__title">
                            {this.props.name != null ? <NavLink to={'/tracks/' + this.props.id}
                                                                className="title-element">{this.props.name}</NavLink> :
                                <div className="text-block"> —</div>}
                            {this.props.artist != null && <div className="title-wrapper">
                                <div className="text-block">by</div>
                                <div className="title-element">{this.props.artist}</div>
                            </div>}
                        </div>
                        <div className="info__body">
                            <div className="info__listen">
                                <div className="info__cover-image-wrapper">
                                    <div className="info__cover-image" style={this.coverImageStyle}/>
                                </div>
                                {this.props.duration != null ?
                                    <div className="text-block--time">{this.toHMS(this.props.duration)}</div> :
                                    <div className="text-block"> —</div>}
                            </div>
                            <div className="info__properties">
                                {/*<div className={this.state.isLiked?"lll":"nnn"}>TEST</div>*/}
                                <div className="properties__row">
                                    <div className="properties__cell">
                                        <div className="text-block">BPM:</div>
                                        {this.props.bpm != null ?
                                            <div className="properties-element">{this.props.bpm}</div> :
                                            <div className="text-block"> —</div>}
                                    </div>
                                    <div className="properties__cell">
                                        <div className="text-block">Key:</div>
                                        {this.props.key_ != null ?
                                            <div className="properties-element">{this.props.key_}</div> :
                                            <div className="text-block"> —</div>}
                                    </div>
                                    <div className="properties__cell">
                                        <div className="text-block">DAW:</div>
                                        {this.props.daw != null ?
                                            <div className="properties-element">{this.props.daw}</div> :
                                            <div className="text-block"> —</div>}
                                    </div>
                                </div>
                                <div className="properties__row">
                                    <div
                                        className="text-block">{this.props.genres && this.props.genres.length > 1 ? "Genres:" : "Genre:"}</div>
                                    <div className="properties__cell--genre">
                                        {this.props.genres && this.props.genres.map((genre) => {
                                            return <div key_={genre.id} className="properties-element">{genre}</div>
                                        })}
                                    </div>
                                </div>
                                <div className="properties__row">
                                    <div className="properties__cell">
                                        <div className="text-block">Label:</div>
                                        {this.props.label != null ?
                                            <div className="title-element--small">{this.props.label}</div> :
                                            <div className="text-block"> —</div>}
                                    </div>
                                    <div className="properties__cell">
                                        <div className="text-block">Platform:</div>
                                        {this.props.platform != null ?
                                            <div className="title-element--small">{this.props.platform}</div> :
                                            <div className="text-block"> —</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LikeButton isLiked={this.props.isLiked} updateLike={booleanValue => this.updateLike(booleanValue)}/>
                </div>
            </div>
        )
    }
}

export default TrackListElement