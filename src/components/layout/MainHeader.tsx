import styles from "./MainHeader.module.scss";
import Logo from "../ui/logos/Logo";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <Logo />
        <h3>HD movies at the smallest file size</h3>
      </div>

      <div className="navigation">
        <input
          className={styles["navigation-search"]}
          type="search"
          placeholder="Quick search"
        />
        <nav className={styles.nav}>
          <Link href="/home">Home</Link>
          <Link className="highlight" href="/browse-movies">
            4K
          </Link>
          <Link href="/trending-movies">Trending</Link>
          <Link href="/browse-movies">Browse Movies</Link>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
