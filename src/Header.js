import React from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import VideoCallIcon from '@material-ui/icons/VideoCall';
import AppsIcon from '@material-ui/icons/Apps';
import NotificationsIcon from '@material-ui/icons/Notifications';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import { getSearchVideos } from './api/youtubeAPI';
import './Header.css';
import { useDatalayerValue } from './Datalayer';


function Header() {

    const [{search }, dispatch] = useDatalayerValue();


    const handleChange = event => {
        
        dispatch({
            type: 'SET_SEARCH_STRING',
            search: event.target.value
        })
    }

    const searchVideos = (search) => {
        getSearchVideos(search)
        .then(response => {
            dispatch({
                type: 'SET_SEARCH_DATA',
                searchData: response
            })
        })
        .catch(err => console.log(err))
    }

    const handleKeypress = event => {
        if(event.charCode === 13){
            searchVideos(search);
        }
    }

    window.clearSearch = () => {
        dispatch({
         type: 'SET_SEARCH_STRING',
         search: ""
     }) 
    }

    return (
        <div className="header">
            <div className="header__left">
                <MenuIcon className="header__menuIcon" />
                <Link to="/" onClick={window.clearSearch}>
                <img className="header__logo" src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/ae/YouTube_2020.png/1200px-YouTube_2020.png" alt=""/>
                </Link>
            </div>
            <div className="header__center">
                <input onChange= {handleChange} value={search} type="text" placeholder="Search" onKeyPress={handleKeypress} />
                <div className="header__container">
                    <div className="header__icon">
                    <Link to={`/search/${search}`}>
                        <SearchIcon className="header__searchIcon" onClick = {() => {searchVideos(search)}} />
                    </Link>
                    </div>
                </div>
            </div>
            <div className="header__right">
                <VideoCallIcon />
                <AppsIcon />
                <NotificationsIcon />
                <AccountCircleIcon fontSize="large" />
            </div>
        </div>
    )
}

export default Header;
