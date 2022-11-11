import React, { useRef } from 'react';

const src = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4';

const VideoPlayerManager = () => {
    const videoRef = useRef();

    const videoHandler = (event) => {
        const input = event.target;
        console.dir(input);
        const v = videoRef;
        const videoControl = videoRef.current;
        console.dir(v);
        console.dir(videoControl);
        if (input.id === 'pause') {
            videoControl.pause();
        } else {
            videoControl.play();
        }
    };
    return (
        <div>
            <video ref={videoRef} width='50%'>
                <source src={src} type='video/mp4' />
                Sorry, your browser doesn't support videos.
            </video>
            <p>
                <button onClick={videoHandler} id='play'>
                    Play
                </button>
                <button onClick={videoHandler} id='pause'>
                    Pause
                </button>
            </p>
        </div>
    );
};

export default VideoPlayerManager;
