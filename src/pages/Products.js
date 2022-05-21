import React, { useState, useEffect, useContext } from 'react'
import { useParams } from 'react-router-dom';
import { ProductList, FilterTag, Banner } from "../components/elements/mist";
import { useSendRequest } from '../hooks/use-http';
import { useDispatch, useSelector } from 'react-redux'
import { productsActions } from '../store/redux/slice-products';
import classes from './styles/Products.module.css';
import { GLASS, DECOR, CUP, PLATE, LINEN, BOTTLE } from '../globes/filters';
import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';

const PrettoSlider = styled(Slider)({
    color: '#52af77',
    height: 8,
    '& .MuiSlider-track': {
        border: 'none',
    },
    '& .MuiSlider-thumb': {
        height: 24,
        width: 24,
        backgroundColor: '#fff',
        border: '2px solid currentColor',
        '&:focus, &:hover, &.Mui-active, &.Mui-focusVisible': {
            boxShadow: 'inherit',
        },
        '&:before': {
            display: 'none',
        },
    },
    '& .MuiSlider-valueLabel': {
        lineHeight: 1.2,
        fontSize: 12,
        background: 'unset',
        padding: 0,
        width: 32,
        height: 32,
        borderRadius: '50% 50% 50% 0',
        backgroundColor: '#52af77',
        transformOrigin: 'bottom left',
        transform: 'translate(50%, -100%) rotate(-45deg) scale(0)',
        '&:before': { display: 'none' },
        '&.MuiSlider-valueLabelOpen': {
            transform: 'translate(50%, -100%) rotate(-45deg) scale(1)',
        },
        '& > *': {
            transform: 'rotate(45deg)',
        },
    },
});
const Products = () => {
    const dispatch = useDispatch();
    const params = useParams();
    const products = useSelector(state => state.products.items);
    const filtered_products = useSelector(state => state.products.filteredList);
    const sliderValues = useSelector(state => state.products.sliderValues);
    const filtersActive = useSelector(state => state.products.activeFilter);

    const [value, setValue] = useState(sliderValues);
    const [category, setCategory] = useState('');
    const requestConfig = {
        url: '/data/ProductsHome.json',
        category: params.category
    }

    const data = useSendRequest(requestConfig);
    const glassFilters = (category) => {
        switch (category) {
            case 'glass':
                return GLASS ? Object.entries(GLASS) : [];
            case 'decor':
                return DECOR ? Object.entries(DECOR) : [];
            case 'cup':
                return CUP ? Object.entries(CUP) : [];
            case 'plate':
                return PLATE ? Object.entries(PLATE) : [];
            case 'linen':
                return LINEN ? Object.entries(LINEN) : [];
            case 'bottle':
                return BOTTLE ? Object.entries(BOTTLE) : [];
            default:
                return []

        }
    }
    useEffect(() => {
        dispatch(productsActions.displayProducts(data.data))
    }, [data.data]);

    const onCahngeHandler = (event, newValue) => {
        setValue(newValue)
    }
    const filters = glassFilters(params.category);

    const onMouseHandler = () => {
        dispatch(productsActions.sliderFilter(value))
    }
    const filter_titles = {
        "color": "kolor",
        'material': "materiał",
        'price': "cena",
        'size': "wymiary",
    }
    const category_titles = {
        "linen": "pościel",
        'decor': "dekoracje",
        'glass': "szkło",
        'cup': "wymiary",
        'plate': "zastawa",
        'bottle': "przechowywanie",
    }


    return (
        <React.Fragment>

            <Banner
                title={category_titles[params.category]}
                color={'black'}
                background={'#679267'}
                text={`Takie mogą być twoje sztućce! W Gustlo znajdziesz wiele typów łyżek,
                             widelców czy noży, które z pewnością zaskoczą Twoich gości funkcjonalnością i designem. Czas na obiad ze smakiem.`}
                img={`/img/category/products/${params.category}.png`}
                reverse={true}
                weight={400}
                btn_color={'rgba(103, 146, 103,.7)'}
            />

            <div className={`container-xxl ${classes.component_container}`}>

                <div className="row">
                    <div className="col-lg-3 col-sm-7 col-12 m-auto m-lg-0 pb-5">
                        <div className={classes.filter_container_title}>
                            Zastosowane filtry
                        </div>
                        {filtersActive.map((title, index) => (
                            <FilterTag key={index} title={title} category={category} className={`my-3 ${classes.filter_tags}`} />
                        ))}
                        {filters.length > 0 && filters.map((item) => {

                            if (item[0] === 'price') {
                                dispatch(productsActions.sliderDefault(item[1]))

                            }
                            const fromatHandler = (value1) => {
                                return `${value1}zł`;
                            }

                            const FilterHandler = (e) => {
                                let filter = e.target.innerText;
                                let category = e.target.getAttribute('data-filter');
                                setCategory(category)
                                dispatch(productsActions.filterApplied({ category: category, filter: filter }))
                            }
                            function valuetext(value) {
                                return `${value}°C`;
                            }
                            return (

                                <div className={classes.accordion} id={`Accordion-${item[0]}`}>
                                    <div className="accordion-item">
                                        <h2 className="accordion-header" id={`Title-${item[0]}`}>
                                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target={`#${item[0]}`} aria-expanded="true" aria-controls="collapseOne">
                                                {filter_titles[item[0]]}
                                            </button>
                                        </h2>
                                        <div id={`${item[0]}`} className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent={`#Accordion-${item[0]}`}>
                                            <div className="accordion-body">

                                                {item[0] === 'price' ?
                                                    <PrettoSlider

                                                        value={value}
                                                        min={item[1][0]}
                                                        max={item[1][1]}
                                                        step={10}
                                                        onChange={onCahngeHandler}
                                                        onMouseUp={onMouseHandler}
                                                        valueLabelFormat={fromatHandler}
                                                        valueLabelDisplay="auto"
                                                        className={classes.price_slider}

                                                    />

                                                    : <ul className={classes.filter_list}>{item[1].map((element) => <li className={classes.filter_item}><a data-filter={item[0]} onClick={FilterHandler}>{element}</a></li>
                                                    )}</ul>}

                                            </div>
                                        </div>
                                    </div>

                                </div>
                            )


                        })}

                    </div>
                    <div className="col-md-9 mx-auto">


                        {<ProductList data={filtered_products.length != 0 ? filtered_products : products} shuffle={true} slice={products.length}></ProductList>}
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
export default Products;