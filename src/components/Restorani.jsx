import React from 'react';
import Restoran from './Restoran';

function Restorani({restorani, dodavanje, ukloni}) {
  return (
    <div className="restoraniStrana">
        <div className="poruka">
            <h1>Samo najbolje za Vas!</h1>
        </div>
        <div className="sviRestorani">
            {restorani.map((r) => (
               <Restoran key={r.id} restoran={r} dodavanje={dodavanje} favourite={1} ukloni={ukloni}/>
            ))}
        </div>

    </div>

  )
}

export default Restorani