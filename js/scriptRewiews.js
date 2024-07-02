function renderReviews() {
  const reviewsGrid = document.getElementById('reviews-grid');
  reviews.forEach(review => {
    const article = document.createElement('article');
    article.classList.add('review');

    const reviewHeader = document.createElement('div');
    reviewHeader.classList.add('review-header');

    const img = document.createElement('img');
    img.classList.add('author-image');
    img.src = review.authorImage;
    img.alt = "Foto del autor";

    const h2 = document.createElement('h2');
    h2.textContent = review.title;

    reviewHeader.appendChild(img);
    reviewHeader.appendChild(h2);

    const reviewDate = document.createElement('div');
    reviewDate.classList.add('review-header');
    const span = document.createElement('span');
    span.classList.add('review-date');
    span.textContent = review.date;
    reviewDate.appendChild(span);

    const reviewContent = document.createElement('div');
    reviewContent.classList.add('review-content');

    review.content.forEach(paragraph => {
      const p = document.createElement('p');
      p.textContent = paragraph;
      reviewContent.appendChild(p);
    });

    article.appendChild(reviewHeader);
    article.appendChild(reviewDate);
    article.appendChild(reviewContent);

    reviewsGrid.appendChild(article);
  });
}

// Ejecutar la función para renderizar las reseñas al cargar la página
document.addEventListener('DOMContentLoaded', renderReviews);
