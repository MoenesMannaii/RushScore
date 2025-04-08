import Image from 'next/image';
import { GiBabyfootPlayers } from 'react-icons/gi';

const Wins = () => {
  return (
    <div className="flex flex-col py-4 px-2 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6">
        {/* First Image Section */}
        <div className="lg:w-1/2">
          <div className="relative w-full" style={{ height: '500px' }}>
            <Image
              src="https://imgs.search.brave.com/r5wMJ_9z5heUObSc6WJlJmai9ZrTbIN8oAXFufmPwL0/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuc3RhbmRhcmQu/Y28udWsvMjAyMi8x/Mi8xOS8wNi8xNDUw/MTI0NzE0LmpwZz9j/cm9wPTg6NSxzbWFy/dCZxdWFsaXR5PTc1/JmF1dG89d2VicCZ3/aWR0aD05NjA"
              alt="Image of the World Cup match between Argentina and France"
              layout="fill"
              objectFit="cover" // Ensures the image covers the container without distortion
            />
          </div>
          <div className="px-9 pt-10 pb-14 bg-[#251d43]">
            <div className="text-white space-y-4">
              <h3 className="text-xl uppercase font-bold lead-xl bold">Argentina vs France</h3>
              <div className="text-lg font-light">Quick Highlights :</div>
            </div>
            <div className="flex justify-between pt-8">
              <ul className="flex flex-col gap-y-2.5">
                <li className="flex space-x-3 text-white">
                  <GiBabyfootPlayers className="w-6 h-6" />
                  <span className="paragraph-l font-bold">Lionel Messi &apos;2 Goals&apos;</span>
                </li>
                <li className="flex space-x-3 text-white">
                  <GiBabyfootPlayers className="w-6 h-6" />
                  <span className="paragraph-l font-bold">Angel Maria &apos;1 Goal&apos;</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Second Image Section */}
        <div className="lg:w-1/2 mt-6 lg:mt-0">
          <div className="relative w-full" style={{ height: '500px' }}>
            <Image
              src="https://imgs.search.brave.com/0X_Q0TsUm0rqeyxyTfgAf2iZD4nMTlCVX9yVzAuDqrI/rs:fit:860:0:0:0/g:ce/aHR0cHM6Ly9hc3Nl/dHMuZ29hbC5jb20v/aW1hZ2VzL3YzL2Js/dDExNGNmZjM2NzVh/NTJlMjQvUm9uYWxk/byUyMCYlMjBBbC1O/YXNzcidzJTIwbmln/aHRtYXJlLmpwZz9h/dXRvPXdlYnAmZm9y/bWF0PXBqcGcmd2lk/dGg9Mzg0MCZxdWFs/aXR5PTYw"
              alt="Image of Al Nassr vs Al Ahli Saudi match"
              layout="fill"
              objectFit="cover" // Ensures the image covers the container without distortion
            />
          </div>
          <div className="px-9 pt-10 pb-14 bg-[#251d43]">
            <div className="text-white space-y-4">
              <h3 className="text-xl uppercase font-bold lead-xl bold">Al Nasr vs Al Ahli Saudi</h3>
              <div className="text-lg font-light">Quick Highlights :</div>
            </div>
            <div className="flex justify-between pt-8">
              <ul className="flex flex-col gap-y-2.5">
                <li className="flex space-x-3 text-white">
                  <GiBabyfootPlayers className="w-6 h-6" />
                  <span className="paragraph-l font-bold">Cristiano Ronaldo &apos;2 Goals&apos;</span>
                </li>
                <li className="flex space-x-3 text-white">
                  <GiBabyfootPlayers className="w-6 h-6" />
                  <span className="paragraph-l font-bold">Anderson Talisca &apos;2 Goals&apos;</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wins;
