/* eslint-disable @next/next/no-img-element */
import IconStar from "@/components/icons/star";
import Movie from "@/components/movie/Movie";
import { MovieType } from "@/util/types/movie";
import HomePage from "@/components/pages/home/HomePage";

export type HomePageDataType = {
  featured: MovieType[];
  latestMovies: MovieType[];
  upcoming: MovieType[];
};

export default async function Home() {
  const data: HomePageDataType = {
    featured: [],
    latestMovies: [],
    upcoming: [],
  };
  try {
    let response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?limit=8&sort=year$order_by=desc"
    );
    let jsonData = await response.json();
    if (jsonData.status !== "ok") {
      throw new Error("Error fetching Data");
    }

    data.featured = jsonData.data.movies;

    response = await fetch(
      "https://yts.mx/api/v2/list_movies.json?limit=8&sort=date_added$order_by=desc"
    );

    jsonData = await response.json();

    if (jsonData.status !== "ok") {
      throw new Error("Error fetching Data");
    }

    data.latestMovies = jsonData.data.movies;

    response = await fetch("https://yts.mx/api/v2/list_upcoming.json");

    if (jsonData.status !== "ok") {
      throw new Error("Error fetching Data");
    }
    // console.log(jsonData.data.movies);
    data.upcoming = jsonData.data.movies;
  } catch (error) {
    console.log(error);
  }

  return <HomePage data={data} />;
}
