import React, { Fragment } from 'react'
import mainLogo from '../../assets/img/logo.png';
import plane from '../../assets/img/paper-plane.png';
import phone from '../../assets/img/phone.png';
import facebook from '../../assets/img/facebook.png';
import instagram from '../../assets/img/instagram.png';
import Przelewy24_logo from '../../assets/img/Przelewy24_logo.png';
import paypal from '../../assets/img/paypal.png';
import mastercard from '../../assets/img/mastercard.png';
import classes from './Footer.module.css'
const Footer = () => {
    return (
        <footer>
            <div className={`container-fluid p-0 ${classes.footer} d-flex flex-column justify-content-between`}>
                <div className="row">
                    <div className="col-md-2"><img src={mainLogo} alt="" /></div>
                    <div className="col-md-2">
                        <ul>
                            <li><a href="#">O Gustlo</a></li>
                            <li><a href="#">Warunki ogólne</a></li>
                            <li><a href="#">Dostawa i zwrot</a></li>
                            <li><a href="#"> Polityka prywatności</a></li>
                            <li><a href="#"> Pliki cookie</a></li>
                            <li><a href="#"> O nas</a></li>
                            <li><a href="#">Kontakt</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul>
                            <li><a href="#">Moje strony</a></li>
                            <li><a href="#">Moje konto</a></li>
                            <li><a href="#"> Moje zamówienia</a> </li>
                            <li><a href="#">Status zamówienia</a></li>
                            <li><a href="#"> Moje oferty</a></li>
                        </ul>
                    </div>
                    <div className="col-md-2">
                        <ul className={classes.contact_column}>
                            <li>Masz pytania? Skontaktuj się!</li>
                            <li><span><img src={plane} alt='' /></span><a href="mailto:kontakt@gustlo.pl"></a>kontakt@gustlo.pl</li>
                            <li><span><img src={phone} alt='' /></span><a href="mailto:kontakt@gustlo.pl"></a>+48 555 666 700</li>

                        </ul>
                    </div>
                    <div className="col-md-4 last-column">
                        <ul>
                            <li>Gustlo - Wnętrze ze smakiem</li>
                            <li>Wierzymy, że każde wnętrze ma w sobie potencjał,
                                który można wydobyć gustownymi dodatkami.
                                W naszym sklepie online znajdziesz całą gamę takich przedmiotów:
                                od minimalistycznych kubków, przez kieliszki w stylu glamour,
                                aż po nowoczesne sztućce. Zapraszamy do świata Gustlo.pl.</li>
                        </ul>
                    </div>
                </div>
                <div className="row text-ceter">
                    <ul className='w-50 m-auto d-flex justify-content-evenly'>

                        <li><img src={Przelewy24_logo} /></li>
                        <li><img src={paypal} /></li>
                        <li><img src={mastercard} /></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}
export default Footer;