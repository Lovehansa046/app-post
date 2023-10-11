import React from 'react';

import './app-header.css'

const AppHeader = ({ liked, allPosts }) => {
    return (
        <div className='app-header d-flex'>
            <h1> Artjom Plotnikov </h1>
            <h2>TO DO</h2>
        </div>
    )
}

export default AppHeader;