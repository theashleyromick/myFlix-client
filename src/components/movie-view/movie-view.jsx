export const MovieView = ({ movie, onBack }) => {
  return (
    <div className="movie-view">
      <img src={movie.image} alt={movie.title} style={{ width: '300px', height: '450px' }} />
      <h2>{movie.title}</h2> {/* Use movie.title */}
      <p>{movie.description}</p> {/* Use movie.description */}
      <p><strong>Genre: </strong>{movie.genre || 'N/A'}</p> {/* Use movie.genre */}
      <p><strong>Director: </strong>{movie.director || 'N/A'}</p> {/* Use movie.director */}
      <button onClick={onBack}>Back</button>
    </div>
  );
};