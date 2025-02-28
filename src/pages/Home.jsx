import HeroBanner from "../Component/Herobanner";
import FlashSales from "../Component/FlashSales";
import ShopSection from "../Component/ShopSections";
import PromoBanner from "../Component/PromoBanner";
import ProductShowcase from "../Component/ProductShowcase";
import NewArrival from "../Component/NewArrival";
import Sidebar from "../Component/Sidebar";

const Home = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        {/* Sidebar */}
        <Sidebar />
        
        {/* Main Content */}
        <div className="col-md-9">
          <HeroBanner />
          <FlashSales />
          <ShopSection />
          <PromoBanner />
          <ProductShowcase />
          <NewArrival />
        </div>
      </div>
    </div>
  );
};

export default Home;
