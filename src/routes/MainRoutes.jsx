import { Route, Routes } from "react-router-dom";
import { INITIAL_PATH } from "../utils/constans/constants";
import Layout from "../layout/Layout";
import MainPage from "../pages/MainPage";

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path={INITIAL_PATH.main_page} element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </div>
  );
};

export default MainRoutes;
