import { Link, useLocation, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";
import { FaGoogle, FaRegEnvelope, FaUnlock } from "react-icons/fa";
import { AuthContext } from "../../../src/Components/Provider/AuthProvider";
import "./Login.css";
import { useContext } from "react";


const Login = () => {
  const { signIn, googleLogin } = useContext(AuthContext);
  const location = useLocation();
  // console.log("locatin page is comming  ", location);
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    const form = e.target;
    const email = form.email.value;
    const password = form.password.value;
    console.log(email, password);

    signIn(email, password)
      .then(() => {
        Swal.fire({
          icon: "Success",
          title: "Seccess",
          text: "Login in successfull !",
          footer: '<a href="">Why do I have this issue?</a>',
        });

        navigate(location?.state ? location.state : "/");
      })
      //  Swal.fire("Login success........");
      // .then(result => {
      //   const loggedInUser = result.user;
      //   console.log(loggedInUser);

      //   const user = {email};
      //   axios.post("https://hotel-server-theta.vercel.app/jwt", user ,{withCredentials:true})
      //   .then(res =>{
      //     console.log(res.data);
      //     if(res.data.success){
      //       navigate(location?.state ? location?.state : '/')
      //     }
      //   })

      // })
      .catch((error) => {
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Password dind not match  !",
          footer: '<a href="">Why do I have this issue?</a>',
        })(error);
      });
  };
  //   google login
  const hangleGoogleLogin = () => {
    googleLogin()
      .then(() => {
        Swal.fire({
          icon: "Success",
          title: "Login Success...",
          text: "Ligin success !",
          footer: '<a href="">Why do I have this issue?</a>',
        });
        navigate(location?.state ? location.state : "/");
      })
      .catch();
  };
  return (
    <div className="bg-[#08051A]">
      <div className="body  ">
        <section>
          <div
            className="login-box"
            data-aos="zoom-in"
            data-aos-easing="ease-out-cubic"
            data-aos-duration="1000"
          >
            <form onSubmit={handleLogin}>
              <div className="input-box">
                <span className="icon">
                  <FaRegEnvelope></FaRegEnvelope>
                </span>
                <input
                  className="p-5"
                  type="email"
                  name="email"
                  required
                  id=""
                />
                <label className="">Email</label>
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
                  <input type="checkbox" name="checkbox" id="" />
                  Remember Me
                </label>
              </div>
              <button className="submit-btn mt-10" type="submit">
                Login
              </button>
              <div className="register-link">
                <p className="">
                  <button
                    onClick={hangleGoogleLogin}
                    className="btn  hover:bg-white rounded-full hover:text-black btn-outline w-full"
                  >
                    <FaGoogle></FaGoogle>
                    Google
                  </button>
                  <div className="register-link">
                    <p>
                      Please Going to Register :{" "}
                      <Link
                        to="/register"
                        className="hover:text-blue-600 underline"
                      >
                        Register
                      </Link>
                    </p>
                  </div>
                </p>
              </div>
            </form>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Login;
