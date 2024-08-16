import React from 'react';
import './SingleVideo.css';

function SingleVideo() {
    return (
        <div className="video__player--container">
            <h1 className="video__player--head">30- day Language Learning | Advantages | Learn English-Tamil</h1>
            <div className="video__embed-container">
                <iframe
                    className="video__player"
                    src="https://drive.google.com/file/d/1EYzJGOjB-GgxGPZ06sc1FroMUGzWaeGN/preview"
                    allowFullScreen
                ></iframe>
            </div>
        </div>
    );
}

export default SingleVideo;
