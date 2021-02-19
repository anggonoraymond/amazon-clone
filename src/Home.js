import React from "react";
import "./Home.css";
import Product from "./Product";

function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="1232323"
          title="The Lean Startup: How Constant Innovation Creates Radically Successful Businesses PaperBack"
          price={11.96}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51Zymoq7UnL._SX325_BO1,204,203,200_.jpg"
        />
        <Product
          id="112314123"
          title="New Apple iPad Pro (12.9-inch, Wi-Fi, 256GB) - Space Gray (4th Generation)"
          price={1099.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/81SGb5l+lZL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="126543"
          title="Echo Dot (3rd Gen) - Smart speaker with Alexa - Sandstone"
          price={49.99}
          rating={4}
          image="https://m.media-amazon.com/images/I/61cSwIDSVbL._AC_UY327_FMwebp_QL65_.jpg"
        />
        <Product
          id="12423423"
          title="Patek Philippe Nautilus 40MM Perpetual Calendar White Gold Men’s Watch 5740/1G-001"
          price={200000.0}
          rating={5}
          image="https://m.media-amazon.com/images/I/61fqFDomAnL._AC_UL480_FMwebp_QL65_.jpg"
        />
        <Product
          id="123987"
          title="SOLDIERKNIFE Durable Waterproof Anti Theft Laptop Backpack Travel Backpacks"
          price={26.98}
          rating={5}
          image="https://m.media-amazon.com/images/I/81gbcmMQuZL._AC_UL480_FMwebp_QL65_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="1234326803"
          title="Asus Rog Swift PG35VQ 35” Curved HDR Gaming Monitor 200Hz (3440 X 1440) 2ms G-Sync Ultimate Eye Care DisplayPort HDMI USB Aura Sync HDR10 Display HDR 1000"
          price={2421.03}
          rating={5}
          image="https://m.media-amazon.com/images/I/818OGKuH-GL._AC_UY327_FMwebp_QL65_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
