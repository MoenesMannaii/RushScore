import * as images from "../../assets/index";

const Footer = () => {
  return (
    <>
      <div className="bg-linear-pink-invert">
        <div className="mx-auto container mt-8 py-8 flex flex-col items-center justify-center">
          <div>
            <img src={images.LOGO.src} width={190} alt="Logo" />
          </div>
          <div className="text-white flex flex-col md:items-center pt-3">
            <div className="flex md:flex items-center mx-auto gap-2 mt-5 md:mt-10 text-base">
              <img
                src="https://www.designpieces.com/assets/wp-content/uploads/2016/02/google-play-badge.png"
                className="w-28 h-auto border rounded-lg"
                alt="Google Play Badge"
              />
              <img
                src="https://cdn.statically.io/img/lazarillo.app/wp-content/uploads/2022/10/appstore.png?quality=100&f=auto"
                className="w-28 h-auto"
                alt="App Store Badge"
              />
            </div>
            <div className="my-6 text-base text-center">
              <ul className="md:flex items-center flex-wrap">
                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">
                  Match Highlights
                </li>
                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">
                  Latest News
                </li>
                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">
                  Fan Community
                </li>
                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">
                  RushScore Store
                </li>
                <li className="md:mr-6 cursor-pointer pt-4 lg:py-0">
                  Terms and Conditions
                </li>
                <li className="cursor-pointer pt-4 lg:py-0">Privacy Policy</li>
              </ul>
            </div>
        
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
