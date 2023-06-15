import React, { useEffect, useState } from 'react'
import axios from 'axios';


export default function About() {

    const [photos, setPhotos] = useState([]);


  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('https://jsonplaceholder.typicode.com/users');
        setPhotos(response.data);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };
    fetchData();
}, []);

  return (
    <div className='text-center'>
      <h1 className='text-secondary'>About</h1>

      <div>

      {photos.map((photo, index) =>{
        return <div> {index + photo.name}</div>
      })}
{/*
      {photos.map((photo, index) => (
        <img key={photo.id} src={photo.url} alt={photo.title} />
      ))} */}
    </div>
    </div>
  )
}
