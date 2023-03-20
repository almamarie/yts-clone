import Movie from "@/components/movie/Movie";
import { MovieType } from "@/util/types/movie";
import styles from "./page.module.css";

export default async function Home() {
  let movie;
  try {
    const response = await fetch("https://yts.mx/api/v2/list_movies.json");

    const jsonData = await response.json();

    movie = jsonData.data.movies[12];
  } catch (error) {
    console.log(error);
  }

  return (
    <section className={styles.main}>
      <Movie movie={movie} />
    </section>
  );
}
