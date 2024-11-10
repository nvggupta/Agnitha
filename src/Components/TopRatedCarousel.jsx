import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";

function TopRatedCarousel() {
  // Fetch top-rated books data from the Redux store
  const data = useSelector((state) => state.booksStore[2] || []);
  const sliderRef = useRef(null);

  // Function to go to the next slide
  const next = () => {
    sliderRef.current.slickNext();
  };

  // Function to go to the previous slide
  const previous = () => {
    sliderRef.current.slickPrev();
  };

  // Carousel settings
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 2 } },
      { breakpoint: 600, settings: { slidesToShow: 1, slidesToScroll: 1 } },
    ],
  };

  return (
    <div className="max-w-[70vw] flex justify-center items-center h-fit mb-5 relative mx-auto">
      {/* Button to navigate to previous slide */}
      <button
        className=" absolute z-10 left-0 top-1/2 transform -translate-y-1/2 focus:outline-none"
        onClick={previous}
      >
        <FaArrowCircleLeft className=" text-3xl sm:text-4xl text-black" />
      </button>

      {/* Carousel container */}
      <div className="w-full m-auto px-4">
        <Slider ref={sliderRef} {...settings}>
          {data.length > 0 ? (
            data.map((item, index) => (
              <div key={index} className="bg-white p-4 rounded-lg shadow-md">
                
                {/* Image display with fallback for missing images */}
                <div className="flex justify-center items-center h-60">
                  {item.cover_i ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                      alt={item.title}
                      className="w-48 h-60 object-contain"
                    />
                  ) : (
                    <div className="w-48 h-60 bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">No Image</p>
                    </div>
                  )}
                </div>
                
                {/* Title display */}
                <div className="mt-4 text-center text-black">
                  <p className="font-semibold">{item.title}</p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-gray-500">
              <p>No books available</p>
            </div>
          )}
        </Slider>
      </div>

      {/* Button to navigate to next slide */}
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 focus:outline-none"
        onClick={next}
      >
        <FaArrowCircleRight className="relative z-10 text-3xl sm:text-4xl text-black " />
      </button>
    </div>
  );
}

export default TopRatedCarousel;
