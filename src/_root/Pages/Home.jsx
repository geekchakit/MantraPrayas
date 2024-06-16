import { useDispatch } from "react-redux";
import ContactSection from "../layouts/ContactSection";
import Courses from "../layouts/Courses";
import Facuities from "../layouts/Facuities";
import Hero from "../layouts/Hero";
import Stats from "../layouts/Stats";
import Testmonial from "../layouts/Testmonial";
import WhyChoose from "../layouts/WhyChoose";
import About1 from "../layouts/about/About1";
import About2 from "../layouts/about/About2";
import Slider from "../layouts/slider/Slider";
import { useEffect } from "react";
import axios from "axios";
import { API_URL } from "../../utils/Constant";
import { setHomePageData } from "../../store/slices/MainSlices";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    const fetchData = async () => {
      try {
        // const response = await fetch("https://api.example.com/data");
        // const data = await response.json();
        // dispatch({ type: "FETCH_DATA", payload: data });
        const res = await axios.get(`${API_URL}/getHomePageData`);

        dispatch(setHomePageData(res.data));
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();

    // const interVal = setInterval(() => {
    //   fetchData();
    // }, 1000);

    // return () => {
    //   clearInterval(interVal);
    // };
  }, []);

  return (
    <>
      <Hero />
      <Stats />
      <Slider />
      <About1 />
      <WhyChoose />
      <Courses />
      <About2 />
      <Facuities />
      <Testmonial />
      <ContactSection />
    </>
  );
};

export default Home;
