import React from 'react';
import { Link } from 'react-router-dom';

const linkStyle = {
    color: '#1746A2'
};

export default function HomePage() {
  return (
    <>
        <h1>Top TV</h1>
        <em>All about the smaller silver screen</em>
        <ul>
            <li><Link to="/shows" style={linkStyle}>Explore shows</Link></li>
            <li><Link to="/search" style={linkStyle}>Search your favorite show</Link></li>
        </ul>
    </>
  )
}