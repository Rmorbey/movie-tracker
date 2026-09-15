import React from 'react'

export default function ShowCard ({ show }) {
    return (
        <div className="show-card">
            <div>
                <img src={show.image.medium}></img>
            </div>
            <div>
                {show.rating.average ? <span role="figure"> ({ show.rating.average }/10)</span> : ""}
                <h2>{show.name}</h2>
                <em role="figure-2">{show.language}, {show.premiered}</em>
                <div role="figure-3" dangerouslySetInnerHTML={{ __html: show.summary }}></div>
            </div>
        </div>
    )
};