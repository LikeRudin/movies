import { useEffect, useState } from "react";

interface Movie {
  id: number;
  name: string;
  thumbnail: {
    path: string,
    extension: string
  }
}

const Home =() => {
  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState<Movie[]>([]);
  const getMovies = async () => {
    const json = await( await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
    )).json();
    setMovies(json.data.results);
    console.log(json.data.results);
    setIsLoading( false);
  }
  useEffect(() => {
    getMovies();}, []);

  return (
      <div>{isLoading? <h1>loading...</h1> 
                      : movies.map(movie =>{
                        const {id, name, thumbnail: {path, extension}} = movie;
                        return (<li key ={id}>
                          {name} 
                          <br/>
                          <img src={`${path}.${extension}`}/>
                          </li>
                          )
                        })
                        }</div>)
                      }

export default Home;