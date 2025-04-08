import Image from 'next/image';
import * as images from './../assets/index';
import { GiBabyfootPlayers } from 'react-icons/gi';

export const Wins = () => {
  return (
    <div className="flex flex-col py-4 px-2 lg:px-12">
      <div className="container mx-auto flex flex-col lg:flex-row items-center gap-6">
        <div className="lg:w-1/2">
        <Image src={images.WORLDCUP.src} alt="WorldCup Image" width={500} height={300} />
          <div className="px-9 pt-10 pb-14 bg-[#251d43]">
            <div className="text-white space-y-4">
              <h3 className="text-xl uppercase font-bold lead-xl bold">Argentina vs France</h3>
              <div className="text-lg font-light">Quick Highlights :</div>
            </div>
            <div className="flex justify-between pt-8">
              <ul className="flex flex-col gap-y-2.5">
                <li className="flex space-x-3 text-white">
                  <GiBabyfootPlayers className="w-6 h-6" />
                  <span className="paragraph-l font-bold">Lionel Messi '2 Goals'</span>
                </li>
                <li className="flex space-x-3 text-white">
                  <GiBabyfootPlayers className="w-6 h-6" />
                  <span className="paragraph-l font-bold">Angel Maria '1 Goal'</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="lg:w-1/2 mt-6 lg:mt-0">
        <Image src={images.ALNASR.src} alt="ALNASSR Image" width={500} height={300} />
          <div className="px-9 pt-10 pb-14 bg-[#251d43]">
            <div className="text-white space-y-4">
              <h3 className="text-xl uppercase font-bold lead-xl bold">Al Nasr vs Al Ahli Saudi</h3>
              <div className="text-lg font-light">Quick Highlights :</div>
            </div>
            <div className="flex justify-between pt-8">
              <ul className="flex flex-col gap-y-2.5">
                <li className="flex space-x-3 text-white">
                  <GiBabyfootPlayers className="w-6 h-6" />
                  <span className="paragraph-l font-bold">Cristiano Ronaldo '2 Goals'</span>
                </li>
                <li className="flex space-x-3 text-white">
                  <GiBabyfootPlayers className="w-6 h-6" />
                  <span className="paragraph-l font-bold">Anderson Talisca '2 Goals'</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
