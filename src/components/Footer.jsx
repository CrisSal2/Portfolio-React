import { FaGithub, FaStackOverflow, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

function Footer() {
  return (
    <footer>
      <div className="footer">
        <div className="icons">
          <a
          className="icon"
            href="https://github.com/crissal2"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub />
          </a>
          <a
          className="icon"
            href="https://www.linkedin.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin />
          </a>
          <a
          className="icon"
            href="https://stackoverflow.com/users/23596149/cizanagi"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaStackOverflow />
          </a>
          <a 
          className="icon"
          href="mailto:salgado.chris.m@gmail.com">
            <MdEmail />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;