import React from 'react';
import './Testimonail.css'

// import Swiper core and required modules
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

import { data } from './data';

const Testimonail = () => {
    return (
        <div>
            <Swiper className="Testimonial_container"
                modules={[Pagination]}
                spaceBetween={20}
                slidesPerView={1}
                // navigation
                pagination={{ clickable: true }}
            >
                {/* <SwiperSlide className="single_testimonial">
                    <h3>Slide-1</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, unde.</p>
                </SwiperSlide>
                <SwiperSlide className="single_testimonial">
                    <h3>Slide-2</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, unde.</p>
                </SwiperSlide>
                <SwiperSlide className="single_testimonial">
                    <h3>Slide-3</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, unde.</p>
                </SwiperSlide>
                <SwiperSlide className="single_testimonial">
                    <h3>Slide-4</h3>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt, unde.</p>
                </SwiperSlide> */}
                {
                    data.map((item, key) =>
                        <SwiperSlide className="single_testimonial">
                            <img src={item.image} alt="" />
                            <h3>{item.name}</h3>
                            <p>{item.details}</p>
                        </SwiperSlide>
                    )
                }
            </Swiper>
        </div>

    );
};

export default Testimonail;