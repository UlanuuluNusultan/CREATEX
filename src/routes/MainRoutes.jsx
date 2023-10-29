import { Route, Routes } from "react-router-dom";
import { INITIAL_PATH } from "../utils/constans/constants";
import Layout from "../layout/Layout";
import MainPage from "../pages/MainPage";
import styled from "styled-components";
import Delvery from "../pages/Delivery & returns/Delvery.jsx";
import Track from "../pages/Track order/Track.jsx";
import Blog from "../pages/Blog/Blog.jsx";
import Contacts from "../pages/Contacts/Contacts.jsx";
import Women from "../pages/Women/Women.jsx";
import Men from "../pages/Men/Men.jsx";
import Girls from "../pages/Girls/Girls.jsx";
import Boys from "../pages/Boys/Boys.jsx";
import Sale from "../pages/Sale/Sale.jsx";
import Header from "../layout/header/Header.jsx";

const MainRoutes = () => {
  return (
    <>
      <Routes>
        <Route path={INITIAL_PATH.main_page} element={<Layout />}>
          <Route index element={<MainPage />} />
            <Route path="/header" element={<Header/>}/>
            <Route path="/delvery" element={<Delvery/>}/>
            <Route path="/track" element={<Track/>}/>
            <Route path="/blog" element={<Blog/>}/>
            <Route path="/contact" element={<Contacts/>}/>
          <Route path="/women" element={<Women/>}/>
          <Route path="/men" element={<Men/>}/>
          <Route path="/girls" element={<Girls/>}/>
          <Route path="/boys" element={<Boys/>}/>
          <Route path="/sale" element={<Sale/>}/>
        </Route>
      </Routes>
    </>
  );
};

export default MainRoutes;

export const Container = styled.div`
  width: 1200px;
  margin: 0 auto;
`;

