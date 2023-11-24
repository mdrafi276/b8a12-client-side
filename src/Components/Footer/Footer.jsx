import "./Footer.css";
import {
  FaFacebook,
  FaGithub,
  FaGoogle,
  FaPhoneSquare,
  FaRegEnvelope,
  FaRegUserCircle,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <div className=" mt-0 ">
        <footer className="footer  section-footers lg:h-[500px] pl-10 pt-5 md:pt-24   ">
          <nav className="">
            <header className="  text-white hover:text-white footer-title">
              CONTACT US
            </header>
            <Link
              to="/"
              className="link text-gray-400 hover:text-orange-500 cursor-pointer link-hover"
            >
              The simple contact form below comes
            </Link>
            <Link className="link text-gray-400 hover:text-orange-500 cursor-pointer link-hover">
              packed within this theme.
            </Link>
            <Link className="link text-gray-400 hover:text-orange-500 cursor-pointer link-hover">
              Mailing address:
            </Link>
            <Link className="link text-gray-400 hover:text-orange-500 cursor-pointer link-hover">
              877 Filbert Street
            </Link>
            <Link className="link text-gray-400 hover:text-orange-500 cursor-pointer link-hover">
              Chester, PA 19013
            </Link>
          </nav>
          <nav>
            <header className=" text-white footer-title">FAVOURITES</header>
            <Link className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover">
              A to Z Index
            </Link>
            <Link className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover">
              Admissions
            </Link>
            <Link className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover">
              Bookstore
            </Link>
            <Link className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover">
              Catalog / Classes
            </Link>
            <Link className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover">
              Dining
            </Link>
            <Link className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover">
              Financial Aid
            </Link>
          </nav>
          <nav>
            <header className=" text-white footer-title">RESOURCES FOR</header>
            <Link
              to="/"
              className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover"
            >
              Future Students
            </Link>
            <Link
              to="/"
              className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover"
            >
              Current Students
            </Link>
            <Link
              to="/"
              className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover"
            >
              Faculty/Staff
            </Link>
            <Link
              to="/"
              className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover"
            >
              International
            </Link>
            <Link
              to="/"
              className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover"
            >
              Postdocs
            </Link>
            <Link
              to="/"
              k
              className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover"
            >
              Alumni
            </Link>
          </nav>
          <nav>
            <header className=" text-white footer-title">FAVOURITES</header>
            <Link
              to="/"
              className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover"
            >
              Courses
            </Link>
            <Link
              to="/"
              className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover"
            >
              Apply Now
            </Link>
            <Link
              to="/"
              className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover"
            >
              FAQs
            </Link>
            <Link
              to="/"
              className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover"
            >
              Scholarships
            </Link>
            <Link
              to="/"
              className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover"
            >
              International student
            </Link>
            <Link
              to="/"
              className="link  text-gray-400 hover:text-orange-500 cursor-pointer link-hover"
            >
              enquiries
            </Link>
          </nav>
          <nav>
            <header className="text-white  footer-title">Social</header>
            <div className="grid grid-cols-3 gap-4">
              <Link className="text-white text-2xl">
                <FaFacebook></FaFacebook>
              </Link>
              <Link className="text-white  text-2xl">
                <FaGithub></FaGithub>
              </Link>
              <Link className="text-white text-2xl">
                <FaGoogle></FaGoogle>
              </Link>

              <Link className="text-white text-2xl">
                <FaPhoneSquare></FaPhoneSquare>
              </Link>
              <Link className="text-white text-2xl">
                <FaRegUserCircle></FaRegUserCircle>
              </Link>
              <Link className="text-white text-2xl">
                <FaRegEnvelope></FaRegEnvelope>
              </Link>
            </div>
          </nav>
        </footer>
      </div>
    </div>
  );
};

export default Footer;
