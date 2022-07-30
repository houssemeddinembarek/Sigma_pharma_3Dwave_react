import React from 'react'
import {a} from "react-router-dom";
import sigmaTunisie from '../../assets/sigmatunisie.png';


function Header() {
    return (
        // <div>
        //     <header className="top_panel_wrap top_panel_style_4 scheme_original">
        //         <div className="top_panel_wrap_inner top_panel_inner_style_4 top_panel_position_above">
        //             <div className="top_panel_top">
        //                 <div className="content_wrap clearfix">
        //                     <div className="top_panel_top_contact_area">Contact Us: <a href="mailto:info@yoursite.com">info@yoursite.com</a></div>
        //                     <div className="top_panel_top_contact_area">Call Us <a href="tel:+18002453925">+1 800 245 39 25 </a></div>
        //                     <div className="top_panel_top_user_area">
        //                         <ul className="menu_user_nav">
        //                             <li className="menu_user_cart">
        //                                 <a href="#" className="top_panel_cart_button" data-items="0" data-summa="&pound;0.00">
        //                                     <span className="contact_icon icon-icon_bag_alt"></span>
        //                                 </a>
        //                                 <ul className="widget_area sidebar_cart sidebar">
        //                                     <li>
        //                                         <div className="widget woocommerce widget_shopping_cart">
        //                                             <div className="hide_cart_widget_if_empty">
        //                                                 <div className="widget_shopping_cart_content">
        //                                                     <ul className="cart_list product_list_widget ">
        //                                                         <li className="empty">No products in the cart.</li>
        //                                                     </ul>
        //                                                 </div>
        //                                             </div>
        //                                         </div>
        //                                     </li>
        //                                 </ul>
        //                             </li>
        //                         </ul>
        //                     </div>
        //                     <div className="top_panel_top_socials">
        //                         <span className="label">Stay connected: </span>
        //                         <div className="sc_socials sc_socials_type_icons sc_socials_shape_square sc_socials_size_tiny">
        //                             <div className="sc_socials_item">
        //                                 <a href="#" target="_blank" className="social_icons social_twitter">
        //                                     <span className="icon-twitter"></span>
        //                                 </a>
        //                             </div>
        //                             <div className="sc_socials_item">
        //                                 <a href="#" target="_blank" className="social_icons social_facebook">
        //                                     <span className="icon-facebook"></span>
        //                                 </a>
        //                             </div>
        //                             <div className="sc_socials_item">
        //                                 <a href="#" target="_blank" className="social_icons social_instagramm">
        //                                     <span className="icon-instagramm"></span>
        //                                 </a>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //             <div className="top_panel_middle" >
        //                 <div className="content_wrap">

        //                     <div className="contact_logo">
        //                         <div className="logo">
        //                             <a >
        //                                 <img src={sigmaTunisie} alt="" className='animated flash slow infinite' style={{ width:"150px", height:"50px"}}  />
        //                             </a>
        //                         </div>
        //                     </div>

        //                     <div className="menu_main_wrap">
        //                         <nav className="menu_main_nav_area">
        //                             <ul className="menu_main_nav">
        //                                 <li className="menu-item"><a href="booking.html">Accueil</a></li>
        //                                 <li className="menu-item"><a href="booking.html">LE LABORATOIRE</a></li>
        //                                 <li className="menu-item"><a href="booking.html">NOS Produits</a></li>
        //                                 {/* <li className="menu-item current-menu-ancestor current-menu-parent menu-item-has-children"><a>Home</a>
        //                                     <ul className="sub-menu">
        //                                         <li className="menu-item current-menu-item"><a href="index.html">Home 1</a></li>
        //                                         <li className="menu-item"><a href="home-2.html">Home 2</a></li>
        //                                         <li className="menu-item"><a href="home-3.html">Home 3</a></li>
        //                                     </ul>
        //                                 </li> */}
        //                                 {/* <li className="menu-item menu-item-has-children"><a>Features</a>
        //                                     <ul className="sub-menu">
        //                                         <li className="menu-item menu-item-has-children"><a>Gallery</a>
        //                                             <ul className="sub-menu">
        //                                                 <li className="menu-item"><a href="gallery-grid.html">Grid</a></li>
        //                                                 <li className="menu-item"><a href="gallery-masonry.html">Masonry</a></li>
        //                                                 <li className="menu-item"><a href="gallery-cobbles.html">Cobbles</a></li>
        //                                             </ul>
        //                                         </li>
        //                                         <li className="menu-item"><a href="gallery-polaroid.html">Polaroid gallery</a></li>
        //                                         <li className="menu-item menu-item-has-children"><a>About</a>
        //                                             <ul className="sub-menu">
        //                                                 <li className="menu-item"><a href="about-us.html">About Us</a></li>
        //                                                 <li className="menu-item"><a href="about-us-2.html">About Us 2</a></li>
        //                                                 <li className="menu-item"><a href="staff.html">Our Staff</a></li>
        //                                                 <li className="menu-item"><a href="contacts.html">Contacts Us</a></li>
        //                                                 <li className="menu-item"><a href="price-tables.html">Price Tables</a></li>
        //                                                 <li className="menu-item"><a href="pricing.html">Pricing</a></li>
        //                                                 <li className="menu-item"><a href="events.html">Events</a></li>
        //                                                 <li className="menu-item"><a href="certificates.html">Gift Certificates</a></li>
        //                                             </ul>
        //                                         </li>
        //                                         <li className="menu-item menu-item-has-children"><a>Services</a>
        //                                             <ul className="sub-menu">
        //                                                 <li className="menu-item"><a href="services.html">Services 1</a></li>
        //                                                 <li className="menu-item"><a href="services-2.html">Services 2</a></li>
        //                                             </ul>
        //                                         </li>
        //                                         <li className="menu-item menu-item-has-children"><a>Pages</a>
        //                                             <ul className="sub-menu">
        //                                                 <li className="menu-item"><a href="typography.html">Typography</a></li>
        //                                                 <li className="menu-item"><a href="shortcodes.html">Shortcodes</a></li>
        //                                                 <li className="menu-item"><a href="404.html">404 Page</a></li>
        //                                                 <li className="menu-item"><a href="customization.html">Customization</a></li>
        //                                                 <li className="menu-item"><a href="faq.html">Faq Page</a></li>
        //                                             </ul>
        //                                         </li>
        //                                     </ul>
        //                                 </li> */}
        //                                 {/* <li className="menu-item menu-item-has-children"><a>Blog</a>
        //                                     <ul className="sub-menu">
        //                                         <li className="menu-item"><a href="classic.html">Classic</a></li>
        //                                         <li className="menu-item menu-item-has-children"><a>Masonry</a>
        //                                             <ul className="sub-menu">
        //                                                 <li className="menu-item"><a href="masonry-2-columns.html">2 columns</a></li>
        //                                                 <li className="menu-item"><a href="masonry-3-columns.html">3 columns</a></li>
        //                                             </ul>
        //                                         </li>
        //                                         <li className="menu-item menu-item-has-children"><a>Portfolio</a>
        //                                             <ul className="sub-menu">
        //                                                 <li className="menu-item"><a href="portfolio-2-columns.html">2 columns</a></li>
        //                                                 <li className="menu-item"><a href="portfolio-3-columns.html">3 columns</a></li>
        //                                             </ul>
        //                                         </li>
        //                                         <li className="menu-item"><a href="post-formats.html">Post Formats</a></li>
        //                                     </ul>
        //                                 </li> */}
        //                                 {/* <li className="menu-item"><a href="shop.html">Shop</a></li> */}
        //                             </ul>
        //                         </nav>
        //                         <div className="search_wrap search_style_regular search_state_closed search_ajax">
        //                             <div className="search_form_wrap">
        //                                 <form role="search" method="get" className="search_form" action="#">
        //                                     <button type="submit" className="search_submit icon-search-1" title="Open search"></button>
        //                                     <input type="text" className="search_field" placeholder="Search" value="" name="s" />
        //                                 </form>
        //                             </div>
        //                             <div className="search_results widget_area scheme_original">
        //                                 <a className="search_results_close icon-cancel"></a>
        //                                 <div className="search_results_content"></div>
        //                             </div>
        //                         </div>
        //                     </div>
        //                 </div>
        //             </div>
        //         </div>
        //     </header>
        // </div>
        <header className="top_panel_wrap top_panel_style_4 scheme_original">
            <div className="top_panel_wrap_inner top_panel_inner_style_4 top_panel_position_above">
                <div className="top_panel_middle fixed-top">
                    <div className="content_wrap">
                        <div className="contact_logo">
                            <div className="logo">
                                <a href="/">
                                    {/* <img src="images/Logo.png" className="logo_main" alt="" width="238" height="56" />
                                    <img src="images/Logo.png" className="logo_fixed" alt="" width="238" height="56" /> */}
                                    <img src={sigmaTunisie} alt="" className='animated flash slow infinite' style={{ width: "150px", height: "50px" }} />
                                </a>
                            </div>
                        </div>
                        <div className="menu_main_wrap">
                            <nav className="menu_main_nav_area ">
                                <ul className="menu_main_nav">
                                    <li className="menu-item current-menu-ancestor ">
                                        <a href="/">ACCUEIL</a>
                                    </li>
                                    <li className="menu-item current-menu-ancestor">
                                        <a href="/laboratoire" className=''>LE LABORATOIRE</a>
                                    </li>
                                    <li className="menu-item current-menu-ancestor pl-5">
                                        <a href="/listproduct" className=''>NO PRODUIT</a>
                                    </li>
                                    {/* <li className="menu-item current-menu-ancestor"><a href="booking.html" className=''>Booking</a></li> */}
                                </ul>
                            </nav>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    )
}

export default Header