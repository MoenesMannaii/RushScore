import * as images from '../../assets/index'

const Footer = () => {
  return (
    <footer>
    <div className="container flex flex-col items-center justify-between px-6 py-8 mx-auto lg:flex-row">
        <a href="#">
            <img className="w-auto h-10" src={images.LOGO.src} alt="LOGO" />
        </a>

        <div className="flex flex-wrap items-center justify-center gap-4 mt-6 lg:gap-6 lg:mt-0">
            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-[#8a38f4]">
            Match Highlights
            </a>

            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-[#8a38f4]">
            Latest News
            </a>

            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-[#8a38f4]">
            Fan Community
            </a>
            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-[#8a38f4]">
            TK Store
            </a>

            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-[#8a38f4]">
            About Us
            </a>

            <a href="#" className="text-sm text-gray-600 transition-colors duration-300 dark:text-gray-200 hover:text-[#8a38f4]">
                Privacy
            </a>
        </div>

        <p className="flex items-center mt-6 text-xs lg:text-sm text-gray-400 lg:mt-0">© Copyright 2023 - Made with
        <img src={images.TN.src} className='w-auto h-4 px-2'/>
        by Moenes Mannai </p>
    </div>
</footer>
  )
}

export default Footer