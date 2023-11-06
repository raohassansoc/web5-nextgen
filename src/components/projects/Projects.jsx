"use client"
import Image from "next/image";

import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import img1 from '../../assets/images/layouts/project-01.png'
import img2 from '../../assets/images/layouts/project-02.png'
import img3 from '../../assets/images/layouts/project-03.png'
import img4 from '../../assets/images/layouts/project-04.png'
import img5 from '../../assets/images/layouts/project-05.png'

function Projects() {
    return (
        <>
            <section className="project" style={{ backgroundColor: "#0e8388" }}>
                <div className="shape right" />
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="block-text center">
                                <h6 className="sub-heading">
                                    <span>Our Speciality</span>
                                </h6>
                                <h3 className="heading wow" data-splitting="">
                                    OUR COLLECTION
                                </h3>
                            </div>
                            <div className="swiper project-swiper">
                                <div className="swiper-wrapper">
                                <Swiper
                                    modules={[Navigation, Pagination]}
                                    spaceBetween={50}
                                    slidesPerView={3}
                                    navigation
                                    pagination={{ clickable: true }}
                                    breakpoints={{
                                        390: {
                                            slidesPerView: 1,
                                            spaceBetween: 20,
                                          },
                                        640: {
                                          slidesPerView: 1,
                                          spaceBetween: 20,
                                        },
                                        768: {
                                          slidesPerView: 2,
                                          spaceBetween: 40,
                                        },
                                        1024: {
                                          slidesPerView: 3,
                                          spaceBetween: 50,
                                        },
                                      }}
                                    scrollbar={{ draggable: true }}
                                    onSwiper={(swiper) => console.log(swiper)}
                                    onSlideChange={() => console.log('slide change')}
                                    >
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-box">
                                            <div className="image">
                                                <a href="nft.html">
                                                    <Image src={img1} alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <a href="nft.html" className="h5 title">
                                                    3D Digital Artwork
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                   
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-box">
                                            <div className="image">
                                                <a href="nft.html">
                                                    <Image src={img2} alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <a href="nft.html" className="h5 title">
                                                    King Of Pirates
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-box">
                                            <div className="image">
                                                <a href="nft.html">
                                                    <Image src={img3} alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <a href="nft.html" className="h5 title">
                                                    Pomeranian Doge
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-box">
                                            <div className="image">
                                                <a href="nft.html">
                                                    <Image src={img4} alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <a href="nft.html" className="h5 title">
                                                    Nintendo Switch
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-box">
                                            <div className="image">
                                                <a href="nft.html">
                                                    <Image src={img5} alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <a href="nft.html" className="h5 title">
                                                    The Strange Art
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-box">
                                            <div className="image">
                                                <a href="nft.html">
                                                    <Image src={img3} alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <a href="nft.html" className="h5 title">
                                                    3D Digital Artwork
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-box">
                                            <div className="image">
                                                <a href="nft.html">
                                                    <Image src={img4} alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <a href="nft.html" className="h5 title">
                                                    3D Digital Artwork
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-box">
                                            <div className="image">
                                                <a href="nft.html">
                                                    <Image src={img5} alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <a href="nft.html" className="h5 title">
                                                    3D Digital Artwork
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                    </SwiperSlide>
                                    <SwiperSlide>
                                    <div className="swiper-slide">
                                        <div className="project-box">
                                            <div className="image">
                                                <a href="nft.html">
                                                    <Image src={img3} alt="" />
                                                </a>
                                            </div>
                                            <div className="content">
                                                <a href="nft.html" className="h5 title">
                                                    3D Digital Artwork
                                                </a>
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
            </section>

        </>
    );
}
export default Projects;