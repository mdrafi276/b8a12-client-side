const CorosolMap = ({ corosul }) => {
  const { image, name, feedback } = corosul;
  return (
    <div>
      <div className=" body-font text-[#E1AAFF]  mb-2 md:mb-20">
        <div className="container px-5 py-24 mx-auto">
          <div className=" flex flex-col justify-center ">
            <div className="  any-section  w-full lg:w-[800px]  mx-auto lg:mb-0 mb-6 p-4">
              <div className="h-full text-center ">
                <div className="w-[100px] mx-auto">
                  <img
                    className=" h-[100px] object-cover object-top  rounded-full"
                    src={image}
                    alt=""
                  />
                </div>

                <h2 className=" text-[#AE42EB] font-medium title-font tracking-wider text-sm">
                {feedback}
                </h2>

                <div className="rating mt-5 ">
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500 dark:bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500 dark:bg-orange-400"
                    checked
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500 dark:bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500 dark:bg-orange-400"
                  />
                  <input
                    type="radio"
                    name="rating-2"
                    className="mask mask-star-2 bg-orange-500 dark:bg-orange-400"
                  />
                </div>
                <h2 className="  text-[#AE42EB] font-medium title-font tracking-wider text-sm">
                  {name}
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CorosolMap;
