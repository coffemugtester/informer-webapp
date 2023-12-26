import React from "react";

export const RatingAndReviewsCount = ({dataObject}) => {
  return (
      <div className="container-b" style={{
        display: 'grid',
        placeItems: 'center',
        height: '100%'  // Or any specific height as needed
      }}>
        <h1 style={{ color: 'black', fontWeight: 'bold', fontFamily: 'Georgia, serif', fontSize: '2rem' }}>Rating: {dataObject.result.rating} - N°Reviews: {dataObject.result.user_ratings_total}</h1>
      </div>
  )
}