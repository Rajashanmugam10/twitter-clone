import { IoArrowBack } from "react-icons/io5";

interface HeaderProps {
  name: string;
}
export const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div className="flex  h-[50px] items-center">
      <IoArrowBack size={24} />
      <p className="text-xl flex-grow text-center font-bold">{name}</p>
    </div>
  );
};
