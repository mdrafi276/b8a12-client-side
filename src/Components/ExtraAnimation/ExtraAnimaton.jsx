import './ExtraAnimation.css'
const ExtraAnimaton = () => {
    return (
      <div>
        <div className="bg-black lg:block hidden pt-[12.25rem] pb-[30.25rem] d-flex justify-content-center align-items-center">
          <div className="obj w-[500Px] h-[500px]  mx-auto">
            <div className="objchild">
              <div>
                <div className="container ">
                  <svg
                    className="svg-icon"
                    height="100"
                    preserveAspectRatio="xMidYMid meet"
                    viewBox="0 0 100 100"
                    width="100"
                    x="0"
                    xmlns="http://www.w3.org/2000/svg"
                    y="0"
                  >
                    <path d="M62.11,53.93c22.582-3.125,22.304-23.471,18.152-29.929-4.166-6.444-10.36-2.153-10.36-2.153v-4.166H30.099v4.166s-6.194-4.291-10.36,2.153c-4.152,6.458-4.43,26.804,18.152,29.929l5.236,7.777v8.249s-.944,4.597-4.833,4.986c-3.903,.389-7.791,4.028-7.791,7.374h38.997c0-3.347-3.889-6.986-7.791-7.374-3.889-.389-4.833-4.986-4.833-4.986v-8.249l5.236-7.777Zm7.388-24.818s2.833-3.097,5.111-1.347c2.292,1.75,2.292,15.86-8.999,18.138l3.889-16.791Zm-44.108-1.347c2.278-1.75,5.111,1.347,5.111,1.347l3.889,16.791c-11.291-2.278-11.291-16.388-8.999-18.138Z"></path>
                  </svg>
                  <div className="container__star">
                    <div className="star-eight"></div>
                  </div>

                  <div></div>
                </div>
              </div>
              <span className="inn6">
                <img
                  className="w-full hover:animate-spin "
                  src="../../../src/assets/user.png"
                  alt=""
                />{" "}
              </span>
            </div>
          </div>
        </div>
      </div>
    );
};

export default ExtraAnimaton;