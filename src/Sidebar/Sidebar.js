import React from 'react';
import './Sidebar.css';

function Sidebar (props) {
    return (
        <section className="sidebar">
            <div className="photo-info">
                <h2>{props.title}</h2>
                <p>{props.desc}</p>
            </div>
        </section>
    )
}

export default Sidebar;