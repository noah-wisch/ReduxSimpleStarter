import React, { Component } from 'react';

class SearchBar extends Component {
  constructor( props ) {
    super( );
    this.state = {term: ''};
  }
  render( ) {
    return (
      <div className="search-bar">
        <input onChange={( e ) => this.onInputChange(e.target.value)} />
      </div>
    );
  }

  onInputChange(term) {
    this.setState({term});
    this.props.onSearchTermChange(term);
  }
}

SearchBar.PropTypes = {
  SearchBar: React.PropTypes.func.isRequired
};

export default SearchBar;
