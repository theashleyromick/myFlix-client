import { useState, useEffect } from "react";
import { MovieCard } from "../movie-card/movie-card"; // Import MovieCard
import { MovieView } from "../movie-view/movie-view"; // Import MovieView for detailed view

export const MainView = () => {
  const [movies, setMovies] = useState([]); // Correct: Initialize with an empty array
  const [selectedMovie, setSelectedMovie] = useState(null);

  // Fetch movies from the Open Library API
  useEffect(() => {
second-branch
    fetch("https://myflix-cf-2a89fc30fab2.herokuapp.com/movies")

    fetch("https://myflix-cf-2a89fc30fab2.herokuapp.com/movies")
 main
      .then((response) => response.json())
      .then((data) => {
        const moviesFromApi = data.docs.map((doc) => {
          return {
            id: doc.key, // Use the correct key from the API response
            title: doc.title,
            image: `https://covers.openlibrary.org/b/id/${doc.cover_i}-L.jpg`,
            author: doc.author_name?.[0] // Use optional chaining in case author_name is undefined
          };
        });

        setMovies(moviesFromApi); // Correct: Set the state for movies
      })
      .catch((error) => {
        console.error('Error fetching movies:', error);
      });
  }, []); // Empty dependency array ensures useEffect runs only once

  // If a movie is selected, render MovieView
  if (selectedMovie) {
    return <MovieView movie={selectedMovie} onBack={() => setSelectedMovie(null)} />;
  }

  // Render MovieCard components for each movie
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} onClick={() => setSelectedMovie(movie)} />
      ))}
    </div>
  );
};