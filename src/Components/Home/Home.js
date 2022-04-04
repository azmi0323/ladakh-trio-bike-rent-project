import React from "react";
import "./Home.css";
import bikeImg from "../../Assets/bike.png";

const Home = () => {
  return (
    <div>
      <div className="d-flex  align-items-center container mt-5">
        <div className="col-lg-5 bike col-md-5">
          <img className="img-fluid" src={bikeImg} alt="bikeImg" />
        </div>
        <div className="col-lg-7 col-md-7">
          <h1 className="fw-bold">
            Get Your <span className="orange">Favorite Bike </span>
            <br></br>On Ladakh Trip
          </h1>
          <h5 className="mt-3">
            Stopover in azure lakes, courageous terrains, peaceable outback, and
            nearly altogether places your coronary heart forever wished to
            wander around; just about to those locations of Leh Ladakh Road
            Trip, you've got perpetually thought-about in films and wallpapers!
            you're attending to ditch your years of everyday ho-hum hobbies for
            those wizard days of the trip on a number of the most effective
            chain Roads.
          </h5>
          <button className="my-4 btn btn-danger fw-bold">
            Learn More About Us
          </button>
        </div>
      </div>
      <div className="d-flex align-items-center justify-content-center">
          <h1>Total Review</h1>
      </div>
    </div>
  );
};

export default Home;
