import { useEffect, useState } from "react";
import { getMovies } from "../apis/getMovies";
import Movie from "../components/Movie";
import { MovieData } from "../type";
import { Link } from "react-router-dom";
import styles from "./Home.mudule.css";

const Home =() => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<MovieData[]>([]);
  useEffect(() => {
    (async() => {
      const data = await getMovies()
      setMovies(data);
      setIsLoading(false);
    })();
  }, []);

  return (
    <div className={styles.Home}>
      {isLoading? <h1>loading...</h1> 
    : 
    <ul> {movies.map(movie => {
      const {id, name, thumbnail} = movie;
      return (
        <li key={id}>
          <div><Movie name={name} thumbnail={thumbnail} />
          <Link to={`/movies/${id}`} state={{movie}}> Meet {name} </Link>
          </div>
        </li>
          )})}
          </ul>
          }
    </div>
  )
}

export default Home;