import React from "react";

export const RatingAndReviewsCount = ({dataObject}) => {
  return (
      <div className="container-b" style={{placeItems: 'center'}} >
        <div style={{width: '100%', gridColumnStart: 1, gridColumnEnd: 2, gridRowStart: 2, gridRowEnd: 3, borderRight: '1px solid silver', textAlign: 'center', fontSize: '1.2rem'}}>
          <h2>
            <span className="material-symbols-outlined" style={{verticalAlign: 'middle', fontSize: '1.5rem', paddingBottom: '0.3rem'}}>sentiment_neutral</span>&nbsp;
            {dataObject.result.rating}/5
            <span className="material-symbols-outlined" style={{fontSize: '1.2rem'}}>grade</span>
            <span className="material-symbols-outlined" style={{fontSize: '1.2rem'}}>grade</span>
            <span className="material-symbols-outlined" style={{fontSize: '1.2rem'}}>grade</span>
          </h2>
        </div>
        <div style={{width: '100%', gridColumnStart: 2, gridColumnEnd: 3, gridRowStart: 2, gridRowEnd: 3, textAlign: 'center', fontSize: '1.2rem'}}>
          <h2>
            <span className="material-symbols-outlined" style={{verticalAlign: 'middle', fontSize: '1.5rem'}}>rate_review</span>&nbsp;
            {dataObject.result.user_ratings_total}
            <span style={{fontSize: '1rem'}}> (opiniones)</span>
          </h2>
        </div>
        {/*
        <h1 style={{ color: 'black', fontWeight: 'bold', fontFamily: '"Mona Sans", "Helvetica Neue", Helvetica, Arial, sans-serif', fontSize: '2rem' }}>Rating: {dataObject.result.rating} - N°Reviews: {dataObject.result.user_ratings_total}</h1>

        */}
      </div>
  )
}