import React from 'react';
import SongDetail from './SongDetail';

const SongList = ({songs, onSongClick}) => {

    const songsItems = songs.map((song, index) => {
      return <SongDetail song={song} key={index} audio={song.link[1].attributes.href} postion={index+1} image={song["im:image"][2].label} onSongClick={onSongClick}/>
    })

  return (
    <div>
    <ul>
      {songsItems}
    </ul>
  </div>
  )
}

export default SongList;