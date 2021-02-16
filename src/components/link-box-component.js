import React, { useState } from 'react';
import ReactDOM from 'react-dom';
import { generateBacklink } from '../utils/backlink-generator';
import BacklinkDisplayBoard from './backlink-display-board';
import './link-box-component.css';
import AboutComponent from './about-component';

const LinkBoxComponent = () => {

    const [backlinks, setBacklinks] = useState([]);
    const handleSubmit = (event) => {
        event.preventDefault();
        const data = new FormData(event.target);
        setBacklinks(generateBacklink(data.get('url')));
    }

    const title = 'Youtube Backlink Generator';
    const label = 'Enter the Youtube Video Link :';
    return (
        <div className="backlink-wrapper">
            <div className="link-box-component">
                <div className="title"> {title} </div>
                <form onSubmit={handleSubmit}>
                    <div className="button-label"> {label} </div>
                    <input className="input-button" id="url" name="url" type="text" />

                    <button className="button">Submit</button>
                </form>
            </div>
            
            <BacklinkDisplayBoard backlinks={backlinks}/>
            <AboutComponent/>
        </div>
    );
}

export default LinkBoxComponent;