import { Button, Typography } from "@material-tailwind/react";
import Wrapper from "../components/Wrapper";
import { appData, imagesData } from "../../data/data";

const PlayStoreAd = () => {
  return (
    <div>
      <Wrapper>
        <div className="flex flex-col gap-8">
          <div
            className="text flex flex-col gap-1 text-center items-center justify-center "
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <Typography variant="h2">Download Our App</Typography>
            <img
              src={imagesData.vector2}
              className="w-full mt-4 max-w-[400px]  mx-auto h-[40px] object-contain"
              alt="vector 3"
            />
            <Typography
              variant="paragraph"
              className="font-primary w-full max-w-[300px] mx-auto mt-4"
            >
              Get the best coaching experience with our app. Download now!
            </Typography>
            <div>
              <Button
                onClick={() => {
                  window.location.href = appData.link;
                }}
                className="bg-transparent w-full h-full max-w-[200px] shadow-none hover:shadow-none p-0 mt-8"
              >
                <img src="./assets/playstore.webp" />
              </Button>
              <Button
                onClick={() => {
                  window.location.href =
                    "https://apps.apple.com/us/app/mantra-prayas/id6742650800";
                }}
                className="bg-transparent w-full h-full max-w-[200px] shadow-none hover:shadow-none p-0 mt-8"
              >
                <img src="./assets/appstore.png" />
              </Button>
            </div>
          </div>
          <div
            className="w-full h-full max-w-[800px] mx-auto"
            data-aos="fade-up"
            data-aos-offset="100"
          >
            <img
              src="./assets/app.png"
              alt="Mantra Prayas App"
              className="w-full h-full"
            />
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PlayStoreAd;
