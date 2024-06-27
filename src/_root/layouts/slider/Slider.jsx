import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Slider = () => {
  const images = useSelector((state) => state.main.homePageData.homeCaroselData);
  console.log(images);
  return (
    <section
      className="w-full h-full py-[40px]"
      data-aos="fade-up"
      data-aos-anchor-placement="top-center"
      data-aos-offset="100"
    >
      <div className="w-full h-full max-w-screen-2xl mx-auto px-4 sm:px-4">
        <div className="w-full h-full">
          <Splide
            hasTrack={false}
            aria-label="Notification Slides"
            options={{
              type: "loop",
              perPage: 1,
              autoplay: true,
              autoScroll: {
                speed: 1,
              },
            }}
          >
            <SplideTrack>
              {images.map((item, index) => (
                <SplideSlide key={index} className="w-full">
                  <div className="w-full h-[540px] rounded-2xl overflow-hidden">
                    <img
                      src={item.image_link}
                      alt={item.alt}
                      className="w-full h-full object-cover object-center"
                    />
                  </div>
                </SplideSlide>
              ))}
            </SplideTrack>

            <div className="splide__arrows">
              <button className="splide__arrow splide__arrow--prev text-white fill-white !bg-MainPrimary-500 !rounded-sm">
                <RiArrowRightSLine />
              </button>
              <button className="splide__arrow splide__arrow--next text-white fill-white !bg-MainPrimary-500 !rounded-sm">
                <RiArrowRightSLine />
              </button>
            </div>
          </Splide>
        </div>
      </div>
    </section>
  );
};

export default Slider;
