import axios from 'axios';
import React, { useEffect, useState } from 'react';
import MusicTable from './Components/MusicTable/MusicTable';
import MusicForm from './Components/MusicForm/MusicForm';
import NavBar from './Components/NavBar/NavBar';
import { Container } from 'react-bootstrap'
import { URL_HOST } from './urlhost';
function App() {
  const [songs, setSongs] = useState([])
  useEffect(() => {
  getAllSongs();
},[])

  async function getAllSongs(){
    let response = await axios.get(`${URL_HOST}/api/music/`);
    setSongs(response.data);
  }
  
  async function AddNewMusic(newSong){

    let response = await axios.post(`${URL_HOST}/api/music/`,newSong);
    if (response.status === 201) {
      getAllSongs()
    }
    
  }


  return (
<>
      <NavBar />
     <MusicTable songs={songs}/>
    <Container>     
     <MusicForm addNewMusic={AddNewMusic}/>    
    </Container></>
  );
}

export default App;
