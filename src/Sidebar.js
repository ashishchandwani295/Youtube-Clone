import React from 'react'
import { Link } from 'react-router-dom';
import SidebarOptions from './SidebarOptions';
import HomeIcon from '@material-ui/icons/Home';
import WhatshotIcon from '@material-ui/icons/Whatshot';
import SubscriptionsIcon from '@material-ui/icons/Subscriptions'; 
import VideoLibraryIcon from '@material-ui/icons/VideoLibrary';
import HistoryIcon from '@material-ui/icons/History';
import WatchLaterIcon from '@material-ui/icons/WatchLater';
import ThumbUpIcon from '@material-ui/icons/ThumbUp';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import './Sidebar.css';

function Sidebar() {
    return (
        <div className="sidebar">
                <Link to="/" onClick={window.clearSearch} className="sidebar__link">
                    <SidebarOptions selected title = "Home" Icon = {HomeIcon}  />
                </Link>
                <Link to="/trending" onClick={window.clearSearch} className="sidebar__link">
                    <SidebarOptions title = "Trending" Icon = {WhatshotIcon}  />
                </Link>
                <Link to="/subscription" onClick={window.clearSearch} className="sidebar__link">
                    <SidebarOptions title = "Subscriptions" Icon = {SubscriptionsIcon}  />
                </Link>
                <hr />
                <SidebarOptions title = "Library" Icon = {VideoLibraryIcon}  />
                <SidebarOptions title = "History" Icon = {HistoryIcon}  />
                <SidebarOptions title = "Watch Later" Icon = {WatchLaterIcon}  />
                <SidebarOptions title = "Liked Videos" Icon = {ThumbUpIcon}  />
                <SidebarOptions title = "Show More" Icon = {ExpandMoreIcon}  />
                <hr />
        </div>
    )
}

export default Sidebar
