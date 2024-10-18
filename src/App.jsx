import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Coin from "./Components/Coin";
import Exchanges from "./Components/Exchanges";
import Coindetails from "./Components/Coindetails";
import Footer from "./Components/Footer";

function App() {
  return (
    <>
      <div
        style={{
          margin: "0%",
          padding: "0%",
          boxSizing: "border-box",
          scrollBehavior: "smooth",
        }}
      >
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/coins" element={<Coin />} />
            <Route path="/exchanges" element={<Exchanges />} />
            <Route path="/coin/:id" element={<Coindetails />} />
          </Routes>
          <Footer />
        </Router>
      </div>
    </>
  );
}

export default App;
