import { useState } from "react";
import {
  motion,
  AnimatePresence,
  useScroll,
  useMotionValueEvent,
} from "framer-motion";
import {
  RiChatQuoteFill,
  RiCloseFill,
  RiInstagramFill,
  RiMenu4Line,
  RiPhoneFill,
} from "react-icons/ri";
import { Button, Drawer, Typography } from "@material-tailwind/react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { RouterData } from "../../../router/RouterData";
import { imagesData, primaryLinks, socialMediaLinks } from "../../../data/data";
import NavigationIcon from "../../components/NavigationIcon";
import { FaFacebook, FaYoutube } from "react-icons/fa";
import { animateScroll as scroll } from "react-scroll";

const FloatingHeader = () => {
  const { scrollYProgress } = useScroll();

  const [visible, setVisible] = useState(false);

  useMotionValueEvent(scrollYProgress, "change", (current) => {
    // Check if current is not undefined and is a number
    if (typeof current === "number") {
      let direction = current - scrollYProgress.getPrevious();

      if (scrollYProgress.get() < 0.05) {
        setVisible(false);
      } else {
        if (direction < 0) {
          setVisible(true);
        } else {
          setVisible(false);
        }
      }
    }
  });

  const [toggleMenu, setToggleMenu] = useState(null);
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
    setToggleMenu(true);
  };
  const closeDrawer = () => {
    scroll.scrollToTop();
    setOpen(false);
    setToggleMenu(false);
  };

  const navigate = useNavigate();

  return (
    <AnimatePresence mode="wait">
      <motion.div
        initial={{
          opacity: 1,
          y: -100,
        }}
        animate={{
          y: visible ? 0 : -100,
          opacity: visible ? 1 : 0,
        }}
        transition={{
          duration: 0.2,
        }}
        className={
          "flex fixed top-0 inset-x-0 mx-auto bg-white z-[5000] w-full px-2 sm:px-4 py-2  pr-1 shadow-[0px_4px_16px_rgba(17,17,26,0.1),_0px_8px_24px_rgba(17,17,26,0.1),_0px_16px_56px_rgba(17,17,26,0.1)]"
        }
      >
        <div className="w-full  flex-row items-center justify-between gap-2 hidden xl:flex">
          {/* logo  */}
          <Link
            to={RouterData.home}
            className="flex flex-row items-center gap-2"
            onClick={() => {
              scroll.scrollToTop();
            }}
          >
            <img
              src={imagesData.logo}
              alt="MantraPrayas Study Center"
              className="size-[60px] object-contain"
            />
            <div>
              <Typography variant="h5" className="font-primary font-semibold">
                Mantra
              </Typography>
              <Typography variant="paragraph" className="font-primary -mt-1">
                Prayas
              </Typography>
            </div>
          </Link>

          <ul className="flex flex-row items-center gap-3 capitalize font-secondary text-sm navLinkA">
            {primaryLinks.map((link, index) => (
              <li
                key={index}
                onClick={() => {
                  scroll.scrollToTop();
                }}
              >
                <NavLink
                  to={link.path}
                  className={`capitalize font-primary transition-all ease-in-out duration-300 `}
                >
                  {link.name}
                </NavLink>
              </li>
            ))}
          </ul>

          <div>
            <Button
              variant="filled"
              size="lg"
              className="flex flex-row items-center font-primary bg-primary hover:bg-MainPrimary-800 transition-all duration-300 ease-in-out rounded-full"
              onClick={() => {
                navigate(RouterData.contact);
                scroll.scrollToTop();
              }}
            >
              <RiPhoneFill />
              <span>Contact Us</span>
            </Button>
          </div>
        </div>
        <div className="mainHeader py-2 text-maintext xl:hidden w-full">
          <div className="w-full h-full max-w-screen-2xl mx-auto px-0">
            <div className="flex flex-row items-center justify-between gap-2">
              {/* logo  */}
              <Link
                to={RouterData.home}
                className="flex flex-row items-center gap-2"
              >
                <img
                  src={imagesData.logo}
                  alt="MantraPrayas Study Center"
                  className="size-[60px] object-contain"
                />
                <div>
                  <Typography
                    variant="h5"
                    className="font-primary font-semibold text-base sm:text-lg"
                  >
                    Mantra
                  </Typography>
                  <Typography
                    variant="paragraph"
                    className="font-primary text-sm sm:text-base -mt-1"
                  >
                    Prayas
                  </Typography>
                </div>
              </Link>

              <Drawer
                open={open}
                onClose={closeDrawer}
                placement="right"
                className="p-4"
                size={426}
                overlay={false}
              >
                <div className=" w-full h-full max-h-dvh">
                  <div className="flex flex-row items-center gap-2 justify-between text-maintext mb-2">
                    <h5 className="font-normal text-sm border-b-2 border-maingreen ">
                      Menu
                    </h5>
                    <Button
                      variant="text"
                      size="sm"
                      className="text-2xl text-maintext  grid place-content-center w-[20px]"
                      onClick={closeDrawer}
                    >
                      {toggleMenu ? <RiCloseFill /> : <RiMenu4Line />}
                    </Button>
                  </div>
                  <div className="w-full h-[calc(100dvh_-_80px)] flex flex-col justify-between">
                    <div className="flex flex-col gap-4">
                      <ul className="capitalize text-md text-maintext font-semibold flex flex-col gap-2 navLinkA">
                        {primaryLinks.map((item, index) => (
                          <li key={index}>
                            <NavLink to={item.path} onClick={closeDrawer}>
                              {item.name}
                            </NavLink>
                          </li>
                        ))}
                      </ul>
                      <div className="flex flex-col gap-3 text-center">
                        <Button
                          variant="filled"
                          size="lg"
                          className="flex flex-row items-center justify-center font-primary bg-primary hover:bg-MainPrimary-800 transition-all duration-300 ease-in-out"
                          onClick={() => {
                            navigate(RouterData.contact);
                            setOpen(false);
                            setToggleMenu(false);
                            scroll.scrollToTop();
                          }}
                        >
                          <span>Contact Us</span>
                        </Button>
                      </div>
                    </div>

                    <div className="flex flex-col gap-4 items-center justify-center">
                      <div className="flex flex-row items-center gap-2">
                        <Link to={socialMediaLinks.youtube}>
                          <NavigationIcon>
                            <FaYoutube />
                          </NavigationIcon>
                        </Link>
                        <Link to={socialMediaLinks.facebook}>
                          <NavigationIcon>
                            <FaFacebook />
                          </NavigationIcon>
                        </Link>
                        <Link to={socialMediaLinks.instagram}>
                          <NavigationIcon>
                            <RiInstagramFill />
                          </NavigationIcon>
                        </Link>
                      </div>
                      <span className="font-secondary text-xs capitalize text-center px-4">
                        {new Date().getFullYear()} @copyright MantraPrayas Study
                        Centre
                      </span>
                    </div>
                  </div>
                </div>
              </Drawer>

              <div className="flex flex-row items-center gap-1">
                <div className="btns flex flex-row items-center gap-3">
                  <Button
                    variant="filled"
                    size="lg"
                    className="hidden sm:flex flex-row items-center font-primary bg-primary hover:bg-MainPrimary-800 transition-all duration-300 ease-in-out rounded-full"
                    onClick={() => {
                      navigate(RouterData.contact);
                      scroll.scrollToTop();
                    }}
                  >
                    <RiChatQuoteFill />
                    <span>Contact Us</span>
                  </Button>
                </div>

                <Button
                  variant="text"
                  size="sm"
                  className="text-2xl text-maintext  grid place-content-center"
                  onClick={openDrawer}
                >
                  {toggleMenu ? <RiCloseFill /> : <RiMenu4Line />}
                </Button>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default FloatingHeader;
