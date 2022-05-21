import React, { Fragment, useState } from 'react';
import ProductItem from '../Product/ProductItem';
import styled from 'styled-components';
import BlogItem from '../Blog/BlogItem';
import PagePagination from 'react-paginate';
import { useDispatch } from 'react-redux';
import { productsActions } from '../../store/redux/slice-products';
import RemoveIcon from '../UI/RemoveIcon';
import arrowIcon from '../../assets/img/arrow.png';
import useMediaQuery from '@mui/material/useMediaQuery';
const CustomColumn = styled.div`
&{
    display:flex;
    justify-content:center;
    align-items:center;
    color:${(props) => props.color};
}
& h1{
    font-family: 'DM Serif Display', serif;
    font-size:4.4em;
    text-transform:capitalize;
    word-break:${(props) => props.smMediaQuery ? 'break-all' : 'inherit'};
    font-size:${(props) => props.xlMediaQuery && !props.smMediaQuery ? '5vw' : '4.4em'}
    
}

& .inner-container{
    width:70%;
}
& p {
    font-family: 'Spartan';
    line-height:28px;
    font-weight:${(props) => props.weight};
}
`;
const BannerContainer = styled.div`
&{
display:flex;
flex-direction:${(props) => props.reverse ? 'row-reverse' : 'row'}
}
& div{
    ${(props) => props.lgMediaQuery ? 'width:50%!important' : 'width:100%!important'}
}
& img{
   object-fit:none;
    width:100%;
}
`
const PaginationContainer = styled.div`
&{
    text-align:center;
    font-family:'Spartan';
}
& .pagination{
    display:inline-flex!important;
    align-items:center;
}
& .previous a, & .next a {
    color:black;
    text-decoration:none;

}
& .previous a span {
font-size:
}
& .pagination{
max-width: 500px;
width: 100%;
display: flex;
justify-content: space-between;
}
& .pagination .pagination__link{
    display:inline-flex;
    align-items:center;
}
& .pagination .pagination__link span.arrow{
    font-size:40px;
    display:flex;
    align-items:center;
    justify-content:center;
    font-weight:400;
    margin:0px 10px;
}
& .pagination li:not(.next):not(.previous) a
{
   width:30px;
   height:30px;
   display:flex;
   align-items:center;
   justify-content:center;
   border:2px solid black;
}

`
const CustomBtn = styled.button`
&{
    display: inline-block;
    border: 1px solid  ${(props) => props.color};
    color: ${(props) => props.color};
    width: 170px;
    border-radius: 0px;
    color: white;
    font-family: 'Spartan';
    font-weight: ${(props) => props.weight};
    text-transform: capitalize;
    background:transparent;
    height:40px;
    margin-top:20px;
    position:relative;
}
&:before{
        content: '';
        width: 0px;
        opacity:0;
        height: 40px;
        background: ${(props) => props.btn_color};
        display: block;
        padding: 0px;
        position: absolute;
        margin-top: -8px;
        transition:ease-out .4s;      
}
& span{
color: ${(props) => props.color};
font-weight:${(props) => props.weight}
}
&:hover::before{
    width:170px;
    opacity:1;
  
}
&:hover span{
   color:black;
   position: relative;
    z-index: 9999999;
    font-weight:400;
}
`

