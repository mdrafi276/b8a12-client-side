import Swal from "sweetalert2";
import Navber from "../../Components/Navber/Navber";

const ContactUs = () => {
  const handlSubmit = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const number = form.number.value;
    const email = form.email.value;
    const feedback = form.feedback.value;
    const newRiview = {
      feedback,
      name,
      number,
      email,
    };

    fetch("https://companny-server.vercel.app/contact", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newRiview),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            icon: "success",
            title: "success",
            text: " succesfull",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  };
  return (
    <div>
      <Navber></Navber>
      <div></div>
      <div>
        <div className=" body-font anime-one relative">
          <div className=" px-5 py-24 mx-auto">
            <div className="flex flex-col text-center w-full mb-12">
              <h1 className="sm:text-3xl md:text-5xl  font-bold title-font mb-4 text-white">
                Contact Us
              </h1>
            </div>
            <div className="lg:w-1/2 md:w-2/3 mx-auto">
              <form onSubmit={handlSubmit}>
                <div className="flex flex-wrap -m-2">
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label className="leading-7  text-sm text-white">
                        Name
                      </label>
                      <input
                        type="text"
                        name="name"
                        placeholder="Name"
                        className="input border-white  input-bordered w-full max-w-xs"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-1/2">
                    <div className="relative">
                      <label className="leading-7 text-sm text-white">
                        Phone Number
                      </label>
                      <input
                        type="number"
                        name="number"
                        placeholder="Phone Number"
                        className="input   input-bordered border-white w-full max-w-xs"
                      />
                    </div>
                  </div>
                  <div className="p-2 w-full ">
                    <div className="relative">
                      <label className="leading-7 text-sm text-white">
                        E-mail
                      </label>
                      <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        className="input input-bordered border-white w-full "
                      />
                    </div>
                  </div>
                  <div className="p-2  w-full">
                    <div className="relative">
                      <label className="leading-7  text-sm  text-white">
                        Message
                      </label>

                      <textarea
                        id="message"
                        name="feedback"
                        className="w-full  border-2`  bg-opacity-50 rounded border border-gray-300  focus:border-indigo-500 bg-transparent  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-white py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                      ></textarea>
                    </div>
                  </div>
                  <div className="p-2 w-full">
                    <button
                      type="submit"
                      className="flex btn btn-three mx-auto text-white bg-transparent border-2  rounded text-lg"
                    >
                      Submit
                    </button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
