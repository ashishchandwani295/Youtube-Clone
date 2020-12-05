import React, { useEffect } from 'react';
import { useDatalayerValue } from './Datalayer';
import { getHomeVideos } from './api/youtubeAPI';
import { getChannelLogo } from './api/youtubeAPI';
import VideoCard from './VideoCard';
import './VideoPlayer.css';

function VideoPlayer() {

    const [{ homeData, channelData }, dispatch] = useDatalayerValue();

    useEffect(() => {
        getHomeVideos()
        .then(response => {
            dispatch({
                type: 'SET_HOME_VIDEOS',
                homeData :  response
            })
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="videoplayer">
            <div className="videoplayer__container">
            { homeData?.items?.map((item, index) => {
                
                return (
                    <VideoCard 
                    key={index}
                    thumbnail={item.snippet.thumbnails.medium.url}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    views={item.statistics?.viewCount}
                    days={item.snippet.publishedAt}
                    />
                )
            })
            }
            </div>
        </div>
    )
}

export default VideoPlayer
