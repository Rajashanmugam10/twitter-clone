import { BiUpvote } from "react-icons/bi";
import { CgComment } from "react-icons/cg";

interface Postcard {
  image: string;
  name: string;
  profileimage: string;
}
export const Post: React.FC<Postcard> = ({ image, profileimage, name }) => {
  return (
    <div className="flex flex-col m-2">
      <div className=" flex flex-row space-x-3 items-center">
        <img
          src={profileimage}
          alt=""
          className="size-10 rounded-full object-cover"
        />
        <p className="text-xl font-bold">{name}</p>
        <button className="btn btn-sm"> following </button>
      </div>
      <img src={image} alt="" className="max-h-90" />
      <p className="font-bold">
        testing twitter clone by agatha harkness in fedora xfce with zed code
        editor along with transpatent visual
      </p>
      <p className="text-blue-500 py-2">
        hashtags #agatha #agathaallalong #kathryharn
      </p>
      <div className="m-2 flex items-center gap-8">
        <CgComment size={30} color="white" />
        <BiUpvote size={30} color="white" />
      </div>
      <hr />
    </div>
  );
};
