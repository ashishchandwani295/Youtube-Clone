import React from 'react'
import { useDatalayerValue } from './Datalayer';
import VideoCard from './VideoCard';
import './SearchPage.css';

function SearchPage() {

    const [{searchData}] = useDatalayerValue();

    return (
        <div className="searchpage">
            { searchData?.items?.map((item, index) => {
                return (
                <div key={index} className="searchpage__videocard">
                    <VideoCard  
                    thumbnail={item.snippet.thumbnails.medium.url}
                    title={item.snippet.title}
                    channel={item.snippet.channelTitle}
                    views={item.statistics?.viewCount}
                    days={item.snippet.publishedAt}
                    />
                </div>
            )})}
        </div>
    )
}

export default SearchPage
