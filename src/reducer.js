export const initialState = {
    search: "",
    searchData : null,
    homeData : null,
    trendingVideos : null,
    channelData : null
}

const reducer = (state, action) => {
    switch (action.type) {
        case 'SET_SEARCH_STRING' : {
            return {
                ...state,
                search: action.search
            }
        }

        case 'SET_SEARCH_DATA' : {
            return {
                ...state,
                searchData: action.searchData
            }
        }

        case 'SET_HOME_VIDEOS' : {
            return {
                ...state,
                homeData: action.homeData
            }
        }

        case 'SET_TRENDING_VIDEOS' : {
            return {
                ...state,
                trendingVideos : action.trendingVideos
            }
        }

        case 'SET_CHANNEL_DETAILS' : {
            return {
                ...state,
                channelData : action.channelData
            }
        }

        default : {
            return {state}
        }
    }
}

export default reducer;