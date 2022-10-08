import React from 'react';
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation, Pagination, Scrollbar, Autoplay } from 'swiper';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/autoplay';
import './Test.css'
import { FaPlayCircle } from 'react-icons/fa';


import { data } from '../Testimonail/data';

const Test = () => {
    // const btnhandler = () => {
    //     console.log("btn clicked");
    // }
    return (
        <div>
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, Autoplay]}
                spaceBetween={50}
                slidesPerView={1}
                // navigation
                autoplay={{ delay: 2000 }}
                pagination={{ clickable: true }}
            // scrollbar={{ draggable: true }}
            // onSlideChange={() => console.log('slide change')}
            // onSwiper={(swiper) => console.log(swiper)}
            >
                {/* <SwiperSlide>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ textAlign: "center", marginLeft: "100px" }}>
                            <h1>Text</h1>
                            <p>loremsdnflsflsdfnsjlkdnfkb</p>
                            <button onClick={() => btnhandler()}>Click</button>
                        </div>
                        <div>
                            <img src="https://dummyjson.com/image/i/products/10/1.jpg" alt="laptop" />
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ textAlign: "center", marginLeft: "100px" }}>
                            <h1>Text</h1>
                            <p>loremsdnflsflsdfnsjlkdnfkb</p>
                            <button onClick={() => btnhandler()}>Click</button>
                        </div>
                        <div>
                            <img src="https://dummyjson.com/image/i/products/10/1.jpg" alt="laptop" />
                        </div>
                    </div>
                </SwiperSlide> */}
                {/* <SwiperSlide>
                    <div style={{ display: "flex", alignItems: "center" }}>
                        <div style={{ textAlign: "center", marginLeft: "100px" }}>
                            <h1>Text</h1>
                            <p>loremsdnflsflsdfnsjlkdnfkb</p>
                            <button onClick={() => btnhandler()}>Click</button>
                        </div>
                        <div>
                            <img src="https://dummyjson.com/image/i/products/10/1.jpg" alt="laptop" />
                        </div>
                    </div>
                </SwiperSlide> */}

                {/* {
                    data.map((item, key) => (
                        <SwiperSlide>
                            <div className='main-div'>
                                <div className='text-div'>
                                    <h1 className='text-2xl'>{item.name}</h1>
                                    <p>{item.details}</p>
                                    <button onClick={() => btnhandler()}>Click</button>
                                </div>
                                <div className='image-div'>
                                    <img src={item.image} alt="laptop" />
                                </div>
                            </div>
                        </SwiperSlide>
                    ))} */}
                {
                    data.map((item, key) => (
                        <SwiperSlide>
                            <div class="hero min-h-screen">
                                <div class="hero-content flex-col lg:flex-row-reverse">
                                    <div className='image-div'>
                                        <img src={item.image} class="max-w-sm rounded-lg shadow-2xl image-div" />
                                    </div>
                                    <div className='text-div'>
                                        <h1 class="lg:text-2xl font-bold genre">{item.genre}</h1>
                                        <h1 class="lg:text-4xl font-bold">{item.name}</h1>
                                        <p class="py-6">{item.details}</p>
                                        <h1 class="lg:text-3xl font-bold mb-5">{item.release}</h1>
                                        <button class="btn btn-primary">Get Started <span className='ml-3'><FaPlayCircle/></span> </button>
                                        <button style={{"margin-left":"10px","background":"white","color":"black"}} class="btn">ADD TO WATCHLIST</button>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>
                    ))}
            </Swiper>
        </div>
    );
};

export default Test;