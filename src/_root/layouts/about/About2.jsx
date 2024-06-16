import { Typography, Button } from "@material-tailwind/react";
import { about2, imagesData } from "../../../data/data";
import Wrapper from "../../components/Wrapper";
import { useNavigate } from "react-router-dom";
import { RiArrowRightLine } from "react-icons/ri";
import { animateScroll as scroll } from "react-scroll";


const About2 = () => {
  const navigate = useNavigate();

  return (
    <section className="w-full my-[40px] py-[80px] relative ">
      <Wrapper>
        <div
          className="grid grid-cols-1 md:grid-cols-2 gap-8 gap-y-16 place-items-center"
          data-aos="fade-up"
          data-aos-anchor-placement="top-center"
          data-aos-offset="100"
        >
          <div className="flex flex-col gap-2 lg:pl-16 order-1 md:order-none">
            <Typography
              variant="h2"
              className="font-primary font-bold max-w-[500px] pr-2"
            >
              {about2.h2}
            </Typography>
            <Typography variant="paragraph" className="font-primary">
              With a fantastic support staff the entire team is on a mission to
              continuously inspire and motivate students on the path to success.
              As an educational set up we aim to provide a platform where goals
              are achieved, skills are nurtured and values are built.
            </Typography>
            <Typography variant="paragraph" className="font-primary">
              Our mission is to enable young aspirants across the nation to
              achieve success in the NTSE, KVPY, Olympiads, IIT–JEE, NEET, ICAR,
              JET through its study center & dedicated faculty members.
            </Typography>
            <Button
              variant="gradient"
              className="gradient1 font-primary max-w-fit mt-4 flex flex-row items-center gap-2 rounded-full"
              size="lg"
              onClick={() => {
                navigate(about2.cta.link);
                scroll.scrollToTop();
              }}
            >
              <span>{about2.cta.text}</span>
              <RiArrowRightLine className="text-xl" />
            </Button>
          </div>
          <div className="w-full h-full max-h-[480px]">
            <img
              src={imagesData.about2}
              alt={about2.h2}
              className="w-full h-full object-contain"
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
};

export default About2;
