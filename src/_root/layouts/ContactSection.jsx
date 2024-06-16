import { Button, Typography } from "@material-tailwind/react";
import Wrapper from "../components/Wrapper";
import {
  RiArrowRightLine,
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
  RiPhoneLine,
  RiTwitterLine,
} from "react-icons/ri";
import { contactDeatils, imagesData } from "../../data/data";
import { Link, useNavigate } from "react-router-dom";
import { RouterData } from "../../router/RouterData";
import { animateScroll as scroll } from "react-scroll";

const ContactSection = () => {
  const navigate = useNavigate();

  return (
    <div className="mt-[40px] pt-[40px] w-full h-full relative">
      <div className="w-full h-full gradient1 py-[40px] relative">
        <img
          src={imagesData.overlayBg}
          alt="overlay bg"
          className="w-full h-full object-cover absolute top-0 left-0 mix-blend-overlay opacity-10"
        />
        <Wrapper>
          <div className="flex flex-row items-center justify-between flex-wrap gap-6 relative">
            <Typography
              variant="h2"
              className="font-primary font-bold text-white max-w-[600px] text-left"
            >
              Connect with Mantra Prayas Today
            </Typography>
            <Button
              className="font-primary bg-white text-MainPrimary-500 flex flex-row items-center"
              size="lg"
              onClick={() => {
                navigate(RouterData.contact);
                scroll.scrollToTop();
              }}
            >
              <span>Message Now</span>
              <RiArrowRightLine className="text-2xl" />
            </Button>
          </div>
        </Wrapper>
      </div>
      <div className="w-full h-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.468163032767!2d74.639454!3d25.342053999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c3019f1054cf%3A0x6c4f0988bc7ca522!2sPRAYAS%20INSTITUTE%20For%20IIT-JEE%20%7C%20NEET%20%7C%20NTSE%20Coaching%20Institute%20In%20Bhilwara!5e0!3m2!1sen!2sin!4v1715868222641!5m2!1sen!2sin"
          width="600"
          height="450"
          style={{ border: 0 }}
          allowfullscreen=""
          loading="lazy"
          className="w-full h-full min-h-[400px]"
        ></iframe>
      </div>
      <div className="w-full h-full gradient1 py-[40px] relative">
        <Wrapper>
          <div className="w-full h-full flex flex-row items-center justify-between flex-wrap gap-8">
            <div className="flex flex-row items-center gap-2">
              <div className="size-[50px] grid place-content-center bg-white rounded-full shrink-0">
                <RiMailLine className="text-xl text-MainPrimary-500" />
              </div>
              <div className="flex flex-col">
                <Typography
                  variant="paragraph"
                  className="font-primary font-normal text-white max-w-[600px] text-left"
                >
                  Email Us
                </Typography>
                <Typography variant="h6" className="font-primary text-white">
                  {contactDeatils.email}
                </Typography>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <div className="size-[50px] grid place-content-center bg-white rounded-full shrink-0">
                <RiPhoneLine className="text-xl text-MainPrimary-500" />
              </div>
              <div className="flex flex-col">
                <Typography
                  variant="paragraph"
                  className="font-primary font-normal text-white max-w-[600px] text-left"
                >
                  Phone Numbers
                </Typography>
                <Typography variant="h6" className="font-primary text-white">
                  {contactDeatils.phone}
                </Typography>
              </div>
            </div>
            <div className="flex flex-row items-center gap-2">
              <Link
                to={contactDeatils.instagram}
                className="size-[50px] grid place-content-center bg-white rounded-full shrink-0"
              >
                <RiInstagramLine className="text-xl text-MainPrimary-500" />
              </Link>
              <Link
                to={contactDeatils.facebook}
                className="size-[50px] grid place-content-center bg-white rounded-full shrink-0"
              >
                <RiFacebookCircleLine className="text-xl text-MainPrimary-500" />
              </Link>
              <Link
                to={contactDeatils.linkedin}
                className="size-[50px] grid place-content-center bg-white rounded-full shrink-0"
              >
                <RiLinkedinLine className="text-xl text-MainPrimary-500" />
              </Link>

              <Link
                to={contactDeatils.twitter}
                className="size-[50px] grid place-content-center bg-white rounded-full shrink-0"
              >
                <RiTwitterLine className="text-xl text-MainPrimary-500" />
              </Link>
            </div>
          </div>
        </Wrapper>
      </div>
    </div>
  );
};

export default ContactSection;
