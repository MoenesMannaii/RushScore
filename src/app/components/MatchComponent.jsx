import React from 'react';
import {BiFootball} from 'react-icons/bi'
import { GiWhistle } from 'react-icons/gi'

import * as images from '../../assets/index'

function MatchComponent({ matchData }) {
  return (
    <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 lg:flex gap-4 p-2 lg:p-0">
      {matchData.map((match, index) => (
        <div key={index} className="match mt-8 border-[#8a38f4] border-[1px]">
          <div className="match-header flex justify-between">
            <div className="match-tournament flex items-center">
              <img src={match.tournamentLogo} alt="Tournament Logo" className="w-auto h-auto mr-2" />
              <span className="text-xs font-bold">{match.tournamentName}</span>
            </div>
            <div className="match-status text-green-600">{match.status}</div>
          </div>
          <div className="match-content flex mx-auto flex-row">
            <div className="team team--home md:w-1/2">
              <div className="team-logo">
                <img src={match.homeTeamLogo} alt="Home Team Logo" className="w-auto h-auto" />
              </div>
              <h2 className="team-name text-lg font-semibold">{match.homeTeamName}</h2>
            </div>
            <div className="match-details md:w-1/2">
              <div className="match-date mb-2">
                {match.date} at <strong className="text-green-600">{match.time}</strong>
              </div>
              <div className="match-score text-4xl font-semibold">
                <span className="leading-10">{match.homeScore}</span>
                <span className="match-score-divider mx-2">:</span>
                <span>{match.awayScore}</span>
              </div>
              <div className="match-time-lapsed text-lg font-semibold mt-2">
                {match.timeLapsed}
              </div>
              <div className="match-referee text-xs flex items-center ">
                <GiWhistle className='text-lg' />:&nbsp;<strong>&nbsp;{match.referee}</strong>
              </div>
              <div className="match-bet-options flex mt-2">
                {match.betOptions.map((option, index) => (
                  <button key={index} className="match-bet-option text-black rounded-md py-1 px-4 mr-2">
                    {option}
                  </button>
                ))}
              </div>
            </div>
            <div className="team team--away md:w-1/2">
              <div className="team-logo">
                <img src={match.awayTeamLogo} alt="Away Team Logo" className="w-auto h-auto" />
              </div>
              <h2 className="team-name text-lg font-semibold">{match.awayTeamName}</h2>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}

function MatchList() {
  // Define an array of match data
  const matchData = [
    {
      status: 'Live',
      tournamentLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Gold_football_ball.svg/1200px-Gold_football_ball.svg.png',
      tournamentName: 'UEFA Champions League Showdown',
      homeTeamLogo: images.RMA.src,
      homeTeamName: 'RMA',
      date: '11 Aout',
      time: '18:00',
      homeScore: '-',
      awayScore: '-',
      timeLapsed: '00\'',
      referee: 'Moenes Mannai',
      betOptions: ['1.90', '4.00', '3.10'],
      awayTeamLogo: images.FCB.src,
      awayTeamName: 'FCB',
    },
    {
      status: 'Live',
      tournamentLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Gold_football_ball.svg/1200px-Gold_football_ball.svg.png',
      tournamentName: 'La Liga Battle Royale Cup',
      homeTeamLogo: images.ATL.src,
      homeTeamName: 'ATL',
      date: '11 Aout',
      time: '17:30',
      homeScore: '0',
      awayScore: '0',
      timeLapsed: '92\'',
      referee: 'Moenes Mannai',
      betOptions: ['2.00', '3.50', '5.00'],
      awayTeamLogo: images.SCP.src,
      awayTeamName: 'SCP',
    },
    {
      status: 'Live',
      tournamentLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Gold_football_ball.svg/1200px-Gold_football_ball.svg.png',
      tournamentName: 'Premier League Classic Clash Cup',
      homeTeamLogo: images.MANUNITED.src,
      homeTeamName: 'MUN',
      date: '11 Aout',
      time: '17:30',
      homeScore: '3',
      awayScore: '1',
      timeLapsed: '90\'',
      referee: 'Moenes Mannai',
      betOptions: ['1.48', '7.84', '3.24'],
      awayTeamLogo: images.LIVERPOOL.src,
      awayTeamName: 'LIV',
    },
    {
      status: 'Live',
      tournamentLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Gold_football_ball.svg/1200px-Gold_football_ball.svg.png',
      tournamentName: 'UEFA Europa League Spectacle',
      homeTeamLogo: images.MANCITY.src,
      homeTeamName: 'MCI',
      date: '12 Aout',
      time: '16:00',
      homeScore: '-',
      awayScore: '-',
      timeLapsed: '00\'',
      referee: 'Moenes Mannai',
      betOptions: ['1.75', '6.20', '2.50'],
      awayTeamLogo: images.AJAX.src,
      awayTeamName: 'AJA',
    },
    {
      status: 'Live',
      tournamentLogo: 'https://upload.wikimedia.org/wikipedia/commons/thumb/7/7a/Gold_football_ball.svg/1200px-Gold_football_ball.svg.png',
      tournamentName: 'Tunisian Super Derby Cup',
      homeTeamLogo: images.EST.src,
      homeTeamName: 'EST',
      date: '11 Aout',
      time: '17:30',
      homeScore: '1',
      awayScore: '1',
      timeLapsed: '39\'',
      referee: 'Moenes Mannai',
      betOptions: ['1.60', '3.90', '2.80'],
      awayTeamLogo: images.ESS.src,
      awayTeamName: 'ESS',
    }
  ];

  return (
    <div>
      <div className='container mx-auto'>
      <h2 className="bg-[#8a38f4] flex items-center px-2 py-2 text-2xl font-semibold"><BiFootball />&nbsp;Live Scores</h2>

      <MatchComponent matchData={matchData} />
      </div>
    </div>
  );
}

export default MatchList;
