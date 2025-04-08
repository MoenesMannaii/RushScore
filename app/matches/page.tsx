"use client";

import { useState, useEffect } from 'react';
import { BiFootball } from 'react-icons/bi';
import { GiWhistle } from 'react-icons/gi';
import matchesData from '../../data/matches.json';

// Define types
interface League {
  id: number;
  name: string;
  logo: string;
  country: string;
}

interface Team {
  name: string;
  logo: string;
}

interface Goals {
  home: number | null;
  away: number | null;
}

interface FixtureStatus {
  short: string;
  long: string;
  elapsed: number | null;
}

interface Venue {
  name: string;
}

interface Fixture {
  id: number;
  date: string;
  referee: string;
  status: FixtureStatus;
  venue?: Venue;
}

interface Match {
  league: League;
  teams: {
    home: Team;
    away: Team;
  };
  goals: Goals;
  fixture: Fixture;
}

interface GroupedMatches {
  [key: string]: {
    league: League;
    matches: Match[];
  };
}

const formatDate = (dateString: string) => {
  const date = new Date(dateString);
  return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
};

const groupMatchesByLeague = (matches: Match[]): GroupedMatches => {
  return matches.reduce((acc: GroupedMatches, match) => {
    const leagueKey = `${match.league.id}-${match.league.name}`;
    if (!acc[leagueKey]) {
      acc[leagueKey] = {
        league: match.league,
        matches: [],
      };
    }
    acc[leagueKey].matches.push(match);
    return acc;
  }, {});
};

const MatchComponent: React.FC<{ match: Match }> = ({ match }) => {
  return (
    <div className="bg-[#130D25] rounded-lg shadow-md overflow-hidden mb-4">
      <div className="px-6 py-4">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center">
            <img
              src={match.league.logo}
              alt={match.league.name}
              className="w-auto h-8 mr-2"
            />
            <span className="text-sm font-semibold">
              {match.league.name}
            </span>
          </div>
          <div className={`text-sm ${
            match.fixture.status.short === 'LIVE' ? 'text-green-500' : 'text-gray-400'
          }`}>
            {match.fixture.status.elapsed}' {match.fixture.status.short === 'HT' && '(Half Time)'}
          </div>
        </div>

        <div className="flex items-center justify-between">
          <div className="text-center w-1/3">
            <img
              src={match.teams.home.logo}
              alt={match.teams.home.name}
              className="w-auto h-16 mx-auto mb-2"
            />
            <span className="text-sm font-semibold">
              {match.teams.home.name}
            </span>
          </div>

          <div className="text-center w-1/3">
            <div className="text-2xl font-bold">
              {match.goals.home ?? '-'} : {match.goals.away ?? '-'}
            </div>
            <div className="text-sm text-gray-400 mt-1">
              {formatDate(match.fixture.date)}
            </div>
            {match.fixture.status.short === 'LIVE' && (
              <div className="text-xs text-green-500 mt-1">Live Now</div>
            )}
          </div>

          <div className="text-center w-1/3">
            <img
              src={match.teams.away.logo}
              alt={match.teams.away.name}
              className="w-16 h-16 mx-auto mb-2"
            />
            <span className="text-sm font-semibold">
              {match.teams.away.name}
            </span>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-700 pt-2">
          <div className="flex items-center justify-between text-xs text-gray-400">
            <div>
              <GiWhistle className="inline mr-1" />
              {match.fixture.referee || 'TBD'}
            </div>
            <div>{match.fixture.venue?.name || 'Venue TBD'}</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default function LiveScores() {
  const [matches, setMatches] = useState<Match[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Simulate API call delay
    const timer = setTimeout(() => {
      setMatches(matchesData.response);
      setLoading(false);
    }, 1000);

    return () => clearTimeout(timer);
  }, []);

  if (loading) return (
    <div className="min-h-screen bg-[#0c071a] flex items-center justify-center">
      <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-500"></div>
    </div>
  );

  const groupedMatches = groupMatchesByLeague(matches);

  return (
    <div className="min-h-screen bg-[#0c071a] p-4">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-2xl font-bold text-white mb-8 flex items-center">
          <BiFootball className="mr-2" />
          Live Soccer Scores
        </h1>

        {Object.entries(groupedMatches).map(([leagueKey, leagueData]) => (
          <div key={leagueKey} className="mb-8">
            <div className="flex items-center mb-4 p-2 bg-[#130D25] rounded-lg">
              <img
                src={leagueData.league.logo}
                alt={leagueData.league.name}
                className="w-auto h-8 mr-2"
              />
              <h2 className="text-xl font-semibold text-white">
                {leagueData.league.name}
                <span className="ml-2 text-sm text-gray-400">
                  ({leagueData.league.country})
                </span>
              </h2>
            </div>
            
            <div className="grid gap-4">
              {leagueData.matches.map((match) => (
                <MatchComponent key={match.fixture.id} match={match} />
              ))}
            </div>
          </div>
        ))}

        {matches.length === 0 && (
          <div className="text-center text-gray-400 py-8">
            No matches scheduled
          </div>
        )}
      </div>
    </div>
  );
}
