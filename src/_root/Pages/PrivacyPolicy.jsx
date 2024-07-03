import { Typography } from "@material-tailwind/react";
import Wrapper from "../components/Wrapper";
import { imagesData } from "../../data/data";

const PrivacyPolicy = () => {
  return (
    <div>
      <Wrapper>
        <div className="text-center mt-[80px]" data-aos="fade-up">
          <Typography
            variant="h2"
            className="font-primary font-bold text-MainBlack-500 max-w-[400px] mx-auto "
          >
            Privacy Policy
          </Typography>
          <img
            src={imagesData.vector2}
            className="w-full mt-4 max-w-[500px]  mx-auto h-[30px] object-contain"
            alt="vector 3"
          />
        </div>
        <div>
          <div className="mt-4">
            <Typography
              variant="h6"
              className="text-left text-black font-primary font-medium uppercase"
            >
              1. What Information We Collect
            </Typography>
            <Typography
              variant="paragraph"
              className="font-primary text-black/50 font-normal text-left mt-2 ml-4"
            >
              Personal Information: When you use our services, we may ask for
              information such as your name, email address, phone number, and
              postal address.
            </Typography>
            <Typography
              variant="paragraph"
              className="font-primary text-black/50 font-normal text-left mt-2 ml-4"
            >
              Usage Data: We collect data on how you interact with our website,
              including your IP address, browser type, and the pages you visit.
            </Typography>
          </div>
          <div className="mt-4">
            <Typography
              variant="h6"
              className="text-left text-black font-primary font-medium uppercase"
            >
              2. How We Use Your Information
            </Typography>
            <Typography
              variant="paragraph"
              className="font-primary text-black/50 font-normal text-left mt-2 ml-4"
            >
              We use your information to: - Provide and maintain our services. -
              Communicate with you about updates and services. - Process your
              transactions. - Improve our services based on your feedback.
            </Typography>
          </div>
          <div className="mt-4">
            <Typography
              variant="h6"
              className="text-left text-black font-primary font-medium uppercase"
            >
              3. Cookies and Tracking
            </Typography>
            <Typography
              variant="paragraph"
              className="font-primary text-black/50 font-normal text-left mt-2 ml-4"
            >
              We use cookies to track your activity on our website and improve
              your experience. You can set your browser to refuse cookies, but
              some parts of our site may not work properly.
            </Typography>
          </div>
          <div className="mt-4">
            <Typography
              variant="h6"
              className="text-left text-black font-primary font-medium uppercase"
            >
              4. Sharing Your Information
            </Typography>
            <Typography
              variant="paragraph"
              className="font-primary text-black/50 font-normal text-left mt-2 ml-4"
            >
              We do not sell your personal information. We may share your
              information with: - Service providers who help us operate our
              website and provide services to you. - Legal authorities if
              required by law.
            </Typography>
          </div>
          <div className="mt-4">
            <Typography
              variant="h6"
              className="text-left text-black font-primary font-medium uppercase"
            >
              5. Your Privacy Rights
            </Typography>
            <Typography
              variant="paragraph"
              className="font-primary text-black/50 font-normal text-left mt-2 ml-4"
            >
              You have the right to: - Access and update your personal
              information. - Request the deletion of your data. - Opt-out of
              receiving marketing communications.
            </Typography>
          </div>
          <div className="mt-4">
            <Typography
              variant="h6"
              className="text-left text-black font-primary font-medium uppercase"
            >
              6. Data Security
            </Typography>
            <Typography
              variant="paragraph"
              className="font-primary text-black/50 font-normal text-left mt-2 ml-4"
            >
              We use various security measures to protect your personal
              information. However, no method of transmission over the Internet
              is 100% secure.
            </Typography>
          </div>
          <div className="mt-4">
            <Typography
              variant="h6"
              className="text-left text-black font-primary font-medium uppercase"
            >
              7. Changes to This Policy
            </Typography>
            <Typography
              variant="paragraph"
              className="font-primary text-black/50 font-normal text-left mt-2 ml-4"
            >
              We may update our privacy policy occasionally. We will notify you
              of any changes by posting the new policy on this page.
            </Typography>
          </div>
          <div className="mt-4">
            <Typography
              variant="h6"
              className="text-left text-black font-primary font-medium uppercase"
            >
              8. Contact Us
            </Typography>
            <Typography
              variant="paragraph"
              className="font-primary text-black/50 font-normal text-left mt-2 ml-4"
            >
              If you have any questions about this privacy policy, please
              contact us at mantra.prayas@gmail.com.
            </Typography>
          </div>
        </div>
      </Wrapper>
    </div>
  );
};

export default PrivacyPolicy;
