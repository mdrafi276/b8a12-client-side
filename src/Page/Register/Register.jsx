import { useContext, useState } from "react";
import { AuthContext } from "../../../src/Components/Provider/AuthProvider";
import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import "./Register.css";
import { FaCamera, FaPen, FaRegEnvelope, FaUnlock } from "react-icons/fa";
import { updateProfile } from "firebase/auth";

const Register = () => {
  // eslint-disable-next-line no-unused-vars
  const [error, setError] = useState("");
  const { createUser } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();

  const handleRegister = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);

    setError("");

    if (password.length < 6) {
      setError(
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Pass should have at 6 ceracters or longer!",
          footer: '<a href="">Why do I have this issue?</a>',
        })
      );
      return;
    } else if (/^(?=.*[/W_]).*$/.test(password)) {
      setError(
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Your password should have at last upper case  and Special cheracters !",
          footer: '<a href="">Why do I have this issue?</a>',
        })
      );
      return;
    } else {
      createUser(email, password)
        .then((result) => {
          updateProfile(result.user, {
            displayName: name,
            photoURL: photo,
          }).then(() => {
            Swal.fire({
              icon: "Success!",
              title: "Success",
              text: "Your register Success!",
              footer: '<a href="">Why do I have this issue?</a>',
            });
          });
          // navigate ater register
          navigate(location?.state ? location.state : "/");
        })
        .catch((error) => {
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: " register faild Something went wrong!",
            footer: '<a href="">Why do I have this issue?</a>',
          })(error);
        });
    }
  };
  return (
    <div className="bg-[#08051A]">
      <div className="body">
        <section>
          <div
            className="login-box"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1200"
          >
            <form onSubmit={handleRegister}>
              <div className="input-box">
                <span className="icon">
                  <FaPen></FaPen>
                </span>

                <input type="text" name="name" required id="" />
                <label>Name</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <FaCamera></FaCamera>
                </span>
                <input className="" type="file" name="photo" required id="" />
                
                
              </div>
              <div className="input-box">
                <span className="icon">
                  <FaRegEnvelope></FaRegEnvelope>
                </span>
                <input
                  className="p-5"
                  type="email"
                  required
                  name="email"
                  id=""
                />
                <label className="lebel-container">Email</label>
              </div>
              <div className="input-box">
                <span className="icon">
                  <FaUnlock></FaUnlock>
                </span>
                <input type="password" name="password" required id="" />
                <label>Password</label>
              </div>
              <div className="remember-forgot">
                <label>
                  <input type="checkbox" name="" id="" />
                  Remember Me
                </label>
              </div>
              <button id="i-am-tu-obak" className="submit-btn" type="submit">
                Register
              </button>
              <div className="register-link">
                <p>
                  AllRedy haven Account :{" "}
                  <Link to="/login" className="hover:text-blue-600 underline">
                    Login
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Register;
