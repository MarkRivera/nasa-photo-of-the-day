import React from 'react';
import './Sidebar.css';

function Sidebar (props) {
    return (
        <section className="sidebar">
            <h1 className="title">NASA's Photo of The Day</h1>
            <div className="photo-info">
                <p className="photo-description">{props.desc}</p>
            </div>
        </section>
    )
}

export default Sidebar;