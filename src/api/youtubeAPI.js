const youtube_API_Key = "AIzaSyAu6KcQ4lwLobUNuFVSkktCk_i2Chjda3I";
const youtubeSearchEndPoint = "https://www.googleapis.com/youtube/v3/search";
const youtubeHomeEndPoint = "https://www.googleapis.com/youtube/v3/videos";
const youtubeChannelsEndPoint = 'https://www.googleapis.com/youtube/v3/channels';
var maxResults = 3;
 
// search item to come directly from the search bar and handled in q

export const getSearchVideos = (search) => {
    return fetch(`${youtubeSearchEndPoint}?part=snippet&maxResults=${maxResults}&q=${search}&key=${youtube_API_Key}`)
           .then(response => response.json())
           .catch(err => console.log(err));
}

export const getHomeVideos = () => {
    return fetch(`${youtubeHomeEndPoint}?part=snippet&part=statistics&chart=mostPopular&maxResults=${maxResults}&key=${youtube_API_Key}`)
           .then(response => response.json())
           .catch(err => console.log(err))
}


export const getTrendingVideos = () => {
    return fetch(`${youtubeHomeEndPoint}?part=snippet&part=statistics&chart=mostPopular&maxResults=${maxResults}&regionCode=IN&key=${youtube_API_Key}`)
           .then(response => response.json())
           .catch(err => console.log(err))
}

export const getChannelDetails = (channelId) => {
    return fetch(`${youtubeChannelsEndPoint}?part=snippet&id=${channelId}&maxResults=${maxResults}&key=${youtube_API_Key}`)
           .then(response => response.json())
           .catch(err => console.log(err))
}

export const getChannelLogo = (channelId) => {
    let channelLogo = []

    getChannelDetails(channelId)
    .then(response => (
        console.log(response)
        // channelLogo.push( response.items[0].snippet.thumbnails.default.url )
    ))

    return channelLogo
}


export const getSubscribers = (accessToken) => {
    return fetch(`https://youtube.googleapis.com/youtube/v3/subscriptions?part=snippet&mine=true&key=${youtube_API_Key}`, {
        method: "GET",
        headers: {
            Accept: "application/json",
            Authorization: `Bearer ${accessToken}`,
        }
    }
    )
    .then(response => console.log(response))
    .catch(err => console.log(err))

}