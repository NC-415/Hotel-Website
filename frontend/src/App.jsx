import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import Register from "./pages/Register";
import WeddingPage from "./pages/WeddingPage";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Accomadation from "./pages/Accomadation";
import RoomDetails from "./pages/RoomDetails";

const App = () => {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/weddingPage" element={<WeddingPage />} />
        <Route path="/accommodation" element={<Accomadation />} />
        <Route path="/roomDetails/:roomId" element={<RoomDetails />} />
      </Routes>
      <Footer />
    </>
  );
};

export default App;