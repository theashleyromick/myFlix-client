// Import the PropTypes library
import PropTypes from "prop-types";

export const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={movie.image} alt={movie.title} style={{ width: '150px', height: '220px' }} /> {/* Use movie.image here */}
      <h3>{movie.title}</h3> {/* Use movie.title */}
    </div>
  );
};


// Define all the props constraints for the MovieCard component
MovieCard.propTypes = {
  movie: PropTypes.shape({
    _id: PropTypes.string.isRequired, // Movie ID, stored as a string
    Title: PropTypes.string.isRequired, // Movie title
    Description: PropTypes.string.isRequired, // Movie description
    Genre: PropTypes.shape({
      Name: PropTypes.string.isRequired, // Genre name
      Description: PropTypes.string // Genre description
    }).isRequired, // Genre is required
    Director: PropTypes.shape({
      Name: PropTypes.string.isRequired, // Director's name
      Bio: PropTypes.string, // Director's bio (optional)
      Birth: PropTypes.string, // Director's birth year (optional)
      Death: PropTypes.string // Director's death year (optional, can be null)
    }).isRequired, // Director is required
    ImagePath: PropTypes.string.isRequired, // Image URL for the movie poster
    Featured: PropTypes.bool // Whether the movie is featured or not
  }).isRequired, // The 'movie' object is required
  onMovieClick: PropTypes.func.isRequired // The function to handle clicking on a movie
};
