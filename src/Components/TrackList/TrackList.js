import React from 'react';

import Track from '../Track/Track';

import './TrackList.css';

class TrackList extends React.Component {
  render() {
    <div className="TrackList">
      <Track name="The Girl From Ipanema" artist="Stan Getz, Joao Gilberto, Astrud Gilberto" album="The Girl From Ipanema" />
      <Track name="That Old Feeling" artist="Chet Baker" album="Chet Baker Sings" />
      <Track name="Summertime" artist="Sidney Bechet" album="Jazz Classics" />
    </div>
  }
}

export default TrackList;
