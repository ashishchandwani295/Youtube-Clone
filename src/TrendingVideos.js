import React, { useEffect } from 'react';
import { useDatalayerValue } from './Datalayer';
import { getTrendingVideos } from './api/youtubeAPI';
import VideoCard from './VideoCard';
import './TrendingVideos.css';

function TrendingVideos() {

    const [{ trendingVideos }, dispatch] = useDatalayerValue();
    console.log(trendingVideos)

    useEffect(() => {
        getTrendingVideos()
        .then(response => {
            dispatch({
                type: 'SET_TRENDING_VIDEOS',
                trendingVideos :  response
            })
        })
        .catch(err => console.log(err))
    }, [])

    return (
        <div className="trendingvideos">
            { trendingVideos?.items?.map((item, index) => {
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
    )
}

export default TrendingVideos;
