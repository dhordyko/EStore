import React, { Fragment, useState } from 'react'
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import SideDrawer from '@mui/material/Drawer';
import ListSubheader from '@mui/material/ListSubheader';
import List from '@mui/material/List';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import CartButton from '../Cart/CartBtn';
import MenuIcon from '@mui/icons-material/Menu';
import mainLogo from '../../assets/img/logo.png';
import accountItem from '../../assets/img/man.svg';
import classes from "./Menu.module.css";
import Module from '../../Modal';
const drawerWidth = 240;
const Menu = (props) => {
    const [open, setOpen] = useState(false);
    const openStateHandler = () => {
        setOpen(true);
    }
    const closeStateHandler = () => {
        setOpen(false);
    }
    return (
        <Fragment>
            <AppBar position="static" className="bg-transparent">
                <Toolbar className="justify-content-xl-around  flex-xl-row flex-row-reverse">
                    <div className="header-nner-container">

                    </div>
                    <IconButton
                        className={`d-xl-none ${classes.toggle_btn}`}
                        size="large"
                        edge="start"

                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={openStateHandler}
                    >
                        <MenuIcon />
                    </IconButton>
                    <img src={mainLogo} alt="" className="me-auto m-xl-0" />

                    <ul id="navbar-nav" className={`navbar-nav flex-row d-xl-flex d-none justify-content-between ${classes.menu_link}`}>
                        <li className="nav-item active">
                            <a className="nav-link text-black" href="#">Produkty </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-black" href="#">Pomieszczenia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-black" href="#">Inspiracje</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-black" href="#">Sale</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-black" href="#">Kontakt</a>
                        </li>
                    </ul>
                    <form action="#" className="search-wrap d-xl-block d-none">
                        <div className={`input-group w-100 ${classes.search_container}`}> <input type="text" className={`form-control search-form ${classes.search_form}`} style={{ width: '55%' }} placeholder="Search" />
                            <div className="input-group-append">  </div>
                        </div>
                    </form>
                    <div className="icons-container d-xl-block d-none">
                        <img src={accountItem} className="me-4" />
                        <CartButton showCart={props.showCart} />
                    </div>


                </Toolbar>
            </AppBar>

            <SideDrawer sx={{
                width: drawerWidth, flexShrink: 0, '& .MuiDrawer-paper': {
                    width: drawerWidth,
                    boxSizing: 'border-box',
                },
            }}
                variant="persistent"
                anchor="right"
                open={open}>
                <Module openState={open}></Module>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader" className="p-3 mb-4">
                            <span className={classes.close_btn}><a onClick={closeStateHandler}>X</a></span>
                            <img src={mainLogo} alt="" />

                        </ListSubheader>
                    }
                >
                    <ul id="navbar-nav" className={`navbar-nav ps-1 flex-column justify-content-start ${classes.menu_toggle_link}`}>
                        <li className="nav-item active">
                            <a className="nav-link text-black " href="#">Produkty </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-black " href="#">Pomieszczenia</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-black " href="#">Inspiracje</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-black " href="#">Sale</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link  text-black " href="#">Kontakt</a>
                        </li>
                    </ul>
                    <form action="#" className="search-wrap w-75 mx-auto my-3">
                        <div className={`input-group w-100 ${classes.search_container}`}> <input type="text" className={`form-control search-form ${classes.search_form}`} style={{ width: '55%' }} placeholder="Search" />
                            <div className="input-group-append">  </div>
                        </div>
                    </form>
                    <div className="icons-container">
                        <img src={accountItem} className="me-4" />
                        <CartButton onClick={props.showCart} />
                    </div>


                </List>

            </SideDrawer>


        </Fragment>
    )
}
export default Menu;