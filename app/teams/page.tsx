<<<<<<< HEAD
"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { Team } from "../../components/interfaces";

const TeamCard = dynamic(() => import("../../components/TeamCard"), { ssr: false });

const Page = () => {
  const teamData: Team[] = useMemo(
    () => [
      {
        name: "Real Madrid",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        description:
          "One of the most successful football clubs in the world, based in Madrid, Spain.",
        followers: 600000000,
      },
      {
        name: "FC Barcelona",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
        description:
          "A renowned football club based in Barcelona, Catalonia, Spain.",
        followers: 580000000,
      },
      {
        name: "Manchester United",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
        description:
          "A professional football club based in Old Trafford, Greater Manchester, England.",
        followers: 500000000,
      },
      {
        name: "Juventus",
        logo: "https://imgs.search.brave.com/U2_4KFoxD1eD4sQ_eiqkDG1qNHoaGBt0GOV9lLoAsgo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L0p1dmVudHVz/XzIwMTdfbG9nb18o/bmVnYXRpdmUpLnBu/Zw",
        description:
          "An Italian professional football club based in Turin, Piedmont.",
        followers: 450000000,
      },
      {
        name: "Bayern Munich",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/600px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        description:
          "A German professional football club based in Munich, Bavaria.",
        followers: 400000000,
      },
      {
        name: "Liverpool",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        description:
          "A professional football club based in Liverpool, Merseyside, England.",
        followers: 380000000,
      },
    ],
    []
  );

  return (
    
      <div className="bg-[#130D25] text-white min-h-screen py-12 px-4">
        <div className="container mx-auto">
          <h1
            className="text-3xl font-semibold text-center mb-8"  role="heading" >
            Most Followed Soccer Teams
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((team, index) => (
              <TeamCard key={index} team={team} />
            ))}
          </div>
        </div>
      </div>

  );
};

export default Page;
=======
"use client";

import React, { useMemo } from "react";
import dynamic from "next/dynamic";
import { Team } from "../../components/interfaces";

const TeamCard = dynamic(() => import("../../components/TeamCard"), { ssr: false });

const Page = () => {
  const teamData: Team[] = useMemo(
    () => [
      {
        name: "Real Madrid",
        logo: "https://upload.wikimedia.org/wikipedia/en/5/56/Real_Madrid_CF.svg",
        description:
          "One of the most successful football clubs in the world, based in Madrid, Spain.",
        followers: 600000000,
      },
      {
        name: "FC Barcelona",
        logo: "https://upload.wikimedia.org/wikipedia/en/4/47/FC_Barcelona_%28crest%29.svg",
        description:
          "A renowned football club based in Barcelona, Catalonia, Spain.",
        followers: 580000000,
      },
      {
        name: "Manchester United",
        logo: "https://upload.wikimedia.org/wikipedia/en/7/7a/Manchester_United_FC_crest.svg",
        description:
          "A professional football club based in Old Trafford, Greater Manchester, England.",
        followers: 500000000,
      },
      {
        name: "Juventus",
        logo: "https://imgs.search.brave.com/U2_4KFoxD1eD4sQ_eiqkDG1qNHoaGBt0GOV9lLoAsgo/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly91cGxv/YWQud2lraW1lZGlh/Lm9yZy93aWtpcGVk/aWEvY29tbW9ucy85/Lzk5L0p1dmVudHVz/XzIwMTdfbG9nb18o/bmVnYXRpdmUpLnBu/Zw",
        description:
          "An Italian professional football club based in Turin, Piedmont.",
        followers: 450000000,
      },
      {
        name: "Bayern Munich",
        logo:
          "https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg/600px-FC_Bayern_M%C3%BCnchen_logo_%282017%29.svg.png",
        description:
          "A German professional football club based in Munich, Bavaria.",
        followers: 400000000,
      },
      {
        name: "Liverpool",
        logo: "https://upload.wikimedia.org/wikipedia/en/0/0c/Liverpool_FC.svg",
        description:
          "A professional football club based in Liverpool, Merseyside, England.",
        followers: 380000000,
      },
    ],
    []
  );

  return (
    
      <div className="bg-[#130D25] text-white min-h-screen py-12 px-4">
        <div className="container mx-auto">
          <h1
            className="text-3xl font-semibold text-center mb-8"  role="heading" >
            Most Followed Soccer Teams
          </h1>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamData.map((team, index) => (
              <TeamCard key={index} team={team} />
            ))}
          </div>
        </div>
      </div>

  );
};

export default Page;
>>>>>>> 7cb67a21ea707c99be0f7e41ed477d2ca575f908
