import About from "./Components/About/About";
import BeautyBrand from "./Components/BeautyBrand/BeautyBrand";
import GetStarted from "./Components/GetStarted/GetStarted";
import Header from "./Components/Headers/Header";
import Home from "./Components/Home/Home";
import RetailerPage from "./Components/RetailerPage/RetailerPage";
import SpecialProducts from "./Components/SpecialProducts/SpecialProducts";
import StandOut from "./Components/StandOut/StandOut";

function App() {
  return (
    <div>
      <Header />
      <Home />
      <BeautyBrand />
      <About />
      <StandOut />
      <SpecialProducts />
      <GetStarted />
   <RetailerPage/>
    </div>
  );
}

export default App;
