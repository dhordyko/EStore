import React, { Fragment, useEffect, useState } from 'react';
import Slider from "react-slick";
import classes from './CategoryCarousel.module.css'
import "./CategoryCarousel.css"
const CategoryCarousel = () => {
  const [data, setData] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const getData = () => {
    fetch('data/CategorySliders.json'
      , {
        headers: {
          'Content-Type': 'application/json',
          'Accept': 'application/json'
        }
      }
    )
      .then(function (response) {
        return response.json();
      })
      .then(function (myJson) {
        setData(myJson);
      });
  }
  useEffect(() => {
    getData();
  }, []);

  return (
    <Fragment>
      <h3 className={classes.header_title}>Produkty według kategorii</h3>
      <Slider {...settings} arrows="true" dots="false" rows={1} slidesPerRow={4} height={400} className={classes.slider_container}>
        {
          data && data.length > 0 && data.map((item) =>


            <div className="slider-outer-container "  >
              <img src={item.imageSrc} />

            </div>)

        }

      </Slider>
    </Fragment>
  )
}
export default CategoryCarousel;
