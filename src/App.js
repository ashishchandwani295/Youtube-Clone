import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Header from './Header';
import Sidebar from './Sidebar';
import VideoPlayer from './VideoPlayer';
import SearchPage from './SearchPage';
import TrendingVideos from './TrendingVideos';
import Subscription from './Subscription';
import './App.css';

function App() {
  return (
    <div className="app">
      <Router>
      <Header className="app__header" />
        <Switch>
        <Route path="/search">
              <div className="app__body">
                <Sidebar className="app__sidebar" />
                <SearchPage />
              </div>
          </Route>
        <Route path="/trending">
              <div className="app__body">
                <Sidebar className="app__sidebar" />
                <TrendingVideos />
              </div>
          </Route>
        <Route path="/subscription">
              <div className="app__body">
                <Sidebar className="app__sidebar" />
                <Subscription />
              </div>
          </Route>
        <Route path="/">
              <div className="app__body">
                <Sidebar className="app__sidebar" />
                <VideoPlayer className="app__videoplayer" />
              </div>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
