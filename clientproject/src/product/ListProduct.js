import React, { useState, useEffect } from 'react'
import { getSingleFiles, getMultipleFiles } from '../data/api';
import "./product.css"
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

function ListProduct() {
    const [singleFiles, setSingleFiles] = useState([]);
    const [multipleFiles, setMultipleFiles] = useState([]);
    const [obj, setObj] = useState({});
    const [element, setElement] = useState({});


    const getMultipleFilesList = async () => {
        try {
            const fileslist = await getMultipleFiles();
            setMultipleFiles(fileslist);
            console.log(multipleFiles);
        } catch (error) {
            console.log(error);
        }
    }
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        // getSingleFileslist();
        getMultipleFilesList();

    }, []);

    useEffect(() => {
        console.log(obj);
    }, [obj])

    // useEffect(() => {
    //     console.log(obj)
    // }, [obj])


    return (
        <div>
            <div className="column sc_column_container sc_col-sm-12">
                <div className="sc_column-inner ">
                    <div className="wrapper">
                        <div className="sc_empty_space em_height_8-3 mt-5">
                            <span className="sc_empty_space_inner"></span>
                        </div>
                        <div className="sc_section sc_section_block">
                            <div className="sc_section_inner">
                                <h6 className="sc_section_subtitle sc_item_subtitle">Tous</h6>
                                <h2 className="sc_section_title sc_item_title line_show">nos produits</h2>
                                <div className="sc_section_content_wrap">
                                    <div className="sc_empty_space em_height_2">
                                        <span className="sc_empty_space_inner"></span>
                                    </div>
                                    <article className="myportfolio-container minimal-light" id="esg-grid-1-1-wrap">
                                        <div id="esg-grid-1-1" className="esg-grid">

                                            <div className="d-flex flex-nowrap listProductMarginContainer" >

                                                <div className="row justify-content-center">
                                                    {multipleFiles.map((element, index) =>
                                                        <div key={element._id} >

                                                            {element.files.map((file, index) =>
                                                                <div className="col-10 mb-5 ">
                                                                    <div className="card  cardStyle">
                                                                        <div className="card-body position-sticky">
                                                                            <div className="post_featured">
                                                                                <div className="">
                                                                                    <a className="hover_icon  d-flex justify-content-center">
                                                                                        <img src={`http://localhost:8080/${file.filePath}`} style={{ height: "200px", width: "250px" }} className="card-img-top img-responsive rounded float-left" alt="img" />
                                                                                    </a>
                                                                                </div>
                                                                            </div>
                                                                            <div className="post_content isotope_item_content">
                                                                                <div className="post_category card-title mt-2">
                                                                                    <p className='scheme_original' rel="tag">{element.title}</p>
                                                                                </div>
                                                                                <h6 className="post_title">
                                                                                    <p href="single-post.html" className="post_info_date">{element.title}</p>
                                                                                </h6>
                                                                                <div className="post_info">
                                                                                    <span className="post_info_item post_info_posted">
                                                                                        <p >
                                                                                            {(element.detail) ? element.detail.substring(0, 30) + "..." : "pas de details"}</p>
                                                                                    </span>

                                                                                </div>
                                                                                <div className='row justify-content-end'>
                                                                                    <Button variant="outlined" className='buttonStyle' onClick={
                                                                                        () => {
                                                                                            setObj(element);
                                                                                            handleClickOpen();
                                                                                        }
                                                                                    }>
                                                                                        Detail
                                                                                    </Button>
                                                                                </div>



                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            )}


                                                        </div>
                                                    )}


                                                    <Dialog
                                                        open={open}
                                                        onClose={handleClose}
                                                        aria-labelledby="alert-dialog-title"
                                                        aria-describedby="alert-dialog-description"
                                                    >
                                                        <DialogTitle id="alert-dialog-title">
                                                            {obj.title}
                                                        </DialogTitle>
                                                        <DialogContent>
                                                            <DialogContentText id="alert-dialog-description">
                                                                {obj.detail}
                                                            </DialogContentText>
                                                        </DialogContent>
                                                        <DialogActions>
                                                            {/* <Button onClick={handleClose}>Disagree</Button>
                                                            <Button onClick={handleClose} autoFocus>
                                                                Agree
                                                            </Button> */}
                                                        </DialogActions>
                                                    </Dialog>

                                                </div>



                                            </div>
                                        </div>
                                    </article>
                                    <div className="clear"></div>
                                </div>
                            </div>
                        </div>
                        <div className="sc_empty_space em_height_6">
                            <span className="sc_empty_space_inner"></span>
                        </div>
                    </div>
                </div>
            </div >

            {/* Detail produit */}
            {/* <div className="sc_row row">
                <div className="column sc_column_container sc_col-sm-12">
                    <div className="sc_column-inner ">
                        <div className="wrapper">
                            <div className="sc_empty_space em_height_8-4">
                                <span className="sc_empty_space_inner"></span>
                            </div>
                            <div className="columns_wrap sc_columns columns_nofluid">
                                <div className="column-1_4 sc_column_item">
                                    <div className="sc_empty_space hide_on_responsive em_height_4-4">
                                        <span className="sc_empty_space_inner"></span>
                                    </div>
                                    <h2 className="sc_title sc_title_regular">Open Hours:</h2>
                                    <div className="text_column content_element ">
                                        <div className="wrapper">
                                            <p>If you feel tired and stressed after a working day, we are happy to give you an enjoyable and healthy solution to find your balance again.</p>
                                        </div>
                                    </div>
                                    <div className="text_column content_element sc_custom_1459352457001">
                                        <div className="wrapper">
                                            <ul>
                                                <li>Mon-Fri: 9 AM &#8211; 6 PM</li>
                                                <li>Saturday: 9 AM &#8211; 4 PM</li>
                                                <li>Sunday: Closed</li>
                                            </ul>
                                        </div>
                                    </div>
                                    <a href="contacts.html" className="sc_button sc_button_square sc_button_style_border sc_button_size_base cu_mrg_1">Read More</a>
                                    <div className="sc_empty_space em_height_3-8">
                                        <span className="sc_empty_space_inner"></span>
                                    </div>
                                </div>
                                <div className="column-3_4 sc_column_item span_3">
                                    <div className="sc_promo custom_promo_01 scheme_light sc_promo_size_large">
                                        <div className="sc_promo_inner">
                                            <div className="sc_promo_image even"></div>
                                            <div className="sc_promo_block sc_align_left cu_block_1">
                                                <div className="sc_promo_block_inner cu_pds_1">
                                                    <div className="sc_promo_content">
                                                        <h6 className="sc_title sc_title_regular sc_align_right custom_title_01">01</h6>
                                                        <h6 className="sc_title sc_title_regular cu_block_2">
                                                            <em> July 4, 2015  /  0 Comments</em>
                                                        </h6>
                                                        <h2 className="sc_title sc_title_regular">
                                                            <a href="single-post.html">
                                                                Massage<br />
                                                                Therapy<br />
                                                                for rest &amp;<br />
                                                                relaxation
                                                            </a>
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
            </div> */}

            {/* product detail */}
            {/* <div data-sc-full-width="true" data-sc-full-width-init="false" data-sc-stretch-content="true" className="sc_row row sc_row-no-padding">
                <div className="column sc_column_container sc_col-sm-12">
                    <div className="sc_column-inner ">
                        <div className="wrapper">
                            <div className="sc_promo custom_promo_services sc_promo_size_large">
                                <div className="sc_promo_inner">
                                    <div className="sc_promo_image odd"></div>
                                    <div className="sc_promo_block sc_align_left cu_halfwidth cu_fl_R">
                                        <div className="sc_promo_block_inner cu_nopadds">
                                            <div className="sc_promo_content">
                                                <div id="sc_services_350_wrap" className="sc_services_wrap">
                                                    <div id="sc_services_350" className="sc_services sc_services_style_services-2 sc_services_type_icons cu_fullwidth">
                                                        <div className="sc_columns columns_wrap">
                                                            <div className="column-1_2 column_padding_bottom">
                                                                <div id="sc_services_350_1" className="sc_services_item">
                                                                    <a href="single-post.html">
                                                                        <span className="sc_icon icon-massage4"></span>
                                                                    </a>
                                                                    <div className="sc_services_item_content">
                                                                        <h4 className="sc_services_item_title">
                                                                            <a href="single-post.html">Massage Therapy</a>
                                                                        </h4>
                                                                        <div className="sc_services_item_description">
                                                                            <p>We use different types of massage for a variety of health-related purposes</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="column-1_2 column_padding_bottom">
                                                                <div id="sc_services_350_2" className="sc_services_item">
                                                                    <a href="single-post.html">
                                                                        <span className="sc_icon icon-chairs16"></span>
                                                                    </a>
                                                                    <div className="sc_services_item_content">
                                                                        <h4 className="sc_services_item_title">
                                                                            <a href="single-post.html">Physiotherapy</a>
                                                                        </h4>
                                                                        <div className="sc_services_item_description">
                                                                            <p>It helps restore movement and function when someone is affected by injury</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="column-1_2 column_padding_bottom">
                                                                <div id="sc_services_350_3" className="sc_services_item">
                                                                    <a href="single-post.html">
                                                                        <span className="sc_icon icon-relax43"></span>
                                                                    </a>
                                                                    <div className="sc_services_item_content">
                                                                        <h4 className="sc_services_item_title">
                                                                            <a href="single-post.html">Hot Stone Massage</a>
                                                                        </h4>
                                                                        <div className="sc_services_item_description">
                                                                            <p>The therapist uses smooth, heated stones by placing them on the body</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                            <div className="column-1_2 column_padding_bottom">
                                                                <div id="sc_services_350_4" className="sc_services_item">
                                                                    <a href="single-post.html">
                                                                        <span className="sc_icon icon-sport161"></span>
                                                                    </a>
                                                                    <div className="sc_services_item_content">
                                                                        <h4 className="sc_services_item_title">
                                                                            <a href="single-post.html">Sports Massage</a>
                                                                        </h4>
                                                                        <div className="sc_services_item_description">
                                                                            <p>Provides innovative bodywork and geared toward the needs of athletics</p>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div> */}

            {/* <div data-sc-full-width="true" data-sc-full-width-init="false" className="sc_row row sc_custom_1459330954110 scheme_original inverse_colors">
        <div className="column sc_column_container sc_col-sm-12">
            <div className="sc_column-inner ">
                <div className="wrapper">
                    <div className="columns_wrap sc_columns columns_nofluid custom_columns_brands equal_height">
                        <div className="column-1_4 sc_column_item">
                            <div className="sc_column_item_inner">
                                <h6 className="sc_title sc_title_regular">We use products of the best brands only</h6>
                            </div>
                        </div>
                        <div className="column-3_4 sc_column_item span_3">
                            <div id="sc_clients_387_wrap" className="sc_clients_wrap">
                                <div id="sc_clients_387" className="sc_clients sc_clients_style_clients-1 cu_fullwidth">
                                    <div className="sc_slider_swiper swiper-slider-container sc_slider_nopagination sc_slider_nocontrols" data-interval="9415" data-slides-per-view="3" data-slides-min-width="100">
                                        <div className="slides swiper-wrapper">
                                            <div className="swiper-slide" data-style="width:100%;">
                                                <div id="sc_clients_387_1" className="sc_clients_item">
                                                    <div className="sc_client_image">
                                                        <img alt="" src="images/logo-4.png" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide" data-style="width:100%;">
                                                <div id="sc_clients_387_2" className="sc_clients_item">
                                                    <div className="sc_client_image">
                                                        <img alt="" src="images/logo-2.png" />
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="swiper-slide" data-style="width:100%;">
                                                <div id="sc_clients_387_3" className="sc_clients_item">
                                                    <div className="sc_client_image">
                                                        <img alt="" src="images/logo-1.png" />
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                        <div className="sc_slider_controls_wrap">
                                            <a className="sc_slider_prev" href="#"></a>
                                            <a className="sc_slider_next" href="#"></a>
                                        </div>
                                        <div className="sc_slider_pagination_wrap"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
                </div> */}

        </div >
    )
}

export default ListProduct