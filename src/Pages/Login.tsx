import React from "react";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex h-screen items-center justify-center">
      <button onClick={() => navigate("/")} className="btn btn-primary">
        go with google
      </button>
    </div>
  );
};
