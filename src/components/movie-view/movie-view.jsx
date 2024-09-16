export const MovieView = ({ movie, onBack }) => {
  return (
    <div className="movie-view">
      <img src={movie.ImagePath} alt={movie.Title} style={{ width: '300px', height: '450px' }} />
      <h2>{movie.Title}</h2>
      <p>{movie.Description}</p>
      <p><strong>Genre: </strong>{movie.Genre.Name}</p>
      <p><strong>Director: </strong>{movie.Director.Name}</p>
      <p><strong>Bio: </strong>{movie.Director.Bio}</p>
      <button onClick={onBack}>Back</button> {/* Button to return to MainView */}
    </div>
  );
};