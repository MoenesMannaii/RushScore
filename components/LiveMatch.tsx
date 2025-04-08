import React from "react";
import * as images from "./../assets/index";
import { BiFootball } from "react-icons/bi";

interface Match {
  team1: string;
  team1Logo: string;
  team2: string;
  team2Logo: string;
  time: string;
  timezone: string;
  league: string;
  channel: string;
}

export const LiveMatch = () => {
  const matches: Match[] = [
    {
      team1: "FC Barcelona",
      team1Logo: images.FCB.src,
      team2: "Real Madrid",
      team2Logo: images.RMA.src,
      time: "Live",
      timezone: "GMT",
      league: "Champions League",
      channel: "Bein Sport HD1",
    },
    {
      team1: "Atlético Madrid",
      team1Logo: images.ATL.src,
      team2: "SPORTING CP",
      team2Logo: images.SCP.src,
      time: "Live",
      timezone: "GMT",
      league: "Champions League",
      channel: "Bein Sport 4K",
    },
    {
      team1: "Espérance Tunis",
      team1Logo: images.EST.src,
      team2: "Étoile Sahel",
      team2Logo: images.ESS.src,
      time: "20:00",
      timezone: "GMT",
      league: "CAF Champions League",
      channel: "Bein Sport HD1",
    },
    {
      team1: "Manchester City",
      team1Logo: images.MANCITY.src,
      team2: "AFC Ajax",
      team2Logo: images.AJAX.src,
      time: "20:00",
      timezone: "GMT",
      league: "Champions League",
      channel: "Bein Sport 4K",
    },
  ];

  return (
    <div className="container mx-auto py-8">
      <h2 className="bg-gradient-to-r from-[#8A38F4] to-[#663399] flex items-center px-4 py-2 text-2xl font-semibold text-white rounded-t-md">
        <BiFootball className="mr-2" />
        Live Football Matches
      </h2>
      <div className="bg-[#191134] shadow-md rounded-b-md overflow-hidden">
        {matches.map((match, index) => (
          <div
            key={index}
            className="grid grid-cols-1 sm:grid-cols-12 items-center py-4 px-6 border-b border-[#231b41]"
          >
            <div className="col-span-1 sm:col-span-3 flex flex-col items-center">
              <img
                src={match.team1Logo}
                alt={`${match.team1} Logo`}
                className="w-10 h-10 sm:w-12 sm:h-12 mb-1"
              />
              <span className="text-white font-semibold text-xs sm:text-sm text-center">
                {match.team1}
              </span>
            </div>

            <div className="col-span-1 sm:col-span-2 flex items-center justify-center text-green-500 font-bold uppercase text-xs sm:text-sm py-2 lg:py-0">
              {match.time}
            </div>

            <div className="col-span-1 sm:col-span-3 flex flex-col items-center">
              <img
                src={match.team2Logo}
                alt={`${match.team2} Logo`}
                className="w-10 h-10 sm:w-12 sm:h-12 mb-1"
              />
              <span className="text-white font-semibold text-xs sm:text-sm text-center">
                {match.team2}
              </span>
            </div>

            <div className="col-span-1 sm:col-span-4 text-gray-400 text-xs sm:text-sm text-center py-2 lg:py-0">
              {match.league} - {match.channel} ({match.timezone})
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
