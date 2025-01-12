import React from "react";
import { Header } from "../Components/Header";
import { Trendingcard } from "../Components/Trendingcard";
export const Explore: React.FC = () => {
  return (
    <div className="flex w-full flex-col">
      <Header name="Explore" />
      <p className="text-white text-xl m-2 font-bold">Trending</p>

      <Trendingcard />
      <Trendingcard />
      <Trendingcard />
    </div>
  );
};
