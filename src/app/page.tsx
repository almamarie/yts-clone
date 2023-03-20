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
    <section className={styles.wrapper}>
      <header className={styles.header}>
        <h2>Download YTS YIFY movies: HD smallest size</h2>
        <p>
          Welcome to the official YTS.MX website. Here you can browse and
          download YIFY movies in excellent 720p, 1080p, 2160p 4K and 3D
          quality, all at the smallest file size. YTS Movies Torrents.
        </p>
        <a href="#">
          IMPORTANT - YTS.MX is the only new official domain for YIFY Movies
        </a>
        <a href="#" className={styles.announcement}>
          🕺 Keanu Reeves & 💋 Ana de Armas will star in &apos;John Wick&apos;
          spin-off, 🌟 ‘BALLERINA’.
        </a>
      </header>
      <div className="horizontal-line"></div>
    </section>
  );
}
