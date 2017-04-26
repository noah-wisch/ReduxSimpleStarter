import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';

const apiKey = 'AIzaSyCkgAAW530wy9KLSvLWSYwnm9OGirTWB-w';

class App extends Component {
  constructor( props ) {
    super( );

    this.state = {videos: [ ]};

    YTSearch({
      key: apiKey,
      term: 'CTFxC'},
      ( videos ) => {
        this.setState({ videos });
        /* note this could also be ({videos: videos}) - ES6 simplifies it */
    });
  }

  render( ) {
    return (
      <div>
        <SearchBar />
        <VideoList videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.querySelector( '.container' ));
