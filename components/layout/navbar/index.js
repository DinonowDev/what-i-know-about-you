// import style
import classes from "./style.module.scss";

// import icons
import { FaGithub, FaTelegram, FaInstagram, FaLinkedin } from "react-icons/fa";

const Navbar = () => {
  return (
    <div className={classes.navbar}>
      <div className={classes.navbarContainer}>
        <span className={classes.donateUs}>حمایت از ما</span>
        <h1 className={classes.title}>
          من چی میدونم <span className={classes.titleQ}>؟</span>
        </h1>
        <div className={classes.icons}>
          <a href="https://github.com/DinonowDev/what-i-know">
            <FaGithub />
          </a>
          <a href="https://t.me/DailyDinonowDev">
            <FaTelegram />
          </a>
          <a href="https://instagram.com/amirre_83">
            <FaInstagram />
          </a>
          <a href="https://www.linkedin.com/in/amirhossein-rezaei-268635232/">
            <FaLinkedin />
          </a>
        </div>
      </div>
    </div>
  );
};

export default Navbar;