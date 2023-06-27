import React from 'react'
import Restoran from './Restoran'

const Omiljeni = ({restorani, ukloni, rezervisi, pretraga}) => {
  return (
    <div className='restoran-container'>
      <div className="poruka">
        <h1>Ovo su Vaši omiljeni restorani:</h1>
      </div>

      {pretraga===""? (restorani.map((r) => (
            <Restoran key={r.id} restoran={r} favourite={0} ukloni={ukloni} rezervisi={rezervisi}/>)))
            :
        (restorani.filter((res)=>res.naziv.toLowerCase().includes(pretraga.toLowerCase())).map((r) => (<Restoran key={r.id} restoran={r} favourite={0} ukloni={ukloni} rezervisi={rezervisi}/>)))
        }
    </div>
  )
}

export default Omiljeni