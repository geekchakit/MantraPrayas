import { Typography } from "@material-tailwind/react";
import Wrapper from "../components/Wrapper";
import { imagesData } from "../../data/data";
import { useEffect, useState } from "react";
import axios from "axios";
import { API_URL } from "../../utils/Constant";
import { RiLinksLine } from "react-icons/ri";
import { Link } from "react-router-dom";

const TABLE_HEAD = ["Sl No.", "Resource Name ", "Resource Link"];

const Resourses = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await axios.get(`${API_URL}/getResourcePageData`);
        console.log(res.data.resourceData);
        setData(res.data.resourceData);
      } catch (error) {
        console.log(error);
      }
    };
    fetchData();
  }, []);

  return (
    <div className="pb-[80px]">
      <Wrapper>
        <div data-aos="fade-up" className="text-center mt-16">
          <Typography
            variant="h2"
            className="font-primary font-bold text-MainBlack-500 max-w-[500px] mx-auto "
          >
            Resources
          </Typography>
          <img
            src={imagesData.vector2}
            className="w-full mt-4 max-w-[500px]  mx-auto h-[30px] object-contain"
            alt="vector 3"
          />
        </div>
        <div
          className="w-full mt-16 overflow-x-scroll lg:overflow-x-hidden"
          data-aos="fade-up"
        >
          <table className="w-full min-w-max table-auto text-left">
            <thead>
              <tr>
                {TABLE_HEAD.map((head) => (
                  <th
                    key={head}
                    className="border-b border-blue-gray-100 bg-MainPrimary-500 font-primary text-white p-4"
                  >
                    <Typography
                      variant="small"
                      className="font-normal leading-none font-primary text-white"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {data.map(({ name, link }, index) => (
                <tr
                  key={name}
                  className="border-b border-MainBlack-500/20 bg-MainBlack-50/20"
                >
                  <td className="p-3 pb-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal font-primary"
                    >
                      {index + 1}
                    </Typography>
                  </td>
                  <td className="p-3 pb-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal font-primary capitalize"
                    >
                      {name}
                    </Typography>
                  </td>
                  <td className="flex flex-row items-center gap-2 text-MainPrimary-500 p-3 pb-4">
                    <Link
                      to={link}
                      target="_blank"
                      className="text-MainPrimary-500 underline flex flex-row items-center gap-2"
                    >
                      <Typography
                        variant="small"
                        className="font-normal font-primary text-MainBlack-300"
                      >
                        {link && link.slice(0, 20) + "..."}
                      </Typography>
                      <span className="text-xl">
                        <RiLinksLine />
                      </span>
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Wrapper>
    </div>
  );
};

export default Resourses;
