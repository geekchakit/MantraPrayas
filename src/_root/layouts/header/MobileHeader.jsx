/* eslint-disable react/prop-types */
import { FaYoutube, FaFacebook } from "react-icons/fa";
import {
  RiChatQuoteFill,
  RiCloseFill,
  RiInstagramFill,
  RiMenu4Line,
} from "react-icons/ri";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Drawer, Typography } from "@material-tailwind/react";
import { useState } from "react";
import { RouterData } from "../../../router/RouterData";
import { imagesData, primaryLinks, socialMediaLinks } from "../../../data/data";
import NavigationIcon from "../../components/NavigationIcon";
import Wrapper from "../../components/Wrapper";

const MobileHeader = () => {
  const [toggleMenu, setToggleMenu] = useState(null);
  const [open, setOpen] = useState(false);

  const openDrawer = () => {
    setOpen(true);
    setToggleMenu(true);
  };
  const closeDrawer = () => {
    setOpen(false);
    setToggleMenu(false);
  };

  const navigate = useNavigate();

  return (
    <header className="xl:hidden">
      <div className="mainHeader py-4 text-MainBlack-500">
        <Wrapper>
          <div className="flex flex-row items-center justify-between gap-2">
            {/* logo  */}
            <Link
              to={RouterData.home}
              className="flex flex-row items-center gap-2"
            >
              <img
                src={imagesData.logo}
                alt="Vidyamrutham Study Center"
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
            >
              <div className=" w-full h-full max-h-dvh">
                <div className="flex flex-row items-center gap-2 justify-between text-MainBlack-500 mb-2">
                  <h4 className="font-normal text-sm border-b-2 border-primary/20 ">
                    Menu
                  </h4>
                  <Button
                    variant="text"
                    size="sm"
                    className="text-2xl text-MainBlack-500  grid place-content-center w-[20px]"
                    onClick={closeDrawer}
                  >
                    {toggleMenu ? <RiCloseFill /> : <RiMenu4Line />}
                  </Button>
                </div>
                <div className="w-full h-[calc(100dvh_-_80px)] flex flex-col justify-between">
                  <div className="flex flex-col gap-4">
                    <ul className="capitalize text-md text-MainBlack-500 font-semibold flex flex-col gap-2">
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
                      {new Date().getFullYear()} @copyright Mantra Prayas
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
        </Wrapper>
      </div>
    </header>
  );
};

export default MobileHeader;
