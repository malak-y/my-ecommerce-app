import { Swiper, SwiperSlide } from "swiper/react";
import { AiFillApple } from "react-icons/ai";
const HeroBanner = () => {
  return (
    <Swiper>
      <SwiperSlide>
        <div
          className="d-flex justify-content-between align-items-center text-white p-5"
          style={{ backgroundColor: "#000000" }} 
        >
        <div className="mb-4">
  <h5
    className="mb-3 d-flex align-items-center gap-2"
    style={{ marginTop: "-59px" }} 
  >
    <AiFillApple size={24} /> iPhone 14 Series
  </h5>
            <h2 className="fw-bold">Up to 10% off Voucher</h2>
            <button className="btn text-white text-decoration-underline border-0 p-0">
  Shop Now →
</button>
          </div>
          <img
          src="/Screenshot_746.png"
            alt="E-commerce Banner"
            className="img-fluid"
            style={{ width: "700px", height: "400px" }}
          />
        </div>
      </SwiperSlide>
    </Swiper>
  );
};
export default HeroBanner