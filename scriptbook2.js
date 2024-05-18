document.addEventListener("DOMContentLoaded", () => {
  const reviewForm = document.getElementById("reviewForm");
  const reviewsList = document.getElementById("reviewsList");
  const bookId = "ulysses";

  loadReviews();

  reviewForm.addEventListener("submit", (event) => {
      event.preventDefault();

      const rating = reviewForm.rating.value;
      const reviewText = reviewForm.review.value;

      if (rating && reviewText) {
          const review = { rating, reviewText, date: new Date().toLocaleDateString() };
          saveReview(review);
          displayReview(review);
          reviewForm.reset();
      } else {
          alert("Please provide both a rating and a review.");
      }
  });

  function loadReviews() {
      const reviews = JSON.parse(localStorage.getItem(bookId) || "[]");
      reviews.forEach(displayReview);
  }

  function saveReview(review) {
      const reviews = JSON.parse(localStorage.getItem(bookId) || "[]");
      reviews.push(review);
      localStorage.setItem(bookId, JSON.stringify(reviews));
  }

  function displayReview(review) {
      const li = document.createElement("li");
      li.innerHTML = `<strong>Rating:</strong> ${review.rating} <br>
                      <strong>Review:</strong> ${review.reviewText} <br>
                      <em>${review.date}</em>`;
      reviewsList.appendChild(li);
  }
});
