"use client";

import React from 'react';
import { BiFootball } from 'react-icons/bi';
import NewsItem from './NewsItem';

interface NewsItemData {
  image: string;
  time: string;
  title: string;
}

const newsItems: NewsItemData[] = [
  {
    image: 'https://assets.goal.com/images/v3/blt550b409a88c8993f/Ranieri%20working%20miracles%20at%20Roma.jpg?auto=webp&format=pjpg&width=828&quality=60',
    time: 'Nov 13',
    title: 'The Normal One - Ranieri is working miracles again at Roma',
  },
  {
    image: 'https://oneftbl-cms.imgix.net/https%3A%2F%2Ficdn.football-espana.net%2Fwp-content%2Fuploads%2F2023%2F11%2Ffbl-esp-liga-atletico-madrid-villarreal.jpg?auto=format%2Ccompress&crop=faces&dpr=2&fit=crop&h=210&q=25&w=280&s=6017e2b24152e3aed0ad081a44424f76',
    time: '11 hours ago',
    title: 'ATLETICO MADRID SEAL FIGHTBACK WIN OVER VILLARREAL',
  },
  {
    image: 'https://oneftbl-cms.imgix.net/https%3A%2F%2Fwp-images.onefootball.com%2Fwp-content%2Fuploads%2Fsites%2F10%2F2023%2F11%2FChelsea-FC-v-Manchester-City-Premier-League-1699814099-1000x750.jpg?auto=format%2Ccompress&crop=faces&dpr=2&fit=crop&h=210&q=25&w=280&s=fc9f1881b80d533141a2d63eb273c593',
    time: '4 hours ago',
    title: 'CHELSEA DRAW MAN CITY IN EIGHT-GOAL GAME; LIVERPOOL, VILLA PICK UP WINS',
  },
  {
    image: 'https://imgs.search.brave.com/yLaG9v1xewC0utxcDxUeHbr-I_Nm7PzmNzenU372qLg/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9yZXNv/dXJjZXMucHJlbWll/cmxlYWd1ZS5wdWxz/ZWxpdmUuY29tL3Bo/b3RvLXJlc291cmNl/cy8yMDI1LzAxLzI1/LzdlNWU2ZWE5LTNj/NjItNGYxNy1hNGYw/LWYxMjY5NGI2N2Ix/OS8yMTk1MjYxNDEz/LmpwZz93aWR0aD0x/NDAwJmhlaWdodD04/MDA',
    time: '2 hours ago',
    title: 'OUR 3 POINTS AS CHELSEA TAKE DRAMATIC POINT OFF MAN CITY',
  },
  {
    image: 'https://oneftbl-cms.imgix.net/https%3A%2F%2Fportugoal.net%2Fimages%2FBenfica%2FTengstedt-winner-Lisbon-derby.jpg?auto=format%2Ccompress&crop=faces&dpr=2&fit=crop&h=210&q=25&w=280&s=485a6e2b30ff7a888dbf922aeb7bc228',
    time: '5 hours ago',
    title: 'TWO STOPPAGE-TIME GOALS GIVES BENFICA DRAMATIC 2-1 LISBON DERBY WIN OVER SPORTING',
  },
  {
    image: 'https://imgs.search.brave.com/bhZEvZvhY60hb3s2qaoZ5JQ2fuM3gRR-GJ3ZA_podas/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly93d3cu/c3BvcnRpbmdsaWZl/LmNvbS9pbWFnZXMv/bmV3cy85NDV4NTMy/LzU2NTRiMTY1LWVm/YmQtNDMyOS1hZWQz/LTZhYzUwOTdlODY2/Yi5qcGc',
    time: '9 hours ago',
    title: 'DARWIN NÚÑEZ AND MOHAMED SALAH’S BLOSSOMING PARTNERSHIP AT LIVERPOOL',
  },
  {
    image: 'https://oneftbl-cms.imgix.net/https%3A%2F%2Ffootballtoday.com%2Fwp-content%2Fuploads%2F2023%2F11%2Fitaly-v-ukraine-group-c-uefa-euro-2024-european-qualifiers-scaled.jpg?auto=format%2Ccompress&crop=faces&dpr=2&fit=crop&h=210&q=25&w=280&s=09d12255ee86ae5c6a4d75a693b97fc2',
    time: '32 min ago',
    title: 'EURO 2024: THE DECISIVE GAMES FROM THE FINAL ROUND OF QUALIFYING',
  },
  {
    image: 'https://e0.365dm.com/24/07/768x432/skysports-maresca-leicester_6596508.jpg?20240702080319',
    time: '32 min ago',
    title: 'Chelsea transfer news, rumours and gossip: Live updates and latest on deals, signings, loans and contracts',
  },
];

const NewsSection = () => {
  return (
    <div className="container mx-auto">
      <h2 className="bg-[#8A38F4] flex items-center px-2 py-2 text-2xl font-semibold">
        <BiFootball />
        &nbsp;Top News
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 py-8 p-4 lg:px-0">
        <div className="lg:col-span-2">
          {newsItems.length > 0 && <NewsItem {...newsItems[0]} />}
        </div>
        {newsItems.slice(1).map((item, index) => (
          <div key={index} className="col-span-1">
            <NewsItem {...item} />
          </div>
        ))}
      </div>
    </div>
  );
};

export default NewsSection;
