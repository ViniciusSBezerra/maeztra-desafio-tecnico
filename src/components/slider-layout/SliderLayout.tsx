import React, { useState } from 'react';
import ArrowLeft from '../../assets/Slider/arow-left.png'
import ArrowRigth from '../../assets/Slider/arow-rigth.png'

interface CarouselProps {
    images: string[];
}

export const Carousel: React.FC<CarouselProps> = ({ images }) => {
    const [currentImageIndex, setCurrentImageIndex] = useState<number>(0);

    const goToPreviousSlide = () => {
        const newIndex = (currentImageIndex - 1 + images.length) % images.length;
        setCurrentImageIndex(newIndex);
    };

    const goToNextSlide = () => {
        const newIndex = (currentImageIndex + 1) % images.length;
        setCurrentImageIndex(newIndex);
    };

    const goToSlide = (index: number) => {
        setCurrentImageIndex(index);
    };

    return (
        <div className="relative min-h-80 mx-auto max-w-[1920px]">
            <div className="overflow-hidden w-full">
                <div className="flex transition-all ease-in-out duration-300" style={{ transform: `translateX(-${currentImageIndex * 100}%)` }}>
                    {images.map((image, index) => (
                        <div key={index} className="w-full flex-shrink-0">
                            <img src={image} alt={`Slide ${index + 1}`} className="w-full min-h-80 lg:min-h-[600px] object-cover" />
                        </div>
                    ))}
                </div>
            </div>
            <div className="absolute top-1/2 transform -translate-y-1/2 flex justify-between w-full">
                <button onClick={goToPreviousSlide} className=" absolute text-white text-2xl rounded-full left-7 lg:left-[161px] "><img className='w-[19px] h-[32px]' src={ArrowLeft} alt="" /></button>
                <button onClick={goToNextSlide} className="absolute text-white  text-2xl rounded-full right-7 lg:right-[161px] "><img className='w-[19px] h-[32px]' src={ArrowRigth} alt="" /></button>
            </div>
            <div className="absolute  flex justify-center w-full bottom-4 lg:bottom-6">
                {images.map((_, index) => (
                    <span
                        key={index}
                        className={`w-2 h-2  lg:w-4 lg:h-4  rounded-full border  border-[#FAA500]  mx-1 cursor-pointer ${index === currentImageIndex ? 'bg-[#FAA500]' : ''}`}

                        onClick={() => goToSlide(index)}
                    ></span>
                ))}
            </div>


            <div className='absolute top-[63px] left-[63px] max-w-[239px]   lg:top-[151px] lg:left-[323px] lg:max-w-none'>
                <h1 className='font-bold text-3xl leading-[36.57px] text-white lg:text-[40px] lg:leading-[48.76px] '>Promoções de Outono</h1>
                <p className='lg:max-w-[467px] max-w-[239px] font-normal text-sm leading-[17.07px] text-white lg:text-xl lg:leading-[24.38px] mt-6 lg:mt-10'>Confiras os melhores looks para combinar com você nesse Outono</p>
                <button className='font-bold text-sm leading-[17.07px] text-white bg-[#FAA500] min-w-[76px] min-h-7 rounded lg:w-[128px] lg:h-[48px] lg:rounded-[10px] lg:text-base lg:leading-[19.5px] mt-4 lg:mt-[19px]'>Conferir</button>
            </div>
        </div>
    );
};

