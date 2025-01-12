import { Outlet } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";
import { Search } from "./Search";

export const Landing: React.FC = () => {
  return (
    <div className="grid grid-cols-10 max-w-6xl mx-auto h-screen bg-black ">
      <Sidebar />
      <div className="col-span-10 md:col-span-6 mb-[50px] md:mb-0 lg:col-span-5   overflow-y-scroll flex">
        <Outlet />
      </div>
      <Search />
    </div>
  );
};
