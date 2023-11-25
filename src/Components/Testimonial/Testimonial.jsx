import { useEffect, useState } from "react";
import { Carousel } from "react-responsive-carousel";
import CorosolMap from "./CorosolMap";
import "react-responsive-carousel/lib/styles/carousel.min.css";
const Testimonial = () => {
  const [corosoulData, setCorousolData] = useState();
  console.log(corosoulData);
  useEffect(() => {
    fetch("./public/Rivew.json")
      .then((res) => res.json())
      .then((data) => setCorousolData(data));
  }, []);
  return (
    <div className="lg:mt-52 lg:mb-52 mt-10 md:mt-20">
      <div className="text-center md:mt-20 lg:mb-20 mt-10">
        <h1 className="text-white text-5xl font-bold h-one">
          USER TESTIMONIALS
        </h1>
      </div>
      <Carousel>
        {corosoulData?.map((corosul) => (
          <CorosolMap key={corosul.id} corosul={corosul}></CorosolMap>
        ))}
      </Carousel>
    </div>
  );
};

export default Testimonial;
