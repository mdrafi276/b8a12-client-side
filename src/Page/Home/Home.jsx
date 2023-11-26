
import CopyBanner from "../../Components/Banner/BannerTwo";
import ExtraAnimaton from "../../Components/ExtraAnimation/ExtraAnimaton";
import Footer from "../../Components/Footer/Footer";
import Navber from "../../Components/Navber/Navber";
import Service from "../../Components/Service/Service";
import Testimonial from "../../Components/Testimonial/Testimonial";
import Timeline from "../../Components/Timeline/Timeline";
import AddRiview from "../AddRiview/AddRiview";



const Home = () => {
    return (
        <div>
            <Navber></Navber>
            <CopyBanner></CopyBanner>
            <Service></Service>
            <Timeline></Timeline>
            <ExtraAnimaton></ExtraAnimaton>
            <AddRiview></AddRiview>
            <Testimonial></Testimonial>
            <Footer></Footer>
        </div>
    );
};

export default Home;