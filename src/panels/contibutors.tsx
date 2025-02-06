import React from "react";
import { Pagination, EffectCoverflow } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { contributors } from "../static/content";

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default function Contributors(): JSX.Element {
    return (
        <div
            style={{
                background: `#039876`
            }}
            className="py-6 overflow-x-hidden select-none"
        >
            <div className="pb-12">
                <div className="lg:mx-auto w-full md:mx-[1.5rem]">
                    <h1 className="text-4xl font-bold text-white text-center">
                        Attendees
                    </h1>
                    <div className="md:hidden">
                        <Swiper
                            modules={[EffectCoverflow, Pagination]}
                            effect={'coverflow'}
                            loop={false}
                            spaceBetween={30}
                            slidesPerView={"auto"}
                            pagination={{
                                clickable: true,
                            }}
                            centeredSlides={true}
                            grabCursor={true}
                            coverflowEffect={{
                                rotate: 0,
                                slideShadows: false,
                            }}
                            className="coverflow"
                        >
                            {contributors.map((contributor, index) => {
                                return (
                                    <SwiperSlide key={index} style={{width: "90%"}}>
                                        <div className="bg-white mx-6 md:mx-12 rounded-lg mt-16 grid md:grid-cols-2 h-min-96">
                                            <h1 className='text-2xl font-bold text-center mt-3'>{contributor.name}</h1>
                                            <div className="flex items-center justify-center flex-col">
                                                {contributor.image ? <img src={contributor.image.includes("http") ? contributor.image : `./contributors/${contributor.image}`} alt={contributor.name} className="max-h-52 p-3 " /> : null }
                                                {contributor.affiliation ? <p className="font-bold text-xl pb-3 p-6">{contributor.affiliation}</p> : null }
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                    <div className="hidden md:block">
                        <Swiper
                            modules={[EffectCoverflow, Pagination]}
                            effect={'coverflow'}
                            loop={false}
                            spaceBetween={30}
                            slidesPerView={"auto"}
                            pagination={{
                                clickable: true,
                            }}
                            centeredSlides={true}
                            grabCursor={true}
                            coverflowEffect={{
                                rotate: 0,
                                slideShadows: false,
                            }}
                            className="coverflow"
                        >
                            {contributors.map((contributor, index) => {
                                return (
                                    <SwiperSlide key={index} style={{width: "50%"}}>
                                        <div className="bg-white mx-6 md:mx-12 rounded-lg mt-16 p-2">
                                            <h1 className='text-2xl font-bold text-center mt-3'>{contributor.name}</h1>
                                            <div className="flex items-center justify-center h-full">
                                                {contributor.image ? <img src={contributor.image.includes("http") ? contributor.image : `./contributors/${contributor.image}`} alt={contributor.name} className="p-12 h-96 w-auto" /> : null}
                                            </div>
                                            <div className="p-4 text-center">
                                                {contributor.affiliation ? <p className="font-bold text-xl pb-3">{contributor.affiliation}</p> : null}
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    )
}