export const Banner = (props) => {
    const lgMediaQuery = useMediaQuery('(min-width:992px)');
    const xlMediaQuery = useMediaQuery('(max-width:1200px)');
    const smMediaQuery = useMediaQuery('(max-width:500px)');
    return (
        <Fragment>

            <BannerContainer
                className=" banner-container p-0 m-0 d-flex flex-lg-row flex-column "
                lgMediaQuery={lgMediaQuery}
                xlMediaQuery={xlMediaQuery}
                smMediaQuery={smMediaQuery}
                reverse={props.reverse}
            >

                <CustomColumn
                    className="p-lg-0 p-5"
                    style={{ background: props.background }}
                    color={props.color}
                    weight={props.weight}
                    lgMediaQuery={lgMediaQuery}
                    xlMediaQuery={xlMediaQuery}
                    smMediaQuery={smMediaQuery}
                >
                    <div className='inner-container'>
                        <h1 class="mb-2 d-block w-100">{props.title}</h1>
                        <p>{props.text}</p>
                        <CustomBtn
                            className="p-0"
                            color={props.color}
                            weight={props.weight}
                            btn_color={props.btn_color}
                        ><span>Zobacz</span></CustomBtn>

                    </div>

                </CustomColumn>
                <div className=" p-0">
                    <img height="100%" src={props.img} className={lgMediaQuery ? '' : 'img-fluid'} />
                </div>

            </BannerContainer>
        </Fragment>
    )
}
export const ProductList = (props) => {
    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    {props.shuffle && [...props.data].sort(() => {
                        const randomTrueOrFalse = Math.random() > 0.5;
                        return randomTrueOrFalse ? 1 : -1;
                    }
                    ).slice(0, props.slice ? props.slice : 0).map((item, index) => (
                        < div className="col-xxl-3 col-xl-4 col-sm-6" key={index}>

                            <ProductItem
                                id={item.id}
                                imageSrc={item.imageSrc || item.image}
                                title={item.title}
                                promotion={item.promotion}
                                price={item.price}
                                description={item.description}
                                promotion_color={item.promotion_color}
                                category={item.category}
                            >

                            </ProductItem>
                        </div>
                    ))}


                    {props.data && props.data.length > 0 && !props.shuffle && props.data.map((item) =>

                        < div className="col-xl-3 col-md-4 col-12" >

                            <ProductItem
                                id={item.id}
                                imageSrc={item.imageSrc || item.image}
                                title={item.title}
                                promotion={item.promotion}
                                price={item.price}
                                description={item.description}
                                promotion_color={item.promotion_color}
                                category={item.category}
                                state={props.state}
                            >

                            </ProductItem>
                        </div>

                    )}
                </div>
            </div>

        </Fragment >
    )
}

export const BlogList = (props) => {

    const [pageNumber, setPageNumber] = useState(0);
    const blogsPerPage = 4;
    const blogsVisited = pageNumber * blogsPerPage;
    const blogsPerVisit = props.data.length == 1 ? props.data : props.data.slice(blogsVisited, blogsVisited + blogsPerPage);
    const pagesAmount = Math.ceil(props.data.length / blogsPerPage);
    const onPageChange = ({ selected }) => {
        setPageNumber(selected);
    }

    return (
        <Fragment>
            <div className="container">
                <div className="row">
                    {blogsPerVisit && blogsPerVisit.length >= 0 && blogsPerVisit.map((item) => (
                        <div className="col-md-6" key={item[0]}>
                            {<BlogItem

                                image={item[1].blog_page.article.imgs[1]}
                                title={item[1].title}
                                text={item[1].text}
                                categories={item[1].categories}
                            >
                            </BlogItem>}
                        </div>


                    )
                    )}
                </div>
            </div>
            <PaginationContainer>
                <PagePagination
                    previousLabel={<><span class='arrow'>&#8249;</span><span>poprzednia</span></>}
                    nextLabel={<><span>następna</span><span class='arrow'>&#8250;</span></>}
                    pageCount={pagesAmount}
                    onPageChange={onPageChange}
                    containerClassName={"pagination"}
                    previousLinkClassName={"pagination__link"}
                    nextLinkClassName={"pagination__link"}
                    activeClassName={"active"}
                    forcePage={pageNumber}
                />
            </PaginationContainer>


        </Fragment>
    )
}

export const FilterTag = (props) => {
    const dispatch = useDispatch();
    const onClickHandler = () => {

        dispatch(productsActions.removeFilter({ category: props.category, filter: props.title }))
    }
    return (
        <Fragment>
            <div className='d-flex justify-content-between my-3 ' style={{ width: 'auto', fontFamily: 'Spartan' }}>

                <div className="filter-title text-capitalize" style={{ width: 'fit-content' }}>{props.title}</div>
                <a className="close-btn" style={{ cursor: 'pointer' }} onClick={onClickHandler}><RemoveIcon /></a>
            </div>
        </Fragment>
    )
}







