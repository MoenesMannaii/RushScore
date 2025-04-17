"use client";

import { useState, useEffect } from "react";
import { BiFootball } from "react-icons/bi";
import { GiWhistle } from "react-icons/gi";
import staticMatches from "../data/staticMatches.json";

interface MatchStatus {
  short: string;
  long: string;
  elapsed: number | null;
}

interface MatchGoals {
  home: number | null;
  away: number | null;
}

interface MatchFixture {
  date: string;
  status: MatchStatus;
  elapsed: number | null;
  referee: string;
}

interface Team {
  name: string;
  logo: string;
}

interface MatchTeams {
  home: Team;
  away: Team;
}

interface MatchData {
  league: {
    name: string;
    logo: string;
  };
  teams: MatchTeams;
  fixture: MatchFixture;
  goals: MatchGoals;
}

interface MatchComponentProps {
  matchData: MatchData[];
}

const MatchComponent = ({ matchData }: MatchComponentProps) => {
  return (
    <div className="container mx-auto px-4 py-4 lg:px-0">
      <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {matchData.slice(0, 4).map((match, index) => (
          <div
            key={index}
            className="shadow-md rounded-2xl overflow-hidden border border-purple-500 transition hover:shadow-lg"
          >
            {/* Header */}
            <div className="flex justify-between items-center px-4 py-3 bg-[#191134] border-b border-purple-500">
              <div className="flex items-center">
                <img
                  src={match.league.logo}
                  alt={`${match.league.name} Logo`}
                  className="w-auto h-8 mr-2"
                  loading="lazy"
                />
                <span className="text-xs font-medium text-white">
                  {match.league.name}
                </span>
              </div>
              <div
                className={`text-xs font-medium ${
                  match.fixture.status.short === "LIVE"
                    ? "text-green-600"
                    : "text-gray-400"
                }`}
              >
                {match.fixture.status.long}
              </div>
            </div>

            {/* Main Content */}
            <div className="flex flex-col md:flex-row items-center justify-between px-4 py-5 gap-4">
              {/* Home Team */}
              <div className="flex flex-col items-center md:w-1/3">
                <img
                  src={match.teams.home.logo}
                  alt={`${match.teams.home.name} Logo`}
                  className="w-14 h-14 mb-2"
                  loading="lazy"
                />
                <span className="text-sm font-medium text-center text-white">
                  {match.teams.home.name}
                </span>
              </div>

              {/* Match Details */}
              <div className="flex flex-col items-center md:w-1/3 text-center">
                <div className="text-xs text-gray-500 mb-2">
                  {(() => {
                    const date = new Date(match.fixture.date || "");
                    return isNaN(date.getTime()) ? (
                      "Date not available"
                    ) : (
                      <>
                        {date.toLocaleDateString("en-EN", {
                          day: "numeric",
                          month: "short",
                        })}{" "}
                       
                      </>
                    );
                  })()}
                </div>

                <div className="text-3xl font-bold mb-1 text-white">
                  {match.fixture.status.short === "NS"
                    ? "0 : 0"
                    : `${match.goals.home ?? 0} : ${match.goals.away ?? 0}`}
                </div>

                <div className="text-sm text-green-600 font-medium mb-1">
                  {match.fixture.status.short === "FT" && "90'"}
                  {match.fixture.status.short === "HT" && "45' (HT)"}
                  {match.fixture.status.short === "LIVE" &&
                    `${match.fixture.status.elapsed}'`}
                  {match.fixture.status.short === "NS" && (
                    <span className="text-gray-400">{" - "}</span>
                  )}
                </div>

                <div className="text-[10px] text-gray-500 flex items-center justify-center gap-1">
                  <GiWhistle className="text-base" />
                  :&nbsp;
                  <strong>{match.fixture.referee || "Referee"}</strong>
                </div>
              </div>

              {/* Away Team */}
              <div className="flex flex-col items-center md:w-1/3">
                <img
                  src={match.teams.away.logo}
                  alt={`${match.teams.away.name} Logo`}
                  className="w-14 h-14 mb-2"
                  loading="lazy"
                />
                <span className="text-sm font-medium text-center text-white">
                  {match.teams.away.name}
                </span>
              </div>
            </div>

            {/* Betting Options */}
            <div className="flex justify-center gap-2 p-4 border-t border-purple-500">
              {["1.90", "4.00", "3.10"].map((option, idx) => (
                <button
                  key={idx}
                  className="bg-[#191134] text-sm font-semibold text-white py-1.5 px-4 rounded-md transition duration-200"
                >
                  {option}
                </button>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const MatchList = () => {
  const [matchData, setMatchData] = useState<MatchData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const formattedMatches: MatchData[] = (staticMatches.response as unknown as MatchData[]).map((match) => {


      const validDate =
        match.fixture.date && !isNaN(new Date(match.fixture.date).getTime())
          ? match.fixture.date
          : new Date().toISOString();

      return {
        ...match,
        goals: {
          home:
            typeof match.goals.home === "string" && match.goals.home === "-"
              ? null
              : Number(match.goals.home),
          away:
            typeof match.goals.away === "string" && match.goals.away === "-"
              ? null
              : Number(match.goals.away),
        },
        fixture: {
          ...match.fixture,
          date: validDate,
          status: {
            ...match.fixture.status,
            elapsed: match.fixture.status.elapsed ?? null,
          },
        },
      };
    });

    setMatchData(formattedMatches);
    setLoading(false);
  }, []);

  if (loading) {
    return (
      <div className="container mx-auto text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8A38F4] mx-auto"></div>
      </div>
    );
  }

  return (
    <div className="container mx-auto">
      <h2 className="bg-[#8A38F4] text-white flex items-center px-4 py-3 text-2xl font-semibold rounded-t-lg">
        <BiFootball className="mr-2" />
        Scores en direct
      </h2>
      <MatchComponent matchData={matchData} />
    </div>
  );
};

export default MatchList;
