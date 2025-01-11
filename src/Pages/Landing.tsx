import { Outlet } from "react-router-dom";
import { Sidebar } from "../Components/Sidebar";

export const Landing: React.FC = () => {
  return (
    <div className="max-w-6xl mx-auto grid grid-cols-12 h-screen bg-black">
      <div className=" md:col-span-1  h-full">
        <Sidebar />
      </div>

      <div className="col-span-12 md:col-span-11 lg:col-span-8 bg- h-screen overflow-y-auto mb-[60px] md:mb-0">
        <Outlet />
      </div>

      <div className="hidden col-span-3 lg:block bg-red-500">
        {" "}
        sidebar right{" "}
      </div>
    </div>
  );
};
