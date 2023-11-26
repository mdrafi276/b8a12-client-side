import './CopyBanner.css'
const CopyBanner = () => {
  return (
    <div>
      <div className="flex anime-one   md:-mt-[30px] flex-col md:flex-row items-center justify-center lg:gap-36 ">
        <div className=" ">
          <h1 className="lg:text-5xl text-center md:text-start md:text-4xl text-2xl   font-bold text-red-600">
            We make workforce <br />
            management
          </h1>
          <p className="py-6  text-[10px] md:text-[12px] lg:text-[14px]">
            Save time and improve payroll accuracy with the latest in time{" "}
            <br /> and attendance software. However br you prefer to track
            employee time, <br /> we have flexible options to fit your business.
          </p>
          <buttone className="btn-1 flex md:justify-start justify-center btn backdrop-blur border-white hover:border-none border  ">
            Get Stant
          </buttone>
        </div>

        <div className=" w-[250px] mt-10 md:mt-0 md:w-[300px] lg:w-[500px] ">
          <img
            className="w-full "
            src="https://i.ibb.co/C0mKsKn/google-pixal-72.jpg"
          />
        </div>
      </div>
      <div className=" absolute w-[100%] md:-mt-[30px]   lg:-mt-[160px] flex justify-center">
        <button className="mouse animate-bounce ">
          <div className="scroll"></div>
        </button>
      </div>
    </div>
  );
};

export default CopyBanner;