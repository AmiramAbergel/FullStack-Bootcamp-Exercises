import React, { useRef } from 'react';

const src = 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4';

const VideoPlayerManager = () => {
    const videoRef = useRef();

    const videoHandler = async (event) => {
        const input = event.target;
        console.dir(input);
        await videoRef;
        const videoControl = videoRef.current;
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
