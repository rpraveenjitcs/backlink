import React, { useState } from 'react';
import { ABOUT_TITLE, ABOUT_CONTENT } from '../utils/constants';
import './about-component.css';

const AboutComponent = () => {

    return (
        <div className="about-wrapper">
            <p className="about-title">
                {ABOUT_TITLE}
            </p>
            <p className="about-content">
                {ABOUT_CONTENT}
            </p>
        </div>
    );
}

export default AboutComponent;