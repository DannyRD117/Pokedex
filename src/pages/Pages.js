import { Route, Routes } from "react-router-dom";
import Details from "./Details";
import Main from "./Main";

const Pages = () => {
  return (
    <Routes>
      <Route path="/" element={<Main />} />
      <Route path="/pokemon/:name" element={<Details />} />
    </Routes>
  );
};

export default Pages;
