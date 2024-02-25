// icon
import { MdArrowOutward } from "react-icons/md";

// Route
import { NavLink } from 'react-router-dom';

function HeroSectionSec() {
    return (
        <div className='w-full h-auto flex flex-col items-center justify-center pt-10 px-5 sm:px-10 pb-10'>
            <h1 className='text-4xl sm:text-8xl text-[#290c06] text-center py-4 font-semibold '>Nurturing health, enriching life – naturally</h1>
            <h1 className='text-lg sm:text-2xl text-center'>Transform your well-being with our exclusive range of natural extracts, from raw essences to convenient capsules and innovative soft gels, including patented products that optimize health and elevate your life.</h1>
            <NavLink to={'/shop'} className="flex mt-4 relative justify-center items-center w-full sm:w-52 z-20">
                <div className="relative">
                    <div className="absolute w-full sm:w-[170px] h-14 top-1 right-4 bg-[#290c06]"></div>
                    <div className="flex justify-center items-center px-3 py-3 bg-[#fd9b40] hover:bg-[#e88b34] cursor-pointer relative z-10">
                        <h1 className='text-base sm:text-xl font-medium text-[#290c06]'>See Products</h1>
                        <MdArrowOutward size={20} className='text-white sm:text-lg'/>
                    </div>
                </div>
            </NavLink>
        </div>
    )
}

export default HeroSectionSec;
