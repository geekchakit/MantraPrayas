import { Button, Input, Textarea, Typography } from "@material-tailwind/react";
import Wrapper from "../components/Wrapper";
import { contactDeatils, imagesData } from "../../data/data";
import {
  RiFacebookCircleLine,
  RiInstagramLine,
  RiLinkedinLine,
  RiMailLine,
  RiPhoneLine,
  RiSendPlaneFill,
  RiTwitterLine,
} from "react-icons/ri";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import PlayStoreAd from "../layouts/PlayStoreAd";

const Contact = () => {
  const [data, setData] = useState({
    name: "",
    phoneNumber: "",
    subject: "",
    class: "",
    message: "",
  });

  const [errors, setErrors] = useState({
    phoneNumber: "",
    msg: "",
  });

  const validatePhone = (phone) => {
    const re = /^\d{10}$/;
    return re.test(phone);
  };

  const handleChange = (field, value) => {
    setData((prevData) => ({
      ...prevData,
      [field]: value,
    }));

    switch (field) {
      case "phoneNumber":
        setErrors((prevErrors) => ({
          ...prevErrors,
          phoneNumber: !validatePhone(value),
        }));
        break;
      // Add cases for other fields if needed
      default:
        break;
    }
  };

  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (
      !data.name ||
      !data.phoneNumber ||
      !data.subject ||
      !data.class ||
      !data.message
    ) {
      setErrors({
        ...errors,
        msg: "Enter valid values for all fields",
      });
      console.log("Enter valid values for all fields");
      setLoading(false);
      return;
    }

    alert(JSON.stringify(data));
    setErrors({ ...errors, msg: "Your message has been sent successfully!" });
    setData({
      ...data,
      name: "",
      phoneNumber: "",
      subject: "",
      class: "",
      message: "",
    });
    setLoading(false);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setErrors({ ...errors, msg: "" });
    }, 10000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full">
      <div className="gradient1 w-full h-full py-[80px]">
        <Wrapper>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 gap-y-16">
            <div data-aos="fade-up">
              <Typography
                variant="h2"
                className="font-primary font-bold text-white max-w-[400px]"
              >
                Contact us - we are here to help
              </Typography>
              <div className="mt-6 flex flex-col gap-6">
                <div className="flex flex-row items-center gap-2">
                  <div className="size-[50px] grid place-content-center bg-white rounded-full shrink-0">
                    <RiMailLine className="text-xl text-MainPrimary-500" />
                  </div>
                  <div className="flex flex-col">
                    <Typography
                      variant="paragraph"
                      className="font-primary font-normal text-white max-w-[600px] text-left"
                    >
                      Email Us
                    </Typography>
                    <Typography
                      variant="h6"
                      className="font-primary text-white"
                    >
                      {contactDeatils.email}
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <div className="size-[50px] grid place-content-center bg-white rounded-full shrink-0">
                    <RiPhoneLine className="text-xl text-MainPrimary-500" />
                  </div>
                  <div className="flex flex-col">
                    <Typography
                      variant="paragraph"
                      className="font-primary font-normal text-white max-w-[600px] text-left"
                    >
                      Phone Numbers
                    </Typography>
                    <Typography
                      variant="h6"
                      className="font-primary text-white"
                    >
                      {contactDeatils.phone}
                    </Typography>
                  </div>
                </div>
                <div className="flex flex-row items-center gap-2">
                  <Link
                    to={contactDeatils.instagram}
                    className="size-[50px] grid place-content-center bg-white rounded-full shrink-0"
                  >
                    <RiInstagramLine className="text-xl text-MainPrimary-500" />
                  </Link>
                  <Link
                    to={contactDeatils.facebook}
                    className="size-[50px] grid place-content-center bg-white rounded-full shrink-0"
                  >
                    <RiFacebookCircleLine className="text-xl text-MainPrimary-500" />
                  </Link>
                  <Link
                    to={contactDeatils.linkedin}
                    className="size-[50px] grid place-content-center bg-white rounded-full shrink-0"
                  >
                    <RiLinkedinLine className="text-xl text-MainPrimary-500" />
                  </Link>

                  <Link
                    to={contactDeatils.twitter}
                    className="size-[50px] grid place-content-center bg-white rounded-full shrink-0"
                  >
                    <RiTwitterLine className="text-xl text-MainPrimary-500" />
                  </Link>
                </div>
              </div>
            </div>
            <div
              className="bg-white p-8 rounded-2xl shadow-xl w-full max-w-[600px] mx-auto"
              data-aos="fade-up"
            >
              <form className="flex flex-col gap-6" onSubmit={handleSubmit}>
                {errors.msg && (
                  <span
                    className={`${
                      errors.msg.includes("successfully")
                        ? "text-green-500"
                        : "text-red-500"
                    }  text-center py-2 px-2 w-full block text-sm`}
                  >
                    {errors.msg}
                  </span>
                )}
                <Input
                  size="lg"
                  label="Full Name"
                  className="bg-white"
                  color="green"
                  value={data.name}
                  onChange={(e) => handleChange("name", e.target.value)}
                />
                <Input
                  size="lg"
                  label="Phone Number"
                  className="bg-white"
                  color="green"
                  value={data.phoneNumber}
                  onChange={(e) => handleChange("phoneNumber", e.target.value)}
                  error={errors.phoneNumber}
                />

                <Input
                  size="lg"
                  label="Subject"
                  className="bg-white"
                  color="green"
                  value={data.subject}
                  onChange={(e) => handleChange("subject", e.target.value)}
                />
                <Input
                  size="lg"
                  label="Class"
                  className="bg-white"
                  color="green"
                  value={data.class}
                  onChange={(e) => handleChange("class", e.target.value)}
                />
                <Textarea
                  size="lg"
                  label="Message"
                  className="bg-white"
                  color="green"
                  value={data.message}
                  onChange={(e) => handleChange("message", e.target.value)}
                />
                <Button
                  className="font-primary flex flex-row gap-2 items-center gradient1 max-w-fit ml-auto"
                  size="lg"
                  type="submit"
                  loading={loading}
                >
                  <span>Send Us</span>
                  <div className="ico">
                    <RiSendPlaneFill />
                  </div>
                </Button>
              </form>
            </div>
          </div>
        </Wrapper>
      </div>
      <div>
        <Wrapper>
          <div className="text-center mt-[80px]" data-aos="fade-up">
            <Typography
              variant="h2"
              className="font-primary font-bold text-MainBlack-500 max-w-[400px] mx-auto "
            >
              Find Us on Map
            </Typography>
            <img
              src={imagesData.vector2}
              className="w-full mt-4 max-w-[500px]  mx-auto h-[30px] object-contain"
              alt="vector 3"
            />
          </div>
          <div
            className="w-full h-full my-[80px] mt-[40px] rounded-2xl overflow-hidden shadow-xl"
            data-aos="fade-up"
          >
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d901.468163032767!2d74.639454!3d25.342053999999997!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3968c3019f1054cf%3A0x6c4f0988bc7ca522!2sPRAYAS%20INSTITUTE%20For%20IIT-JEE%20%7C%20NEET%20%7C%20NTSE%20Coaching%20Institute%20In%20Bhilwara!5e0!3m2!1sen!2sin!4v1715868222641!5m2!1sen!2sin"
              style={{ border: 0 }}
              allowfullscreen=""
              loading="lazy"
              className="w-full h-full min-h-[500px]"
            ></iframe>
          </div>
        </Wrapper>
      </div>
      <PlayStoreAd />
    </div>
  );
};

export default Contact;
