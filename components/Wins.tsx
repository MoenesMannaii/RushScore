import Image from 'next/image';
import { GiBabyfootPlayers } from 'react-icons/gi';

const Wins = () => {
  const highlights = [
    {
      title: 'Argentina vs France',
      image:
        'https://imgs.search.brave.com/r5wMJ_9z5heUObSc6WJlJmai9ZrTbIN8oAXFufmPwL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RhbmRhcmQu/Y28udWsvMjAyMi8x/Mi8xOS8wNi8xNDUw/MTI0NzE0LmpwZz9j/cm9wPTg6NSxzbWFy/dCZxdWFsaXR5PTc1/JmF1dG89d2VicCZ3/aWR0aD05NjA',
      players: ['Lionel Messi "2 Goals"', 'Angel Di Maria "1 Goal"'],
    },
    {
      title: 'Al Nassr vs Al Ahli Saudi',
      image:
        'https://imgs.search.brave.com/0X_Q0TsUm0rqeyxyTfgAf2iZD4nMTlCVX9yVzAuDqrI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZ29hbC5jb20v/aW1hZ2VzL3YzL2Js/dDExNGNmZjM2NzVh/NTJlMjQvUm9uYWxk/byUyMCYlMjBBbC1O/YXNzcidzJTIwbmln/aHRtYXJlLmpwZz9h/dXRvPXdlYnAmZm9y/bWF0PXBqcGcmd2lk/dGg9Mzg0MCZxdWFs/aXR5PTYw',
      players: ['Cristiano Ronaldo "2 Goals"', 'Anderson Talisca "2 Goals"'],
    },
  ];

  return (
    <div className="container mx-auto px-4 py-4 lg:px-0">
      <div className="grid gap-10 md:grid-cols-2">
        {highlights.map((match, idx) => (
          <div key={idx} className="flex flex-col bg-[#251d43] rounded-xl overflow-hidden shadow-lg h-full">
            {/* Image */}
            <div className="relative w-full h-64 md:h-[400px]">
              <Image
                src={match.image}
                alt={`Match: ${match.title}`}
                layout="fill"
                objectFit="cover"
                className="rounded-t-xl"
                priority
              />
            </div>

            {/* Content */}
            <div className="p-6 flex flex-col justify-between flex-1">
              <div className="text-white space-y-3">
                <h3 className="text-xl uppercase font-bold">{match.title}</h3>
                <p className="text-base font-light text-gray-300">Quick Highlights:</p>
              </div>

              <ul className="pt-6 flex flex-col gap-3">
                {match.players.map((player, index) => (
                  <li key={index} className="flex items-center gap-3 text-white text-sm font-semibold">
                    <GiBabyfootPlayers className="w-6 h-6" />
                    <span>{player}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Wins;
