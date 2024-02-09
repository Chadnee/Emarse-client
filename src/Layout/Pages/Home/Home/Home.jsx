import Arrival from "../Arrival/Arrival";
import Banner from "../Banner/Banner";
import Banner2 from "../Banner2/Banner2";
import Benefits from "../Benefits/Benefits";
import Category from "../Category/Category";
import FlashProduct from "../FlasProduct/FlashProduct";
import JustForProducts from "../JustForProducts/JustForProducts";



const Home = () => {
    return (
        <div className="mx-20">
           <Banner></Banner>
           <Benefits></Benefits>
           <FlashProduct></FlashProduct>
           <Category></Category>
           <JustForProducts></JustForProducts>
           <Arrival></Arrival>
        </div>
    );
};

export default Home;