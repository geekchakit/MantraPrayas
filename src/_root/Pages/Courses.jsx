import { Tooltip, Typography } from "@material-tailwind/react";
import Wrapper from "../components/Wrapper";
import ContactSection from "../layouts/ContactSection";
import { courses, imagesData } from "../../data/data";
import { Splide, SplideSlide, SplideTrack } from "@splidejs/react-splide";
import ClassCard from "../components/ClassCard";
import { RiArrowRightSLine } from "react-icons/ri";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/Constant";

const Courses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/getCoursesPageData`);

        setData(res.data);
        console.log(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="pb-[20px]">
        <Wrapper>
          <div className="text-center mt-[80px]" data-aos="fade-up">
            <Typography
              variant="h2"
              className="font-primary font-bold text-MainBlack-500 max-w-[500px] mx-auto "
            >
              {courses.h2}
            </Typography>
            <img
              src={imagesData.vector2}
              className="w-full mt-4 max-w-[500px]  mx-auto h-[30px] object-contain"
              alt="vector 3"
            />
            <Typography
              variant="paragraph"
              className="mt-8 max-w-[500px] mx-auto font-primary"
            >
              {(data.CourseGalleryFacultyText &&
                data.CourseGalleryFacultyText[0]?.courseText) ||
                ""}
            </Typography>
          </div>
          <div
            className="mt-16 flex flex-row gap-6 justify-between flex-wrap items-center"
            data-aos="fade-up"
          >
            <div className="flex flex-row items-center gap-2">
              {data.courseData &&
                data.courseData.map((board, index) => (
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
            <div>
              <Typography
                variant="h5"
                className="font-primary text-MainBlack-500 bg-MainPrimary-100 px-4 py-3 text-MainPrimary-500 rounded-full"
              >
                State Board
              </Typography>
            </div>
          </div>
          <div className="mt-10" data-aos="fade-up" data-aos-offset="50">
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
                {courses.classes.map((item, index) => (
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
          {/* <div className="mt-20 grid grid-cols-1 md:grid-cols-2 gap-6">
            {courses.courses.map((item, index) => (
              <div
                key={index}
                className="border border-primary/20 p-6  rounded-2xl flex flex-col gap-6 w-full h-full min-h-[250px] justify-between"
              >
                <Typography
                  variant="h4"
                  className="font-primary font-bold text-MainBlack-500 max-w-[300px]"
                >
                  {item.text}
                </Typography>
                <Typography variant="paragraph" className="font-primary">
                  {item.p}
                </Typography>
              </div>
            ))}
          </div> */}
        </Wrapper>
      </div>
      <ContactSection />
    </>
  );
};

export default Courses;
