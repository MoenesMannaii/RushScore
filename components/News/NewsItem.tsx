import { AiOutlineFieldTime } from 'react-icons/ai';

interface NewsItemProps {
  image: string;
  time: string;
  title: string;
}

const NewsItem = ({ image, time, title }: NewsItemProps) => {
  return (
    <div className="rounded-lg">
      <img
        className="h-60 rounded w-full object-cover object-center"
        src={image}
        alt="News Image"
      />
      <div className="space-y-2">
        <span className="flex items-center mt-4 tracking-widest text-gray-500 text-sm font-medium">
          <AiOutlineFieldTime className="mr-2 text-lg" />
          {time}
        </span>
        <h2 className="text-lg text-white font-medium title-font mb-4">{title}</h2>
      </div>
    </div>
  );
};

export default NewsItem;
