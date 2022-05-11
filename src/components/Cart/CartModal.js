import { Fragment } from 'react';
import ReactDOM from 'react-dom';
import classes from './CartModal.module.css'

const DarkBackground = (props) => {
    return <div className={` ${classes.backdrop}`} onClick={props.onClose} />;
};
const ItemsOverlay = (props) => {
    return <Fragment>
        <div className={classes.overlay_container}>
            <div className={classes.cart_overlay}>{props.children}</div>
        </div>

    </Fragment>;
};
const portalElement = document.getElementById('overlays');
const CartModal = (props) => {
    return (
        <Fragment >
            {ReactDOM.createPortal(<DarkBackground onClose={props.onClose} />, portalElement)}
            {ReactDOM.createPortal(
                <ItemsOverlay>{props.children}</ItemsOverlay>
                , portalElement)}
        </Fragment>
    );
};

export default CartModal;