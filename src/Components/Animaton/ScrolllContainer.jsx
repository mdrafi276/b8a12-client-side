import { useEffect, useRef } from "react";
import LocomotiveScroll from "locomotive-scroll";

const ScrollContainer = ({ children }) => {
  const scrollRef = useRef(null);

  useEffect(() => {
    const scroll = new LocomotiveScroll({
      el: scrollRef.current,
      smooth: true, // Add other options here
    });

    return () => {
      scroll.destroy();
    };
  }, []);

  return (
    <div
      className=" bg-[#030415]
    //    max-h-[1000px] md:max-h-[2000px]
       "
      ref={scrollRef}
    >
      {children}
    </div>
  );
};

export default ScrollContainer;
