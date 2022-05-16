import { Fragment, useEffect, useState } from 'react'
import HomeCarousel from '../components/Carousel/Carousel/Carousel';
import CategoryCarousel from '../components/Carousel/CategoryCarousel/CategoryCarousel';
import HoulCarousel from '../components/Carousel/HoulCaorusel/HoulCarousel';
import { Banner } from '../components/elements/mist'
import classes from './styles/Home.module.css'
import img1 from '../banner-imgs/1.png';
import img2 from '../banner-imgs/5.png';
import { useSendRequest } from '../hooks/use-http';
import styled from "styled-components";
import useMediaQuery from '@mui/material/useMediaQuery';
import { Link } from 'react-router-dom';
import { ProductList } from '../components/elements/mist';
import Sale from '../pages/Sale';

const CategoryCard = styled.img`
        &{
            display:block;
            width:100%;

        }
`
export const categoryList = [
    { name: 'decor', img: '/img/category/decor.png' },
    { name: 'glass', img: '/img/category/glass.png' },
    { name: 'cup', img: '/img/category/cup.png' },
    { name: 'plate', img: '/img/category/plate.png' },
    { name: 'linen', img: '/img/category/linen.png' },
    { name: 'bottle', img: '/img/category/bottle.png' },
    { name: 'chairs', img: '/img/category/chairs.png' },
    { name: 'kitchen', img: '/img/category/kitchen.png' },
]
const Home = () => {
    const [list, setList] = useState([]);
    const requestConfig = {
        url: '/data/ProductsHome.json'
    }
    const data = useSendRequest(requestConfig);
    const smMediaQuery = useMediaQuery('(max-width:500px)');
    useEffect(() => {
        setList(data.data);
    }, [data.data])

    return (
        <Fragment>
            <HomeCarousel />
            <div className={`container-md container-fluid ${classes.carouse_category_container}`} >
                <div className="row">

                    <div className="col-md-12">
                        <CategoryCarousel />
                    </div>
                </div>
            </div>
            <Banner

                title={'Dodatki w formie'}
                color={'white'}
                background={'#679267'}
                text={`Odkryj kolekcję wazonów, które gustownie wypełnią 
                Twoją przestrzeń, niezależnie od tego czy będą puste czy pełne kwiatów. Wiele form - wiele możliwości.`}
                img={img1}
                reverse={false}
                btn_color={'rgba(255,255,255,.7)'}
                weight={100}
            />
            <div className={`container ${classes.carouse_category_container} pt-sm-3 pt-0 mt-5 `} >
                <div className="row">
                    <div className="col-md-12">
                        <HoulCarousel />
                    </div>
                </div>
            </div>
            <div className={`container ${classes.carouse_category_container}`} >
                <div className="row py-4">
                    {categoryList && categoryList.map((item) => (
                        <Link to={`/products/${item.name}`} className="col-md-3 p-2">
                            <CategoryCard src={item.img} alt="" className="m-2 " />
                        </Link>
                    ))}
                </div>
            </div>
            <div className={`container ${classes.carouse_category_container}`} >
                <div className="row">
                    <div className="col-md-12">
                        <ProductList data={list} shuffle={true} slice={8} >
                        </ProductList>
                    </div>
                </div>
            </div>
            <Banner
                title={'Wysmakowane'}
                color={'black'}
                background={'white'}
                text={`Takie mogą być twoje sztućce! W Gustlo znajdziesz wiele typów łyżek,
                             widelców czy noży, które z pewnością zaskoczą Twoich gości funkcjonalnością i designem. Czas na obiad ze smakiem.`}
                img={img2}
                reverse={true}
                weight={400}
                btn_color={'rgba(103, 146, 103,.7)'}
            />

            <Sale />
        </Fragment>
    );
}

export default Home;