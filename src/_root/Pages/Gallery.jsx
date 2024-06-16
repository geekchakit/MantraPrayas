import {
  Typography,
  Dialog,
  DialogBody,
  DialogFooter,
  Button,
} from "@material-tailwind/react";
import { useEffect, useState } from "react";
import Wrapper from "../components/Wrapper";
import ContactSection from "../layouts/ContactSection";
import { imagesData } from "../../data/data";
import { RiCloseLine } from "react-icons/ri";
import axios from "axios";
import { API_URL } from "../../utils/Constant";

const Gallery = () => {
  const [image, setImage] = useState();
  const [open, setOpen] = useState(false);

  const handleOpen = (img) => {
    setOpen(!open);
    setImage(img);
  };

  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/getGalleryPageData`);

        setData(res.data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <>
      <div>
        <Wrapper>
          <div className="text-center mt-[80px]" data-aos="fade-up">
            <Typography
              variant="h2"
              className="font-primary font-bold text-MainBlack-500 max-w-[400px] mx-auto "
            >
              Explore Our Gallery
            </Typography>
            <img
              src={imagesData.vector2}
              className="w-full mt-4 max-w-[500px]  mx-auto h-[30px] object-contain"
              alt="vector 3"
            />
            <Typography
              variant="paragraph"
              className="mt-8 max-w-[500px] mx-auto font-primary"
            >
              {(data.CourseGalleryFacultyText &&
                data.CourseGalleryFacultyText[0].galleryText) ||
                " Explore our vibrant gallery showcasing students in action, our modern facilities, and dynamic learning environment."}
            </Typography>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-16">
            {data.galleryData &&
              data.galleryData.map((img, i) => (
                <div
                  key={i}
                  className="w-full h-full rounded-2xl overflow-hidden cursor-pointer group transition-all ease-in-out duration-300"
                  onClick={() => handleOpen(img.image_link)}
                  data-aos="fade-up" // Fix: Pass function reference
                >
                  <img
                    src={img.image_link}
                    alt={img.alt}
                    className="w-full h-full object-cover group-hover:scale-125 transition-all ease-in-out duration-300"
                  />
                </div>
              ))}
          </div>
        </Wrapper>
        <Dialog
          open={open}
          handler={handleOpen}
          className="w-full -mt-2"
          size="xl"
        >
          <DialogBody className="">
            <img
              src={image}
              alt={"images"}
              className="w-full  h-[90dvh] object-cover"
            />
          </DialogBody>
          <DialogFooter className="absolute top-0 right-0">
            <Button
              variant="text"
              color="red"
              onClick={() => handleOpen()} // Fix: Pass function reference
              className="font-primary text-xl bg-white text-red-500  hover:bg-red-100 hover:border-red-600 transition-all ease-in-out duration-300 rounded-sm border-2 border-white"
            >
              <RiCloseLine />
            </Button>
          </DialogFooter>
        </Dialog>
      </div>
      <ContactSection />
    </>
  );
};

export default Gallery;
