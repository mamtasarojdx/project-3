import About from "./Components/About/About";
import BeautyBrand from "./Components/BeautyBrand/BeautyBrand";
import Footer from "./Components/Footer/Footer";
import GetStarted from "./Components/GetStarted/GetStarted";
import Header from "./Components/Headers/Header";
import Home from "./Components/Home/Home";
import SpecialProducts from "./Components/SpecialProducts/SpecialProducts";
import StandOut from "./Components/StandOut/StandOut";


function App() {
  return (
    <div>
     <Header/>
     <Home/>
     <BeautyBrand/>
     <About/>
     <StandOut/>
   <SpecialProducts/>
   <GetStarted/>
   <Footer/>
    </div>
  );
}

export default App;
