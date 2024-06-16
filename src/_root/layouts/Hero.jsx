import { Button, Typography } from "@material-tailwind/react";
import Wrapper from "../components/Wrapper";
import { hero, imagesData } from "../../data/data";
import { useNavigate } from "react-router-dom";

const Hero = () => {
  const navigate = useNavigate();

  return (
    <section id="Hero" className="w-full h-full relative">
      <img
        src="https://res.cloudinary.com/da2lvku5u/image/upload/f_auto,q_auto/v1/Chakit%20Bhai/Coaching%20Project/kvyyobhobsnneokkajrb"
        alt="bg"
        className="w-full h-full absolute top-0 left-0 -z-1 object-cover opacity-80"
      />
      <div className="bg-MainPrimary-800 w-full h-full absolute top-0 left-0 -z-1 opacity-90"></div>

      <div className="gradient1 w-full h-[50px] sm:h-[200px] absolute bottom-0 left-0 z-2"></div>

      <div className="w-full content relative pt-24 flex flex-col gap-20">
        <Wrapper>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6 w-full ">
            <Typography
              className="font-primary font-bold text-5xl leading-[1.2]"
              variant="h1"
              color="white"
              data-aos="fade-up"
            >
              Achieve Your Dreams with Mantra Prayas - Competitive Exam Coaching
            </Typography>
            <div className="flex flex-col gap-8 justify-between w-full h-full">
              <Typography
                variant="paragraph"
                className="font-primary text-base sm:text-lg"
                color="white"
                data-aos="fade-up"
              >
                At Mantra Prayas, we transform aspirations into achievements.
                With expert faculty, comprehensive materials, and a personalized
                approach, we offer top-notch coaching for IIT-JEE, NEET, KVPY,
                NTSE, ICAR, JET, and Olympiads. Unlock your true potential and
                secure a bright future with us.
              </Typography>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="filled"
                  className="bg-white text-MainPrimary-500 font-primary  hover:bg-gray-200 rounded-full "
                  size="lg"
                  onClick={() => {
                    navigate(hero.cta[0].link);
                  }}
                  data-aos="fade-up"
                >
                  Join Now
                </Button>
                <Button
                  variant="text"
                  className="text-white font-primary font-medium underline rounded-full"
                  size="lg"
                  onClick={() => {
                    navigate(hero.cta[1].link);
                  }}
                  data-aos="fade-up"
                >
                  {hero.cta[1].text}
                </Button>
              </div>
            </div>
          </div>
        </Wrapper>
        <div className="w-full h-full overflow-hidden sm:max-w-screen-2xl mx-auto sm:px-4">
          <img
            src={imagesData.heroImage}
            alt="Vidyamrutham Study Center"
            className="w-full h-full origin-bottom object-contain scale-[1.5] mt-40 sm:scale-100 sm:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
