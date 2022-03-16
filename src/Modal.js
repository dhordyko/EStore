import { Fragment } from 'react';
import ReactDOM from 'react-dom';

import classes from './Modal.module.css';

const Backdrop = (props) => {
    return <div className={`${props.openState ? 'd-block' : 'd-none'} ${classes.backdrop}`} onClick={props.onClose} />;
};
const portalElement = document.getElementById('overlays');
const Modal = (props) => {
    return (
        <Fragment >
            {ReactDOM.createPortal(<Backdrop onClose={props.onClose} openState={props.openState} />, portalElement)}

        </Fragment>
    );
};

export default Modal;
