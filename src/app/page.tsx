/* eslint-disable @next/next/no-img-element */
import IconStar from "@/components/icons/star";
import Movie from "@/components/movie/Movie";
import { MovieType } from "@/util/types/movie";
import Image from "next/image";
import Link from "next/link";
import styles from "./page.module.css";

export default async function Home() {
  var movies: MovieType[] = [];
  try {
    const response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?limit=8&sort=year$order_by=desc"
    );

    const jsonData = await response.json();

    if (jsonData.status !== "ok") {
      throw new Error("Error fetching Data");
    }

    movies = jsonData.data.movies;
    console.log(movies.length);
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
      <div className={styles.category}>
        <h4>
          <IconStar /> Popular Downloads
        </h4>
        <Link href={"/"}>More Featured</Link>
      </div>
      <div className={styles["horizontal-line"]}></div>
      <ul className={styles.movies}>
        {movies &&
          movies.map((movie, index) => {
            return (
              <li key={index} className={styles.movie}>
                <Movie movie={movie} />
              </li>
            );
          })}
      </ul>
    </section>
  );
}
