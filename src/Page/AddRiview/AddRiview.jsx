// import Swal from "sweetalert2";
import Swal from "sweetalert2";
import "./AddRiview.css";
const AddRiview = () => {
  const handleriview = (e) => {
    e.preventDefault();
    const form = e.target;
    const name = form.name.value;
    const image = form.image.value;
    const feedback = form.feedback.value;
    const newRiview = {
      feedback,
      name,
      image,
    };

    fetch("https://companny-server.vercel.app/riview", {
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
            text: "Rieview succesfull",
            footer: '<a href="">Why do I have this issue?</a>',
          });
        }
      });
  };

  return (
    <div className="anime">
      <div className="text-gray-600 body-font relative">
        <div className=" px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-12">
            <h1 className="sm:text-3xl md:text-5xl h-one  font-bold title-font mb-4 text-gray-900">
              Add Riview
            </h1>
          </div>
          <div className="lg:w-1/2 md:w-2/3 mx-auto">
            <form onSubmit={handleriview}>
              <div className="flex flex-wrap -m-2">
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7   text-sm text-white">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      className="input border-white text-white focus:border-white dark:border-2 h-one input-bordered w-full max-w-xs"
                    />
                  </div>
                </div>
                <div className="p-2 w-1/2">
                  <div className="relative">
                    <label className="leading-7  text-sm text-white">
                      Rating
                    </label>
                    <input
                      type="text"
                      name="ratting"
                      placeholder="rating"
                      className="input h-one focus:border-white  text-white  dark:border-2 input-bordered border-white w-full max-w-xs"
                    />
                  </div>
                </div>
                <div className="p-2 w-full ">
                  <div className="relative">
                    <label className="leading-7 text-sm text-white">
                      Photo url
                    </label>
                    <input
                      type="text"
                      name="image"
                      placeholder="photo"
                      className="input h-one  focus:border-white dark:border-2  text-white input-bordered border-white w-full "
                    />
                  </div>
                </div>
                <div className="p-2 h-one w-full">
                  <div className="relative">
                    <label className="leading-7  text-sm h-one text-white">
                      Message
                    </label>

                    <textarea
                      id="message"
                      name="feedback"
                      className="w-full  border-2`  bg-opacity-50 rounded border  border-gray-300 h-one focus:border-indigo-500 bg-transparent  focus:ring-2 focus:ring-indigo-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
                    ></textarea>
                  </div>
                </div>
                <div className="p-2 w-full">
                  <button
                    type="submit"
                    className="flex btn btn-three mx-auto border-2 text-white bg-transparent border-white  rounded text-lg"
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
  );
};

export default AddRiview;
