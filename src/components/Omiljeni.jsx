import React from 'react'
import Restoran from './Restoran'

const Omiljeni = ({restorani, ukloni, rezervisi}) => {
  return (
    <div className='restoran-container'>
        <p>Ovo su Vaši omiljeni restorani:</p>
        {restorani.map((r) => (
            <Restoran key={r.id} restoran={r} favourite={0} ukloni={ukloni} rezervisi={rezervisi}/>
        ))}
    </div>
  )
}

export default Omiljeni