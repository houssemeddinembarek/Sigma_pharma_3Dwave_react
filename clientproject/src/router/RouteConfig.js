import React from 'react'
import { Routes, Route, BrowserRouter as Router } from "react-router-dom";
import App from '../App';
import Footer from '../components/footer/Footer';
import Navbar from '../components/header/header';
import Indication from '../indication/Indication';
import Laboratoire from '../laboratoire/Laboratoire';
import AddProduct from '../product/AddProduct';
import ListProduct from '../product/ListProduct';
// import "bootstrap/dist/css/bootstrap.css";


function RouteConfig() {
    return (
        <>
            <div className="home page body_filled article_style_stretch scheme_original preloader top_panel_above sidebar_hide sidebar_outer_hide sc_responsive">
                <div className="body_wrap">
                    <div className="page_wrap">
                        <div className="top_panel_fixed_wrap"></div>
                        <div className="header_mobile">
                            <div className="content_wrap">
                                <div className="menu_button icon-menu"></div>
                                <div className="logo">
                                    <a >
                                        <img src="images/Logo.png" className="logo_main" alt="" width="238" height="56" />
                                    </a>
                                </div>
                                <div className="menu_main_cart top_panel_icon">
                                    <a className="top_panel_cart_button" data-items="0" data-summa="&pound;0.00">
                                        <span className="contact_icon icon-icon_bag_alt"></span>
                                    </a>
                                    <ul className="widget_area sidebar_cart sidebar">
                                        <li>
                                            <div className="widget woocommerce widget_shopping_cart">
                                                <div className="hide_cart_widget_if_empty">
                                                    <div className="widget_shopping_cart_content">
                                                        <ul className="cart_list product_list_widget ">
                                                            <li className="empty">No products in the cart.</li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div className="side_wrap">
                                <div className="close">Close</div>
                                <div className="panel_top">
                                    <nav className="menu_main_nav_area">
                                        <ul className="menu_main_nav">
                                            <li className="menu-item current-menu-ancestor current-menu-parent menu-item-has-children"><a>Home</a>
                                                <ul className="sub-menu">
                                                    <li className="menu-item current-menu-item"><a >Home 1</a></li>
                                                    <li className="menu-item"><a >Home 2</a></li>
                                                    <li className="menu-item"><a >Home 3</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item menu-item-has-children"><a>Features</a>
                                                <ul className="sub-menu">
                                                    <li className="menu-item menu-item-has-children"><a>Gallery</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a >Grid</a></li>
                                                            <li className="menu-item"><a >Masonry</a></li>
                                                            <li className="menu-item"><a >Cobbles</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item"><a >Polaroid gallery</a></li>
                                                    <li className="menu-item menu-item-has-children"><a>About</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a >About Us</a></li>
                                                            <li className="menu-item"><a >About Us 2</a></li>
                                                            <li className="menu-item"><a >Our Staff</a></li>
                                                            <li className="menu-item"><a >Contacts Us</a></li>
                                                            <li className="menu-item"><a >Price Tables</a></li>
                                                            <li className="menu-item"><a >Pricing</a></li>
                                                            <li className="menu-item"><a >Events</a></li>
                                                            <li className="menu-item"><a >Gift Certificates</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-has-children"><a>Services</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a >Services 1</a></li>
                                                            <li className="menu-item"><a >Services 2</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-has-children"><a>Pages</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a >Typography</a></li>
                                                            <li className="menu-item"><a >Shortcodes</a></li>
                                                            <li className="menu-item"><a >404 Page</a></li>
                                                            <li className="menu-item"><a >Customization</a></li>
                                                            <li className="menu-item"><a >Faq Page</a></li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </li>
                                            <li className="menu-item"><a >Booking</a></li>
                                            <li className="menu-item menu-item-has-children"><a>Blog</a>
                                                <ul className="sub-menu">
                                                    <li className="menu-item"><a >classNameic</a></li>
                                                    <li className="menu-item menu-item-has-children"><a>Masonry</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a >2 columns</a></li>
                                                            <li className="menu-item"><a >3 columns</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item menu-item-has-children"><a>Portfolio</a>
                                                        <ul className="sub-menu">
                                                            <li className="menu-item"><a >2 columns</a></li>
                                                            <li className="menu-item"><a >3 columns</a></li>
                                                        </ul>
                                                    </li>
                                                    <li className="menu-item"><a >Post Formats</a></li>
                                                </ul>
                                            </li>
                                            <li className="menu-item"><a >Shop</a></li>
                                        </ul>
                                    </nav>
                                    <div className="search_wrap search_style_regular search_state_fixed search_ajax">
                                        <div className="search_form_wrap">
                                            <form role="search" method="get" className="search_form" action="#">
                                                <button type="submit" className="search_submit icon-search-1" title="Start search"></button>
                                                <input type="text" className="search_field" placeholder="Search" value="" name="s" />
                                            </form>
                                        </div>
                                        <div className="search_results widget_area scheme_original">
                                            <a className="search_results_close icon-cancel"></a>
                                            <div className="search_results_content"></div>
                                        </div>
                                    </div>
                                </div>
                                <div className="panel_middle">
                                    <div className="contact_field contact_phone">
                                        <span className="contact_icon icon-icon_phone"></span>
                                        <span className="contact_label contact_phone"><a >+1 800 245 39 25</a></span>
                                    </div>
                                    <div className="contact_field contact_mail">
                                        <span className="contact_icon icon-mail"></span>
                                        <span className="contact_email"><a >info@yoursite.com</a></span>
                                    </div>
                                    <div className="top_panel_top_open_hours icon-clock">Mon - Fry 10:00 - 18:00</div>
                                    <div className="top_panel_top_user_area">
                                        <ul className="menu_user_nav">
                                        </ul>
                                    </div>
                                </div>
                                <div className="panel_bottom">
                                    <div className="contact_socials">
                                        <div className="sc_socials sc_socials_type_icons sc_socials_shape_square sc_socials_size_small">
                                            <div className="sc_socials_item">
                                                <a target="_blank" className="social_icons social_twitter">
                                                    <span className="icon-twitter"></span>
                                                </a>
                                            </div>
                                            <div className="sc_socials_item">
                                                <a target="_blank" className="social_icons social_facebook">
                                                    <span className="icon-facebook"></span>
                                                </a>
                                            </div>
                                            <div className="sc_socials_item">
                                                <a target="_blank" className="social_icons social_instagramm">
                                                    <span className="icon-instagramm"></span>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mask"></div>
                        </div>

                        <Navbar />
                        <div className='mb-5'>
                            <Router>
                                <Routes>
                                    <Route exact path="/" element={<App />} />
                                    <Route exact path="/addproduct" element={<AddProduct />} />
                                    <Route exact path="/listproduct" element={<ListProduct />} />
                                    <Route exact path="/laboratoire" element={<Laboratoire />} />
                                    <Route exact path="/indication" element={<Indication />} />
                                </Routes>
                            </Router>
                        </div>


                        <div className="page_content_wrap page_paddings_no">
                            <div className="content_wrap">
                                <div className="content">
                                    <article className="post_item post_item_single page">
                                        <section className="post_content">



                                        </section>
                                        <div className="sc_row-full-width"></div>
                                        <Footer />

                                    </article>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>


        </>
    )
}

export default RouteConfig