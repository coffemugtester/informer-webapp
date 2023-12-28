import React from "react";

const Rankings = () => {
  return (
      <div className="rankings">
        <h2 style={{color: 'white', fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '2rem', fontWeight: '500'}}>Rankings</h2>
        <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', placeItems: 'center'}}>
          <h2 style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '4rem', gridColumnEnd: 2, width: '100%', height: '100%' }}>3<span style={{fontSize: '1rem'}}>/7</span></h2>
          <h2 style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '4rem', gridColumnEnd: 3, width: '100%', height: '100%' }}>40<span style={{fontSize: '1rem'}}>/99</span></h2>
        </div>
      </div>
  )
}

export default Rankings;