import './styles/globals.css';
import Navbar from './components/common/Navbar/Navbar';
import HeroSection from './components/sections/HeroSection/HeroSection';
import SweetsStrip from './components/sections/SweetsStrip/SweetsStrip';
import NamkeenSection from './components/sections/NamkeenSection/NamkeenSection';
import LocationSection from './components/sections/LocationSection/LocationSection';
import Footer from './components/common/Footer/Footer';

function App() {
  return (
    <>
      <Navbar />
      <main>
        {/* 1 — Full-screen hero with video background */}
        <HeroSection />

        {/* 2 — Featured sweets strip */}
        <SweetsStrip />

        {/* 3 — Haldiram Namkeen 3D Gallery */}
        <NamkeenSection />

        {/* 4 — Location section with videos */}
        <LocationSection />
      </main>
      <Footer />
    </>
  );
}

export default App;
