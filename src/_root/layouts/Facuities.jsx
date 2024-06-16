import { Typography } from "@material-tailwind/react";
import { faculties, imagesData } from "../../data/data";
import Wrapper from "../components/Wrapper";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import FaculityCard from "../components/FaculityCard";
import { RiArrowRightSLine } from "react-icons/ri";
import { useSelector } from "react-redux";

const Facuities = () => {
  const homePageData = useSelector((state) => state.main.homePageData);

  return (
    <div className="py-[40px] relative">
      <img
        src={imagesData.vector3}
        alt="vector image"
        className="absolute -top-16 left-4 w-[100px] sm:w-[180px]"
      />
      <Wrapper>
        <div>
          <div
            className="flex flex-col gap-2"
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <Typography
              variant="h2"
              className="font-primary font-bold text-MainBlack-500 max-w-[600px] mx-auto text-center"
            >
              {faculties.h2}
            </Typography>
            <Typography
              variant="paragraph"
              className="font-primary text-gray-600 max-w-[800px] mt-1 mx-auto text-center"
            >
              {(homePageData.homePageText &&
                homePageData.homePageText[0].meetfacultytext) ||
                faculties.p}
            </Typography>
          </div>
          <div className="mt-16" data-aos="fade-up" data-aos-offset="100">
            <Splide
              hasTrack={false}
              aria-label="Notification Slides"
              options={{
                // type: "loop",
                perPage: 4,
                perMove: 1,
                gap: "1rem",
                autoplay: true,
                breakpoints: {
                  1000: {
                    perPage: 3,
                    gap: ".7rem",
                  },
                  900: {
                    perPage: 2,
                    gap: ".7rem",
                  },
                  700: {
                    perPage: 1,
                    gap: ".7rem",
                  },
                },
                autoScroll: {
                  speed: 1,
                },
                pauseOnHover: false,
                resetProgress: false,
              }}
            >
              <SplideTrack>
                {homePageData.facultyData &&
                  homePageData.facultyData.map((item, index) => (
                    <SplideSlide key={index}>
                      <FaculityCard data={item} />
                    </SplideSlide>
                  ))}
              </SplideTrack>

              <div className="splide__arrows">
                <button className="splide__arrow splide__arrow--prev text-white !bg-darkgreen !rounded-sm">
                  <RiArrowRightSLine />
                </button>
                <button className="splide__arrow splide__arrow--next text-white !bg-darkgreen !rounded-sm">
                  <RiArrowRightSLine />
                </button>
              </div>
            </Splide>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default Facuities;
