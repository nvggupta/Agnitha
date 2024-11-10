import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { useSelector } from "react-redux";
import { useRef } from "react";
import { FaArrowCircleLeft } from "react-icons/fa";
import { FaArrowCircleRight } from "react-icons/fa";
function TopRatedCarousel() {
  const data = useSelector((state) => state.booksStore[2] || []);
  console.log("data" , data);
  const sliderRef = useRef(null);
  
  const next = () => {
    sliderRef.current.slickNext();
  };
  
  const previous = () => {
    sliderRef.current.slickPrev();
  };
  
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    autoplay:true,
    autoplaySpeed: 2000,
    pauseOnHover: true
  };

  return (
    <div className="h-screen max-w-[70vW] flex justify-center items-center h-fit mb-5 relative">
      <button className="button absolute left-0 top-1/2 transform -translate-y-1/2" onClick={previous}>
      <FaArrowCircleLeft className="text-4xl text-black"/>
      </button>
      <div className="w-3/4 m-auto">
        <Slider ref={sliderRef} {...settings}>
          {data.length > 0 ? (
            data.map((item, index) => (
              <div key={index} className="bg-white">
                <div className="w-full h-full p-4 flex gap-10 justify-center items-center">
                  {item.cover_i ? (
                    <img
                      src={`https://covers.openlibrary.org/b/id/${item.cover_i}-M.jpg`}
                      alt={item.title}
                      className="w-60 h-60 object-contain block m-auto"
                    />
                  ) : (
                    <div className="w-60 h-60 bg-gray-200 flex items-center justify-center">
                      <p className="text-gray-500">No Image</p>
                    </div>
                  )}
                </div>
                <div className="w-full text-center text-black flex justify-center items-center">
                  <p className="font-semibold text-center">
                    {item.title}
                  </p>
                </div>
              </div>
            ))
          ) : (
            <div className="text-center text-white">
              <p>No books available</p>
            </div>
          )}
        </Slider>
      </div>
      <button className="button absolute right-0 top-1/2 transform -translate-y-1/2" onClick={next}>
       <FaArrowCircleRight className="text-4xl text-black"/>
      </button>
    </div>
  );
}

export default TopRatedCarousel;