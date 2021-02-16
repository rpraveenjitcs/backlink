import React from 'react';
import './banner-component.css';
import banner1 from '../images/banner1.png'; // with import


function BannerComponent(props) {

    return (

        <div class="banner-wrapper">
           <img className="logo" src={banner1}/>
           <div className="org-name"> <h1>Page one Profits </h1> </div>
            </div>
    )
}

export default BannerComponent;