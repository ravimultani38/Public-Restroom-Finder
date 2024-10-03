import  { useState } from 'react';
import "./RateTheRestroom.css"; 

function RateTheRestroom() {
  const [rating, setRating] = useState(0);
  const [review, setReview] = useState("");
  const [location, setLocation] = useState(""); 
  const [submittedReviews, setSubmittedReviews] = useState([]);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (rating === 0 || review.trim() === "" || location.trim() === "") {
      alert("Please provide a rating, review, and location.");
      return;
    }

    setSubmittedReviews([...submittedReviews, { rating, review, location }]);
   
    setRating(0);
    setReview("");
    setLocation(""); 
  };

  return (
    <div className="rate-the-restroom">
      <h2>Rate the Restroom You Have Used</h2>
      <form onSubmit={handleSubmit} className="review-form">
        <h3>Rate the Restroom You Have Used</h3>
        <input
          type="text"
          placeholder="Enter restroom location..."
          className="location-input"
          value={location}
          onChange={(e) => setLocation(e.target.value)} 
        />
        <div className="rating">
          <span>Rating: </span>
          {[1, 2, 3, 4, 5].map((star) => (
            <span
              key={star}
              className={`star ${rating >= star ? 'filled' : ''}`}
              onClick={() => setRating(star)}
            >
              ★
            </span>
          ))}
        </div>
        <textarea
          placeholder="Leave your review here..."
          value={review}
          onChange={(e) => setReview(e.target.value)}
          className="review-textarea"
        />
        <button type="submit" className="submit-button">Submit</button>
      </form>

      {/* Display submitted reviews */}
      <div className="submitted-reviews">
        <h3>Submitted Reviews:</h3>
        {submittedReviews.map((item, index) => (
          <div key={index} className="review-item">
            <p><strong>Location:</strong> {item.location}</p>
            <p><strong>Rating:</strong> {item.rating} ★</p>
            <p>{item.review}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default RateTheRestroom;
