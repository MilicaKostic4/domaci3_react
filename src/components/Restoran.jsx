import React from 'react'
import Toggle from './Toggle'

const Restoran = ({restoran}) => {
  return (
    <div className='restorani'>

        <div className='card'>
            <img className='card-img-top' src={restoran.slika} alt='Slika'/>
            <div className="card-body">
                <h3 className="card-title">{restoran.naziv}</h3>
                <p className="card-text">{restoran.lokacija}{restoran.kontakt}{restoran.ocena}</p>
            </div>
            <div className="favourite">
              <p>DODAJ U OMILJENE </p>
            <React.Fragment>
                <Toggle label={restoran.naziv}/>
            </React.Fragment>
            </div>


        </div>
    
    </div>
  )
}

export default Restoran