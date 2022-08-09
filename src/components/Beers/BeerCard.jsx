import './beercard.css'

export default function BeerCard({ beer }) {
    return (

        <div className='beerCard'>
            <img src={beer.image} alt='' />
            <h3>{beer.name}</h3>
            <p>{beer.price}</p>
        </div>
        
    )
}