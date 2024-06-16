import { Typography } from "@material-tailwind/react";
import Wrapper from "../components/Wrapper";
import { imagesData } from "../../data/data";
import ContactSection from "../layouts/ContactSection";
import FaculityCard from "../components/FaculityCard";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/Constant";

const Faculties = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/getFacultyPageData`);

        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div className="pb-[40px]">
        <Wrapper>
          <div className="text-center mt-[80px]" data-aos="fade-up">
            <Typography
              variant="h2"
              className="font-primary font-bold text-MainBlack-500 max-w-[500px] mx-auto "
            >
              Our Dedicated Faculty
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
              Meet our dedicated educators at Mantra Prayas. With expertise and
              commitment, they provide personalized attention to every student,
              shaping their future.
            </Typography>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-16">
            {data.facultyData &&
              data.facultyData.map((faculty, index) => (
                <FaculityCard data={faculty} key={index} />
              ))}
          </div>
        </Wrapper>
      </div>
      <ContactSection />
    </>
  );
};

export default Faculties;
