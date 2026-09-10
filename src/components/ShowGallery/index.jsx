import React, {useState, useEffect} from 'react';
import {GalleryImage} from '../';
import { Link } from 'react-router-dom';

export default function ShowGallery() {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    async function displayShows() {
        const response = await fetch("https://api.tvmaze.com/shows")
        const data = await response.json();
        setShows(data);
    };

    displayShows();
  }, [])

  return (
    <div className='shows'>
      {shows.map((show) => <Link to={`${show.id}`} key={show.id}><GalleryImage show={show} /></Link>)}
    </div>
  )
};