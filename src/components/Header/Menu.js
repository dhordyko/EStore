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
import { Link } from 'react-router-dom';
import classes from "./Menu.module.css";
import Module from '../../Modal';
const drawerWidth = 240;
const Menu = (props) => {
    const [open, setOpen] = useState(false);
    const [openSubMenu, setOpenSubMenu] = useState(false);
    const openStateHandler = () => {
        setOpen(true);
    }
    const closeStateHandler = () => {
        setOpen(false);
    }
    return (
        <Fragment>
            <AppBar position="static" className={`bg-transparent ${classes.header}`}>
                <Toolbar className={`justify-content-xl-around justify-content-between flex-xl-row flex-row-reverse ${classes.header_container}`}>
                    <div className="header-nner-container">

                    </div>
                    <IconButton
                        className={`d-xl-none ms-auto ${classes.toggle_btn}`}
                        size="large"
                        edge="start"

                        aria-label="open drawer"
                        sx={{ mr: 2 }}
                        onClick={openStateHandler}
                    >
                        <MenuIcon style={{ fontSize: '35px' }} />
                    </IconButton>
                    <img src={mainLogo} alt="" className="me-auto m-xl-0" />

                    <ul id="navbar-nav" className={`navbar-nav flex-row d-xl-flex d-none justify-content-between ${classes.menu_link}`}>
                        <li className="nav-item active" >
                            <a className="nav-link text-black" href="/blog"> Blog </a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link  text-black"
                                onClick={() => { setOpenSubMenu(!openSubMenu) }} href="#" > Kategorije </a>
                            {
                                openSubMenu && < ul className={classes.submenu} >
                                    <li > <Link to={'products/decor'}>Dekoracje</Link></li>
                                    <li ><Link to={'products/glass'}>Szkło</Link></li>
                                    <li ><Link to={'products/linen'}>Pościel</Link></li>
                                    <li> <Link to={'products/cup'}>Filiżanki</Link></li>
                                    <li> <Link to={'products/plate'}>Talerzy</Link> </li></ul>}
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
                    <div className={` icons-container d-xl-block d-none`}>
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
                open={open}
                className={classes.sidebar}
            >
                <Module openState={open}></Module>
                <span className={`${classes.close_btn} mt-1 `}><a onClick={closeStateHandler}>X</a></span>
                <List
                    sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper', marginTop: '30px' }}
                    component="nav"
                    aria-labelledby="nested-list-subheader"
                    subheader={
                        <ListSubheader component="div" id="nested-list-subheader" className="p-3 mb-4">

                            <img src={mainLogo} alt="" />

                        </ListSubheader>
                    }
                >
                    <ul id="navbar-nav" className={`navbar-nav ps-1 flex-column justify-content-start ${classes.menu_toggle_link}`}>
                        <li className="nav-item active" >
                            <a className="nav-link text-black" href="/blog"> Blog </a>
                        </li>
                        <li className="nav-item" >
                            <a className="nav-link  text-black"
                                onClick={() => { setOpenSubMenu(!openSubMenu) }} href="#" > Kategorije </a>
                            {
                                openSubMenu && < ul className={classes.submenu} >
                                    <li > <Link to={'products/decor'}>Dekoracje</Link></li>
                                    <li ><Link to={'products/glass'}>Szkło</Link></li>
                                    <li ><Link to={'products/linen'}>Pościel</Link></li>
                                    <li> <Link to={'products/cup'}>Filiżanki</Link></li>
                                    <li> <Link to={'products/plate'}>Talerzy</Link> </li></ul>}
                        </li>

                        <li className="nav-item">
                            <a className="nav-link  text-black" href="#">Kontakt</a>
                        </li>
                    </ul>
                    <form action="#" className="search-wrap w-75 mx-auto my-3">
                        <div className={`input-group w-100 ${classes.search_container}`}> <input type="text" className={`form-control search-form ${classes.search_form}`} style={{ width: '55%' }} placeholder="Search" />
                            <div className="input-group-append">  </div>
                        </div>
                    </form>
                    <div className="icons-container px-3 justify-content-between d-flex">
                        <img src={accountItem} className="me-4" />
                        <CartButton showCart={props.showCart} />
                    </div>


                </List>

            </SideDrawer>


        </Fragment>
    )
}
export default Menu;