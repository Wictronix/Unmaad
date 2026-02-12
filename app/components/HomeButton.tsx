"use client";

import Image from "next/image";
import Link from "next/link";

interface HomeButtonProps {
    href?: string;
    text?: string;
    className?: string; // Container positioning and sizing
    textClassName?: string; // Font customization
    imgClassName?: string; // Image sizing and object fit
    imageSrc?: string; // Custom image source
    imgWidth?: number; // Native image width
    imgHeight?: number; // Native image height
    shadowColor?: 'black' | 'white'; // Shadow color
    shadowClassName?: string; // Custom shadow styling
    onClick?: () => void;
}

const HomeButton = ({
    href,
    text,
    className = "",
    textClassName = "",
    imgClassName = "w-40 md:w-60 h-auto", // Default includes h-auto
    imageSrc = "/unmaad assets/home-button.svg",
    imgWidth = 240,
    imgHeight = 80,
    shadowColor = 'black',
    shadowClassName,
    onClick
}: HomeButtonProps) => {
    const commonClasses = `relative group inline-block ${className}`;

    const defaultShadow = shadowColor === 'white' ? 'top-1 left-1 h-[85%] bg-white/50' : 'top-1 left-1 h-full bg-black/50';
    const finalShadow = shadowClassName || defaultShadow;
    const shadowClass = `absolute w-full z-0 pointer-events-none ${finalShadow}`;

    const Content = (
        <>
            {/* Shadow */}
            <div className={shadowClass} />

            {/* Button Content */}
            <div className="relative z-10 transition-transform duration-150 ease-out group-active:translate-x-1 group-active:translate-y-1">
                <Image
                    src={imageSrc}
                    alt={text || "Button"}
                    width={imgWidth}
                    height={imgHeight}
                    className={`${imgClassName} object-contain`}
                />
                {text && (
                    <span
                        className={`absolute inset-0 flex items-center justify-center text-[#FF00A8] pointer-events-none ${textClassName}`}
                    >
                        {text}
                    </span>
                )}
            </div>
        </>
    );

    if (href) {
        return (
            <Link
                href={href}
                onClick={onClick}
                className={commonClasses}
                scroll={false} // Prevent scroll to top for anchor links if needed
            >
                {Content}
            </Link>
        );
    }

    return (
        <button type="button" onClick={onClick} className={commonClasses}>
            {Content}
        </button>
    );
};

export default HomeButton;
