import * as images from "./../assets/index";
import { BiFootball } from "react-icons/bi";

interface PartnerLogo {
  src: string;
}

export const Partners = () => {
  const partnerLogos: PartnerLogo[] = [
    images.FIFA,
    images.SPOTIFY,
    images.TUNISAIR,
    images.WALLYS,
    images.BH,
  ];

  return (
    <div className="container mx-auto text-center">
      <h2 className="bg-[#8A38F4] flex items-center px-2 py-2 text-2xl font-semibold">
        <BiFootball />
        &nbsp;Trusted Partnerships
      </h2>

      <div className="max-w-screen-xl mx-auto mt-20">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-6 lg:grid-cols-5">
          {partnerLogos.map((partner, index) => (
            <div
              key={index}
              className={`flex items-center justify-center col-span-1 md:col-span-2 lg:col-span-1 transition-transform transform hover:scale-105`}
            >
              <img
                src={partner.src}
                className="w-24 lg:w-auto h-auto lg:h-10"
                alt={`Partner ${index + 1}`}
              />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Partners;
