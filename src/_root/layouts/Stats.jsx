import { FaChalkboardTeacher } from "react-icons/fa";
import { statsData } from "../../data/data";
import StatsCard from "../components/StatsCard";
import Wrapper from "../components/Wrapper";
import { RiStarSmileFill } from "react-icons/ri";
import { PiPercentBold, PiStudentBold } from "react-icons/pi";
import { useSelector } from "react-redux";

const Stats = () => {
  const homePageData = useSelector((state) => state.main.homePageData) || {};

  return (
    <section id="Stats" className="w-full h-full py-[40px] mt-[40px]">
      <Wrapper>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <StatsCard
            h3={
              ((homePageData.metricsData &&
                homePageData.metricsData[0].yearsexperience) ||
                statsData.card1.h3) + "+"
            }
            p={statsData.card1.p}
            icon={<FaChalkboardTeacher />}
          />
          <StatsCard
            h3={
              ((homePageData.metricsData &&
                homePageData.metricsData[0].subjectexperts) ||
                statsData.card2.h3) + "%"
            }
            p={statsData.card2.p}
            icon={<RiStarSmileFill />}
          />
          <StatsCard
            h3={
              ((homePageData.metricsData &&
                homePageData.metricsData[0].happylearns) ||
                statsData.card3.h3) + "+"
            }
            p={statsData.card3.p}
            icon={<PiStudentBold />}
          />
          <StatsCard
            h3={
              ((homePageData.metricsData &&
                homePageData.metricsData[0].feedbackscore) ||
                statsData.card4.h3) + "%"
            }
            p={statsData.card4.p}
            icon={<PiPercentBold />}
          />
        </div>
      </Wrapper>
    </section>
  );
};

export default Stats;
