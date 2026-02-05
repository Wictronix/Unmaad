"use client";

import Image from "next/image";
import { Bai_Jamjuree } from 'next/font/google';

const baiJamjuree = Bai_Jamjuree({
    weight: '700',
    subsets: ['latin'],
});

const EventsStreet = () => {
    return (
        <section className="w-full bg-[#001D4A]">
            {/* Title Section */}
            <div className="relative w-full h-[40vh] flex items-center justify-center overflow-hidden">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/unmaad assets/royal-blue.png"
                        alt="Royal Blue Background"
                        fill
                        className="object-cover"
                        priority
                    />
                </div>

                {/* Pattern Overlay */}
                <div className="absolute inset-0 z-10 opacity-50 pointer-events-none">
                    <Image
                        src="/unmaad assets/pattern.svg"
                        alt="Pattern Overlay"
                        fill
                        className="object-cover"
                    />
                </div>

                {/* Title Content */}
                <div className="relative z-20 text-center">
                    <h1 className="text-5xl md:text-7xl text-white font-samarkan">
                        Events Street
                    </h1>
                </div>
            </div>

            {/* Mandala Section */}
            <div className="relative w-full min-h-[40vh] flex flex-col justify-between overflow-hidden">
                {/* Background Layer */}
                <div className="absolute inset-0 z-0">
                    <Image
                        src="/unmaad assets/events street/pink-bg.png"
                        alt="Pink Background"
                        fill
                        className="object-cover"
                    />
                    {/* Pattern Overlay */}
                    <div className="absolute inset-0 z-10 opacity-50 pointer-events-none">
                        <Image
                            src="/unmaad assets/pattern.svg"
                            alt="Pattern Overlay"
                            fill
                            className="object-cover"
                        />
                    </div>
                </div>

                {/* Top Strip */}
                <div className="relative z-30 w-full transform rotate-180">
                    <Image
                        src="/unmaad assets/events street/mandala-strip.svg"
                        alt="Mandala Strip Top"
                        width={1920}
                        height={100}
                        className="w-full h-auto object-cover"
                    />
                </div>

                {/* Content Area - Buttons & Cards */}
                <div className="relative z-20 flex-grow flex flex-col items-center justify-center py-10 gap-24 px-4">

                    {/* Buttons Row */}
                    <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
                        {["Proshows", "Workshops", "Jam nights/Comedy show"].map((text, index) => (
                            <div key={index} className="relative group cursor-pointer hover:scale-105 transition-transform">
                                <Image
                                    src="/unmaad assets/events street/purple-button.svg"
                                    alt={text}
                                    width={250}
                                    height={90}
                                    className="w-52 md:w-80 h-auto object-contain"
                                />
                                <span className={`absolute inset-0 flex items-center justify-center text-white text-xs md:text-xl font-bold text-center px-4 uppercase ${baiJamjuree.className}`}>
                                    {text}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Window Cards Row */}
                    <div className="flex items-center justify-center gap-8 md:gap-16 flex-wrap">
                        {[1, 2, 3].map((item) => (
                            <div key={item} className="relative group cursor-pointer hover:scale-105 transition-transform">
                                <Image
                                    src="/unmaad assets/events street/window.svg"
                                    alt={`Window Card ${item}`}
                                    width={300}
                                    height={400}
                                    className="w-64 md:w-80 h-auto object-contain"
                                />
                            </div>
                        ))}
                    </div>

                    {/* Book Your Spot Button */}
                    <div className="relative group cursor-pointer hover:scale-105 transition-transform mt-8">
                        <Image
                            src="/unmaad assets/home-button.svg"
                            alt="Book your spot"
                            width={200}
                            height={70}
                            className="w-40 md:w-60 h-auto object-contain"
                        />
                        <span className={`absolute inset-0 flex items-center justify-center text-[#FF00A8] text-xs md:text-lg font-bold text-center px-4 uppercase ${baiJamjuree.className}`}>
                            Book your spot
                        </span>
                    </div>

                </div>

                {/* Bottom Strip */}
                <div className="relative z-30 w-full">
                    <Image
                        src="/unmaad assets/events street/mandala-strip.svg"
                        alt="Mandala Strip Bottom"
                        width={1920}
                        height={100}
                        className="w-full h-auto object-cover block"
                    />
                </div>
            </div>
        </section>
    );
};

export default EventsStreet;
