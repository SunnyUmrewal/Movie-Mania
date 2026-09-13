import { useState, useEffect } from "react";
import Moviecard from "./Moviecard";

const MovieList = (props) => {
  const [movies, setMovies] = useState([]);
  const [searched, setSearched] = useState(false);

  const updateFeed = async (searchTerm) => {
    const apiKey=process.env.REACT_APP_API_KEY;
    const url = `https://www.omdbapi.com/?apikey={apiKey}&s=${searchTerm}`;

    let data = await fetch(url);
    let parsedData = await data.json();

    if (parsedData.Response === "True") {
      setMovies(parsedData.Search);
    }
    else{
      setMovies([]);
    }
    setSearched(true);
  };
  
  useEffect(() => {
    updateFeed(props.search || "Avengers");
  }, [props.search]);


  const filteredMovies = movies.filter((movie) => {
  return movie.Title
    .toLowerCase()
    .includes(props.search.toLowerCase());
  } );

  const moviesToShow =filteredMovies.length === 0 ? movies: filteredMovies;

  return (
    
    <div className="container">
      <div className="row">
        {searched && filteredMovies.length === 0 &&  (
          <>
            <h2>No result found</h2>
            <p>You can browse from movies below:</p>
          </>
        )}
        

        {moviesToShow.map((movie) => (
          <div className="col-12 col-md-6 col-lg-3" key={movie.imdbID}>
            <Moviecard movie={movie} />
          </div>
        ))}
      </div>
    </div>

    
  );
};

export default MovieList;
