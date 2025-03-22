import { Button, Tooltip, Typography } from "@material-tailwind/react";
import { courses, imagesData } from "../../data/data";
import Wrapper from "../components/Wrapper";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import { RiArrowRightSLine } from "react-icons/ri";
import ClassCard from "../components/ClassCard";
import { useNavigate } from "react-router-dom";
import { RouterData } from "../../router/RouterData";
import { useSelector } from "react-redux";
import { useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/Constant";

const Courses = () => {
  const navigate = useNavigate();
  const homePageData = useSelector((state) => state.main.homePageData);

  const [dataCourse, setDataCourse] = useState([]);

  const fetchData = async () => {
    try {
      const res = await axios.post(`${API_URL}/getCourseDetails`);
      console.log(res.data);
      setDataCourse(res.data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="py-[80px] gradient1 mt-[40px] relative">
      <img
        src={imagesData.overlayBg}
        alt="overlay bg"
        className="w-full h-full object-cover absolute top-0 left-0 mix-blend-overlay opacity-10"
      />

      <Wrapper>
        <div>
          <div
            className="flex flex-row items-center justify-between gap-6 flex-wrap"
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <div className="flex flex-col gap-1">
              <Typography
                variant="h2"
                className="font-primary font-bold text-white max-w-[600px]"
              >
                Discover Our Courses.
              </Typography>
              <Typography
                variant="paragraph"
                className="font-primary text-white max-w-[500px] mt-1"
              >
                Explore our varied course offerings, designed to cater to
                students from different educational backgrounds. Start your
                academic journey with us today
              </Typography>
            </div>
            <div className="flex flex-row items-center gap-2">
              {homePageData.courseData &&
                homePageData.courseData.map((board, index) => (
                  <Tooltip
                    content={board.short_form}
                    key={index}
                    className="font-primary"
                  >
                    <div className="flex flex-col gap-4 justify-between bg-white size-[100px] rounded-full p-4">
                      <img
                        src={board.logo_url}
                        alt={board.alt}
                        className="w-full h-full object-contain"
                      />
                    </div>
                  </Tooltip>
                ))}
            </div>
          </div>
          <div className="mt-16" data-aos="fade-up" data-aos-offset="50">
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
                {dataCourse.map((item, index) => (
                  <SplideSlide key={index}>
                    <ClassCard data={item} />
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
          <Button
            onClick={() => navigate(RouterData.courses)}
            className="bg-white text-MainPrimary-500 font-primary  hover:bg-gray-200 rounded-full  flex flex-row items-center gap-2 mx-auto mt-20"
            size="lg"
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <span>View All</span>
            <RiArrowRightSLine />
          </Button>
        </div>
      </Wrapper>
    </div>
  );
};

export default Courses;
