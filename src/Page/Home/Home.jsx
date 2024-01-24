import Categories from "../../Components/Categories/Categories";
import Footer from "../../Components/Footer/Footer";
import NavBar from "../../Components/NavBar/NavBar";
// import Products from "../../Components/Products/Products";
import Slider from "../../Components/Slider/Slider ";
import "./Home.scss";

export default function Home() {
  return (
    <>
      <NavBar />
      <Slider />
      <Categories />
      <Footer />
      {/* <Products /> */}
    </>
  );
}
