import { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./PromoBanner.css";
const PromoBanner = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 5,
    hours: 23,
    minutes: 59,
    seconds: 35,
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prevTime) => {
        let { days, hours, minutes, seconds } = prevTime;

        if (seconds > 0) {
          seconds--;
        } else {
          seconds = 59;
          if (minutes > 0) {
            minutes--;
          } else {
            minutes = 59;
            if (hours > 0) {
              hours--;
            } else {
              hours = 23;
              if (days > 0) days--;
            }
          }
        }
        return { days, hours, minutes, seconds };
      });
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="promo-banner d-flex align-items-center mb-5">
      <div className="content text-white ms-5">
        <p className="text-success fw-bold">Categories</p>
        <h1 className="fw-bold">Enhance Your Music Experience</h1>
        <div className="timer d-flex my-3">
          {Object.entries(timeLeft).map(([key, value], index) => (
            <div key={index} className="time-box text-center mx-2">
              <h4 className="fw-bold">{value.toString().padStart(2, "0")}</h4>
              <p className="text-uppercase">{key}</p>
            </div>
          ))}
        </div>
        <button className="btn custom-light-green px-4 py-2 fw-bold">Buy Now!</button>

      </div>
      <div className="image-container ms-auto">
        <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQgGmjpz0SkxnCqjaxEhnIwbYudMJt5Jcby4w&s" alt="JBL Speaker" className="img-fluid" />
      </div>
    </div>
  );
};

export default PromoBanner;
