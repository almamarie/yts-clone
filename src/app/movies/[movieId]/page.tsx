"use client";
import { getMovieDetails } from "@/util/http/movie";
import { useEffect } from "react";
import styles from "./page.module.css";

export default function Home({ params }: { params: { movieId: string } }) {
  const { movieId } = params;
  let movieDetails;

  // useEffect(() => {
  //   try {
  //     const movieDetails = await getMovieDetails(movieId);
  //   } catch (error) {
  //     throw new Error("An error occured");
  //   }
  // }, [movieId]);
  return (
    <main className={styles.wrapper}>
      <h1>{params.movieId}</h1>
    </main>
  );
}
