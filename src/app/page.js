
import { Hero } from "./components/Hero";
import MatchComponent from "./components/MatchComponent";
import { Reviews } from "./components/Reviews";
import Footer from "./constants/Footer";
import {Partners} from "./components/Partners";
import { Wins } from "./components/Wins";
import { Updates } from "./components/Updates";
import { LiveMatch } from "./components/LiveMatch";
import { TopVideos } from "./components/TopVideos";

const page = () => {
  return (
    <>
      <Hero />
      <MatchComponent />
      <LiveMatch />
      <Wins />
      <Reviews />
      <Updates />
      <TopVideos />
      <Partners />
      <Footer />
    </>
  );
};

export default page;
