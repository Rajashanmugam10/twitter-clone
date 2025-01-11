import { BiBell, BiHome } from "react-icons/bi";
import { Titles } from "./Titles";
import { CgProfile, CgTrending } from "react-icons/cg";

export const Sidebar: React.FC = () => {
  return (
    <div className="flex  items-center mt-[10px] justify-around lg:h-1/2 mt-[50pxflex-row bottom-0 fixed w-full h-[50px]  md:flex-col md:relative md:h-screen ">
      <Titles icon=<BiHome size="40" /> title="home" navigateurl="/" />
      <Titles
        icon=<CgTrending size="40" />
        title="trending"
        navigateurl="/explore"
      />
      <Titles
        icon=<BiBell size="40" />
        title="updates"
        navigateurl="/updates"
      />
      <Titles
        icon=<CgProfile size="40" />
        title="profile"
        navigateurl="/profile"
      />
    </div>
  );
};
