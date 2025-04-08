import { Hero } from "../components/Hero";
import MatchComponent from "../components/MatchComponent";
import { LiveMatch } from "../components/LiveMatch";
import { Reviews } from "../components/Reviews";
import NewsSection from "../components/News/NewsSection";
import { ElitePerformance } from "../components/ElitePerformance";
import Partners from "../components/Partners";
import Articles from "@/components/Articles";
import Wins from "@/components/Wins";

export default function Home() {
  return (
    <>
      <Hero />
      <MatchComponent />
      <LiveMatch />
      <Wins />
      <Reviews />
      <NewsSection />
      <ElitePerformance />
      <Articles />
      <Partners />
    </>
  );
}
