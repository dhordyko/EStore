import List from 'material-ui/List/List';
import React, { useState, Fragment, useEffect } from 'react';
import { BlogList } from '../components/elements/mist'
import { useHttp } from '../hooks/use-http';
import { Banner } from '../components/elements/mist'
import CategoryButton from '../components/UI/CategoryButton'
import { useSelector } from 'react-redux';
import img1 from '../banner-imgs/20.png';
const Blog = () => {
    // const list = useHttp();
    const buttons = ['Salon', 'Porady', 'Aranżacje', 'Trendy', 'Kuchnia', 'Sypialnia'];
    const blogData = useSelector(state => state.blog.items)

    //state.items = state.items.filter(item => { item[1].categories.includes(selectedCattegory) })
    return (
        <Fragment>
            <Banner
                title={'Inspiracje'}
                color={'black'}
                background={'#E1CDB9'}
                text={`Daj się zainspirować i stwórz z Gustlo wnętrze nie do podrobienia! Znajdziesz tu porady, ciekawe aranżacje i informacje o najnowszych trendach wnętrzarskich.`}
                img={img1}
                reverse={false}
                weight={400}
                btn_color={'rgba(103, 146, 103,.7)'}
            />

            <div className="container-fluid my-5">
                <div className="row">
                    <div className="col-md-9 m-auto justify-content-center d-flex flex-wrap">
                        {buttons.map((category) => (<CategoryButton category={category} />))}
                    </div>
                </div>
            </div>
            <BlogList data={blogData} >
            </BlogList>

        </Fragment>
    )
}
export default Blog;