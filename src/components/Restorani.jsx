import React from 'react';
import Restoran from './Restoran';

function Restorani({restorani, dodavanje, ukloni, pretraga}) {
  return (
    <div className="restoraniStrana">
        <div className="poruka">
            <h1>Samo najbolje za Vas!</h1>
        </div>
        <div className="sviRestorani">
        {pretraga===""? (restorani.map((r) => (
            <Restoran key={r.id} restoran={r} dodavanje={dodavanje} favourite={1} ukloni={ukloni}/>)))
            :
        (restorani.filter((res)=>res.naziv.toLowerCase().includes(pretraga.toLowerCase())).map((r) => (<Restoran key={r.id} restoran={r} favourite={1} ukloni={ukloni} dodavanje={dodavanje}/>)))
        }

        </div>

    </div>

  )
}

export default Restorani