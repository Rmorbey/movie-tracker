import React, {useState, useEffect} from 'react'
import {ShowList} from '../';
import { useShow } from '../../contexts/ShowProvider';
import SearchForm from '../SearchForm';

export default function SearchWidget() {
    
    const {setShowData} = useShow();
    const [searchString, setSearchString] = useState("Avatar");

    useEffect(() => {

        async function searchAPI() {
            const response = await fetch(`https://api.tvmaze.com/search/shows?q=${searchString}`);
            const rawData = await response.json();
            const data = rawData.map(s => s.show);
            setShowData(data);
        }

        searchAPI();

    }, [searchString]);

    function handleSearch(userInput) {
        setSearchString(userInput)
    }

    return (
        <>
            <SearchForm lastSearch={searchString} handleSearch={handleSearch}/>
            <ShowList />
        </>
    );
}