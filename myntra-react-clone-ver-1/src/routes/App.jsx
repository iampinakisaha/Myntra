import Footer from "../components/Footer";
import Header from "../components/Header";
import HomeItem from "../components/HomeItem";
import "..//..//src/index.css";
import { Outlet } from "react-router-dom";
import FetchItems from "../components/FetchItems";

function App() {
  return (
    <>
      <Header />
      <FetchItems/>
      <Outlet />
      <Footer />
    </>
  );
}

export default App;
