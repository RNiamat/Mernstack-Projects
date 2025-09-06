import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
    return (
        <div className="relative">
            <img src={assets.main_banner_bg} alt="" className="hidden md:block w-full" />
            <img src={assets.main_banner_bg_sm} alt="" className="block md:hidden w-full" />
            <div className="absolute inset-0 flex flex-col items-center md:items-start justify-end md:justify-center pb-24 md:pb-0 md:pl:16 lg:pl-24">
                <h1 className="text-3xl md:text-4xl font-bold text-center md:text-left max-w-72 md:max-w-80 leading-tight lg:leading-15">
                    Freshness you can taste, convenience you deserve!
                </h1>
                <div className="flex items-center mt-6 font-medium gap-6">
                    <Link
                        to="./products"
                        className="flex group items-center gap-2 px-7 rounded text-black py-3 bg-primary hover:text-white hover:bg-black cursor-pointer"
                    >
                        Shop Now
                        {/* Black Arrow (Default) */}
                        <img
                            src={assets.black_arrow_icon}
                            alt=""
                            className="block group-hover:hidden md:hidden group-focus:translate-x-1"
                        />
                        {/* White Arrow (On Hover) */}
                        <img
                            src={assets.white_arrow_icon}
                            alt=""
                            className="hidden  md:hidden group-hover:hidden group-focus:translate-x-1"
                        />
                    </Link>
                    <Link
                        to="./products"
                        className=" hidden md:flex group items-center gap-2 px-7 rounded text-black py-3 bg-primary hover:text-white hover:bg-black cursor-pointer"
                    >
                        Exlore Deals
                        {/* Black Arrow (Default) */}
                        <img
                            src={assets.black_arrow_icon}
                            alt=""
                            className="block group-hover:hidden sm:hidden group-focus:translate-x-1"
                        />
                        {/* White Arrow (On Hover) */}
                        <img
                            src={assets.white_arrow_icon}
                            alt=""
                            className="hidden  sm:hidden group-hover:hidden group-focus:translate-x-1"
                        />
                    </Link>
                </div>

            </div>
        </div>

    )
}

export default Hero;