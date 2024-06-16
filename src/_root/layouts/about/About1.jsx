import { Typography, Button } from "@material-tailwind/react";
import { about1, imagesData } from "../../../data/data";
import Wrapper from "../../components/Wrapper";
import { useNavigate } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import { animateScroll as scroll } from "react-scroll";

const About1 = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full bg-MainPrimary-50/80 my-[40px] py-[80px] relative ">
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
          className="grid grid-cols-1 md:grid-cols-2 gap-8 place-items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-offset="100"
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
              className="font-primary font-bold max-w-[600px] pr-2"
            >
              Empowering through top-notch education and community support.
            </Typography>
            <Typography variant="paragraph" className="font-primary">
              Mantra Prayas (MP) is a coaching institute dedicated to teaching
              excellence and interdisciplinary learning. Based in Bhilwara, our
              intensive academic campus guides students towards success in exams
              like IIT-JEE, NEET, KVPY, OLYMPIAD, NTSE, and offers initiatives
              in agriculture including ICAR and JET. Join us for a
              transformative exam preparation experience.
            </Typography>
            <Button
              variant="gradient"
              className="gradient1 font-primary max-w-fit mt-4 flex flex-row items-center gap-2 rounded-full"
              size="lg"
              onClick={() => {
                navigate(about1.cta.link);
                scroll.scrollToTop();
              }}
            >
              <span>{about1.cta.text}</span>
              <RiArrowRightLine className="text-xl" />
            </Button>
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About1;
