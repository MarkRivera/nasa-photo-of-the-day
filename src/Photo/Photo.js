import React from 'react';
import './Photo.css';

function Photo(props) {
    return (
        <section className="photo-container">
            <img src={props.src} alt={props.alt} className="nasa-photo"/>
            <h2 className="photo-title">{props.title}</h2>
        </section>
    )
}

export default Photo;