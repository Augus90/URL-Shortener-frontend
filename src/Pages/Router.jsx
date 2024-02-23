import Home from "./Home/Home.page";
import { Route, Routes } from "react-router-dom/dist";
import HomeLayout from "../Layout/home.layout";
import NotFound from "./404/404.page";

const Router = () => {
  return (
    <>
      <HomeLayout>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/:short" element={<NotFound />}></Route>
        </Routes>
      </HomeLayout>
    </>
  );
};

export default Router;
