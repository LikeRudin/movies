import { useEffect, useState } from "react";

const App =() => {
  const [isLoading, setIsLoading] = useState(true);
  const printMovieDatas = async () => {
    const json = await( await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50&orderBy=modified&series=24229,1058,2023`
    )).json();
    setIsLoading(false);
    console.log(json);
  }
  useEffect(() => {printMovieDatas}, [])
  return (<div>{isLoading? <h1>loading...</h1> : null}</div>)
}

export default App;