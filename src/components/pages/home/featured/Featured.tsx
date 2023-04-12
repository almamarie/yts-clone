import IconStar from "@/components/icons/star";
import Movie from "@/components/movie/Movie";
import { MovieType } from "@/util/types/movie";
import Link from "next/link";
import { Fragment } from "react";
import styles from "./Featured.module.css";

const Featured: React.FC<{ featured: MovieType[] }> = (props) => {
  const featured = props.featured;
  return (
    <Fragment>
      <section className={styles.section}>
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
        <ul className="movies">
          {featured &&
            featured.map((movie, index) => {
              return (
                <li key={index} className="movie">
                  <Movie movie={movie} />
                </li>
              );
            })}
        </ul>
      </section>
      <section></section>
    </Fragment>
  );
};

export default Featured;
