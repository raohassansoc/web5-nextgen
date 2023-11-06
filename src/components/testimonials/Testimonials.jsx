"use client"
import React, { useEffect } from 'react';
import Image from "next/image";


import AOS from 'aos';
import 'aos/dist/aos.css';


import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';


import quoteImage from '../../assets/images/icon/quote.png'
import avtImg2 from '../../assets/images/layouts/avt-02.png'
import avtImg3 from '../../assets/images/layouts/avt-03.png'
import avtImg4 from '../../assets/images/layouts/avt-04.png'

function Textimonials() {
    useEffect(() => {
        AOS.init({
            duration: 2000
        });
    }, []);
    return (
        <>
            <section className="testimonials">
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <div className="testimonials__main">
                                <div className="block-text center">
                                    <h6 className="sub-heading">
                                        <span>Testimonials</span>
                                    </h6>
                                    <h3 className="heading wow" data-splitting="">
                                        What People Say
                                    </h3>
                                </div>
                                <div className="swiper testimonials-swiper">
                                    <div className="swiper-wrapper">
                                    <Swiper
                                    modules={[Navigation]}
                                    spaceBetween={50}
                                    slidesPerView={1}
                                    navigation
                                    pagination={{ clickable: true }}
                                    scrollbar={{ draggable: true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                    >
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="box-testimonial center">
                                                <Image className='quoteImage' src={quoteImage} alt="" />
                                                <p className="text">
                                                    “ Curabitur eu est feugiat quam feugiat tristique non vel
                                                    erat. Class aptent taciti sociosqu ad litora torquent per
                                                    conubia nostra, per inceptos himenaeos. Lorem ipsum dolor
                                                    sit amet, consectetur adipiscing elit. Quisque congue, nunc
                                                    nec suscipit fringilla, augue ligula eleifend velit. “
                                                </p>
                                                <div className="info">
                                                    <Image className='quoteImage' src={avtImg2} alt="" />
                                                    <h5 className="name">Jacob Jones</h5>
                                                    <p>Chief Product Officer</p>
                                                </div>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        <SwiperSlide>
                                        <div className="swiper-slide">
                                            <div className="box-testimonial center">
                                                <Image className='quoteImage' src={quoteImage} alt="" />
                                                <p className="text">
                                                    “ Curabitur eu est feugiat quam feugiat tristique non vel
                                                    erat. Class aptent taciti sociosqu ad litora torquent per
                                                    conubia nostra, per inceptos himenaeos. Lorem ipsum dolor
                                                    sit amet, consectetur adipiscing elit. Quisque congue, nunc
                                                    nec suscipit fringilla, augue ligula eleifend velit. “
                                                </p>
                                                <div className="info">
                                                    <Image className='quoteImage' src={avtImg3} alt="" />
                                                    <h5 className="name">Jacob Jones</h5>
                                                    <p>Chief Product Officer</p>
                                                </div>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                        <SwiperSlide >
                                        <div className="swiper-slide">
                                            <div className="box-testimonial center">
                                                <Image className='quoteImage' src={quoteImage} alt="" />
                                                <p className="text">
                                                    “ Curabitur eu est feugiat quam feugiat tristique non vel
                                                    erat. Class aptent taciti sociosqu ad litora torquent per
                                                    conubia nostra, per inceptos himenaeos. Lorem ipsum dolor
                                                    sit amet, consectetur adipiscing elit. Quisque congue, nunc
                                                    nec suscipit fringilla, augue ligula eleifend velit. “
                                                </p>
                                                <div className="info">
                                                    <Image className='quoteImage' src={avtImg4} alt="" />
                                                    <h5 className="name">Jacob Jones</h5>
                                                    <p>Chief Product Officer</p>
                                                </div>
                                            </div>
                                        </div>
                                        </SwiperSlide>
                                    </Swiper>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    )
}
export default Textimonials;