

// app.js
function recommendMovies() {
    const genre = document.getElementById('genre-input').value;
    const rating = document.getElementById('rating-input').value;
    const year = document.getElementById('year-input').value;
    
    // validate input
    if (!genre || !rating || !year) {
      alert('Please fill in all fields.');
      return;
    }
    
    // recommendation logic
    const filteredMovies = movies.filter(movie => 
      movie.genre === genre &&
      movie.rating >= rating &&
      movie.release_year >= year
    );
    
    // display recommendations
    const recommendations = document.getElementById('recommendations');
    recommendations.innerHTML = '';
    filteredMovies.forEach(movie => {
      const movieElement = document.createElement('div');
      movieElement.innerHTML = `${movie.title} - ${movie.genre} - ${movie.rating} - ${movie.release_year}`;
      recommendations.appendChild(movieElement);
    });
  }


// app.js
let movies = [];

function initApp() {
  // load movie data
  fetch('movies.json')
    .then(response => response.json())
    .then(data => {
      movies = data;
      console.log('Movie data loaded.');
    })
    .catch(error => console.error('Error loading movie data:', error));
}

initApp();



