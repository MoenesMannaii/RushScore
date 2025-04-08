"use client";

import React, { useState } from "react";
import Image from "next/legacy/image";
import { Team } from "./interfaces";

const placeholderImage =
  "data:image/gif;base64,R0lGODlhAQABAIAAAP///wAAACH5BAEAAAAALAAAAAABAAEAAAIBRAA7";

  const TeamCard = React.memo(({ team }: { team: Team }) => {
    const [imageLoaded, setImageLoaded] = useState(false);
    const teamLogo = team.logo;
  
    const handleImageError = (e: React.SyntheticEvent<HTMLImageElement>) => {
      console.error("Error loading image", teamLogo);
      (e.target as HTMLImageElement).src = placeholderImage;
    };
    
  
    const formatFollowers = (followers: number): string => {
      if (followers >= 1000000) {
        return `${(followers / 1000000).toFixed(0)}M+`;
      } else if (followers >= 1000) {
        return `${(followers / 1000).toFixed(0)}K+`;
      } else {
        return followers.toString();
      }
    };
  
    return (
      <div className="bg-[#191134] rounded-lg shadow-md overflow-hidden">
        <div className="relative w-full h-48">
          <Image
            src={imageLoaded ? team.logo : placeholderImage}
            alt={`${team.name} Logo`}
            layout="fill"
            objectFit="contain"
            onLoadingComplete={() => setImageLoaded(true)}
            onError={handleImageError}
            priority={false}
          />
        </div>
        <div className="p-6">
          <h2 className="text-xl font-semibold mb-2" role="heading">
            {team.name}
          </h2>
          <p className="text-gray-400 mb-4">{team.description}</p>
          <div className="flex items-center justify-between">
            <div>
              <span className="text-sm font-medium">Followers:</span>{" "}
              <span className="text-green-500 font-bold">
                {formatFollowers(team.followers)}
              </span>
            </div>
            <button id="button1">
              <strong>View More</strong>
            </button>
          </div>
        </div>
      </div>
    );
  });
  
  // Add display name
  TeamCard.displayName = "TeamCard";
  
  export default TeamCard;
  