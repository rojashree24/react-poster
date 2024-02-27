import "./App.css";
import Footer from "./Components/Footer/Footer";
import Home from "./Components/Home/Home";
import Navbar from "./Components/Navbar/Navbar";
import Products from "./Components/Products/Products";
import Tools from "./Components/Tools/Tools";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Tools />
      <Products />
      <Footer />
    </div>
  );
}

export default App;
