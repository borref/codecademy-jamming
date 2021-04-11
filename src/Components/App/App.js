import React from 'react';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

import './App.css';

const tracks = [
  {
    id: 'Stan10',
    name: "The Girl From Ipanema",
    artist: "Stan Getz, Joao Gilberto, Astrud Gilberto",
    album: "The Girl From Ipanema"
  },
  {
    id: 'Chet10',
    name: "That Old Feeling",
    artist: "Chet Baker",
    album: "Chet Baker Sings"
  },
  {
    id: 'Sidney10',
    name: "Summertime",
    artist: "Sidney Bechet",
    album: "Jazz Classics"
  }
];

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      searchResults: tracks,
      playlistName: '',
      playlistTracks: tracks
    };
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
