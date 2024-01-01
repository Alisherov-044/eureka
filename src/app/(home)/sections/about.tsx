"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { team } from "@/data";
import { Navigation, Pagination } from "swiper/modules";

import "swiper/css";

export function About() {
    return (
        <section className="flex flex-col items-center gap-y-5 max-w-[1000px] mx-auto">
            <h1 className="font-bold text-xl text-center md:text-2xl lg:text-3xl">
                Why we&apos;re building Eureka
            </h1>
            <p>Meet the team</p>
            <Swiper
                loop
                centeredSlides
                modules={[Navigation, Pagination]}
                slidesPerView={1.5}
                spaceBetween={20}
                navigation
                pagination={{
                    bulletClass: "pagination-bullet",
                    bulletActiveClass: "pagination-bullet-active",
                    clickable: true,
                }}
                breakpoints={{
                    550: {
                        slidesPerView: 2,
                    },
                    750: {
                        slidesPerView: 2.5,
                        loop: false,
                        centeredSlides: false,
                    },
                    900: {
                        slidesPerView: 3,
                        loop: false,
                        centeredSlides: false,
                    },
                }}
                className="w-full mx-auto"
            >
                {team.map(({ id, name, specification, image }) => (
                    <SwiperSlide key={id}>
                        <div className="relative w-full">
                            <Image
                                src={image}
                                width={292}
                                height={444}
                                alt={name}
                                className="rounded-3xl w-full object-cover"
                            />
                            <div className="w-[90%] absolute z-10 bottom-4 left-1/2 -translate-x-1/2 flex flex-col items-center px-4 py-2 bg-black/15 rounded-2xl backdrop-blur">
                                <span className="font-bold">{name}</span>
                                <span className="text-sm">{specification}</span>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div className="px-5">
                <div className="p-4 rounded-xl md:rounded-2xl md:p-8 bg-secondary">
                    <p className="text-sm leading-6 md:text-lg">
                        &ldquo;Eureka&rdquo; means finding joy in discovery.
                        That&apos;s what happened to Mirav in 2020 when he
                        luckily met Nodir and Ilyos. They became the tech heart
                        of his London-based mobile app start-up. The duo helped
                        the start-up bring their product to life and iterate
                        quickly on user feedback. It also allowed Nodir and
                        Ilyos to work with a fast-moving UK tech team and earn
                        above their local market rates. Now, with so many
                        skilled tech people in Uzbekistan, the team wants to
                        help others find their &ldquo;eureka&rdquo; moments too.
                    </p>
                </div>
            </div>
        </section>
    );
}
