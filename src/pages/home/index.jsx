import React from "react";
import groepsfoto from "../../images/groepsfoto.jpg";
import groepsfoto2 from "../../images/groepsfoto2.jpg";
import "./style.css";

const Home = () => {
  return (
    <div>
      <div id="demo" className="carousel slide" data-bs-ride="carousel">
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img src={groepsfoto} alt="Los Angeles" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h1>KLJ Merkem</h1>
            </div>
          </div>
          <div className="carousel-item">
            <img src={groepsfoto2} alt="Chicago" className="d-block w-100" />
            <div className="carousel-caption d-none d-md-block">
              <h1>KLJ Merkem</h1>
            </div>
          </div>
        </div>

        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="prev"
        >
          <span className="carousel-control-prev-icon"></span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#demo"
          data-bs-slide="next"
        >
          <span className="carousel-control-next-icon"></span>
        </button>
      </div>
      <div class="over mx-auto">
        <h2>Over</h2>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </div>
    </div>
  );
};

export default Home;
