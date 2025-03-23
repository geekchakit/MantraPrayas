/* eslint-disable react/prop-types */
import { Typography } from "@material-tailwind/react";

// eslint-disable-next-line no-unused-vars
const ClassCard = ({ data }) => {
  const extractClassNumber = (text) => parseInt(text?.match(/\d+/)[0]);
  return (
    <div className="bg-white rounded-2xl p-8 font-primary text-MainBlack-500 border border-primary/20">
      <div className="relative flex flex-col items-center justify-center text-center">
        {/* <Typography
          variant="h3"
          className="font-primary font-black text-7xl text-primary/10 absolute top-0 left-0"
        >
          {data.class}
        </Typography> */}
        <div className="relative size-[100px] bg-MainPrimary-100/50 text-primary grid place-content-center rounded-full mx-auto">
          <Typography
            variant="h3"
            className="font-primary font-bold text-primary text-4xl"
          >
            {extractClassNumber(data.classname)}
          </Typography>
          <Typography
            variant="paragraph"
            className="font-primary text-white size-[35px] text-sm bg-MainPrimary-500 absolute top-0 right-0 rounded-full grid place-content-center"
          >
            th
          </Typography>
        </div>
        <Typography
          variant="h5"
          className="font-primary font-semibold text-2xl mt-4 text-center text-MainBlack-400"
        >
          {data.classname}
        </Typography>
        <Typography
          variant="h6"
          className="font-primary font-semibold text-2xl mt-4 text-center text-MainBlack-400"
        >
          {data.coursename}
        </Typography>
        <div className="mt-6">
          <span className="px-4 py-2 bg-MainPrimary-50 text-primary rounded-full">
            {data.subject}
          </span>
        </div>
      </div>
    </div>
  );
};

export default ClassCard;
