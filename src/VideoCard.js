import { Avatar } from '@material-ui/core';
import React from 'react';
import './VideoCard.css';

function VideoCard( {thumbnail, title, channel, views, days } ) {


    const currentDate = new Date();
    const publishedDate = new Date(days);

    const dateDiff = (publishedDate, currentDate) => {
        
        const diff = Math.floor(
            (Date.UTC(currentDate.getFullYear(), currentDate.getMonth(), currentDate.getDate()) - 
            Date.UTC(publishedDate.getFullYear(), publishedDate.getMonth(), publishedDate.getDate()) ) /(1000 * 60 * 60 * 24))

        if(diff <= 1) {
            return diff + " day ago"
        } else if (1 < diff < 31) {
            return (diff + " days ago")
        } else if ( 31 < diff < 365 ) {
            return (diff/30 + " months ago")
        } else if ( 365 < diff < 1000000 ){
            return ( Math.ceil(diff/365) + " years ago")
        }   
        
    }
    return (
        <div className="videocard">
                <div className="videocard__thumbnail">
                    <img src={thumbnail} alt="" width="270px" height="140px" />
                </div>
                <div className="videocard__info">
                    {/* <Avatar src="" alt="" className="videocard__avatar"/>  */}
                    <div className="videocard__details">
                        <div className="videocard__title">
                            <h2>{title}</h2>
                        </div>
                        <h4>{channel}</h4>
                        <div className="videocard__stats">
                            { views && <h4>{ (views/1000000).toFixed(1) + "M views" + " • "}</h4>}
                            <h4>{dateDiff(publishedDate, currentDate)}</h4>
                        </div>
                    </div>
                </div>
        </div>
    )
}

export default VideoCard;
