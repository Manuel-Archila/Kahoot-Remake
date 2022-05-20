import React from 'react'
import './Cuadro.css'

const Cuadro = ({image}) => (
  <div className="cuadro">
    <div className="textocua">
      <div>
        A ver
      </div>
    </div>
    <div className="imagencua">
      <div className="forma" style={{ backgroundImage: `url(${image})` }} />
    </div>
  </div>
)

export default Cuadro
