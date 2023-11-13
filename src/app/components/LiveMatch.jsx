import React from 'react';
import * as images from '../../assets/index';
import {BiFootball} from 'react-icons/bi'

export const LiveMatch = () => {
  const matches = [
    {
      team1: 'FC Barcelona',
      team1Logo: images.FCB.src,
      team2: 'Real Madrid',
      team2Logo: images.RMA.src,
      time: 'Live',
      timezone: 'غرينتش',
      league: 'دوري ابطال اوروبا',
      channel: 'Bein Sport HD1',
    },
    {
        team1: 'Atlético Madrid',
        team1Logo: images.ATL.src,
        team2: 'SPORTING CP',
        team2Logo: images.SCP.src,
        time: 'Live',
        timezone: 'Bein Sport 4K',
        league: 'دوري ابطال اوروبا',
        channel: 'Bein Sport HD1',
      },
      {
        team1: 'Espérance Sportive de Tunis',
        team1Logo: images.EST.src,
        team2: 'Étoile Sportive du Sahel',
        team2Logo: images.ESS.src,
        time: '20:00',
        timezone: 'Bein Sport 4K',
        league: 'دوري ابطال اوروبا',
        channel: 'Bein Sport HD1',
      },
      ,
      {
        team1: 'Manchester City',
        team1Logo: images.MANCITY.src,
        team2: 'AFC Ajax',
        team2Logo: images.AJAX.src,
        time: 'Live',
        timezone: 'Bein Sport 4K',
        league: 'دوري ابطال اوروبا',
        channel: 'Bein Sport HD1',
      }
    // Add more match objects as needed
  ];

  return (
    <>
      <link
        rel="stylesheet"
        href="https://maxcdn.bootstrapcdn.com/font-awesome/4.7.0/css/font-awesome.min.css"
        media="all"
      />

      <div className="match_today container mx-auto py-8" id="match_today">
        <h2 className="bg-[#8a38f4] flex items-center px-2 py-2 text-2xl font-semibold"><BiFootball />&nbsp;Today's Football Matches</h2>
 <div className='p-2 lg:p-0'>
        <div className="my-4 border border-[#8a38f4] divide-y divide-[#8a38f4]">
          {matches.map((match, index) => (
            <div className="live-match" key={index}>
              <a className="fullink" href="#"></a>
              <div className="live-match-teams">
                <div className="teams">
                  <div className="team_one">
                    <span>
                      <img src={match.team1Logo} alt={`${match.team1} Logo`} />
                      <div className="text-xs lg:text-sm">{match.team1}</div>
                    </span>
                  </div>
                  <strong className="bg-[#6419c7] text-xs lg:text-sm">- {match.time} -</strong>
                  <div className="team_two">
                    <span>
                      <img src={match.team2Logo} alt={`${match.team2} Logo`} />
                      <div className="text-xs lg:text-sm">{match.team2}</div>
                    </span>
                  </div>
                </div>
            
              </div>
            </div>
          ))}
          </div>
        </div>
      </div>
    </>
  );
}

