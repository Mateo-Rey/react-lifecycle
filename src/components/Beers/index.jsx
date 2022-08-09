import { useState, useEffect } from "react";

export default function Beers() {
    const [beerList, setBeerList] = useState();
    useEffect(() => {
        fetch(`https://api.sampleapis.com/beers/ale`) //ale, stouts, red-ale
        .then(response => response.json())
        .then(beers => setBeerList(beers))
        .catch(err => alert(err))
    },[])
    if(!beerList) {
        return <h2>Loading...</h2>
    }  return (
        <>
        <ul>
            {beerList.map(beer => (
                <li key={beer.id}>{beer.name}</li>
            ))}
        </ul>
        </>
    )
}