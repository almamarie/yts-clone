import { HomePageDataType } from "@/app/page";
import IconStar from "@/components/icons/star";
import Movie from "@/components/movie/Movie";
import Link from "next/link";
import { Fragment } from "react";
import Featured from "./featured/Featured";
import styles from "./HomePage.module.css";
import LatestMovies from "./latest/LatestMovies";

const HomePage: React.FC<{ data: HomePageDataType }> = (props) => {
  return (
    <Fragment>
      <Featured featured={props.data.featured} />
      <LatestMovies latest={props.data.latestMovies} />
    </Fragment>
  );
};

export default HomePage;
