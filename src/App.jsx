import Hero from "./sections/Hero";
import Header from "./components/Header";
import Introducing from "./sections/Introducing";
import Features from "./sections/Features";
import Services from "./sections/Services";
import Footer from "./sections/Footer";

function App() {
  return (
    <main className="overflow-hidden">
      <Header />
      <Hero />
      <Introducing />
      <Features />
      <Services />
      <Footer />
    </main>
  );
}

export default App;
