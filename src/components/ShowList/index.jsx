import React, { useState } from 'react'
import {ShowCard} from '../';
import { useShow } from "../../contexts/ShowProvider";

let i = 0
let j = 0

let ratCol = '#FFF'
let langCol = '#FFF'

//const cols = ["red", "blue", "green", "yellow", "grey", "white", "black"]

export default function ShowList() {
  let ratStyle = {
    backgroundColor: ratCol,
  }

  let langStyle = {
    backgroundColor: langCol,
  }
  const { showData } = useShow();

  const [ratingOrder, setRatingOrder] = useState('None');
  const [language, setLanguage] = useState('None');

  const filterStates = ['None', 'Ascending', 'Descending']
  const filterLanguage = ['None','English' ,'Dutch', 'Chinese', 'Japanese', 'American', 'Korean']

  function getNewColor() {
    let symbols = '0123456789ABCDEF';
    let color = '#'
    for (let i = 0; i < 6; i++) { 
       color += symbols[Math.floor(Math.random() * 16)];
    }
    return color
  }

  function compareRaiting(a,b) {
    if (ratingOrder === "None") {
      return 0;
    } else {
      const aVal = a.rating.average || 0;
      const bVal = b.rating.average || 0;
      return ratingOrder === "Ascending" ? aVal - bVal : bVal - aVal
    }
  }

  function renderShows() {
    return showData
    .filter(s => (s.language == language || language === 'None' ) ? true : false)
    .sort(compareRaiting)
    .map(s => s.image ? <ShowCard key={s.id} show={s} /> : "")
  }

  function switchRatingOrder() {
    i === 2 ? i = 0 : i++
    ratCol = getNewColor()
    console.log(ratCol);
    setRatingOrder(filterStates[i])
  }

  function switchLanguageOrder() {
    j === filterLanguage.length - 1 ? j = 0 : j++
    langCol = getNewColor()
    setLanguage(filterLanguage[j])
  }

  return (
    <>
          <div className="filter-controls">
              <div>
                <button style={ratStyle} onClick={switchRatingOrder}>{`Rating Order: ${ratingOrder}`}</button>
              </div>
              <div>
                <button style={langStyle} onClick={switchLanguageOrder}>{`Filter By Language: ${language}`}</button>
              </div>
          </div>
          {renderShows()}
      </>
  );
}