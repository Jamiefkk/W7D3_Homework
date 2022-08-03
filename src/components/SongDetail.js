import React from 'react';
import SongContainer from '../containers/SongContainer';


const SongDetail = ({song, image}) => {
    return (
    <>
    <li>{song["im:name"].label}</li>
    <img id="song-img" src={image} />
    <audio controls src={song.audio} type="audio/mp4"></audio>
    </>)

}

export default SongDetail