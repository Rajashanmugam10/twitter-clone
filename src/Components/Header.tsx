interface HeaderProps {
  name: string;
}
export const Header: React.FC<HeaderProps> = ({ name }) => {
  return (
    <div className="flex bg-black h-[50px] justify-center items-center">
      <p className="text-xl font-bold">{name}</p>
    </div>
  );
};
