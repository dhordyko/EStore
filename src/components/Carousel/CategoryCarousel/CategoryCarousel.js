import React, { Fragment, useEffect, useState } from 'react';
import Slider from "react-slick";
import classes from './CategoryCarousel.module.css';
import useMediaQuery from '@mui/material/useMediaQuery';
const CategoryCarousel = () => {
  const lgMediaQuery = useMediaQuery('(min-width:992px)');
  const smMediaQuery = useMediaQuery('(max-width:600px)');
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
      <Slider {...settings}
        arrows="true"
        dots="false"
        rows={1}
        slidesPerRow={4}
        height={400}
        className={[classes.slider_container, smMediaQuery ? classes.category_slider : '']}
        style={{ marginBottom: lgMediaQuery ? '100px' : '0px' }}
      >
        {
          data && data.length > 0 && data.map((item) =>


            <div key={item.id} className={`slider-outer-container ${smMediaQuery ? 'w-100' : 'w-25'}`}  >
              <img src={item.imageSrc} className="img-fluid" />

            </div>)

        }

      </Slider>
    </Fragment>
  )
}
export default CategoryCarousel;
