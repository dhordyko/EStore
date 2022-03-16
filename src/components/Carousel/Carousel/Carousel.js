import React,{Fragment,useEffect, useState} from 'react'; 
import Slider from "react-slick";
import classes from './Carousel.module.css' 
import './Caorusel.css';
const HomeCarousel =()=>{
    const [data,setData]=useState([]);
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
      };
      const getData=()=>{
        fetch('/data/Sliders.json'
        ,{
          headers : { 
            'Content-Type': 'application/json',
            'Accept': 'application/json'
           }
        }
        )
          .then(function(response){
            return response.json();
          })
          .then(function(myJson) {
            setData(myJson);
          });
      }
      useEffect(()=>{
        getData();
      },[]);
    
    return(
<Fragment>
<Slider {...settings} arrows="true" dots="false">
{
 data && data.length>0 && data.map(( item)=>


<div className="slider-outer-container"  >
    <div style={{backgroundImage: `url(${item.imageSrc})`}} className={` d-flex align-items-start justify-content-around flex-column ${classes.slider_container}`}>
        <div className={classes.slide_number}>{item.id}/<span>{data.length}</span></div>
        <div className="slider-content ms-5 d-flex flex-column justify-content-start align-items-between">
        <h1 className={classes.slider_title}>{item.title}</h1>
        <p className={classes.slide_dscr}>{item.description}</p>
        <a className={classes.slider_btn}>Zobacz</a>
        </div>
    </div>
    
    </div>)

} 
        
      </Slider>
</Fragment>
    )
}
export default HomeCarousel;
