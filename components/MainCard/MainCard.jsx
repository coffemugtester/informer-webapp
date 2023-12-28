import React from "react";

const MainCard = ({formattedAddress, rating}) => {
  return (
      <div className="mainCard">
        <div className='mainCardLeft' style={{
          display: 'grid',
          height: '100%'  // Or any specific height as needed
        }}>
          <div style={{gridRowStart: 1, gridRowEnd: 2, paddingTop: '0.75rem', }}>
            <h2 style={{fontWeight: '500', fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '2rem', textAlign: 'left', paddingLeft: '2rem', paddingTop: '0.75rem'}}>Embajada de España,</h2>
            <p style={{fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '1rem', paddingLeft: '2rem' }}>{formattedAddress}</p>
          </div>
          <div style={{
            gridRowStart: 2,
            gridRowEnd: 3,
            paddingLeft: '0.5rem',
            marginLeft: '2rem',
            backgroundColor: 'black',
            borderRadius: '10px 0px 0px 10px',
            display: 'grid',
            gridTemplateRows: '0.5rem auto 0.5rem',
            gridTemplateColumns: '1fr 1fr',
            placeItems: 'center',
          }}>
            <p style={{color: 'white', gridColumnStart: 1, gridRowStart: 2, gridRowEnd: 3}}>Abierto: 24hrs <span style={{fontSize: '0.75rem'}}>(semana)</span></p>
            <div style={{gridRowStart: 2 , gridColumnStart: 2, display: 'grid', gridTemplateRows: '1fr 1fr'}}>
              <p style={{color: 'white'}}> - hrs. - Otras misiones</p>
              <p style={{color: 'white'}}> - hrs. - Otros países</p>
            </div>
          </div>
          <div style={{
            gridRowStart: 3,
            gridRowEnd: 4,
            paddingLeft: '0.5rem',
            marginLeft: '2rem',
            backgroundColor: 'silver',
            borderRadius: '10px 0px 0px 10px',
            display: 'grid',
            gridTemplateRows: '0.5rem auto 0.5rem',
            gridTemplateColumns: '1fr 1fr',
            placeItems: 'center',
          }}>
            <p style={{color: 'white', gridColumnStart: 1, gridRowStart: 2, gridRowEnd: 3}}>{rating}/5 <span style={{fontSize: '0.75rem'}}>(valoración promedia)</span></p>
            <div style={{gridRowStart: 2 , gridColumnStart: 2, display: 'grid', gridTemplateRows: '1fr 1fr'}}>
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
              style={{
                width: '100%',
                height: '100%',
                objectFit: 'cover', // This makes the image cover the full area of the div
                objectPosition: 'center' // Adjust the alignment of the image
              }}
          />
        </div>
      </div>
  )
}

export default MainCard;