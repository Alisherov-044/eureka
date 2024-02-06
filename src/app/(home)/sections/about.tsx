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
            <p>Lorem ipsum corapartion</p>
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
                        When you look up the word &ldquo;eureka,&rdquo; you will
                        find this definition: &ldquo;a cry of joy or
                        satisfaction when one finds or discovers
                        something&rdquo; And that&apos;s exactly how Mirav felt
                        in 2020 when, by pure luck, he discovered Nodir and
                        Ilyos, who became the technical force powering his
                        London-based mobile app start-up called Rize. For Rize
                        it meant being able to ship high quality products more
                        cost effectively. For Nodir and Ilyos, it opened the
                        doors to working with a UK start-up team and
                        compensation above their local market rate. A win-win
                        for everyone. In recent years, the number of
                        high-quality technical talents in Uzbekistan has
                        exploded. Our mission is to help more of these
                        individuals experience eureka moments just like we did.
                    </p>
                </div>
            </div>
        </section>
    );
}
