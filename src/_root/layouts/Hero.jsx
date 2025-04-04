import { Button, Typography } from "@material-tailwind/react";
import Wrapper from "../components/Wrapper";
import { hero, imagesData } from "../../data/data";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Hero = () => {
  const navigate = useNavigate();
  const homePageData = useSelector(
    (state) => state.main.homePageData.homePageText
  );
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
              className="font-primary font-bold text-4xl md:text-5xl leading-[1.2]"
              variant="h1"
              color="white"
              data-aos="fade-up"
            >
              {(homePageData && homePageData[0].herosectiontext) ||
                "Achieve Your Dreams with Mantra Prayas -Ideal institute for IIT-JEE & NEET"}
            </Typography>
            <div className="flex flex-col gap-8 justify-between w-full h-full">
              <Typography
                variant="paragraph"
                className="font-primary text-base sm:text-lg"
                color="white"
                data-aos="fade-up"
              >
                {/* At Mantra Prayas, we transform aspirations into achievements.
                With expert faculty, comprehensive materials, and a personalized
                approach, we offer top-notch coaching for IIT-JEE, NEET, KVPY,
                NTSE, ICAR, JET, and Olympiads. Unlock your true potential and
                secure a bright future with us. */}
                {(homePageData && homePageData[0].discovervidyamurtitext) ||
                  "Mantra Prayas (MP) is a coaching institute dedicated to excellence in teaching and focused on interdisciplinary learning. In consonance with our tradition of nurturing talent, we are in Bhilwara with intensive campus, the academic campus to guide you to attain success in IIT-JEE, NEET, KVPY, OLYMPIAD ( Junior science, Physics, Chemistry and Maths), NTSE and we are here with another initiative agriculture field also ICAR, JET. We add zeal in students performance to qualify these exams. We welcome you to experience transformation in your preparation and ability for the target exams through these intensive campus"}
              </Typography>
              <div className="flex flex-wrap gap-2">
                <Button
                  variant="filled"
                  className="bg-white text-MainPrimary-500 font-primary  hover:bg-gray-200 rounded-full "
                  size="lg"
                  data-aos="fade-up"
                >
                  <a
                    href="./assets/PRAYAS-Brochure.pdf"
                    download="PRAYAS-Brochure.pdf"
                  >
                    Join Now
                  </a>
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
        <div className="w-full lg:h-auto overflow-hidden  mx-auto sm:px-4">
          <img
            src={"/assets/heroImage5.png"}
            alt="MantraPrayas Study Center"
            className="w-full object-contain scale-[1]  sm:mt-0"
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;
