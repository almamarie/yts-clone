/* eslint-disable @next/next/no-img-element */
"use client";
import { MovieType } from "@/util/types/movie";
import { useState } from "react";
import StarIcon from "../icons/star";
import Button from "../ui/button/Button";
import styles from "./Movie.module.css";

const Movie: React.FC<{ movie: MovieType }> = (props) => {
  const [showCaption, setShowCaption] = useState<boolean>(false);
  const { movie } = props;
  const wrapperStyles = `${styles.wrapper} ${{
    "background-image": props.movie.background_image_original,
  }}`;

  function mouseEnter() {
    console.log(showCaption);
    setShowCaption(true);
  }

  function mouseOut() {
    console.log(showCaption);
    setShowCaption(false);
  }

  return (
    <div>
      <figure
        className={wrapperStyles}
        onMouseEnter={mouseEnter}
        onMouseLeave={mouseOut}
      >
        <img
          className={styles.image}
          src={movie.medium_cover_image}
          alt={movie.title}
        />

        {showCaption && (
          <figcaption className={styles["figure-caption"]}>
            <StarIcon />
            <h4 className={styles.rating}>{`${movie.rating} / 10`}</h4>
            <h4 className={styles.genres}>
              {movie.genres.length === 1
                ? movie.genres
                : movie.genres.slice(0, 2).map((gen, index) => {
                    return (
                      <span className={styles.genre} key={index}>
                        {gen}
                      </span>
                    );
                  })}
            </h4>
            <div className={styles.button}>
              <Button type="button" text="View Details" />
            </div>
          </figcaption>
        )}
      </figure>
      <div className={styles.title}>
        <h4>{movie.title}</h4>
        <p>{movie.year}</p>
      </div>
    </div>
  );
};

export default Movie;
