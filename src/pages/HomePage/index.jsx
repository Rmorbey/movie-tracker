import React from 'react';
import { Link } from 'react-router-dom';

export default function HomePage() {
  return (
    <>
        <h1>Top TV</h1>
        <em>All about the smaller silver screen</em>
        <ul>
            <li><Link to="/shows" >Explore shows</Link></li>
            <li><Link to="/search" >Search your favorite show</Link></li>
        </ul>
    </>
  )
}