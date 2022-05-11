import React, { Fragment, useEffect, useState } from 'react';
import Slider from "react-slick";
import classes from './HoulCarousel.module.css'

const HoulCarousel = () => {
  const [data, setData] = useState([]);
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1
  };
  const getData = () => {
    fetch('/data/HoulSlider.json'
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
      <h3 className={classes.header_title}>Pomieszczenia</h3>
      <Slider {...settings} arrows="true" dots="false" rows={1} slidesPerRow={2} height={400} className={classes.slider_container}>
        {
          data && data.length > 0 && data.map((item) =>


            <div className={classes.slider_outer_container}  >
              <div style={{ backgroundImage: `url(${item.imageSrc})` }}>
                <a href="#" className="ms-3 mb-3">{item.category}</a>
              </div>


            </div>)

        }

      </Slider>
    </Fragment>
  )
}
export default HoulCarousel;
