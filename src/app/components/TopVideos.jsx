"use client";
import { BiFootball } from "react-icons/bi";
import * as images from "../../assets/index";
import * as videos from "../../videos/index";
import { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const CustomVideoPlayer = ({ videoSrc, thumbnailSrc, title, link }) => {
  const [isVideoVisible, setIsVideoVisible] = useState(false);

  const handlePlay = () => {
    setIsVideoVisible(true);
  };

  return (
    <div className="container mx-auto py-8">
      <div style={{ position: "relative", padding: "1rem" }}>
        {isVideoVisible && (
          <iframe
            width="100%"
            height="auto"
            src={videoSrc}
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowFullScreen
            className="py-4"
          ></iframe>
        )}
        {!isVideoVisible && (
          <div onClick={handlePlay} className="cursor-pointer ">
            <img
              src={thumbnailSrc}
              alt={title}
              style={{ width: "100%", height: "auto" }}
              className="thumbnail border border-[#8a38f4]"
            />
          </div>
        )}
        <div className="text-container">
          <h4 className="py-4 text-base font-medium lg:text-lg md:w-full">
            {title}
          </h4>
          <a
            className="bg-[#8a38f4] p-2 rounded-md inline-block"
            target="_blank"
            href={link}
          >
            Full Match
          </a>
        </div>
      </div>
    </div>
  );
};

const placeholderThumbnail = images.THUMBNAIL.src;

const videoData = [
  {
    src: videos.MUNvLUT,
    title: "Manchester United (1-0) Luton | Premier League Highlights",
    link: "https://www.youtube.com/watch?v=2ozV9BxP0WA",
  },
  {
    src: videos.ASTvFUL,
    title: "Aston Villa (3-1) Fulham | Defeat On The Road | Highlights",
    link: "https://www.youtube.com/watch?v=gwzxOl_azuI",
  },
  {
    src: videos.AHLvRMA,
    title:
      "Al Ahly vs Real Madrid - FIFA Club World Cup Semi-Final | Highlights",
    link: "https://www.youtube.com/watch?v=yL6xA8sn5BE",
  },
  {
    src: videos.MERvEST,
    title: "Al Merrikh vs ES Tunis | Matchday 5 | 2022/23 | Highlights",
    link: "https://www.youtube.com/watch?v=yL6xA8sn5BE",
  },
  {
    src: videos.TOTvCHE,
    title: "Tottenham (1-4) Chelsea | Premier League 2023/24 | HIGHLIGHTS",
    link: "https://www.youtube.com/watch?v=yL6xA8sn5BE",
  },
  {
    src: videos.RMAvVAL,
    title: "Real Madrid (5-1) Valencia | LaLiga 2023/24 | HIGHLIGHTS",
    link: "https://www.youtube.com/watch?v=yL6xA8sn5BE",
  },
  {
    src: videos.ARSvBUR,
    title: "Arsenal vs Burnley (3-1) | Premier League | Highlights",
    link: "https://www.youtube.com/watch?v=yL6xA8sn5BE",
  },
  {
    src: videos.LIVvBRE,
    title: "Liverpool (3-0) Brentford | Highlights",
    link: "https://www.youtube.com/watch?v=yL6xA8sn5BE",
  },
];

export const TopVideos = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    arrows: false,
    swipeToSlide: true,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
    ],
  };

  return (
    <section id="highlights">
      <div className="container mx-auto">
        <h2 className="bg-[#8a38f4] flex items-center px-2 py-2 text-2xl font-semibold">
          <BiFootball />
          &nbsp;Videos & Highlights
        </h2>
        <Slider {...settings}>
          {videoData.map((video, index) => (
            <CustomVideoPlayer
              key={index}
              videoSrc={video.src}
              thumbnailSrc={placeholderThumbnail}
              title={video.title}
              link={video.link}
            />
          ))}
        </Slider>
      </div>
    </section>
  );
};
