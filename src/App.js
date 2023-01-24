import './App.css'
import AlbumList from './AlbumList';

function App() {
  const albums = [
    {
      name: 'Midnights', 
      year: '2022',  
      tracks: ['Maroon', 'Anti-Hero', 'Bejeweled']
    },{
      name: 'Folklore', 
      year: '2020', 
      tracks: ['Cardigan', 'August', 'Mirrorball']
    },{
      name: 'Red (Taylors Version', 
      year: '2021', 
      tracks: ['Red (Taylors Version)', 'Holy Ground (Taylors Version) ', 'I Knew You Were Trouble (Taylors Version']
    }
  ]
  return (
    <div>
      <AlbumList albums={albums}/>
    </div>
  )
}

export default App;
