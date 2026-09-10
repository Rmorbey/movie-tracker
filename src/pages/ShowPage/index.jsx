import React, {useState, useEffect} from 'react'
import { useParams } from 'react-router-dom';
import { ShowCard } from '../../components';

export default function ShowPage() {
  const {id} = useParams();
  const [show, setShow] = useState({image: {}, rating: {}});

  useEffect(() => {

    async function displayShow() {
      const response = await fetch(`https://api.tvmaze.com/shows/${id}`);
      const rawData = await response.json();
      setShow(rawData)
    }

    displayShow();

  }, []);

  return (
    <ShowCard show={show}/>
  )
}