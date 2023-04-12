export async function getMovieDetails(movieId: string) {
  try {
    const response = await fetch(
      `https://yts.mx/api/v2/movie_details.json?movie_id=${movieId}&with_images=true&with_cast=true`
    );

    const data = await response.json();

    console.log(data);
  } catch (error) {
    throw new Error("Error fetching movie");
  }
}
