import { Typography } from "@material-tailwind/react";
import Wrapper from "../components/Wrapper";
import { imagesData, testmonial } from "../../data/data";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { RiArrowRightSLine } from "react-icons/ri";
import TestmonialCard from "../components/TestmonialCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/Constant";

const Testmonial = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/getHomePageData`);

        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="w-full h-full py-[80px] mt-[40px]">
      <Wrapper>
        <div>
          <div data-aos="fade-up" data-aos-offset="100">
            <Typography
              variant="h2"
              className="font-primary font-bold text-MainBlack-500 max-w-[600px] mx-auto text-center"
            >
              {testmonial.h2}
            </Typography>
            <img
              src={imagesData.vector2}
              className="w-full mt-4 max-w-[400px]  mx-auto h-[40px] object-contain"
              alt="vector 3"
            />
          </div>

          <div className="mt-16" data-aos="fade-up" data-aos-offset="100">
            <Splide
              hasTrack={false}
              aria-label="Notification Slides"
              options={{
                // type: "loop",
                perPage: 2,
                perMove: 1,
                gap: "1rem",
                autoplay: true,
                breakpoints: {
                  1000: {
                    perPage: 2,
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
                {data.testimonialData &&
                  data.testimonialData.map((item, index) => (
                    <SplideSlide key={index}>
                      <TestmonialCard data={item} />
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

export default Testmonial;
