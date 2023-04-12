import styles from "./MainHeader.module.css";
import Logo from "../ui/logos/Logo";
import Link from "next/link";

const MainHeader = () => {
  return (
    <header className={styles.wrapper}>
      <div className={styles.logo}>
        <Link href="/">
          <Logo />
        </Link>
        <h3>HD movies at the smallest file size</h3>
      </div>

      <div className={styles.navigation}>
        <input
          className={styles["navigation-search"]}
          type="search"
          placeholder="Quick search"
        />
        <nav className={styles.nav}>
          <Link href="/">Home</Link>
          <Link href="/browse-movies">
            <span className={styles["four-k"]}>4K</span>
          </Link>
          <Link href="/trending-movies">Trending</Link>
          <Link href="/browse-movies">Browse Movies</Link>
          <div className={styles.auth}>
            <Link href="/sign-in">Login</Link>
            <div className={styles.bar}></div>
            <Link href="/register">Register</Link>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default MainHeader;
