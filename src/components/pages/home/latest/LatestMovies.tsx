import Movie from "@/components/movie/Movie";
import { MovieType } from "@/util/types/movie";
import styles from "./LatestMovies.module.css";

const LatestMovies: React.FC<{ latest: MovieType[] }> = (props) => {
  return (
    <section>
      <header className={styles.header}>
        <h3>Latest YIFY Movies Torrents</h3>
        <p>Browse All</p>
      </header>

      <ul className="movies">
        {props.latest &&
          props.latest.map((movie, index) => {
            return (
              <li key={index} className="movie">
                <Movie movie={movie} />
              </li>
            );
          })}
      </ul>
    </section>
  );
};

export default LatestMovies;
