import React from "react";
import { Post } from "../Components/Post";
import agatha from "../assets/agatha.jpg";
import { Header } from "../Components/Header";
export const Home: React.FC = () => {
  return (
    <div>
      <Header name="Home" />
      <Post image={agatha} name="agatha harkness" profileimage={agatha} />
      <Post image={agatha} name="agatha harkness" profileimage={agatha} />
      <Post image={agatha} name="agatha harkness" profileimage={agatha} />
    </div>
  );
};
