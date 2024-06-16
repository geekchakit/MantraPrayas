import { Link } from "react-router-dom";
import Wrapper from "../components/Wrapper";
import { imagesData, primaryLinks } from "../../data/data";
import { Typography } from "@material-tailwind/react";
import { animateScroll as scroll } from "react-scroll";

const Footer = () => {
  return (
    <footer className="w-full h-full mt-[40px] flex flex-col  justify-end relative">
      <Wrapper>
        <div className="relative py-4 flex flex-col gap-6 sm:flex-row items-start justify-between mb-6">
          <div className="flex flex-col">
            <div className="flex flex-row gap-1 items-center ">
              <div className="size-[80px]">
                <img
                  src={imagesData.logo}
                  alt="logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <div>
                <Typography variant="h5" className="font-primary font-semibold">
                  Mantra
                </Typography>
                <Typography variant="paragraph" className="font-primary -mt-1">
                  Prayas
                </Typography>
              </div>
            </div>
            <Typography
              variant="paragraph"
              className="font-primary text-MainBlack-300 max-w-[400px] mt-2"
            >
              Those who possess faith acquire true wisdom through their pursuit
              of knowledge
            </Typography>
          </div>
          <div className="flex flex-col gap-3 md:w-full md:max-w-[300px]  lg:max-w-fit">
            <h4 className="font-semibold border-b-2 border-primary max-w-fit">
              Links
            </h4>
            <ul className="capitalize font-normal flex flex-col lg:flex-row gap-3 font-primary pr-8">
              {primaryLinks.map((item, index) => (
                <li
                  key={index}
                  onClick={() => {
                    scroll.scrollToTop();
                  }}
                >
                  <Link to={item.path}>{item.name}</Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="flex flex-col md:flex-row md:justify-between gap-4 items-center justify-center  border-t-2 border-primary/20 pt-8 pb-8 mt-[60px]">
          <div className=" text-sm font-medium flex flex-row items-center justify-center w-full text-MainBlack-300 font-primary text-center">
            <span className="px-4">
              {new Date().getFullYear()} © Mantra Prayas. All rights reserved.
            </span>
          </div>
        </div>
      </Wrapper>
    </footer>
  );
};

export default Footer;
