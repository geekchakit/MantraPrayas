/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import { Rating, Typography } from "@material-tailwind/react";

const TestmonialCard = ({ data }) => {
  return (
    <div className="border border-primary/20 rounded-2xl p-8">
      <div className="flex flex-col gap-8 justify-between">
        <Typography
          variant="paragraph"
          className="font-primary text-MainBlack-300 font-normal "
        >
          " {data.text} "
        </Typography>
        <div className="flex flex-row items-center justify-between gap-6">
          <div>
            <Typography
              variant="h5"
              className="font-primary font-semibold text-MainBlack-500 mt-4"
            >
              {data.name}
            </Typography>
            <Typography
              variant="paragraph"
              className="font-primary text-MainBlack-300"
            >
              Class {data.class}
            </Typography>
          </div>
          <div>
            <Rating value={data.star} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestmonialCard;
