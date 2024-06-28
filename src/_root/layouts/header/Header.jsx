/* eslint-disable no-undef */
/* eslint-disable react/prop-types */

import Wrapper from "../../components/Wrapper";
import { imagesData, primaryLinks } from "../../../data/data";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { Button, Typography } from "@material-tailwind/react";
import { RouterData } from "../../../router/RouterData";
import { RiPhoneFill } from "react-icons/ri";

const Header = () => {
  const navigate = useNavigate();
  return (
    <header className="hidden xl:block py-4 bg-white font-primary">
      <Wrapper>
        <div className="flex flex-row items-center justify-between gap-4">
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
              <Typography variant="h5" className="font-primary font-semibold">
                Mantra
              </Typography>
              <Typography variant="paragraph" className="font-primary -mt-1">
                Prayas
              </Typography>
            </div>
          </Link>
          <ul className="flex flex-row items-center gap-4 text-MainBlack-300 text-base">
            {primaryLinks.map((link, index) => (
              <li key={index}>
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
              }}
            >
              <RiPhoneFill />
              <span>Contact Us</span>
            </Button>
          </div>
        </div>
      </Wrapper>
    </header>
  );
};

export default Header;
