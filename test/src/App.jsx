import React, { useEffect } from 'react';
import './App.css';
import {fetchPhotos} from './requests/setPhotos'

function App() {

  useEffect(() => {
    fetchPhotos()
  }, [])

  return (
    <div className="App">
     
    </div>
  );
}

export default App;
