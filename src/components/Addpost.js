import React, { Component } from 'react';
import './Addpost.css';

function Addpost(props) {
    return (
        <div className="Post">
            <label className="form-label" for="post">Create Post</label>
            <textarea placeholder="Share your positive tought" rows="3" type="text" id="post" className="form-control"></textarea>

        </div>


    )
}

export default Addpost;