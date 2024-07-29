import React, { useState } from 'react';
import { BsFillArrowRightCircleFill, BsFillArrowLeftCircleFill } from 'react-icons/bs';
import SlidesImage1 from '../images/image1.webp';
import SlidesImage2 from '../images/image2.webp';
import SlidesImage3 from '../images/image3.webp';
import SlidesImage4 from '../images/image1.webp';
import SlidesImage5 from '../images/image2.webp';
import SlidesImage6 from '../images/image3.webp';


let slides = [
  SlidesImage1,
  SlidesImage2,
  SlidesImage3,
  SlidesImage4,
  SlidesImage5,
  SlidesImage6,
];

function ShowcaseSlider() {
  let [current, setCurrent] = useState(0);

  let previousSlide = () => {
    if (current === 0) setCurrent(slides.length - 1);
    else setCurrent(current - 1);
  };

  let nextSlide = () => {
    if (current === slides.length - 1) setCurrent(0);
    else setCurrent(current + 1);
  };

  return (
    <div className='bg-gray-100'>
      <div className="w-[1100px] m-auto bg-gray-100 max-xl:w-[1050px] max-lg:w-[800px] max-md:w-[650px] max-sm:w-[500px]">
        <div className="overflow-hidden relative shadow-2xl">
          <img src={slides[current]} alt={`slide-${current}`} className="w-full h-[500px] max-md:h-[400px] max-sm:h-[350px]  rounded-3xl bg-gray-100"/>
          <div className="absolute top-0 h-full w-full justify-between items-center flex text-white px-10 text-3xl">
            <button onClick={previousSlide}>
              <BsFillArrowLeftCircleFill />
            </button>
            <button onClick={nextSlide}>
              <BsFillArrowRightCircleFill />
            </button>
          </div>
          <div className="absolute bottom-0 py-4 flex justify-center gap-3 w-full">
            {slides.map((s, i) => (
              <div
                onClick={() => {
                  setCurrent(i);
                }}
                key={'circle' + i}
                className={`rounded-full w-4 h-4 cursor-pointer  ${
                  i === current ? 'bg-white' : 'bg-gray-500'
                }`}
              ></div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default ShowcaseSlider;
