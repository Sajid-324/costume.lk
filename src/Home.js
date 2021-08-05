import "./Home.css";
import Product from "./Product";
import React, { useState } from "react";
import Footer from "./Footer";
import SliderHome from "./SliderHome";

function Home() {
  return (
    <div className="home">
      <div className="home__container">
        <div className="home__image" style={{ height: "450px" }}>
          <img src="/images/home/logo.jpeg" className="home__image" />
        </div>

        <div className="home__row home__row1 pt-4">
          <Product
            id={123450}
            title="Shirt Check Check"
            price={1290}
            image="/images/home/pic_5.jpg"
            rating={2}
          />
          <Product
            id={123451}
            title="Brave Shirt Orange"
            price={1290}
            image="/images/home/pic_6.jpg"
            rating={3}
          />
        </div>
        <div style={{ margin: "10px" }}>
          <SliderHome />
        </div>
        <div className="home__row">
          <Product
            id={123452}
            title="Chinese Color Shirt"
            price={1250}
            image="/images/home/pic_3.jpg"
            rating={4}
          />
          <Product
            id={123453}
            title="Mal Mal Shirt"
            price={1350}
            image="/images/home/pic_4.jpg"
            rating={3}
          />
        </div>
        <div className="home__row trow">
          <Product
            id={123454}
            title="SaturDay Beach Shirt"
            price={1290}
            image="/images/home/pic_1.jpg"
            rating={4}
          />
          <Product
            id={123455}
            title="SunDay Beach Shirt"
            price={1290}
            image="/images/home/pic_2.jpg"
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={123456}
            title="Beauty Picks"
            price={690}
            image="/images/home/banner.jpg"
            rating={5}
          />
        </div>
        <Footer />
      </div>
    </div>
  );
}

export default Home;
