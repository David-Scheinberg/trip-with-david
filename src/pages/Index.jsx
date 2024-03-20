import React from "react";
import Header from "../component/Header";
import Footer from "../component/Footer";
import "../style/Style.css";
import { useEffect } from "react";

const Index = () => {
  useEffect(() => {
    // Initialize the carousel with additional settings for automations
    const myCarousel = document.querySelector("#carouselExampleDark");
    const carousel = new bootstrap.Carousel(myCarousel, {
      interval: 5000,
      wrap: true,
    });
    myCarousel.addEventListener("slide.bs.carousel", () => {
      carousel.pause();
    });
  }, []);

  return (
    <div>
      <Header />

      <div className="strip  mb-5 ">
        <div
          data-bs-ride
          id="carouselExampleDark"
          className="carousel carousel-dark slide"
        >
          <div className="carousel-indicators">
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="0"
              className="active"
              aria-current="true"
              aria-label="Slide 1"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="1"
              aria-label="Slide 2"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="2"
              aria-label="Slide 3"
            ></button>
            <button
              type="button"
              data-bs-target="#carouselExampleDark"
              data-bs-slide-to="3"
              aria-label="Slide 4"
            ></button>
          </div>
          <div className="carousel-inner">
            <div className="carousel-item active" data-bs-interval="10000">
              <img
                src="./images/panorama1.jpeg"
                className="d-block w-100 "
                alt="..."
                height="350px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-white">Grand kenyon</h5>
                <p className="text-white">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Unde, veniam?
                </p>
              </div>
            </div>
            <div className="carousel-item" data-bs-interval="2000">
              <img
                src="./images/panorama3.jpeg"
                className="d-block w-100"
                alt="..."
                height="350px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-white">Grand kenyon</h5>
                <p className="text-white">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Unde, veniam?
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./images/ny1.jpg"
                className="d-block w-100"
                alt="..."
                height="350px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-white">Grand kenyon</h5>
                <p className="text-white">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Unde, veniam?
                </p>
              </div>
            </div>
            <div className="carousel-item">
              <img
                src="./images/panorama2.jpeg"
                className="d-block w-100"
                alt="..."
                height="350px"
              />
              <div className="carousel-caption d-none d-md-block">
                <h5 className="text-white">Grand kenyon</h5>
                <p className="text-white">
                  {" "}
                  Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                  Unde, veniam?
                </p>
              </div>
            </div>
          </div>
          <button
            className="carousel-control-prev"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="prev"
          >
            <span
              className="carousel-control-prev-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button
            className="carousel-control-next"
            type="button"
            data-bs-target="#carouselExampleDark"
            data-bs-slide="next"
          >
            <span
              className="carousel-control-next-icon"
              aria-hidden="true"
            ></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>

      <div className="about container-fluid mt-4">
        <div className="container ">
          <div className="row">
            <div className="col-md-2 mt-4">
              <h5 className=" d-none d-lg-block">
                Popular walks, hikes & treks Walks, hikes, and treks by region
                Walking vs hiking vs trekking Popular trekking locations Our
                walking, hiking, and trekking trips Our small group walking
                tours Our small group hiking tours Our small group trekking
                tours Highlights of our walking, hiking & trekking trips Our
                walking, hiking & trekking trip reviews Walking & trekking
                essential info/FAQs Read more about walking, hiking & trekking
              </h5>
            </div>
            <div className="paytone-one-regular container col-md-9  mt-4 ">
              <h5>Each journey may begin with a single step.</h5>
              <p>
                Here’s the idea: we provide you with expert trail guides,
                accommodation, and porters (where necessary); you bring your
                legs and a sense of adventure. From the frosted peak of
                Kilimanjaro and Patagonia’s windswept trails to a more sedate
                stroll through the rice fields of Vietnam or the rugged red
                hills on the Larapinta Trail, there’s a calf-stretching trip to
                suit every level of fitness and expertise. All you have to do is
                put one foot in front of the other.
              </p>
              <div className="col-md-9 ">
                <iframe
                  className="w-100"
                  height="315"
                  src="https://www.youtube.com/embed/gGjypazdj9E?si=x7K6cm0UphmBOnVk"
                  title="YouTube video player"
                  frameborder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowfullscreen
                ></iframe>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="info container-fluid">
        <div className="container  mt-4">
          <h5 className="info_j display-6 text-center">
            Our guides for your travell experience
          </h5>
          <div className=" row mt-3  text-center">
            <div className="container row justify-content-around">
              <div className="col-lg-3  ">
                <img
                  src="./images/yossi.jpg"
                  alt=""
                  width="250px"
                  height="200"
                  className="border border-black border-4 shadow rounded-circle"
                />
                <h3>tipe in a name</h3>
                <p>Ceo</p>
              </div>

              <div className=" col-lg-3 ">
                <img
                  src="./images/moshe.jpeg"
                  alt=""
                  width="250px"
                  height="200"
                  className="border border-black border-4 rounded-circle"
                />
                <h3>tipe in a name</h3>
                <p>Head techar</p>
              </div>

              <div className=" col-lg-3 ">
                <img
                  src="./images/avi.jpg"
                  alt=""
                  width="250px"
                  height="200"
                  className="border border-black border-4 rounded-circle"
                />
                <h3>tipe in a name</h3>
                <p>Expore of riligieds</p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <main className="container-fluid">
        <div className="container mt-5">
          <div className="row text-center justify-content-evenly py-4 ">
            <div className=" col-lg-5 col-md-11">
              <h3 className="text-info">Brazil</h3>
              <img
                className="img-fluid"
                src="./images/brazil.jpg"
                alt=""
                width="400px"
                height="165.19px"
              />
              <p className="p_index">
                Brazil, a land of diverse landscapes, stunning beaches, vibrant
                culture, Amazon rainforests, sizzling samba rhythms, flavorful
                cuisine, and exhilarating Carnivals.
              </p>
            </div>
            <div className="col-lg-5 col-md-11">
              <h3 className="text-info">New York</h3>
              <img
                className="img-fluid"
                src="./images/ny1.jpg"
                alt=""
                width="400px"
                height="165.19px"
              />
              <p className="p_index">
                New York City, a bustling metropolis, boasts iconic landmarks,
                diverse neighborhoods, world-className museums, Broadway shows,
                and unmatched culinary.
              </p>
            </div>
            <div className=" col-lg-5 col-md-11 mt-3">
              <h3 className="text-info">India</h3>
              <img
                className="img-fluid"
                src="./images/india5.jpeg"
                alt=""
                width="400px"
                height="165.19px"
              />
              <p className="p_index">
                India, a land of ancient wonders, vibrant traditions, majestic
                palaces, spiritual sites, spicy cuisines, bustling markets, and
                serene landscapes beckoning exploration.
              </p>
            </div>
            <div className="col-lg-5 col-md-11 mt-3">
              <h3 className="text-info">Miami</h3>
              <img
                className="img-fluid"
                src="./images/miami.jpeg"
                alt=""
                width="400px"
                height="165.19px"
              />
              <p className="p_index">
                Miami, a vibrant city offering sunny beaches, art deco
                architecture, diverse cuisine, vibrant nightlife, cultural
                festivals, and a bustling atmosphere for endless.
              </p>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Index;
