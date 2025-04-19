import { BiFootball } from "react-icons/bi";
import { GiWhistle, GiBabyfootPlayers } from "react-icons/gi";
import { FaUserTie } from "react-icons/fa6";
import { IoFootball } from "react-icons/io5";

interface CardProps {
  icon: any;
  title: string;
}

const Card = ({ icon, title }: CardProps) => (
  <div className="bg-[#0e0e0e] border border-[#8a34f4] rounded-lg shadow px-8 py-4 flex items-center">
    <div className="p-4 bg-[#8a34f4] text-white rounded-lg">
      {icon}
    </div>
    <div className="ml-6">
      <h3 className="mb-1 leading-5 text-white uppercase font-bold text-2xl">{title}</h3>
    </div>
  </div>
);

export const ElitePerformance = () => {
  const cards = [
    {
      icon: <GiBabyfootPlayers className="w-8 h-auto" />,
      title: "Top Players",
    },
    {
      icon: <FaUserTie className="w-8 h-auto" />,
      title: "Top Coaches",
    },
    {
      icon: <GiWhistle className="w-8 h-auto" />,
      title: "Top Referees",
    },
    {
      icon: <IoFootball className="w-8 h-auto" />,
      title: "Top Goals",
    },
  ];

  return (
    <div className="container mx-auto">
      <header className="bg-[#8A38F4] flex items-center px-2 py-2 text-2xl font-semibold">
        <BiFootball />
        &nbsp;Elite Performance
      </header>

      <div className="w-full grid py-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8 p-4 lg:px-0">
        {cards.map(({ icon, title }, index) => (
          <Card key={index} icon={icon} title={title} />
        ))}
      </div>
    </div>
  );
};
