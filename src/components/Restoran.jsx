import React from 'react'
import Toggle from './Toggle'

const Restoran = ({restoran}) => {
  return (
    <div className='restorani'>

        <div className='card'>
            <img className='card-img-top' src={restoran.slika} alt='Slika'/>
            <div className="card-body">
                <h3 className="card-title">{restoran.naziv}</h3>
                <p className="card-text">
                  Lokacija:{restoran.lokacija} <br/>
                  Kontakt:{restoran.kontakt} <br/>
                  Ocena: {restoran.ocena} <br/>
                </p>
            </div>
            <div className="favourite">
              <p>DODAJ U OMILJENE </p>
              <button className='btnFav'>
                <React.Fragment>
                  <Toggle label={restoran.naziv}/>
                </React.Fragment>
              </button>

            </div>


        </div>
    
    </div>
  )
}

export default Restoran