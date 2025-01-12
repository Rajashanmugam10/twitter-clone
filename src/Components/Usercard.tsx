interface User {
  name: string;
  image: string;
}
export const Usercard: React.FC<User> = ({ name, image }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={image} alt="" className="rounded-full size-10 " />
      <p className="text-white font-bold">{name}</p>
      <button className="btn btn-sm bg-blue-500 text-white">following</button>
    </div>
  );
};
