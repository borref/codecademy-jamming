import React from 'react';
import './App.css';

import SearchBar from '../SearchBar/SearchBar';
import SearchResults from '../SearchResults/SearchResults';
import Playlist from '../Playlist/Playlist';

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
      playlistTracks: []
    };

    this.addTrack = this.addTrack.bind(this);
    this.removeTrack = this.removeTrack.bind(this);
    this.updatePlaylistName = this.updatePlaylistName.bind(this);
  }

  addTrack(track) {
    const tracks = this.state.playlistTracks;

    if (tracks.find(savedTrack => savedTrack.id === track.id)) {
      return;
    }

    this.setState({
      playlistTracks: [...tracks, track]
    });
  }

  removeTrack(track) {
    let tracks = this.state.playlistTracks;

    tracks = tracks.filter(savedTrack => savedTrack.id !== track.id);

    this.setState({playlistTracks: tracks});
  }

  updatePlaylistName(name) {
    this.setState({playlistName: name});
  }

  render() {
    return (
      <div>
        <h1>Ja<span className="highlight">mmm</span>ing</h1>
        <div className="App">
          <SearchBar />
          <div className="App-playlist">
            <SearchResults
              searchResults={this.state.searchResults}
              onAdd={this.addTrack} />
            <Playlist
              playlistName={this.state.playlistName}
              playlistTracks={this.state.playlistTracks}
              onRemove={this.removeTrack}
              onNameChange={this.updatePlaylistName} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
