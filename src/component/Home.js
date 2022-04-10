import React, { useState } from "react";
import { Carousel } from "react-bootstrap";
import hmStl from "../component/css/Home.module.css";
import NavBar from "./Navbar";
import img1 from "../component/images/img1.jpg";
import img2 from "../component/images/img2.jpg";
import img3 from "../component/images/img3.jpg";
import img4 from "../component/images/img4.jpg";

export default function Home() {
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex, e) => {
    setIndex(selectedIndex);
  };
  return (
    <div className={`${hmStl.homeDiv} w-100`}>
      <NavBar />
      <div className={` w-100 `}>
        <Carousel activeIndex={index} onSelect={handleSelect}>
          <Carousel.Item>
            <img
              className={`${hmStl.img} d-block w-100`}
              src={img2}
              alt="First slide"
            />

            {/* <Carousel.Caption>
              <h3>First slide label</h3>
              <p>Nulla vitae elit libero, a pharetra augue mollis interdum.</p>
            </Carousel.Caption> */}
          </Carousel.Item>
          <Carousel.Item>
            <img
              className={`${hmStl.img} d-block w-100`}
              src={img1}
              alt="Second slide"
            />
          </Carousel.Item>
          <Carousel.Item bsstyle="default" className={hmStl.height}>
            <img
              className={`${hmStl.img} d-block w-100`}
              src={img3}
              alt="Third slide"
            />
          </Carousel.Item>
          <Carousel.Item bsstyle="default" className={hmStl.height}>
            <img
              className={`${hmStl.img} d-block w-100`}
              src={img4}
              alt="First slide"
            />
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}
