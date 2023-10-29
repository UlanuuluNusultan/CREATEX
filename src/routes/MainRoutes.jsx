import { Route, Routes } from "react-router-dom";
import { INITIAL_PATH } from "../utils/constans/constants";
import Layout from "../layout/Layout";
import MainPage from "../pages/MainPage";
import styled from "styled-components";

const MainRoutes = () => {
  return (
    <Container>
      <Routes>
        <Route path={INITIAL_PATH.main_page} element={<Layout />}>
          <Route index element={<MainPage />} />
        </Route>
      </Routes>
    </Container>
  );
};

export default MainRoutes;

const Container = styled.div`
    width: 1200px;
    margin: 0 auto;
`
