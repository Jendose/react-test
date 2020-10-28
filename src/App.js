import React from 'react';
import './App.css';
import Header from "./components/Header";
import LikeButton from "./components/LikeButton";

function App() {
    return (
        <div className="wrapper">
            <Header/>
            <div className='content'>
                <div className="container">
                    <LikeButton/>
                </div>
            </div>
        </div>
    );
}

export default App;
