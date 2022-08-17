import React from 'react'
import "./laboratoire.css"
import labo from "../assets/labo.jpg";
import laboGroupImage1 from "../assets/kind-hearted-friendly-looking-young-man-keep-palms-2022-01-28-03-01-45-utc.jpg";
import laboGroupImage2 from "../assets/overjoyed-woman-laughs-happily-while-drinks-hot-co-2022-03-30-02-30-47-utc.jpg";
import laboGroupImage3 from "../assets/satisfied-brunette-woman-in-transparent-glasses-ha-2022-01-18-23-39-47-utc.jpg";

function Laboratoire() {
    return (
        <div>
            <div className="content_wrap">

                <div className="content"></div>
                <article className="post_item post_item_single page">
                    <section className="post_content">
                        <div className="sc_section_inner" style={{ marginTop: 170 }}>
                            <h2 className="sc_section_title sc_item_title line_show">LE LABORATOIRE</h2>
                            <div className="sc_section_content_wrap">
                                <div className="text_column content_element  mockingbird-text">
                                    <div className="wrapper">
                                        <div className="columns_wrap sc_columns columns_nofluid">

                                            <div className="column-4_4 sc_column_item span_3">
                                                <div className="sc_promo custom_promo_01 scheme_light sc_promo_size_large">
                                                    <div className="sc_promo_inner">
                                                        <div className="sc_promo_image ">
                                                            <img src={labo} className="laboImage"/>
                                                        </div>
                                                        <div className="sc_promo_block sc_align_left cu_block_1">
                                                            <div className="sc_promo_block_inner cu_pds_1">
                                                                <div className="sc_promo_content">
                                                                    <h6 className="sc_title sc_title_regular sc_align_right custom_title_01">SP</h6>
                                                                    <h6 className="sc_title sc_title_regular cu_block_2">
                                                                        <em> Le laboratoire dermatologique SIGMA PHARMA offre aux personnes les plus exigeantes des soins de Haute Qualité.
                                                                            <br />
                                                                            Chaque soin est une formule d’exception issue du savoir-faire des experts de la santé.
                                                                            <br />
                                                                            Alliant rigueur pharmaceutique et raffinement, pour chaque actif une formule sur-mesure qui contribue pleinement à son efficacité et crée une expérience incomparable sur la peau.
                                                                            <br />
                                                                            Il offre des produits d’hygiène et de soin adaptés à tous les types de peau : des peaux grasses à tendance acnéique aux peaux sèches en passant par les peaux sensibles. Rigueur pharmaceutique et Savoir-faire dermo-cosmétique président au développement de nos produits.
                                                                            <br />
                                                                            SIGMA PHARMA s’est construit sur trois valeurs essentielles l’honnêteté et la transparence, l’ambition, l’exigence absolue et la sécurisation dermatologique.</em>
                                                                    </h6>
                                                                    <h2 className="sc_title sc_title_regular">

                                                                    </h2>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc_empty_space em_height_8-4">
                                            <span className="sc_empty_space_inner"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="sc_row row sc_row-fluid">
                            <div className="column sc_column_container sc_col-sm-12">
                                <div className="sc_column-inner ">
                                    <div className="wrapper">
                                        <div className="sc_empty_space em_height_8-46">
                                            <span className="sc_empty_space_inner"></span>
                                        </div>
                                        <div className="columns_wrap sc_columns columns_nofluid no_margins equal_height">
                                            <div className="column-1_3 sc_column_item" style={{ height: 410 }}>
                                                <div className="sc_column_item_inner cu_block_4">
                                                    <img src={laboGroupImage1} className="laboImage" />
                                                </div>
                                            </div>
                                            <div className="column-1_3 sc_column_item" style={{ height: 410 }}>
                                                <div className="sc_column_item_inner cu_block_5">
                                                    <h2 className="sc_title sc_title_regular sc_align_center text">honneteté et transparence :</h2>
                                                    <div className="sc_line sc_line_position_center_center sc_line_style_solid sousTitreBar"></div>
                                                    <div className="text_column content_element ">
                                                        <div className="wrapper">
                                                            <p className="cu_text_c">
                                                                Actifs reconnus scientifiquement,
                                                                <br />  sélection des matières premières et tolérabilité dermatologique.

                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* <a href="booking.html" className="sc_button sc_button_square sc_button_style_filled sc_button_size_base aligncenter">
                                                            <div>
                                                                <span className="first">Book Now</span>
                                                                <span className="second">Book Now</span>
                                                            </div>
                                                        </a> */}
                                                </div>
                                            </div>
                                            <div className="column-1_3 sc_column_item" style={{ height: 410 }}>
                                                <div className="sc_column_item_inner cu_block_7">
                                                    <img src={laboGroupImage3} className="laboImage"  />
                                                </div>
                                            </div>
                                            <div className="column-1_3 sc_column_item">
                                                <div className="sc_column_item_inner cu_block_5">
                                                    <h2 className="sc_title sc_title_regular sc_align_center text">L’ambition :</h2>
                                                    <div className="sc_line sc_line_position_center_center sc_line_style_solid sousTitreBar"></div>
                                                    <div className="text_column content_element ">
                                                        <div className="wrapper">
                                                            <p className="cu_text_c">
                                                                Développer des solutions et des soins dermatologiques uniques.

                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* <a href="booking.html" className="sc_button sc_button_square sc_button_style_filled sc_button_size_base aligncenter">
                                                            <div>
                                                                <span className="first">Book Now</span>
                                                                <span className="second">Book Now</span>
                                                            </div>
                                                        </a> */}
                                                </div>
                                            </div>
                                            <div className="column-1_3 sc_column_item" style={{ height: 410 }}>
                                                <div className="sc_column_item_inner cu_block_6">
                                                    <img src={laboGroupImage2} className="laboImage" />
                                                </div>
                                            </div>
                                            <div className="column-1_3 sc_column_item">
                                                <div className="sc_column_item_inner cu_block_5">
                                                    <h2 className="sc_title sc_title_regular sc_align_center text">L’exigence absolue et la sécurisation dermatologique :</h2>
                                                    <div className="sc_line sc_line_position_center_center sc_line_style_solid sousTitreBarLongP"></div>
                                                    <div className="text_column content_element ">
                                                        <div className="wrapper">
                                                            <p className="cu_text_c">
                                                                Garantir des soins efficaces avec la plus grande sécurité dermatologique.
                                                                Un travail d’équipes professionnelles,
                                                                nous permet de poursuivre nos objectifs communs avec respect et confiance.
                                                                SIGMA PHARMA est un laboratoire spécialiste en dermatologie,
                                                                il développe et commercialise des produits parapharmaceutiques, des produits cosmétiques, des compléments alimentaires offrant des solutions innovantes pour les motifs de consultation les plus courants.

                                                            </p>
                                                        </div>
                                                    </div>
                                                    {/* <a href="booking.html" className="sc_button sc_button_square sc_button_style_filled sc_button_size_base aligncenter">
                                                            <div>
                                                                <span className="first">Book Now</span>
                                                                <span className="second">Book Now</span>
                                                            </div>
                                                        </a> */}
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc_empty_space em_height_8-46">
                                            <span className="sc_empty_space_inner"></span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </article>
                <section className='post_author author vcard'>
                    <h1 className="sc_title sc_title_regular">CHARTE SIGMA PHARMA</h1>
                    <p>Tous nos produits sont développés en tenant compte des besoins réels des patients.
                        Nos soins sont composés d’actifs reconnus et utiles.</p>
                </section>
                <section className='post_author author vcard'>
                    <h1 className="sc_title sc_title_regular">R&D :</h1>
                    <p>SIGMA PHARMA a le souhait de développer des soins dermatologiques innovants, accessibles à tous, pour se sentir mieux au quotidien quels que soient les problèmes de peaux rencontrés.
                        C’est pourquoi, les problèmes dermatologiques sont au cœur de nos programmes de recherche et de développement.
                        En étroite collaboration avec les experts de la santé pour apporter des solutions innovantes et répondre au mieux aux besoins des patients et aux attentes des médecins.
                        Proposer des produits avec des ingrédients sûrs dont l’efficacité a été prouvée.
                        L’efficacité et la tolérance des produits sont évaluées avec rigueur avant la commercialisation d’un produit.
                        L’agrément d’utilisation des produits sont pris en compte dès leur conception.
                    </p>
                </section>


            </div>
        </div>

    )
}

export default Laboratoire