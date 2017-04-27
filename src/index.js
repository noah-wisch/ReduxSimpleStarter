import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import _ from 'lodash';
import YTSearch from 'youtube-api-search';

import SearchBar from './components/SearchBar';
import VideoList from './components/VideoList';
import VideoDetail from './components/VideoDetail';

const apiKey = 'AIzaSyCkgAAW530wy9KLSvLWSYwnm9OGirTWB-w';

class App extends Component {
  constructor( props ) {
    super( );

    this.state = {
      videos: [],
      selectedVideo: null,
    };

    this.videoSearch('CTFxC');
  }

  videoSearch(term) {
    YTSearch({key: apiKey, term: term}, ( videos ) => {
        this.setState({
          videos: videos,
          selectedVideo: videos[0],
        });
        /* note this could also be ({videos: videos}) - ES6 simplifies it - ({videos}) */
    });
  }

  render( ) {
    const videoSearch = _.debounce((term) => { this.videoSearch(term) }, 300);

    return (
      <div>
        <SearchBar onSearchTermChange={videoSearch} />
        <VideoDetail video={this.state.selectedVideo} />
        <VideoList
          onVideoSelect={(selectedVideo) => this.setState({selectedVideo}) }
          videos={this.state.videos} />
      </div>
    );
  }
}

ReactDOM.render(
  <App/>, document.querySelector( '.container' ));
