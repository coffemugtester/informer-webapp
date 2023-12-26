import React from "react";

export const Rankings = () => {
  return (
      <div className="container-f" style={{
        display: 'grid',
        placeItems: 'center',
        height: '100%'  // Or any specific height as needed
      }}>
        <h2 style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '1.5rem' }}>España: 3/7</h2>
        <h2 style={{ color: 'white', fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '1.5rem' }}>Internacional: 40/99</h2>
      </div>
  )
}