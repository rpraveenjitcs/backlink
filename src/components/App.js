
import React from 'react';
import ReactDOM from 'react-dom';
import LinkBoxComponent from './link-box-component';
import BannerComponent from './banner-component';
import './App.css';

export const App = () => {
    return (
      <div className="App-container">
        <div className="App">
        <BannerComponent/>
        <LinkBoxComponent className="App-header"/>
        </div>
      </div>
    );
}
