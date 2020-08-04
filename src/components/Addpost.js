import React, { Component } from 'react';
import './Addpost.css';

function Addpost(props) {
    return (
        <div class="Post">
            <label class="form-label" for="post">Create Post</label>
            <textarea placeholder="Create Post" rows="3" type="text" id="post" class="form-control"></textarea>

        </div>


    )
}

export default Addpost;