import { Fragment } from 'react'
import Menu from '../components/Header/Menu';
import HomeCarousel from '../components/Carousel/Carousel/Carousel';
import CategoryCarousel from '../components/Carousel/CategoryCarousel/CategoryCarousel';
import HoulCarousel from '../components/Carousel/HoulCaorusel/HoulCarousel';
import classes from './styles/Home.module.css'
const Home = () => {
    return (
        <Fragment>
            <Menu />
            <HomeCarousel />
            <div className={`container ${classes.carouse_category_container}`} >
                <div class="row">
                    <div class="col-md-12">
                        <CategoryCarousel />
                    </div>
                </div>
            </div>
            <div className={`container ${classes.carouse_category_container}`} >
                <div class="row">
                    <div class="col-md-12">
                        <HoulCarousel />
                    </div>
                </div>
            </div>

        </Fragment>
    );
}

export default Home;