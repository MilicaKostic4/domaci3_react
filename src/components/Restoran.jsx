import React from 'react'

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
                  {favourite === 0 ? (<div>Rezervacija: {restoran.rezervacija} <br/></div>) :<br/>}                 
                </p>
            </div>
            {favourite === 1 ? (
              <div className="favourite">
                <button className={restoran.omiljeni===0? 'btnFav btn btnFavAdd':'btnFav btn btnFavRmv'}
                  onClick={()=>{restoran.omiljeni===0?(dodavanje(restoran.id, restoran.naziv)):(ukloni(restoran.id, restoran.naziv))}} >
                {restoran.omiljeni===0? "DODAJ U OMILJENE":"UKLONI IZ OMILJENIH"}
                  
                </button>
              </div>
            ):(
              <div className='btnsFav'>
                <button className='btnRezervacija btn' onClick={()=>rezervisi(restoran.id)}>REZERVACIJA</button>
                <button className='btnUkloni btn' onClick={()=>ukloni(restoran.id, restoran.naziv)}>UKLONI IZ OMILJENIH</button>
                

              </div>


            )}
            


        </div>
    
    </div>
  )
}

export default Restoran