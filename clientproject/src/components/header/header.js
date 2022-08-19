import React from 'react'
import sigmaTunisie from '../../assets/sigmaPh.png';


function Header() {
    return (
        <header className="top_panel_wrap top_panel_style_4 scheme_original">
            <div className="top_panel_wrap_inner top_panel_inner_style_4 top_panel_position_above">
                <div className="top_panel_middle fixed-top">
                    <div className="content_wrap">
                        <div className="contact_logo">
                            <div className="logo">
                                <a href="/">
                                    <img src="images/Logo.png" className="logo_fixed" alt="" width="238" height="56" /> 
                                    <img src={sigmaTunisie} alt=""  style={{ width: "150px", height: "60px" }} />
                                </a>
                            </div>
                        </div>
                        <div className="menu_main_wrap">
                            <nav className="menu_main_nav_area ">
                                <ul className="menu_main_nav">
                                    <li className="menu-item current-menu-ancestor">
                                        <a href="/">ACCUEIL</a>
                                    </li>
                                    <li className="menu-item current-menu-ancestor ">
                                        <a href="/listproduct" className=''>NOS PRODUIT</a>
                                    </li>
                                    <li className="menu-item current-menu-ancestor ">
                                        <a href="/indication" className=''>INDICATIONS </a>
                                    </li>
                                    <li className="menu-item current-menu-ancestor ml-5">
                                        <a href="/laboratoire" className=''>LE LABORATOIRE</a>
                                    </li>
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