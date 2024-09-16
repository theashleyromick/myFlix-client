export const MovieCard = ({ movie, onClick }) => {
  return (
    <div className="movie-card" onClick={onClick} style={{ cursor: 'pointer' }}>
      <img src={movie.ImagePath} alt={movie.Title} style={{ width: '150px', height: '220px' }} />
      <h3>{movie.Title}</h3>
    </div>
  );
};