import logo from "./logo.svg";
import "./App.css";
import Hero from "./components/Hero/Hero";
import Popular from "./components/Popular/Popular";
import Subscription from "./components/Subscription/Subscription";
import Footer from "./components/Footer/Footer";
import Trending from "./components/Trending/Trending";

function App() {
  return (
    <>
      <Hero />
      <Trending />
      <Popular />
      <Subscription />
      <Footer />
    </>
  );
}

export default App;
