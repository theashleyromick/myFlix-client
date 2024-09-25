export const MovieView = ({ movie, onBack }) => {
  return (
    <div className="movie-view">
      <img src={movie.image} alt={movie.title} style={{ width: '300px', height: '450px' }} />
      <h2>{movie.title}</h2>
      <p>{movie.Description}</p>
      <p><strong>Genre: </strong>{movie.Genre?.Name || 'N/A'}</p> {/* Safely accessing Genre */}
      <p><strong>Director: </strong>{movie.Director?.Name || 'N/A'}</p> {/* Safely accessing Director */}
      <p><strong>Bio: </strong>{movie.Director?.Bio || 'N/A'}</p> {/* Safely accessing Director's bio */}
      <button onClick={onBack}>Back</button>
    </div>
  );
};