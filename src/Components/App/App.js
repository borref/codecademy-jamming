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

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
  }

  addTrack(track) {
    if (this.state.playlistTracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    this.setState({
      playlistTracks: [...this.state.playlistTracks, track]
    });
  }

  removeTrack(track) {
    this.setState({
      playlistTracks: this.state.playlistTracks.filter(savedTrack => savedTrack.id !== track.id)
    });
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults searchResults={this.state.searchResults} onAdd={this.addTrack} />
            <Playlist playlistName={this.state.playlistName} playlistTracks={this.state.playlistTracks} onRemove={this.removeTrack} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
