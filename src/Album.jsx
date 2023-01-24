import Track from "./Track";

const Album = (props) => {
  return ( 
<>
<div>
  <h3>{props.album.name} was released in {props.album.year}</h3>
  {props.album.tracks.map( track => <Track albumName={props.album.name} track={track} /> 
  )}
  </div></>
  );
}

export default Album;