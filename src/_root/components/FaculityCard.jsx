/* eslint-disable react/prop-types */

import { Typography } from "@material-tailwind/react";

/* eslint-disable no-unused-vars */
const FaculityCard = ({ data }) => {
  return (
    <div
      className="rounded-2xl w-full h-[400px]  relative overflow-hidden group"
      data-aos="fade-up"
    >
      <div className="absolute top-0 left-0 w-full h-full">
        <img
          src={data.link}
          alt={data.name}
          className="w-full h-full object-cover group-hover:scale-150 transition-all ease-out duration-300"
        />
      </div>
      <div className="flex flex-col relative w-full h-full gradient1 justify-end p-4 text-white gradient2 translate-y-[100%] group-hover:-translate-y-[00%] transition-all ease-out duration-300">
        <Typography
          variant="h3"
          className="font-primary translate-y-[100%] group-hover:-translate-y-[00%] transition-all ease-out duration-500"
        >
          {data.name}
        </Typography>
        <Typography
          variant="paragraph"
          className="font-primary translate-y-[100%] group-hover:-translate-y-[00%] transition-all ease-out duration-500"
        >
          {data.expertsIn}
        </Typography>
        <Typography
          variant="paragraph"
          className="font-primary translate-y-[100%] group-hover:-translate-y-[00%] transition-all ease-out duration-500"
        >
          {data.experience}+ Years Experience
        </Typography>
      </div>
    </div>
  );
};

export default FaculityCard;
