import { useState, useEffect } from "react";
import BeerCard from "./BeerCard";

export default function Beers() {
  const [beerList, setBeerList] = useState();
  const [beerType, setBeerType] = useState("ale");
  useEffect(() => {
    fetch(`https://api.sampleapis.com/beers/${beerType}`) //ale, stouts, red-ale
      .then((response) => response.json())
      .then((beers) => setBeerList(beers))
      .catch((err) => alert(err));
  }, [beerType]);
  if (!beerList) {
    return <h2>Loading...</h2>;
  }
  return (
    <>
      <button
        onClick={() => {
          setBeerType("ale");
        }}
      >
        Ale
      </button>
      <button
        onClick={() => {
          setBeerType("stouts");
        }}
      >
        Stouts
      </button>
      <section>
        <ul id='beerList'>
          {beerList.map((beer) => (
            <BeerCard key={beer.id} beer={beer} />
          ))}
        </ul>
      </section>
    </>
  );
}
