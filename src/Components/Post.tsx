import { FaHeart } from "react-icons/fa";
import { FaComment } from "react-icons/fa6";

export const Post: React.FC = () => {
  return (
    <div className="p-4 w-full mx-auto  rounded-lg text-white">
      <div className="flex items-center gap-2 mb-2">
        <div className="w-10 h-10 rounded-full bg-blue-500"></div>
        <p className="font-bold">username</p>
        <button className="btn btn-sm bg-blue-500 text-white">follow</button>
        <p className="text-gray-200 self-end">time</p>
      </div>
      <p className="mb-4">
        Agatha Harkness is developing this Twitter clone. She likes purple
        magic. She hates death and loving her child. Agatha All Along... round
        round round the road, round in the road.
      </p>

      <img
        className="w-full max-w-md mx-auto object-cover rounded-md"
        src="https://cdn.bsky.app/img/feed_thumbnail/plain/did:plc:phgqsmt3stcebxg5tjewe6hr/bafkreiaf5jm64yju3o3gvnlz2sk6icpiopapff3xvpbvurdv3ir2k7cvau@jpeg"
        alt="Post"
      />
      <div className="flex flex-row items-center gap-6 mt-2">
        <div className="flex items-center gap-2">
          <FaComment /> 12
        </div>
        <div className="flex items-center gap-2">
          <FaHeart /> 10
        </div>
      </div>
      <hr className="my-2" />
    </div>
  );
};
