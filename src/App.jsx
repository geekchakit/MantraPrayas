import LocomotiveScroll from "locomotive-scroll";
import { Suspense, useEffect } from "react";
import Header from "./_root/layouts/header/Header";
import { Outlet } from "react-router-dom";
import MobileHeader from "./_root/layouts/header/MobileHeader";
import Footer from "./_root/layouts/Footer";
import FloatingHeader from "./_root/layouts/header/FloatingHeader";

const App = () => {
  const locomotiveScroll = new LocomotiveScroll();

  useEffect(() => {
    if (locomotiveScroll) {
      console.log("Locomotive Scroll is running");
    }
  }, []);

  return (
    <div id="App" className="font-primary">
      <Header />
      <MobileHeader />
      <FloatingHeader />
      <main>
        <Suspense
          fallback={
            <div className="w-full h-full min-h-[calc(100dvh_-_200px)] grid place-content-center text-xl">
              Loading...
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
      <Footer />
    </div>
  );
};

export default App;
