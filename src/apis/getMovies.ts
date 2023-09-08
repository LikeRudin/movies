export const getMovies = async () => {
    const json = await( await fetch(
      `https://marvel-proxy.nomadcoders.workers.dev/v1/public/characters?limit=50`
    )).json();
    return json.data.results;
}