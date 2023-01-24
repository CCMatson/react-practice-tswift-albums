import Album from "./Album"

const AlbumList = (props) => {
  return (
    <>
      <h2>This is a list of recent TSwift albums!</h2>
      {props.albums.map(album => <Album key={album.name} album={album} />
      )}
    </>
  )
}

export default AlbumList;

