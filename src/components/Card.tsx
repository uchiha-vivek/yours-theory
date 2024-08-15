import { FaRegHeart, FaRegComment } from "react-icons/fa";
import Image from "next/image";
import tech from '../../public/tech.png'
import avatar from '../../public/avatar.jpg'
interface CardProps {
  imageUrl: string;
  dateTime: string;
  topicName: string;
  topicDescription: string;
  personName: string;
  personImage: string;
}

const Card: React.FC<CardProps> = ({
  imageUrl,
  dateTime,
  topicName,
  topicDescription,
  personName,
  personImage,
}) => {
  return (
    <div className="bg-white shadow-md rounded-lg overflow-hidden">
      {/* Image Section */}
      <Image src={tech} alt={topicName} className="w-full h-48 object-cover" />

      {/* Content Section */}
      <div className="p-4">
        {/* Date and Icons */}
        <div className="flex justify-between items-center mb-2">
          <span className="text-sm text-gray-500">{dateTime}</span>
          <div className="flex space-x-4 text-gray-600">
            <FaRegHeart className="cursor-pointer hover:text-red-500" />
            <FaRegComment className="cursor-pointer hover:text-blue-500" />
          </div>
        </div>

        {/* Topic Name */}
        <h3 className="text-lg font-semibold text-gray-800">{topicName}</h3>

        {/* Topic Description */}
        <p className="text-sm text-gray-600 mt-2">{topicDescription}</p>

        {/* Person Info */}
        <div className="flex items-center mt-4">
          <Image
            src={avatar}
            alt={personName}
            className="w-10 h-10 rounded-full object-cover mr-3"
          />
          <div>
            <p className="text-sm font-semibold text-gray-800">{personName}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
