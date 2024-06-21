import { Button, Typography } from "@material-tailwind/react";
import Wrapper from "../components/Wrapper";
import { imagesData } from "../../data/data";

const Brochure = () => {
  return (
    <div className="w-full min-h-screen">
      <Wrapper>
        <div className="text-center mt-[80px]" data-aos="fade-up">
          <Typography
            variant="h2"
            className="font-primary font-bold text-MainBlack-500 max-w-[500px] mx-auto "
          >
            Brochure
          </Typography>
          <img
            src={imagesData.vector2}
            className="w-full mt-4 max-w-[500px]  mx-auto h-[30px] object-contain"
            alt="vector 3"
          />
          <Typography
            variant="paragraph"
            className="mt-8 max-w-[450px] mx-auto font-primary"
          >
            Download our brochure to learn more about our courses and
            facilities.
          </Typography>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 my-16">
          <a
            href="./assets/PRAYAS-Brochure.pdf"
            target="_blank"
            // download="PRAYAS-Brochure.pdf"
            className="w-full border border-MainBlack-500/15 rounded-sm p-2"
          >
            <div>
              <img src="./assets/PRAYAS-Brochure-1.png" />
            </div>
            <Button className="w-full rounded-sm font-primary bg-primary hover:bg-primary/80">
              Read More
            </Button>
          </a>
        </div>
      </Wrapper>
    </div>
  );
};

export default Brochure;
