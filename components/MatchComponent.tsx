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

interface MatchTeams {
  home: {
    name: string;
    logo: string;
  };
  away: {
    name: string;
    logo: string;
  };
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

const generateDynamicDates = (): MatchData[] => {
  const now = new Date();
  return staticMatches.response.map((match, index) => {
    const newDate = new Date(now);
    const hourVariation = index % 2 === 0 ? 14 : 20;
    const dayOffset = Math.floor(index / 2);

    newDate.setDate(now.getDate() + dayOffset - 1);
    newDate.setHours(hourVariation, 0, 0, 0);

    const status = calculateMatchStatus(newDate);

    return {
      ...match,
      fixture: {
        ...match.fixture,
        date: newDate.toISOString(),
        status: status,
        elapsed: status.short === "FT" ? 90 : status.elapsed,
      },
      goals: generateRealisticScore(status.short),
    };
  });
};

const calculateMatchStatus = (matchDate: Date): MatchStatus => {
  const now = new Date();
  const timeDiff = now.getTime() - matchDate.getTime();
  const minutesElapsed = Math.floor(timeDiff / (1000 * 60));

  if (minutesElapsed > 120) {
    return { short: "FT", long: "Finished", elapsed: 90 };
  }
  if (minutesElapsed > 45) {
    return { short: "LIVE", long: "Started", elapsed: minutesElapsed };
  }
  if (minutesElapsed > 0) {
    return { short: "LIVE", long: "Started", elapsed: minutesElapsed };
  }
  return { short: "NS", long: "Starting Soon", elapsed: null };
};

const generateRealisticScore = (status: string): MatchGoals => {
  if (status === "NS") return { home: null, away: null };
  if (status === "FT") {
    return {
      home: Math.floor(Math.random() * 4),
      away: Math.floor(Math.random() * 3),
    };
  }
  return {
    home: Math.floor(Math.random() * 3),
    away: Math.floor(Math.random() * 2),
  };
};

interface MatchComponentProps {
  matchData: MatchData[];
}

const MatchComponent = ({ matchData }: MatchComponentProps) => {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 p-2 lg:p-0">
      {matchData.slice(0, 4).map((match, index) => (
        <div
          key={index}
          className="match mt-4 border-[#8A38F4] border-[1px] rounded-lg"
        >
          <div className="match-header flex justify-between p-2">
            <div className="match-tournament flex items-center">
              <img
                src={match.league.logo}
                alt="Tournament Logo"
                className="w-8 h-8 mr-2"
                loading="lazy"
                width={32}
                height={32}
              />
              <span className="text-xs font-bold">{match.league.name}</span>
            </div>
            <div
              className={`match-status ${
                match.fixture.status.short === "LIVE"
                  ? "text-green-600"
                  : "text-gray-500"
              }`}
            >
              {match.fixture.status.long}
            </div>
          </div>
          <div className="match-content flex mx-auto flex-row p-2">
            <div className="team team--home md:w-1/2">
              <div className="team-logo">
                <img
                  src={match.teams.home.logo}
                  alt="Home Team Logo"
                  className="w-auto h-16 mx-auto"
                  loading="lazy"
                />
              </div>
              <h2 className="team-name text-sm font-semibold text-center">
                {match.teams.home.name}
              </h2>
            </div>
            <div className="match-details md:w-1/2">
              <div className="match-date mb-2 text-sm">
                {new Date(match.fixture.date).toLocaleDateString("en-EN", {
                  day: "numeric",
                  month: "short",
                })}{" "}
                at{" "}
                <strong className="text-green-600">
                  {new Date(match.fixture.date).toLocaleTimeString("en-EN", {
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </strong>
              </div>
              <div className="match-score text-4xl font-semibold">
                <span className="leading-10">{match.goals.home}</span>
                <span className="match-score-divider mx-2">:</span>
                <span>{match.goals.away}</span>
              </div>
              <div className="match-time-lapsed text-lg font-semibold mt-2">
                {match.fixture.status.elapsed}'{" "}
                {match.fixture.status.short === "HT" && "(Mi-temps)"}
              </div>
              <div className="match-referee text-[12px] font-light flex items-center justify-center mt-1">
                <GiWhistle className="text-lg" />
                :&nbsp;
                <strong>&nbsp;{match.fixture.referee || "Moenes"}</strong>
              </div>
              <div className="match-bet-options flex mt-2 justify-center">
                {["1.90", "4.00", "3.10"].map((option, index) => (
                  <button
                    key={index}
                    className="match-bet-option text-black rounded-md py-1 px-4 mr-2 bg-gray-100 hover:bg-gray-200 transition-colors"
                  >
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="team team--away md:w-1/2">
              <div className="team-logo">
                <img
                  src={match.teams.away.logo}
                  alt="Away Team Logo"
                  className="w-16 h-16 mx-auto"
                  loading="lazy"
                />
              </div>
              <h2 className="team-name text-sm font-semibold text-center">
                {match.teams.away.name}
              </h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const MatchList = () => {
  const [matchData, setMatchData] = useState<MatchData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      const dynamicMatches = generateDynamicDates();
      setMatchData(dynamicMatches);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading)
    return (
      <div className="container mx-auto text-center py-8">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-[#8A38F4] mx-auto"></div>
      </div>
    );

  return (
    <div>
      <div className="container mx-auto">
        <h2 className="bg-[#8A38F4] flex items-center px-2 py-2 text-2xl font-semibold">
          <BiFootball />
          &nbsp;Scores en direct
        </h2>
        <MatchComponent matchData={matchData} />
      </div>
    </div>
  );
};

export default MatchList;
