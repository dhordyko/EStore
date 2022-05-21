import React, { useState, useEffect, useContext, useRef } from 'react';
import { useSendRequest } from '../../hooks/use-http'
import classes from './ProductDescription.module.css'
import { useParams } from 'react-router-dom';
import cartItem from '../../assets/img/cart.png';
import icon1 from '../../assets/img/question.png';
import icon2 from '../../assets/img/box.png';
import icon3 from '../../assets/img/check.png';
import Button from '@mui/material/Button';
import cartContext from '../../store/CartContext';
import { ProductList } from '../elements/mist';
const ProductDescription = () => {
    const params = useParams();
    const [product, setProduct] = useState([]);
    const [image, setImage] = useState(null);
    const [tab, setTab] = useState(false);
    const [productState, setProductState] = useState(false);
    const cartCtx = useContext(cartContext);
    const [itemAddedToCart, setitemAddedToCart] = useState(false);
    useEffect(() => {
        let existingItemIndex = cartCtx.items.filter((item) => item.id === product[0].id);
        existingItemIndex.length != 0 ? setitemAddedToCart(true) : setitemAddedToCart(false)

    }, [cartCtx.items])
    const requestConfig = {
        url: '/data/ProductsHomeDetails.json',
        id: params.id,
        category: params.category
    }
    const requestConfigList = {
        url: '/data/ProductsHome.json',
        category: params.category
    }
    const onAddToCart = () => {
        cartCtx.addItem({
            id: product[0].id,
            title: product[0].title,
            price: product[0].price,
            image: product[0].imageSrc,
        })

    }
    const data = useSendRequest(requestConfig);
    useEffect(() => { if (data.isLoading) { setProduct(data.data) } }, [data.data])
    const list = useSendRequest(requestConfigList);
    useEffect(() => { if (data.isLoading) { setProduct(data.data) } }, [data.data])

    const changeImg = (e) => {
        setImage(e.target.getAttribute('src'))
    }


    return (
        <React.Fragment>
            <div id="product-description" className="container" style={{ fontFamily: 'Spartan' }}>
                <div className="row">
                    <div className={` d-flex flex-lg-row flex-column ${classes.product_descr_container}`}>
                        {product[0] && <p className="mb-3">{product[0].title}.{product[0].description}</p>}
                        <Button onClick={onAddToCart} style={{ background: `${itemAddedToCart ? '#679267' : '#E1CDB9'}` }}><span className='me-3'><img src={cartItem} alt="" /></span>{itemAddedToCart ? 'jest dodany' : 'do koszyka'}</Button>

                    </div>
                </div>
                <div className="row">
                    <div className="col-xl-6 col-12 p-0 mb-5 d-flex flex-xxl-row flex-column-reverse">
                        <div className={`${classes.option_img_container}`}>
                            <ul className=" d-flex flex-xxl-column flex-row justify-content-around">
                                <li onClick={changeImg}><img className="img-fluid h-100 mb-xxl-2 mb-0" src={product[0] && product[0].imageSrc} alt={product[0] && product[0].title} /></li>
                                {product.length != 0 && product[0].options.slice(0, 2).map((item, index) => (
                                    < li onClick={changeImg} key={index} className="mb-xxl-2 mb-0"> <img className="img-fluid h-100" src={item} alt={product[0].title} /></li>
                                ))}
                            </ul>
                        </div>
                        <div className={`${classes.main_image_container} ms-xxl-5 mb-4 d-flex justify-content-center `}>
                            {product.length != 0 && <img className="img-fluid" width="660px" height="95%" src={image ? image : product[0].imageSrc} alt={product.title} />}
                        </div>
                    </div>
                    <div className={`${classes.product_desc_container} col-xl-6 col-12`}>
                        <p className={classes.green_badge}>wysyłka w 24 h</p>
                        <p className={classes.desc_title}>  {product[0] && product[0].title}</p>
                        <p className={classes.desc_price}>  {product[0] && product[0].price}</p>
                        <p className={classes.desc_text}>  {product[0] && product[0].description}</p>
                        <ul className={classes.info_icons}>
                            <li><span><img src={icon1} alt="" /></span>Zapytaj o ten produkt</li>
                            <li><span><img src={icon2} alt="" /></span>Dostawa i zwrot</li>
                            <li><span><img src={icon3} alt="" /></span>Bezpieczne zakupy</li>
                        </ul>
                    </div>
                </div>
                <div className="row">
                    <div className={`${classes.tab_links_container} col-md-12`}>
                        <div className={`${classes.tab_links} d-flex`}>
                            <div className={`${tab === true && classes.border_bold} tab-link`} onClick={(e) => { setTab(!tab); }}>Opis produktu</div>
                            <div className={`${tab === false && classes.border_bold} tab-link`} onClick={() => { setTab(!tab); }}>Dane techniczne</div>
                        </div>
                        {tab === true && <div className={classes.tab_description}>
                            {product[0] && product[0].description}
                        </div>}
                        {tab === false && <div className={classes.tab_table}>
                            <table>
                                <tbody>
                                    <tr>
                                        <td>KOLOR</td>
                                        <td>pastelowy żółty</td>
                                    </tr>
                                    <tr>
                                        <td>POJEMNOŚĆ</td>
                                        <td>400 ml</td>
                                    </tr>
                                    <tr>
                                        <td>DŁUGOŚĆ</td>
                                        <td>12,50 cm</td>
                                    </tr>
                                    <tr>
                                        <td>ŚREDNICA</td>
                                        <td>8,70 cm</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>}
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12">
                        <ProductList data={list.data.slice(0, 8)} state={useSendRequest(requestConfig)}>
                        </ProductList>
                    </div>
                </div>
            </div>

        </React.Fragment >
    )
}

export default ProductDescription;
