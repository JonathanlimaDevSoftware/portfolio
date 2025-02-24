import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./routes/Routes";

const App = () => {
  return (
    <BrowserRouter>
      <section className="app">
        <Navbar />
        <AppRoutes />
        <Footer />
      </section>
    </BrowserRouter>
  );
};

export default App;
