import { useEffect, useState } from "react";
import { getMovies } from "../apis/getMovies";
import { MovieData } from "../type";
import { Link, Outlet} from "react-router-dom";
import styles from "./Home.module.css";

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
    <div className={styles.container}>
      <nav className={styles.linklist}>
      {isLoading? (
      <h1>loading...</h1>
      ) : (   
        <ul> {movies.map(movie => {
          const {id, name} = movie;
          return (
          <li key={id}>
            <Link to={`/movies/${id}`} state={{movie}}>{name} </Link>
            </li>
            )})}
            </ul>
            )}
      </nav>
      <div className={styles.nestedpage} >
          <Outlet />
      </div>
    </div>
  ) 
}

export default Home;