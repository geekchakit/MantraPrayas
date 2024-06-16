import { Button, Typography } from "@material-tailwind/react";
import Wrapper from "../components/Wrapper";
import { imagesData, whyChoose } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { RouterData } from "../../router/RouterData";
import { animateScroll as scroll } from "react-scroll";

const WhyChoose = () => {
  const navigate = useNavigate();

  return (
    <div className="py-[80px] relative">
      <img
        src={imagesData.vector2}
        alt="vector image"
        className="absolute -bottom-2 right-4 w-[200px] sm:w-[200px]"
      />
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <div
            className="w-full col-span-1 sm:col-span-2 gradient1 p-8 rounded-2xl relative"
            data-aos="fade-up"
            data-aos-offset="50"
          >
            <img
              src={imagesData.vector3}
              alt="vector"
              className="w-full h-full mix-blend-screen opacity-15 absolute top-0 left-0"
            />
            <div className="relative">
              <Typography
                variant="h2"
                className="font-primary font-bold text-white max-w-[600px]"
              >
                Why Choose Mantra Prayas.
              </Typography>
              <Typography
                variant="paragraph"
                className="font-primary text-white max-w-[500px] mt-1"
              >
                Explore what sets Mantra Prayas apart from the rest and discover
                why we're the ideal choice for your educational journey.
              </Typography>
              <Button
                color="bg-white"
                onClick={() => {
                  navigate(RouterData.contact);
                  scroll.scrollToTop();
                }}
                className="bg-white text-MainPrimary-500 font-primary  hover:bg-gray-200 rounded-full mt-6"
                size="lg"
              >
                {whyChoose.cta.text}
              </Button>
            </div>
          </div>

          {whyChoose.cards.map((item, index) => (
            <div
              className="w-full col-span-1 sm:col-span-1 bg-white p-8 rounded-2xl relative border border-primary/20 flex flex-col gap-4 justify-between"
              data-aos="fade-up"
              data-aos-offset="50"
              key={index}
            >
              <Typography
                variant="h3"
                className="font-primary font-black text-7xl text-primary opacity-15"
              >
                0{index + 1}
              </Typography>
              <div>
                <Typography
                  variant="h4"
                  className="font-primary font-semibold text-MainBlack-400"
                >
                  {item.h4}
                </Typography>
                <Typography
                  variant="paragraph"
                  className="font-primary text-MainBlack-300 mt-2"
                >
                  {item.p}
                </Typography>
              </div>
            </div>
          ))}
        </div>
      </Wrapper>
    </div>
  );
};

export default WhyChoose;
