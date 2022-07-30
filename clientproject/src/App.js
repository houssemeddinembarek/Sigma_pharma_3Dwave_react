import React, { useState, useEffect } from 'react';
import './App.css';
import FileUploadScreen from './screens/FileUploadScreen';
import { getSingleFiles, getMultipleFiles } from './data/api';
import AddProduct from './product/AddProduct';
import ListProduct from './product/ListProduct';
import Navbar from './components/header/header';
import Slider from 'react-animated-slider';
import 'react-animated-slider/build/horizontal.css';
import VideoCarousel from './components/videoCarousel/VideoCarousel';
import ProductShow from './components/productShow';

// import "bootstrap/dist/css/bootstrap.css";

function App() {


  const items = [
    { image: 'image1', title: 'titre1', description: 'description1' },
    { image: 'image2', title: 'titre2', description: 'description2' },
    { image: 'image3', title: 'titre3', description: 'description3' },
    { image: 'image4', title: 'titre4', description: 'description4' },
  ]


  return (
    <div>
      {/* <Slider autoplay={2000} >
        {items.map((item, index) => (
          // <div
          //     key={index}
          //     style={{ background: `url('${item.image}') no-repeat center center` }}
          // >
          <div className="center">
            <h1>{item.title}</h1>
            <p>{item.description}</p>
            <button>{item.button}</button>
          </div>
          // </div>
        ))}
      </Slider> */}
      {/* <AddProduct />

      <ListProduct /> */}


      {/* <section className="slider_wrap slider_fullwide slider_engine_revo slider_alias_home-1">
        <div id="rev_slider_1_1_wrapper" className="rev_slider_wrapper fullwidthbanner-container">
          <div id="rev_slider_1_1" className="rev_slider fullwidthabanner" data-version="5.2.6">
            <ul>
              <li data-index="rs-1" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="images/1-1-100x50.jpg" data-delay="9000" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                <img src="images/1170x700.jpg" alt="" title="1" width="1920" height="758" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                <div className="tp-caption tp-resizeme" id="slide-1-layer-5" data-x="['center','center','center','center']" data-hoffset="['0','0','0','1']" data-y="['middle','middle','middle','middle']" data-voffset="['-117','-117','-117','-167']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="x:-50px;opacity:0;s:1200;e:Power2.easeInOut;" data-transform_out="auto:auto;s:1000;" data-start="1000" data-responsive_offset="on">
                  <img src="images/Vector-Smart-Object-6.png" alt="" width="169" height="20" data-ww="['169px','169px','169px','169px']" data-hh="['20px','20px','20px','20px']" data-no-retina />
                </div>
                <div className="tp-caption black tp-resizeme" id="slide-1-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','6']" data-y="['middle','middle','middle','middle']" data-voffset="['-67','-67','-67','-123']" data-fontsize="['68','68','68','55']" data-lineheight="['90','90','90','55']" data-width="['465','465','465','466']" data-height="['91','91','91','none']" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:0;y:0;s:inherit;e:inherit;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on">Visit one of our multiple </div>
                <div className="tp-caption black tp-resizeme" id="slide-1-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','-1']" data-y="['middle','middle','middle','middle']" data-voffset="['-5','-5','-5','-37']" data-fontsize="['68','68','60','55']" data-lineheight="['68','68','60','55']" data-width="['none','none','none','600']" data-height="none" data-whitespace="['nowrap','nowrap','nowrap','normal']" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:2500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:0;y:0;s:inherit;e:inherit;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on">sessions of relaxation </div>
                <div className="tp-caption black tp-resizeme" id="slide-1-layer-3" data-x="['center','center','center','center']" data-hoffset="['1','1','1','3']" data-y="['middle','middle','middle','middle']" data-voffset="['63','63','63','70']" data-fontsize="['17','17','17','20']" data-lineheight="['30','30','30','25']" data-width="['none','none','none','550']" data-height="none" data-whitespace="['nowrap','nowrap','nowrap','normal']" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on">You owe yourself this moment. Make an appointment in just a click! </div>
                <div className="tp-caption black tp-resizeme" id="slide-1-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','1']" data-y="['middle','middle','middle','middle']" data-voffset="['142','142','142','163']" data-fontsize="['11','11','11','15']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Linear.easeNone;" data-style_hover="c:rgba(249, 163, 146, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);" data-transform_in="y:50px;opacity:0;s:3000;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;" data-start="1000" data-splitin="none" data-splitout="none" data-actions='[{"event":"click","action":"simplelink","target":"_self","url":"booking.html","delay":""}]' data-responsive_offset="on">make an appointment </div>
              </li>
              <li data-index="rs-4" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="images/3-2-100x50.jpg" data-delay="9000" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                <img src="images/1170x700.jpg" alt="" title="3" width="1920" height="758" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                <div className="tp-caption tp-resizeme" id="slide-4-layer-5" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-117','-117','-117','-173']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="x:-50px;opacity:0;s:1200;e:Power2.easeInOut;" data-transform_out="auto:auto;s:1000;" data-start="1000" data-responsive_offset="on">
                  <img src="images/Vector-Smart-Object-6.png" alt="" width="169" height="20" data-ww="['169px','169px','169px','169px']" data-hh="['20px','20px','20px','20px']" data-no-retina />
                </div>
                <div className="tp-caption black tp-resizeme" id="slide-4-layer-1" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-67','-67','-67','-130']" data-fontsize="['68','68','68','55']" data-lineheight="['90','90','90','55']" data-width="['465','465','465','466']" data-height="['91','91','91','none']" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:0;y:0;s:inherit;e:inherit;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on">Welcome to our </div>
                <div className="tp-caption black tp-resizeme" id="slide-4-layer-2" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-5','-5','-5','-40']" data-fontsize="['68','68','60','55']" data-lineheight="['68','68','60','55']" data-width="['none','none','none','600']" data-height="none" data-whitespace="['nowrap','nowrap','nowrap','normal']" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:2500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:0;y:0;s:inherit;e:inherit;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on">massage theraphy center </div>
                <div className="tp-caption black tp-resizeme" id="slide-4-layer-3" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['61','61','61','61']" data-fontsize="['17','17','17','20']" data-lineheight="['30','30','30','25']" data-width="['none','none','none','600']" data-height="none" data-whitespace="['nowrap','nowrap','nowrap','normal']" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on">Give yourself a moment to relax. Find a minute to rejuvenate your body </div>
                <div className="tp-caption black tp-resizeme" id="slide-4-layer-4" data-x="['center','center','center','center']" data-hoffset="['0','0','0','0']" data-y="['middle','middle','middle','middle']" data-voffset="['142','142','142','142']" data-fontsize="['11','11','11','15']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Linear.easeNone;" data-style_hover="c:rgba(249, 163, 146, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);" data-transform_in="y:50px;opacity:0;s:3000;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;" data-start="1000" data-splitin="none" data-splitout="none" data-actions='[{"event":"click","action":"simplelink","target":"_self","url":"https:\/\/themeforest.net\/user\/themerex\/portfolio?term=jacqueline","delay":""}]' data-responsive_offset="on">Purchase Template </div>
              </li>
              <li data-index="rs-3" data-transition="fade" data-slotamount="default" data-hideafterloop="0" data-hideslideonmobile="off" data-easein="default" data-easeout="default" data-masterspeed="default" data-thumb="images/2-3-100x50.jpg" data-delay="9000" data-rotate="0" data-saveperformance="off" data-title="Slide" data-param1="" data-param2="" data-param3="" data-param4="" data-param5="" data-param6="" data-param7="" data-param8="" data-param9="" data-param10="" data-description="">
                <img src="images/1170x700.jpg" alt="" title="2" width="1920" height="758" data-bgposition="center center" data-bgfit="cover" data-bgrepeat="no-repeat" className="rev-slidebg" data-no-retina />
                <div className="tp-caption tp-resizeme" id="slide-3-layer-5" data-x="['center','center','center','center']" data-hoffset="['-200','-200','-150','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-158','-158','-158','-118']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="x:-50px;opacity:0;s:1200;e:Power2.easeInOut;" data-transform_out="auto:auto;s:1000;" data-start="1000" data-responsive_offset="on">
                  <img src="images/Vector-Smart-Object-6.png" alt="" width="169" height="20" data-ww="['169px','169px','169px','169px']" data-hh="['20px','20px','20px','20px']" data-no-retina />
                </div>
                <div className="tp-caption black tp-resizeme" id="slide-3-layer-1" data-x="['center','center','center','center']" data-hoffset="['-200','-200','-150','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-107','-107','-107','-79']" data-fontsize="['68','68','68','55']" data-lineheight="['90','90','90','55']" data-width="['465','465','465','466']" data-height="['91','91','91','none']" data-whitespace="normal" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:2000;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:0;y:0;s:inherit;e:inherit;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on">Modern and attractive </div>
                <div className="tp-caption black tp-resizeme" id="slide-3-layer-2" data-x="['center','center','center','center']" data-hoffset="['-200','-200','-150','0']" data-y="['middle','middle','middle','middle']" data-voffset="['-45','-45','-45','-24']" data-fontsize="['68','68','60','55']" data-lineheight="['68','68','60','55']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:[-100%];z:0;rX:0deg;rY:0;rZ:0;sX:1;sY:1;skX:0;skY:0;s:2500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;" data-mask_in="x:0px;y:0px;s:inherit;e:inherit;" data-mask_out="x:0;y:0;s:inherit;e:inherit;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on">HTML Template </div>
                <div className="tp-caption black tp-resizeme" id="slide-3-layer-3" data-x="['center','center','center','center']" data-hoffset="['-200','-200','-150','0']" data-y="['middle','middle','middle','middle']" data-voffset="['23','23','23','43']" data-fontsize="['17','17','17','20']" data-lineheight="['30','30','30','25']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_in="y:50px;opacity:0;s:2500;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;" data-start="1000" data-splitin="none" data-splitout="none" data-responsive_offset="on">Build your wellness business with clean and elegant template </div>
                <div className="tp-caption black tp-resizeme" id="slide-3-layer-4" data-x="['center','center','center','center']" data-hoffset="['-200','-200','-150','0']" data-y="['middle','middle','middle','middle']" data-voffset="['102','102','102','127']" data-fontsize="['11','11','11','15']" data-width="none" data-height="none" data-whitespace="nowrap" data-transform_idle="o:1;" data-transform_hover="o:1;rX:0;rY:0;rZ:0;z:0;s:300;e:Linear.easeNone;" data-style_hover="c:rgba(249, 163, 146, 1.00);bg:rgba(255, 255, 255, 1.00);bc:rgba(255, 255, 255, 1.00);" data-transform_in="y:50px;opacity:0;s:3000;e:Power3.easeInOut;" data-transform_out="auto:auto;s:1000;" data-start="1000" data-splitin="none" data-splitout="none" data-actions='[{"event":"click","action":"simplelink","target":"_self","url":"https:\/\/themeforest.net\/user\/themerex\/portfolio","delay":""}]' data-responsive_offset="on">read more info </div>
              </li>
            </ul>
            <div className="tp-bannertimer tp-bottom"></div>
          </div>
        </div>
      </section> */}

      {/* <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
        <ol className="carousel-indicators">
          <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
          <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img className="d-block w-100" src="..." alt="First slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Second slide" />
          </div>
          <div className="carousel-item">
            <img className="d-block w-100" src="..." alt="Third slide" />
          </div>
        </div>
        <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
          <span className="carousel-control-prev-icon" aria-hidden="true"></span>
          <span className="sr-only">Previous</span>
        </a>
        <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
          <span className="carousel-control-next-icon" aria-hidden="true"></span>
          <span className="sr-only">Next</span>
        </a>
      </div> */}

      <section className="slider_wrap slider_fullwide slider_engine_revo slider_alias_home-1" >

        <VideoCarousel />
      </section>

      <div className="dernierProduit">

        <ProductShow />
      </div>









    </div>
  );
}

export default App;
