import React, { useState, useEffect } from "react";
import './Reset.css';
import "./App.css";
import Sidebar from './Sidebar/Sidebar';
import Photo from './Photo/Photo';

function useNasaPhoto () {
  const [nasaPhoto, setNasaPhoto] = useState({
    title: "Downloading photo...",
    desc: "Curious about our Universe?",
    alt: "Waiting on NASA API"
  });

  useEffect(() => {
    const fetchPhoto = () =>
      fetch(`https://api.nasa.gov/planetary/apod?api_key=JcOnGTiVdQa3bgXnpl7dLm4i1wzeeZxNxAWIYPWq`)
        .then(response => response.json())
        .then(photo => {
          setNasaPhoto({
            date: photo.date,
            hd: photo.hdurl,
            title: photo.title,
            desc: photo.explanation,
            url: photo.url
          });
        });
      
        fetchPhoto();
  }, [])

  return nasaPhoto;
}

function App() {
  const photoData = useNasaPhoto();
  console.log(photoData)
  return (
    <main className="App">
      {
        <>
          <Sidebar title={photoData.title} desc={photoData.desc} />
          <Photo src={photoData.hd} alt={photoData.alt} />
        </>
      }
    </main>
  ) 
}

export default App;
