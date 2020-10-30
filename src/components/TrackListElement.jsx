import React from 'react';
import '../styles/TrackListElement.css';
import LikeButton from "./LikeButton";

class TrackListElement extends React.Component {

    constructor(props) {
        super(props);
        this.state = {};
        this.state.isLiked = false;
        switch (props.status) {
            case "ONSALE": this.state.status = "ONSALE"; this.state.statusText = "On sale"; break;
            case "SOLD": this.state.status = "SOLD"; this.state.statusText = "Sold"; break;
            default: this.state.status = "UNDEFINED"; this.state.statusText = "Undefined"; break;
        }
        // switch (props.currency) {
        //     case "EUR": this.state.currency = "EUR"; break;
        //     case "RUB": this.state.currency = "RUB"; break;
        //     default: this.state.currency = "USD"; break;
        // }
    }

    convertCurrency = (value, currency1, currency2, rates) => {
        let z = 0;
        if (currency1===currency2){
            return value + " " + rates[currency2.key];
        }
        else if (currency1!=='USD'){
            z = value*rates[currency1.value];
            return  Math.ceil((z/rates[currency2.value])*100)/100 + " " + rates[currency2.key];
        }
        else {
            return Math.ceil((value*rates[currency2.value])*100)/100 + " " + rates[currency2.key];
        }
    }

    updateData = (value) => {
        this.setState.isLiked = value;
    }

    coverImageStyle = {
        backgroundImage: "url(" + this.props.coverImage + ")"
    }

    render() {
        return (
            <div>
                <div className={this.state.status === "ONSALE"?"card":"card--red"}>
                    <div className="card__info--buy">
                        {this.props.price!=null?
                            <div className="info--buy__price">
                                {this.props.price + " "}{this.props.currency}
                                {/*{this.convertCurrency(this.props.price, this.props.currency, this.props.currencyTarget, this.props.currencyRates)}*/}
                            </div>:<div className="info--buy__price"> —</div>}
                        <div className="info--buy__status">{this.state.statusText}</div>
                    </div>
                    <div className="card__info">
                        <div className="info__title">
                            {this.props.name!=null?<div className="title-element">{this.props.name}</div>:<div className="text-block"> —</div>}
                            {this.props.artist!=null && <div className="title-wrapper"><div className="text-block">by</div><div className="title-element">{this.props.artist}</div></div>}
                        </div>
                        <div className="info__body">
                            <div className="info__listen">
                                <div className="info__cover-image-wrapper">
                                    <div className="info__cover-image" style={this.coverImageStyle}/>
                                </div>
                                {this.props.duration!=null?<div className="text-block--time">{Math.floor(this.props.duration/60)+":"+this.props.duration%60}</div>:<div className="text-block"> —</div>}
                            </div>
                            <div className="info__properties">
                                {/*<div className={this.state.isLiked?"lll":"nnn"}>TEST</div>*/}
                                <div className="properties__row">
                                    <div className="properties__cell">
                                        <div className="text-block">BPM:</div>
                                        {this.props.bpm!=null?<div className="properties-element">{this.props.bpm}</div>:<div className="text-block"> —</div>}
                                    </div>
                                    <div className="properties__cell">
                                        <div className="text-block">Key:</div>
                                        {this.props.key_!=null?<div className="properties-element">{this.props.key_}</div>:<div className="text-block"> —</div>}
                                    </div>
                                    <div className="properties__cell">
                                        <div className="text-block">DAW:</div>
                                        {this.props.daw!=null?<div className="properties-element">{this.props.daw}</div>:<div className="text-block"> —</div>}
                                    </div>
                                </div>
                                <div className="properties__row">
                                    <div className="text-block">{this.props.genres && this.props.genres.length>1?"Genres:":"Genre:"}</div>
                                    <div className="properties__cell--genre">
                                        {this.props.genres && this.props.genres.map((genre) => {
                                            return <div key={genre.id} className="properties-element">{genre}</div>
                                        })}
                                    </div>
                                </div>
                                <div className="properties__row">
                                    <div className="properties__cell">
                                        <div className="text-block">Label:</div>
                                        {this.props.label!=null?<div className="title-element--small">{this.props.label}</div>:<div className="text-block"> —</div>}
                                    </div>
                                    <div className="properties__cell">
                                        <div className="text-block">Platform:</div>
                                        {this.props.platform!=null?<div className="title-element--small">{this.props.platform}</div>:<div className="text-block"> —</div>}
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <LikeButton isLiked={this.state.isLiked} updateData={this.updateData}
                                onClick={() => this.changeState()}/>
                </div>
            </div>
        )
    }
}

export default TrackListElement