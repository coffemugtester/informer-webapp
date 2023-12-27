import React from "react";

export const Rankings = () => {
  return (
      <div className="container-f" style={{
        display: 'grid',
        placeItems: 'center',
        height: '100%',  // Or any specific height as needed
        gridTemplateRows: '4rem auto',
      }}>
        <h2 style={{color: 'white', fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '2rem', fontWeight: '500'}}>Rankings</h2>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', placeItems: 'center'}}>
          <h2 style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '4rem', gridColumnEnd: 2, width: '100%', height: '100%' }}>3<span style={{fontSize: '1rem'}}>/7</span></h2>
          <h2 style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '4rem', gridColumnEnd: 3, width: '100%', height: '100%' }}>40<span style={{fontSize: '1rem'}}>/99</span></h2>
        </div>
      </div>
  )
}