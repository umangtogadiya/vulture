import "./assets/css/style.css";
import React, { Suspense, useEffect } from "react";
import { useLocation, useRoutes } from "react-router-dom";
import routes from "./routers/index";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from "react-toastify";

function App() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <Suspense fallback="">
      <div>{useRoutes(routes)}</div>
      <ToastContainer position="bottom-right" />
    </Suspense>
  );
}

export default App;
