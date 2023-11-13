import * as images from '../../assets/index'

export const Hero = () => {
  return (
    <div className="container mx-auto flex flex-col mt-5 lg:flex-row lg:items-center">
      <div className="lg:w-1/2  flex-col items-center p-4 w-full hidden lg:flex">
        <div className="max-w-lg lg:mx-auto lg:order-2">
          <h1 className="text-4xl font-normal tracking-wide text-white uppercase lg:text-4xl">
            Signup & Get Rewarded
          </h1>
          <h1 className="text-4xl font-bold tracking-wide text-white uppercase lg:text-4xl">
            up to <span>20,000 TND</span>
          </h1>
          <div className="mt-6">
            <a
              href="#_"
              className="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium bg-[#8a38f4]"
            >
              <span className="relative text-white">Create Account</span>
            </a>
          </div>
        </div>
      </div>

      <div className="lg:w-full flex items-center justify-center h-64 lg:h-96">
        <img
          className="object-contain w-full h-full mx-auto lg:w-full"
          src="https://res.cloudinary.com/dww70arvk/image/upload/v1699215132/a6x9ohhrygqx9kh792fz.png"
          alt="Team"
        />
      </div>

      <div className="lg:w-1/2 flex flex-col items-center p-4 w-full order-2 lg:order-1 lg:hidden">
        <div className="max-w-lg lg:mx-auto">
          <h1 className="text-4xl font-normal tracking-wide text-white uppercase lg:text-4xl">
            Signup & Get Rewarded
          </h1>
          <h1 className="text-4xl font-bold tracking-wide text-white uppercase lg:text-4xl">
            up to <span>20,000 TND</span>
          </h1>
          <div className="mt-6">
            <a
              href="#_"
              className="rounded-md px-8 py-2 m-1 overflow-hidden relative group cursor-pointer font-medium bg-[#8a38f4]"
            >
              <span className="relative text-white">Create Account</span>
            </a>
          </div>
        </div>
      </div>


      <div className="lg:flex-col flex justify-center order-2 p-4 lg:p-0 gap-x-2 lg:space-y-3">
        <div className="p-2 border-[#231b41] border-[1px] rounded-xl">
          <img
            src={images.RMA.src}
            className="w-24 h-auto"
            alt="Logo 1"
          />
        </div>
        <div className="p-2 border-[#231b41] border-[1px] rounded-xl">
          <img
  src={images.FCB.src}
className="w-24 h-auto"
            alt="Logo 2"
          />
        </div>
        <div className="p-2 border-[#231b41] border-[1px] rounded-xl">
          <img
             src={images.MANCITY.src}
            className="w-24 h-auto"
            alt="Logo 3"
          />
        </div>
        <div className="p-2 border-[#231b41] border-[1px] rounded-xl">
          <img
  src={images.LIVERPOOL.src}
className="w-24 h-auto"
            alt="Logo 4"
          />
        </div>
      </div>
    </div>
  );
};

