import React from 'react'
import Toggle from './Toggle'

const Restoran = ({restoran, dodavanje, favourite, ukloni, rezervisi}) => {
  return (
    <div className='restorani'>

        <div className={favourite === 1 ? "card" : "card-restoran"}>
            <img className={favourite === 1 ? "card-img-top" : "card-img-left"} src={restoran.slika} alt='Slika'/>
            <div className="card-body">
                <h3 className="card-title">{restoran.naziv}</h3>
                <p className="card-text">
                  Lokacija:{restoran.lokacija} <br/>
                  Kontakt:{restoran.kontakt} <br/>
                  Ocena: {restoran.ocena} <br/>
                  Rezervacija: {restoran.rezervacija} <br/>
                </p>
            </div>
            {favourite === 1 ? (
              <div className="favourite">
                <p>DODAJ U OMILJENE </p>
                <button className='btnFav' onClick={()=>dodavanje(restoran.id, restoran.naziv)} >
                  <React.Fragment>
                    <Toggle label={restoran.naziv}/>
                  </React.Fragment>
                </button>
              </div>
            ):(
              <div className='btnsFav'>
                <button className='btnRezervacija' onClick={()=>rezervisi(restoran.id)}>REZERVACIJA</button>
                <button className='btnUkloni' onClick={()=>ukloni(restoran.id, restoran.naziv)}>UKLONI IZ OMILJENIH</button>
                

              </div>


            )}
            


        </div>
    
    </div>
  )
}

export default Restoran