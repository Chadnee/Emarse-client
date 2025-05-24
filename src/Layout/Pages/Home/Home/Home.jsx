import About from "../About/About";
import Arrival from "../Arrival/Arrival";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Benefits from "../Benefits/Benefits";
import BenefitsForSmall from "../Benefits/BenefitsForSmall";
import Category from "../Category/Category";
import FlashProduct from "../FlasProduct/FlashProduct";
import JustForProducts from "../JustForProducts/JustForProducts";



const Home = () => {
    return (
        <div className="md:mx-20 overflow-hidden ">
           <Banner></Banner>
           <Benefits></Benefits>
           <FlashProduct></FlashProduct>
           <Category></Category>
           <JustForProducts></JustForProducts>
           {/* <Arrival></Arrival> */}
           <BenefitsForSmall></BenefitsForSmall>
           <About></About>
        </div>
    );
};

export default Home;