import {FaFacebook, FaInstagram, FaLinkedin} from 'react-icons/fa';

export default function Footer() {
  return (
    <footer className="footer">
      <ul className="social_list">
        <li>
          <FaFacebook />
        </li>
        <li>
          <FaInstagram />
        </li>
        <li>
          <FaLinkedin />
        </li>
      </ul>
      <p className="copyright">
        <span>Costs</span> &copy; {new Date().getFullYear()}
      </p>
    </footer>
  )
}