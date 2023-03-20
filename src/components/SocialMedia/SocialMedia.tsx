import IconTwitter from "@/components/icons/twitter";
import IconGitHub from "../icons/github";
import IconInstagram from "../icons/instagram";
import IconLinkedin from "../icons/linkedin";
import styles from "./SocialMedia.module.css";

const SocialMedia = () => {
  return (
    <div className={styles.wrapper}>
      <a
        className={`${styles.icon} ${styles.instagram}`}
        href="https://www.instagram.com/marieloumaar/"
      >
        <IconInstagram />
      </a>

      <a
        className={`${styles.icon} ${styles.twitter}`}
        href="https://twitter.com/MarieLoumar"
      >
        <IconTwitter />
      </a>

      <a
        className={`${styles.icon} ${styles.linkedin}`}
        href="https://www.linkedin.com/in/marieloumar/"
      >
        <IconLinkedin />
      </a>
      <a
        className={`${styles.icon} ${styles.github}`}
        href="https://github.com/almamarie"
      >
        <IconGitHub />
      </a>
    </div>
  );
};

export default SocialMedia;
