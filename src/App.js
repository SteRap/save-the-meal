import Header from "./Header";
import Footer from "./Footer";
import { Routes, Route } from "react-router-dom";
import Home from "./Pages/Home.js";
import Foods from "./Pages/Foods";
import Store from "./Pages/Store";
import Recipes from "./Pages/Recipes";
import NoWaste from "./Pages/NoWaste";
import WIP from "./Containers/WIP";

function App() {
  return (
    <div>
      <div>
        <Header />
      </div>
      <Routes>
        <Route path="/quelporco" element={<Home />} exact />
        <Route path="/foods" element={<WIP />} />
        <Route path="/store" element={<WIP />} />
        <Route path="/recipes" element={<WIP />} />
        <Route path="/nowaste" element={<WIP />} />
      </Routes>
      <div>
        <Footer />
      </div>
    </div>
  );
}

export default App;
