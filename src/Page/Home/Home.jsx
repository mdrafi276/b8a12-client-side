
import Banner from "../../Components/Banner/Banner";
import Footer from "../../Components/Footer/Footer";
import Navber from "../../Components/Navber/Navber";
import Timeline from "../../Components/Timeline/Timeline";

const Home = () => {
    return (
        <div>
            <Navber></Navber>
        <Banner></Banner>
            <Timeline></Timeline>
            <Footer></Footer>
        </div>
    );
};

export default Home;