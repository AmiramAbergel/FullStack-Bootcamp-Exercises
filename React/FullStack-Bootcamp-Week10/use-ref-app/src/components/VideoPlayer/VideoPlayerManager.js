import React from 'react';

const src = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4';

const VideoPlayerManager = () => {
    return (
        <div>
            <video width='50%'>
                <source src={src} type='video/mp4' />
                Sorry, your browser doesn't support videos.
            </video>
            <p>
                <button>Play</button>
                <button>Pause</button>
            </p>
        </div>
    );
};

export default VideoPlayerManager;
