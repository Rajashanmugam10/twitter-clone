import { ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface Titleprops {
  title: string;
  icon: ReactNode;
  navigateurl: string;
}
export const Titles: React.FC<Titleprops> = ({ title, icon, navigateurl }) => {
  const navigate = useNavigate();
  return (
    <div
      className="flex items-center space-x-2 mb-10 cursor-pointer"
      onClick={() => navigate(navigateurl)}
    >
      {icon}
      {/* <p className="hidden lg:block lg:text-xl font-bold">{title}</p> */}
    </div>
  );
};
