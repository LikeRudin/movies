const fetchDetailData = async (movieId: number) => {
      const response = await fetch(`movies/${movieId}`);
      if (!response.ok) {
        throw new Error("Failed to fetch movie data");
      }
      const movieData = await response.json();
      return movieData;
}

export default fetchDetailData;