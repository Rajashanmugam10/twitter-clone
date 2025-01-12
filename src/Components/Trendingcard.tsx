import { BsArrowRight } from "react-icons/bs";

export const Trendingcard: React.FC = () => {
  return (
    <div className="bg-gray-900 py-2 px-2 mx-auto w-[90%] flex flex-col gap-3 mb-3">
      <div className="flex items-center gap-2">
        <img src="" alt="" className="rounded-full bg-red-500 size-10" />
        <p className="text-white font-bold">username</p>
      </div>
      <p className="text-white">
        Death rio killed agatha for billy. Agatha sacrifies her for billy by
        death kiss.
      </p>
      <BsArrowRight className="rounded-full bg-blue-500 size-10 p-2 text-white btn-primary" />
    </div>
  );
};
