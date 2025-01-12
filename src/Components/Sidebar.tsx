import { BiBell, BiHome } from "react-icons/bi";
import { Titles } from "./Titles";
import { CgProfile, CgTrending } from "react-icons/cg";

export const Sidebar: React.FC = () => {
  return (
    <div className="fixed bottom-0 w-full justify-around md:justify-start md:ml-8 md:relative md:h-screen flex h-[50px] md:flex-col col-span-2 shadow-md">
      <div className="size-10 my-8 rounded-full bg-blue-500 md:block hidden"></div>
      <Titles icon=<BiHome size="26" /> title="home" navigateurl="/" />
      <Titles
        icon=<CgTrending size="26" />
        title="explore"
        navigateurl="/explore"
      />
      <Titles
        icon=<BiBell size="26" />
        title="updates"
        navigateurl="/updates"
      />
      <Titles
        icon=<CgProfile size="26" />
        title="profile"
        navigateurl="/profile"
      />
      <button className="btn btn-primary rounded-lg">new post</button>
    </div>
  );
};
