import React from "react";

const MainCard = ({formattedAddress, rating}) => {
  return (
      <div className="mainCard">
        <div className='mainCardLeft'>
          <div style={{gridRowStart: 1, gridRowEnd: 2, paddingTop: '0.75rem', }}>
            <h2>Embajada de España,</h2>
            <p style={{fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '1rem', paddingLeft: '2rem' }}>{formattedAddress}</p>
          </div>
          <div className='firstSnippet'>
            <p style={{color: 'white', gridColumnStart: 1, gridRowStart: 2, gridRowEnd: 3}}>Abierto: 24hrs <span style={{fontSize: '0.75rem'}}>(semana)</span></p>
            <div className='comparison'>
              <p style={{color: 'white'}}> - hrs. - Otras misiones</p>
              <p style={{color: 'white'}}> - hrs. - Otros países</p>
            </div>
          </div>
          <div className='secondSnippet'>
            <p>{rating}/5 <span style={{fontSize: '0.75rem'}}>(valoración promedia)</span></p>
            <div className='comparison'>
              <p style={{color: 'white'}}> - hrs. - Otras misiones</p>
              <p style={{color: 'white'}}> - hrs. - Otros países</p>
            </div>
          </div>
        </div>
        <div className="mainCardRight">
          <img
              src='/berlin.jpg'
              height='1020'
              width='1327'
              alt='berlin'
          />
        </div>
      </div>
  )
}

export default MainCard;