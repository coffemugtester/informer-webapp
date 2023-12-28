import React from "react";

const RatingAndReviewsCount = ({userRatingsTotal, rating}) => {
  return (
      <div className="ratingAndReviewsCount" >
        <div className='ratings'>
          <h2>
            <span className="material-symbols-outlined" style={{verticalAlign: 'middle', fontSize: '1.5rem', paddingBottom: '0.3rem'}}>sentiment_neutral</span>&nbsp;
            {rating}/5
            <span className="material-symbols-outlined" style={{fontSize: '1.2rem'}}>grade</span>
            <span className="material-symbols-outlined" style={{fontSize: '1.2rem'}}>grade</span>
            <span className="material-symbols-outlined" style={{fontSize: '1.2rem'}}>grade</span>
          </h2>
        </div>
        <div className='reviewsCount'>
          <h2>
            <span className="material-symbols-outlined" style={{verticalAlign: 'middle', fontSize: '1.5rem'}}>rate_review</span>&nbsp;
            {userRatingsTotal}
            <span style={{fontSize: '1rem'}}> (opiniones)</span>
          </h2>
        </div>
      </div>
  )
}

export default RatingAndReviewsCount;