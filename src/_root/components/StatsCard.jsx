/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";

const StatsCard = ({ h3, p, icon }) => {
  return (
    <div
      className="border border-primary/20 rounded-2xl p-6"
      data-aos="fade-up"
      // data-aos-anchor-placement="top-top"
      data-aos-offset="200"
    >
      <div className="flex flex-col gap-4 justify-between h-full">
        <div className="bg-MainPrimary-50 text-MainPrimary-600 text-3xl rounded-lg ml-auto size-[60px] grid place-content-center">
          {icon}
        </div>
        <div>
          <Typography
            variant="h2"
            className="font-primary font-bold text-primary"
          >
            {h3}
          </Typography>
          <Typography
            variant="paragraph"
            className="font-primary max-w-[200px] text-MainBlack-300"
          >
            {p}
          </Typography>
        </div>
      </div>
    </div>
  );
};

export default StatsCard;
