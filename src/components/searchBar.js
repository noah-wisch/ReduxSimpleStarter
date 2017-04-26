import React, { Component } from 'react';

class SearchBar extends Component {
  constructor( props ) {
    super( );
    this.state = {term: ''};
  }
  render( ) {
    return (
      <div>
        <input onChange={( e ) => this.setState({ term: e.target.value })}/>
      </div>
    );
  }
}

SearchBar.PropTypes = {
  SearchBar: React.PropTypes.func.isRequired
};

export default SearchBar;
