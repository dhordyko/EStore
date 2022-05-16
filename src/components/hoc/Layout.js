import React, { Fragment, useState } from "react";
import Header from '../Header/Menu';
import Cart from '../Cart/Cart';
import Footer from '../Footer/Footer'
const Layout = (props) => {
    const [cartIsShown, setCartIsShown] = useState(false);
    const cartClosehandler = () => {
        setCartIsShown(false);
    }
    const cartShowhandler = () => {
        console.log('sdfsdf')
        setCartIsShown(true);
    }
    return (
        <Fragment>
            {cartIsShown && <Cart closeCart={cartClosehandler} />}
            <Header showCart={cartShowhandler} />

            {props.children}
            <Footer />
        </Fragment>
    )
}
export default Layout;