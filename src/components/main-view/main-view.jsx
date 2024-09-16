import { useState } from "react";
import { MovieCard } from "../movie-card/movie-card"; // Import MovieCard
import { MovieView } from "../movie-view/movie-view"; // Import MovieView for detailed view

export const MainView = () => {
  const [movies, setMovies] = useState([
    {
      _id: '66cc9adde6dc7e6bb62710bc',
      Title: 'Inception',
      Description: 'A thief who steals corporate secrets through dream-sharing technology is given the inverse task of planting an idea into the mind of a C.E.O.',
      Genre: {
        Name: 'Sci-Fi',
        Description: 'Sci-Fi films often explore futuristic settings, advanced technology, space exploration, time travel, and extraterrestrial life.'
      },
      Director: {
        Name: 'Christopher Nolan',
        Bio: 'British-American filmmaker known for his complex storytelling and visual style.',
        Birth: '1970',
        Death: null
      },
      ImagePath: 'https://m.media-amazon.com/images/I/51xbZ-j7VxL._AC_SY679_.jpg',
      Featured: true
    },
    {
      _id: '66ccc690e6dc7e6bb62710bd',
      Title: 'Interstellar',
      Description: "A team of explorers travel through a wormhole in space in an attempt to ensure humanity's survival.",
      Genre: {
        Name: 'Sci-Fi',
        Description: 'Sci-Fi films often explore futuristic settings, advanced technology, space exploration, time travel, and extraterrestrial life.'
      },
      Director: {
        Name: 'Christopher Nolan',
        Bio: 'British-American filmmaker known for his complex storytelling and visual style.',
        Birth: '1970',
        Death: null
      },
      ImagePath: 'https://m.media-amazon.com/images/I/61+3rK3UwBL._AC_SY679_.jpg',
      Featured: true
    },
    {
      _id: '66ccc71fe6dc7e6bb62710be',
      Title: 'Pulp Fiction',
      Description: 'The lives of two mob hitmen, a boxer, a gangster, and his wife intertwine in four tales of violence and redemption.',
      Genre: {
        Name: 'Crime',
        Description: 'Crime films focus on criminal activities, heists, organized crime, and moral ambiguities.'
      },
      Director: {
        Name: 'Quentin Tarantino',
        Bio: 'Quentin Tarantino is an American filmmaker known for his unique style that blends violence, humor, and pop culture references.',
        Birth: '1963',
        Death: null
      },
      ImagePath: 'https://m.media-amazon.com/images/I/81nC1v60rOL._AC_SY679_.jpg',
      Featured: true
    },
    {
      _id: '66ccc7e0e6dc7e6bb62710bf',
      Title: 'Django Unchained',
      Description: 'With the help of a German bounty hunter, a freed slave sets out to rescue his wife from a brutal Mississippi plantation owner.',
      Genre: {
        Name: 'Crime',
        Description: 'Crime films often depict heists, organized crime, and the moral ambiguities of those involved.'
      },
      Director: {
        Name: 'Quentin Tarantino',
        Bio: 'Quentin Tarantino is an American filmmaker known for his unique style that blends violence, humor, and pop culture references.',
        Birth: '1963',
        Death: null
      },
      ImagePath: 'https://m.media-amazon.com/images/I/81zRGymwUUL._AC_SY679_.jpg',
      Featured: true
    },
    {
      _id: '66ccc86ee6dc7e6bb62710c0',
      Title: 'The Grand Budapest Hotel',
      Description: "A writer encounters the owner of an aging high-class hotel, who tells him of his early years serving as a lobby boy in the hotel's glorious years under an exceptional concierge.",
      Genre: {
        Name: 'Western',
        Description: 'Western films are set in the American frontier and often portray cowboys, outlaws, lawmen, and indigenous peoples.'
      },
      Director: {
        Name: 'Wes Anderson',
        Bio: 'Wes Anderson is an American filmmaker known for his distinctive visual and narrative style.',
        Birth: '1969',
        Death: null
      },
      ImagePath: 'https://m.media-amazon.com/images/I/51VkORV0AFL._AC_.jpg',
      Featured: true
    },
    {
      _id: '66ccc945e6dc7e6bb62710c1',
      Title: 'The Royal Tenenbaums',
      Description: 'The eccentric members of a dysfunctional family reluctantly gather under the same roof for various reasons.',
      Genre: {
        Name: 'Western',
        Description: 'Western films portray cowboys, outlaws, lawmen, and themes of justice, revenge, and survival.'
      },
      Director: {
        Name: 'Wes Anderson',
        Bio: 'Wes Anderson is an American filmmaker known for his distinctive visual and narrative style.',
        Birth: '1969',
        Death: null
      },
      ImagePath: 'https://m.media-amazon.com/images/I/51uXnfnBZ+L._AC_SY679_.jpg',
      Featured: true
    },
    {
      _id: '66ccc9d0e6dc7e6bb62710c2',
      Title: 'Fight Club',
      Description: 'An insomniac office worker and a devil-may-care soap maker form an underground fight club that evolves into much more.',
      Genre: {
        Name: 'Drama',
        Description: 'Drama films focus on realistic storytelling and emotional depth.'
      },
      Director: {
        Name: 'David Fincher',
        Bio: 'David Fincher is an American film director known for his meticulous attention to detail and dark, psychologically complex narratives.',
        Birth: '1962',
        Death: null
      },
      ImagePath: 'https://m.media-amazon.com/images/I/51v5ZpFyaFL._AC_SY679_.jpg',
      Featured: true
    },
    {
      _id: '66ccca59e6dc7e6bb62710c3',
      Title: 'Gone Girl',
      Description: "With his wife's disappearance having become the focus of an intense media circus, a man sees the spotlight turned on him when it's suspected that he may not be innocent.",
      Genre: {
        Name: 'Drama',
        Description: 'Drama films focus on realistic storytelling and human experiences.'
      },
      Director: {
        Name: 'David Fincher',
        Bio: 'David Fincher is an American film director known for his meticulous attention to detail.',
        Birth: '1962',
        Death: null
      },
      ImagePath: 'https://m.media-amazon.com/images/I/71lVlw6-BQL._AC_SY679_.jpg',
      Featured: true
    },
    {
      _id: '66cccae6e6dc7e6bb62710c4',
      Title: 'The Godfather',
      Description: 'The aging patriarch of an organized crime dynasty transfers control of his clandestine empire to his reluctant son.',
      Genre: {
        Name: 'Thriller',
        Description: 'Thriller films are designed to create tension, excitement, and suspense.'
      },
      Director: {
        Name: 'Francis Ford Coppola',
        Bio: 'Francis Ford Coppola is an American film director and producer who is regarded as one of the most influential figures in the history of cinema.',
        Birth: '1939',
        Death: null
      },
      ImagePath: 'https://m.media-amazon.com/images/I/51OqJ1Gk0eL._AC_SY679_.jpg',
      Featured: true
    },
    {
      _id: '66cccc42e6dc7e6bb62710c5',
      Title: 'Apocalypse Now',
      Description: 'A U.S. Army officer serving in Vietnam is tasked with assassinating a renegade Special Forces Colonel who sees himself as a god.',
      Genre: {
        Name: 'Thriller',
        Description: 'Thriller films create suspense, with high-stakes situations, often involving crime, espionage, or psychological tension.'
      },
      Director: {
        Name: 'Francis Ford Coppola',
        Bio: 'Francis Ford Coppola is an American filmmaker known for The Godfather Trilogy and Apocalypse Now.',
        Birth: '1939',
        Death: null
      },
      ImagePath: 'https://m.media-amazon.com/images/I/71MKQCD5q4L._AC_SY679_.jpg',
      Featured: true
    }
  ]);

  const [selectedMovie, setSelectedMovie] = useState(null);

  // If a movie is selected, render MovieView
  if (selectedMovie) {
    return <MovieView movie={selectedMovie} onBack={() => setSelectedMovie(null)} />;
  }

  // Render MovieCard components for each movie
  return (
    <div className="movie-list">
      {movies.map((movie) => (
        <MovieCard key={movie._id} movie={movie} onClick={() => setSelectedMovie(movie)} />
      ))}
    </div>
  );
};