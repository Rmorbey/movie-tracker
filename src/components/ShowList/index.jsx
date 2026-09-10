import React, { useState } from 'react'
import {ShowCard} from '../';
import { useShow } from "../../contexts/ShowProvider";

export default function ShowList() {
  const { showData } = useShow();

  const [ratingOrder, setRatingOrder] = useState(false);
  const [englishOnly, setEnglishOnly] = useState(false);

  function compareRaiting(a,b) {
    if (!ratingOrder) {
      return 0;
    } else {
      const aVal = a.raiting.average || 0;
      const bVal = b.raiting.average || 0;
      return bVal - aVal
    }
  }

  function renderShows() {
    return showData
    .filter(s => s.summary && s.image ? true : false)
    .filter(s => (s.language == 'English' || !englishOnly) ? true : false)
    .sort(compareRaiting)
    .map(s => <ShowCard key={s.id} show={s} />)
  }

  return (
    <>
        { renderShows() }
    </>
  )
}