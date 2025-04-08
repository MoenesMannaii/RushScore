"use client";

interface Video {
  id: string;
  title: string;
  youtubeId: string;
}

const videoList: Video[] = [
  {
    id: "video1",
    title:
      "Vital Win! | BORUSSIA DORTMUND - 1. FSV MAINZ 05 | Highlights | Matchday 27 – Bundesliga 2024/25",
    youtubeId: "Y4Y3OXZIj-Y",
  },
  {
    id: "video2",
    title:
      "Inter Miami CF vs. Philadelphia Union | Full Match Highlight | Messi Makes The Difference!",
    youtubeId: "K0SV6Gb_yHg",
  },
  {
    id: "video3",
    title:
      "2024 Globe Soccer Awards | Highlights | 12/27/2024 | beIN SPORTS USA",
    youtubeId: "xvgNAgXOQ3o",
  },
  {
    id: "video4",
    title:
      "Bournemouth v Manchester City | Key Moments | Quarter-Final | Emirates FA Cup 2024-25",
    youtubeId: "S_29u0kwOAE",
  },
  {
    id: "video5",
    title:
      "Cristiano enters all-time top 10 scorers list with brace vs Al Hilal | Highlights by Visit Saudi",
    youtubeId: "VkriUZGg4Vs",
  },
  {
    id: "video6",
    title:
      "HIGHLIGHTS | ATLETICO MADRID 0 vs 1 FC BARCELONA | COPA DEL REY 24/25",
    youtubeId: "gmfGyfGIUmQ",
  },
];

interface VideoCardProps {
  video: Video;
}

const VideoCard = ({ video }: VideoCardProps) => {
  const { youtubeId, title } = video;
  const embedUrl = `https://www.youtube.com/embed/${youtubeId}`;

  return (
    <div className="rounded-lg shadow-md overflow-hidden">
      <iframe
        className="w-full aspect-video"
        src={embedUrl}
        title={title}
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
      ></iframe>
      <div className="p-4">
        <h3 className="text-lg font-semibold text-white">{title}</h3>
      </div>
    </div>
  );
};

const VideosPage = () => {
  return (
    <div className="bg-background text-white min-h-screen py-12 px-4">
      <div className="container mx-auto">
        <h1 className="text-3xl font-semibold text-center mb-8">
          Soccer Highlights & Goals
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {videoList.map((video) => (
            <VideoCard key={video.id} video={video} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideosPage;
