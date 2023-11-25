import './Banner.css'
const Banner = () => {
    return (
      <div>
        <div className="w-[100%]  md:-mt-[170px]">
          <video
            className="w-full md:h-[662px]   lg:h-[760px]"
            muted
            
            autoPlay
            src="../../../src/assets/background_-_23088 (720p).mp4"
          ></video>
        </div>
        <div className="absolute lg:-mt-[500px] md:ml-[80px] -mt-[203px] md:-mt-[460px] md:w-[600px] lg:w-[900px] lg:ml-[227px] md:h-[300px] lg:h-[400px]">
          <div className=" flex flex-col items-center justify-center lg:mt-10 text-center w-[80%] md:w-[90%] mx-auto">
            <h1 className=" md:text-4xl h-one lg:text-6xl text-sm font-bold text-white uppercase">
              Payroll & HR Solutions
            </h1>
            <p className=" text-white md:text-[12px] text-[10px] lg:text-[16px] mt-5">
              Save time and improve payroll accuracy with the latest in time and
              attendance software. However you prefer to track employee time, we
              have flexible options to fit your business.
            </p>
            <div className="w-[90%] flex items-center justify-center mt-4 mx-auto ">
              {/* <button className="c-button c-button--gooey">
                {" "}
                hover me
                <div className="c-button__blobs">
                  <div></div>
                  <div></div>
                  <div></div>
                </div>
              </button> */}
              <buttone className="btn-1  btn backdrop-blur border-white hover:border-none border  ">
               
                Get Stant
              </buttone>
            </div>
          </div>
        </div>
        <div className=" absolute w-[100%] md:-mt-[200px] -mt-[15px] lg:-mt-[100px] flex justify-center">
          <button className="mouse animate-bounce ">
            <div className="scroll"></div>
          </button>
        </div>
        
      </div>
    );
};

export default Banner;