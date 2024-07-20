import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import SignIn from "./pages/SignIn";
import SignUp from "./pages/SignUp";
import Profile from "./pages/Profile";
import Header from "./components/Header";
import PrivateRoute from "./components/PrivateRoute";
import Contact from "./pages/Contact";
import Exams from "./pages/Exams";
import Services from "./pages/Services";
import Footer from "./components/Footer";
import AboutGermany from "./pages/AboutGermany";
import AboutEngland from "./pages/AboutEngland";
import AboutCanada from "./pages/AboutCanada";
import AboutAustralia from "./pages/AboutAustralia";
import AboutUSA from "./pages/AboutUSA";

export default function App() {
  return (
    <BrowserRouter>
      {/* header */}
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/sign-in" element={<SignIn />} />
        <Route path="/sign-up" element={<SignUp />} />
        <Route element={<PrivateRoute />}>
          <Route path="/profile" element={<Profile />} />
        </Route>
        <Route path="/contact" element={<Contact />} />
        <Route path="/exams" element={<Exams />} />
        <Route path="/Services" element={<Services />} />
        <Route path="/Destinations/AboutUSA" element={<AboutUSA />} />
        <Route path="/Destinations/AboutGermany" element={<AboutGermany />} />
        <Route path="/Destinations/AboutEngland" element={<AboutEngland />} />
        <Route path="/Destinations/AboutCanada" element={<AboutCanada />} />
        <Route
          path="/Destinations/AboutAustralia"
          element={<AboutAustralia />}
        />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}
