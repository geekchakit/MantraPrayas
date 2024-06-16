/* eslint-disable react/no-unescaped-entities */
import { Typography } from "@material-tailwind/react";
import Wrapper from "../components/Wrapper";
import { about1, imagesData } from "../../data/data";
import Stats from "../layouts/Stats";
import Testmonial from "../layouts/Testmonial";
import { useEffect, useState } from "react";
import { API_URL } from "../../utils/Constant";
import axios from "axios";

const About = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/getAboutPageData`);

        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  const {
    block1Title,
    block1Text,
    block2Title,
    block2Text,
    block3Title,
    block3Text,
    block4Title,
    block4Text,
  } = (data.whyChooseData && data.whyChooseData[0]) || {};

  return (
    <div className="pb-[40px]">
      <Wrapper>
        <div className="text-center mt-[80px]" data-aos="fade-up">
          <Typography
            variant="h2"
            className="font-primary font-bold text-MainBlack-500 max-w-[600px] mx-auto "
          >
            About Us
          </Typography>
          <img
            src={imagesData.vector2}
            className="w-full mt-4 max-w-[600px]  mx-auto h-[30px] object-contain"
            alt="vector 3"
          />
          <Typography
            variant="paragraph"
            className="mt-8 max-w-[700px] mx-auto font-primary"
          >
            Creating an impact through excellence in education and contributing
            to the community.
          </Typography>
        </div>
      </Wrapper>
      <div className="gradient1 w-full h-full py-[40px] my-[80px]">
        <Wrapper>
          <div className="flex flex-col items-center gap-2 text-center">
            <Typography
              variant="h2"
              className="font-primary font-bold text-white"
            >
              सा विद्या या विमुक्तये
            </Typography>
            <Typography variant="paragraph" className="font-primary text-white">
              (Knowledge is that which liberates)
            </Typography>
          </div>
        </Wrapper>
      </div>
      <Stats />
      <div className="w-full bg-MainPrimary-50/80 my-[40px] py-[80px] relative ">
        <Wrapper>
          <img
            src={imagesData.vector2}
            alt="vector image"
            className="absolute -bottom-6 left-4 w-[200px] sm:w-[200px]"
          />
          <img
            src={imagesData.vector3}
            alt="vector image"
            className="absolute -top-16 right-4 w-[150px] sm:w-[180px]"
          />
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-12 place-items-center"
            data-aos="fade-up"
          >
            <div className="w-full h-full max-h-[480px]">
              <img
                src={imagesData.about1}
                alt={about1.h2}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-2">
              <Typography
                variant="h2"
                className="font-primary font-bold max-w-[500px] pr-2"
              >
                {about1.h2}
              </Typography>
              <Typography
                variant="paragraph"
                className="font-primary pr-0 lg:pr-6"
              >
                Mantra Prayas (MP) is a coaching institute dedicated to
                excellence in teaching and focused on interdisciplinary
                learning. In consonance with our tradition of nurturing talent,
                we are in Bhilwara with intensive campus, the academic campus to
                guide you to attain success in IIT-JEE, NEET, KVPY, OLYMPIAD (
                Junior science, Physics, Chemistry and Maths), NTSE and we are
                here with another initiative agriculture field also ICAR, JET.
                We add zeal in students performance to qualify these exams. We
                welcome you to experience transformation in your preparation and
                ability for the target exams through these intensive campus
              </Typography>
            </div>
          </div>
          <div
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 place-items-center mt-16"
            data-aos="fade-up"
          >
            <div className="w-full h-full max-h-[480px] order-none lg:order-1">
              <img
                src={imagesData.about2}
                alt={about1.h2}
                className="w-full h-full object-contain"
              />
            </div>
            <div className="flex flex-col gap-4 pl-0 lg:pl-4 xl:pl-16 ">
              <Typography variant="paragraph" className="font-primary">
                If we teach todays students as we taught yesterday, we rob them
                of their tomorrow. At MANTRA PRAYAS, we constantly work on
                improving and upgrading the teaching methodology to match the
                latest trends in education. Competitive exams are all about
                knowledge and smartness. The right blend of knowledge and
                practical approach towards handling questions in a limited
                period of time can make students stand above all. MP’ains have
                this approach.
              </Typography>
            </div>
          </div>
        </Wrapper>
      </div>
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 my-[80px] pt-[40px]">
          <div
            className="w-full col-span-1 sm:col-span-1 bg-white p-8 rounded-2xl relative border border-primary/20 flex flex-col gap-4 justify-between"
            data-aos="fade-up"
            data-aos-offset="50"
          >
            <Typography
              variant="h3"
              className="font-primary font-black text-7xl text-primary opacity-15"
            >
              01
            </Typography>
            <div>
              <Typography
                variant="h4"
                className="font-primary font-semibold text-MainBlack-400"
              >
                {block1Title}
              </Typography>
              <Typography
                variant="paragraph"
                className="font-primary text-MainBlack-300 mt-2"
              >
                {block1Text}
              </Typography>
            </div>
          </div>
          <div
            className="w-full col-span-1 sm:col-span-1 bg-white p-8 rounded-2xl relative border border-primary/20 flex flex-col gap-4 justify-between"
            data-aos="fade-up"
            data-aos-offset="50"
          >
            <Typography
              variant="h3"
              className="font-primary font-black text-7xl text-primary opacity-15"
            >
              02
            </Typography>
            <div>
              <Typography
                variant="h4"
                className="font-primary font-semibold text-MainBlack-400"
              >
                {block2Title}
              </Typography>
              <Typography
                variant="paragraph"
                className="font-primary text-MainBlack-300 mt-2"
              >
                {block2Text}
              </Typography>
            </div>
          </div>
          <div
            className="w-full col-span-1 sm:col-span-1 bg-white p-8 rounded-2xl relative border border-primary/20 flex flex-col gap-4 justify-between"
            data-aos="fade-up"
            data-aos-offset="50"
          >
            <Typography
              variant="h3"
              className="font-primary font-black text-7xl text-primary opacity-15"
            >
              03
            </Typography>
            <div>
              <Typography
                variant="h4"
                className="font-primary font-semibold text-MainBlack-400"
              >
                {block3Title}
              </Typography>
              <Typography
                variant="paragraph"
                className="font-primary text-MainBlack-300 mt-2"
              >
                {block3Text}
              </Typography>
            </div>
          </div>
          <div
            className="w-full col-span-1 sm:col-span-1 bg-white p-8 rounded-2xl relative border border-primary/20 flex flex-col gap-4 justify-between"
            data-aos="fade-up"
            data-aos-offset="50"
          >
            <Typography
              variant="h3"
              className="font-primary font-black text-7xl text-primary opacity-15"
            >
              04
            </Typography>
            <div>
              <Typography
                variant="h4"
                className="font-primary font-semibold text-MainBlack-400"
              >
                {block4Title}
              </Typography>
              <Typography
                variant="paragraph"
                className="font-primary text-MainBlack-300 mt-2"
              >
                {block4Text}
              </Typography>
            </div>
          </div>
        </div>
      </Wrapper>
      <Testmonial />
    </div>
  );
};

export default About;
