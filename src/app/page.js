"use client"
import { Hero } from "./components/Hero";
import MatchComponent from "./components/MatchComponent";
import { Reviews } from "./components/Reviews";
import Footer from "./constants/Footer";
import {Partners} from "./components/Partners";
import { Wins } from "./components/Wins";
import { Updates } from "./components/Updates";
import { LiveMatch } from "./components/LiveMatch";
import { TopVideos } from "./components/TopVideos";
import { ElitePerformance } from "./components/ElitePerformance";
import { Articles } from "./components/Articles/Articles";

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
      <ElitePerformance />
      <Articles />
      <Partners />
      <Footer />
    </>
  );
};

export default page;
