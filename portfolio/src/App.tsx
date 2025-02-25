import { BrowserRouter } from "react-router-dom";
import Footer from "./components/footer/Footer";
import Navbar from "./components/navbar/Navbar";
import AppRoutes from "./routes/Routes";

const App = () => {
  return (
    <section className="app">
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
          <Footer />
      </BrowserRouter>
    </section>
  );
};

export default App;
