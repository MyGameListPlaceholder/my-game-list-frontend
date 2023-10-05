import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import "./index.css";
import LoginPage from "./pages/Login/LoginPage";
import HomePage from "./pages/Home/HomePage";
import RegisterPage from "./pages/Register/RegisterPage";
import StartPage from "./pages/Start/StartPage";
import NotFound from "./pages/NotFound/NotFound";
import RequireAuth from "./helpers/RequireAuth";

function App(): React.JSX.Element {
  return (
    <BrowserRouter>
      <Routes>
        <Route index element={<StartPage />} />
        <Route element={<RequireAuth />}>
          <Route path="home" element={<HomePage />} />
        </Route>
        <Route path="login" element={<LoginPage />} />
        <Route path="register" element={<RegisterPage />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
