import Swal from "sweetalert2";
import { updateProfile } from "firebase/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../../Components/Provider/AuthProvider";
import { useContext, useState } from "react";
import { GrFilter,  } from "react-icons/gr";

const RegisterTwo = () => {
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
    const bankAccount = form.bankAccount.value;
    const salary = form.salary.value;
    console.log(name, photo, bankAccount, salary, email, password);

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
    <section className="bg-[#010313] dark:bg-white h-[100vh]">
      {/* Add products prentet container  */}
      <div className="bg-transparent backdrop-blur border border-white lg:mt-0 text-white lg:w-[1000px] mx-auto w-full rounded-2xl lg:h-[500px]">
        {/* <div className="text-center text-white ">
          <h1 className=" text-2xl lg:text-4xl pt-5 lg:pt-10">Register</h1>
        </div> */}
        <form onSubmit={handleRegister}>
          <div className=" text-white grid grid-cols-1 lg:grid-cols-2  lg:mt-10 gap-4 w-full lg:gap-10 lg:ml-5">
            <div className="lg:w-[450px]">
              <div className="relative h-10 lg:h-14 w-full  md:min-w-[200px]">
                <input
                  type="text"
                  name="name"
                  required
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 duration-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder="  "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 duration-300 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 duration-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 duration-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 duration-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 duration-300">
                  Name
                </label>
              </div>
            </div>
            {/* input name */}
            <div className="lg:w-[450px]">
              <div className="relative h-10 lg:h-14 w-full  md:min-w-[200px]">
                <input
                  type="email"
                  name="email"
                  required
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 duration-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 duration-300 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 duration-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 duration-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 duration-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 duration-300">
                  Your Email
                </label>
              </div>
            </div>
            {/* input type */}
            <div className="lg:w-[450px]">
              <div className="relative h-10 lg:h-14 w-full  md:min-w-[200px]">
                <input
                  type="password"
                  required
                  name="password"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 duration-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 duration-300 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 duration-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 duration-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 duration-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 duration-300">
                  PassWord
                </label>
              </div>
            </div>
            {/* input price  */}
            <div className="lg:w-[450px]">
              <div className="relative h-10 lg:h-14 w-full  md:min-w-[200px]">
                <input
                  type="text"
                  required
                  name="bankAccount"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 duration-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 duration-300 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 duration-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 duration-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 duration-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 duration-300">
                  Bank Account
                </label>
              </div>
            </div>
            {/* input brind */}
            <div className="lg:w-[450px]">
              <div className="relative h-10 lg:h-14 w-full  md:min-w-[200px]">
                <input
                  type="text"
                  required
                  name="salary"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 duration-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 duration-300 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 duration-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 duration-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 duration-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 duration-300">
                  salary
                </label>
              </div>
            </div>
            {/* {/* input short */}
            {/* <div className="lg:w-[450px]">
              <div className="relative h-10 lg:h-14 w-full  md:min-w-[200px]">
                <input
                  type="text"
                  required
                  name="rating"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 duration-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 duration-300 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 duration-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 duration-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 duration-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 duration-300">
                  Your Ratting
                </label>
              </div>
            </div>
            <div className="lg:w-[450px]">
              <div className="relative h-10 lg:h-14 w-full  md:min-w-[200px]">
                <input
                  type="text"
                  required
                  name="rating"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 duration-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 duration-300 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 duration-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 duration-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 duration-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 duration-300">
                  Your Ratting
                </label>
              </div>
            </div>
            <div className="lg:w-[450px]">
              <div className="relative h-10 lg:h-14 w-full  md:min-w-[200px]">
                <input
                  type="text"
                  required
                  name="rating"
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 duration-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 duration-300 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 duration-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 duration-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 duration-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 duration-300">
                  Your Ratting
                </label>
              </div>
            </div> */}
          </div>
          <div className="">
            <div className="mt-5 lg:w-[960px] mx-auto">
              <div className="relative h-10 lg:h-14 w-full  md:min-w-[200px]">
                <input
                  type="file"
                  name="photo"
                  required
                  className="peer h-full w-full rounded-[7px] border border-blue-gray-200 border-t-transparent bg-transparent px-3 py-2.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border placeholder-shown:border-blue-gray-200 placeholder-shown:border-t-blue-gray-200 focus:border-2 focus:border-pink-500 duration-300 focus:border-t-transparent focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
                  placeholder=" "
                />
                <label className="before:content[' '] after:content[' '] pointer-events-none absolute left-0 -top-1.5 flex h-full w-full select-none text-[11px] font-normal leading-tight text-blue-gray-400 transition-all before:pointer-events-none before:mt-[6.5px] before:mr-1 before:box-border before:block before:h-1.5 before:w-2.5 before:rounded-tl-md before:border-t before:border-l before:border-blue-gray-200 before:transition-all after:pointer-events-none after:mt-[6.5px] after:ml-1 after:box-border after:block after:h-1.5 after:w-2.5 after:flex-grow after:rounded-tr-md after:border-t after:border-r after:border-blue-gray-200 after:transition-all peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[3.75] peer-placeholder-shown:text-blue-gray-500 duration-300 peer-placeholder-shown:before:border-transparent peer-placeholder-shown:after:border-transparent peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-pink-500 duration-300 peer-focus:before:border-t-2 peer-focus:before:border-l-2 peer-focus:before:border-pink-500 duration-300 peer-focus:after:border-t-2 peer-focus:after:border-r-2 peer-focus:after:border-pink-500 duration-300 peer-disabled:text-transparent peer-disabled:before:border-transparent peer-disabled:after:border-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500 duration-300">
                  Upload Photo <GrFilter />
                </label>
              </div>
            </div>
          </div>
          <div className="mt-5">
            <button
              type="submit"
              className="btn bg-transparent text-black backdrop-blur border border-white bg-white   hover:bg-white hover:text-black  w-full"
            >
              Register
            </button>
          </div>
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
  );
};

export default RegisterTwo;
