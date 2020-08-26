import React, { useState,useRef } from 'react';
import './VideoCard.css';
import VideoHeader from './VideoHeader';

function VideoCard() {
    const [isVideoPlaying, setIsVideoPlaying] = 
    useState(false);
    const videoRef = useRef(null);

    const onVideoPress = () => {
        if (isVideoPlaying) {
            //stop
            videoRef.current.pause();
            setIsVideoPlaying(false)
        } else {
            //play
            videoRef.current.play();
            setIsVideoPlaying(true)
        }

    }
    //useRef
    return (
        <div className="videoCard">
            <VideoHeader />
            <video
            ref={videoRef}
            onClick={onVideoPress}
            className="videoCard__player"
            src="https://d14pr3cu5atb0x.cloudfront.net/cms/Instagram-video-editor-for-making-a-video-for-instagram-cc83b2b5fe.mp4"
            alt="IG reel video"
            loop={true}
            />
            <VideoFooter/>
        </div>
    )
}

export default VideoCard
