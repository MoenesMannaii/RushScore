
import {BiFootball} from 'react-icons/bi'

export const Reviews = () => {
  return (

    <div className="container overflow-hidden py-2 mx-auto">
    <h2 className="bg-[#8a38f4] flex items-center px-2 py-2 text-2xl font-semibold"><BiFootball />&nbsp;Weekly Reviews</h2>

      <div className="flex flex-wrap py-8 -m-12 divide-x divide-[#8a38f4]">
        <div className="p-14 md:w-1/2 flex flex-col items-start">
          <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-[#8a38f4] text-xs font-medium tracking-widest">BVB vs VFB</span>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">Borussia Dortmund and VfB Stuttgart: A Bundesliga Ballet on the Pitch</h2>
          <p className="leading-relaxed text-justify mb-8 text-gray-400">The Bundesliga played host to a captivating performance as Borussia Dortmund and VfB Stuttgart met in a recent fixture. The stadium radiated with the collective energy of fans, who came together not in rivalry, but in celebration of the beautiful game. The pitch witnessed a ballet of skill and strategy, with both teams weaving intricate patterns and showcasing the elegance of football. The match, far from a clash, resembled a choreographed dance of athleticism and finesse, leaving spectators in awe of the mutual respect and admiration between these two Bundesliga contenders.</p>
          <div className="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
          <a
              href="#_"
              className="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium bg-[#8a38f4]"
            >
              <span className="relative text-white">Learn More</span>
            </a>
          </div>
         
        </div>
        <div className="p-14 md:w-1/2 flex flex-col items-start">
          <span className="inline-block py-1 px-2 rounded bg-indigo-50 text-[#8a38f4] text-xs font-medium tracking-widest">RMA - FCB</span>
          <h2 className="sm:text-3xl text-2xl title-font font-medium text-white mt-4 mb-4">A Footballing Extravaganza: Real Madrid and FC Barcelona Revive Their Friendly Rivalry</h2>
          <p className="leading-relaxed text-justify mb-8 text-gray-400">In a recent encounter that echoed the camaraderie of football's rich history, Real Madrid and FC Barcelona engaged in a friendly yet fiercely contested match. The stadium buzzed with excitement as fans from both sides filled the stands, creating an atmosphere of unity and spirited competition. The match, rather than a battleground, became a celebration of skill and sportsmanship, as these two footballing giants showcased their talents in a manner that transcended the typical rivalry narrative.</p>
          <div className="flex items-center flex-wrap pb-4 mb-4 mt-auto w-full">
          <a
              href="#_"
              className="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium bg-[#8a38f4]"
            >
              <span className="relative text-white">Learn More</span>
            </a>
         
          </div>
        
        </div>
      </div>
    </div>

  )
}
