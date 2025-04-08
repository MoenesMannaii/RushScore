import React from "react";
import { BiFootball } from "react-icons/bi";
import { Article } from "../components/interfaces";

const articleData: Article[] = [
  {
    title: "Messi Magic: Dazzling Solo Runs That Left Defenders in Awe",
    description:
      "Step into the extraordinary world of Lionel Messi as we dissect his mesmerizing solo runs that have left defenders chasing shadows. From his early Barcelona days to his current club, witness the sheer brilliance of one of football's greatest maestros.",
    date: "September 20",
  },
  {
    title: "Emerging Talents: Young Premier League Stars Shaping the Future",
    description:
      "Explore the breakout performances of young talents in the Premier League, from fearless dribblers to clinical finishers. These rising stars are proving their mettle on some of the biggest stages, promising a bright future for their respective clubs.",
    date: "November 22",
  },
  {
    title: "El Clásico Uncovered: Real Madrid vs. Barcelona Tactical Analysis",
    description:
      "Dive deep into the tactical intricacies of the iconic El Clásico rivalry between Real Madrid and Barcelona. From tactical masterstrokes to key player battles, dissect the strategies that shape one of football's fiercest contests.",
    date: "November 25",
  },
  {
    title:
      "Golden Boot Race: Top Scorers' Battle for Football's Most Prestigious Prize",
    description:
      "Keep track of the thrilling race for the Golden Boot as prolific goal-scorers from different leagues compete for the prestigious title. From hat-tricks to crucial match-winners, witness the goal-scoring exploits that could determine this season's top marksman.",
    date: "March 8",
  },
  {
    title: "Maresca: Fernandez understanding completely different now",
    description:
      "Since we started, Enzo is improving a lot. His understanding of the game is completely different now. He knows where he has to stay, he knows where he has to arrive in the box, and I think most of the goals he scored this season is because he was in the right position, even with the international team.",
    date: "April 4",
  },
  {
    title: "Pereira: A mistake to think season is over if Wolves beat Ipswich",
    description:
      "Wolves boss Vitor Pereira knows it would be a “mistake” to think their season is finished if his side beat Ipswich in a key match in the fight for survival. Wolves sit nine points ahead of the 18th-placed Tractor Boys going into Saturday’s clash and a victory for Pereira’s side would all but seal their place in the Premier League next season.",
    date: "Apr 4",
  },
];

const Articles = () => {
  return (
    <div className="container mx-auto">
      <h2 className="bg-[#8A38F4] flex items-center px-2 py-2 text-2xl font-semibold">
        <BiFootball />
        &nbsp;Soccer Scoop
      </h2>

      <div className="grid gap-8 sm:grid-cols-2 sm:gap-12 lg:grid-cols-3 py-8 p-4 lg:px-0">
        {articleData.map((article, index) => (
          <ArticleCard key={index} article={article} />
        ))}
      </div>
    </div>
  );
};

interface ArticleCardProps {
  article: Article;
}

const ArticleCard = ({ article }: ArticleCardProps) => {
  return (
    <article
      id="hovering"
      className="relative select-none border border-[#8A38F4] px-8 pt-10 pb-20 text-white hover:border-[#ffff] transition-all shadow-md"
    >
      <h2 className="text-lg uppercase font-semibold">
        <span className="text-[#8A38F4] pr-2">{"⬧"}</span>
        {article.title}
      </h2>
      <p className="text-sm text-gray-300 tracking-wide">
        {article.description}
      </p>
      <span className="absolute bottom-4 text-sm font-medium">
        {article.date}
      </span>
      <a
        href="#"
        target="_blank"
        className="absolute bottom-0 right-0 flex h-12 w-12 items-center justify-center bg-[#8A38F4] text-white transition-all hover:w-16"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
          strokeWidth="2"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M14 5l7 7m0 0l-7 7m7-7H3"
          />
        </svg>
      </a>
    </article>
  );
};

export default Articles;
