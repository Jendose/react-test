import React from 'react';
import App from "./App";

class Test extends React.Component{

    text1 = "Добавить";
    text2 = "Удалить";
    cur = 1;

    constructor() {
        super();
        this.state = {text: "Добавить"};
    }
    changeState(){
        if(this.cur == 1){
            this.setState({text: "Удалить"});
            this.cur = 2;
        }
        else if (this.cur == 2){
            this.setState({text: "Добавить"});
            this.cur = 1;
        }
    }
    render() {
        return(
            <div>
                <button type="button" onClick = {this.changeState.bind (this)}><h3>{this.state.text}</h3></button>
            </div>
        )
    }
}

export default Test;