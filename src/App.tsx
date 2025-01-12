import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Home } from "./Pages/Home";
import { Login } from "./Pages/Login";
import { Landing } from "./Pages/Landing";
import { Explore } from "./Pages/Explore";
import { Updates } from "./Pages/Updates";

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/" element={<Landing />}>
          <Route index element={<Home />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/updates" element={<Updates />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
