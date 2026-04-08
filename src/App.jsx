import { useState } from 'react';
import Navbar from './components/Navbar';
import Strip from './components/Strip';
import Hero from './components/Hero';
import StatsBar from './components/StatsBar';
import Showcase from './components/Showcase';
import About from './components/About';
import Products from './components/Products';
import WhyUs from './components/WhyUs';
import Brands from './components/Brands';
import Licenses from './components/Licenses';
import Services from './components/Services';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import FAQ from './components/FAQ';
import Footer from './components/Footer';
import ProductModal from './components/ProductModal';
import WaFloat from './components/WaFloat';
import {
  useRevealObserver,
  useStatsObserver,
  useNavScrollAndActive,
  useNavLinkClose,
  useProductGridModal,
} from './hooks/useSiteEffects';
import './styles/index.css';

export default function App() {
  const [modalData, setModalData] = useState(null);

  useRevealObserver();
  useStatsObserver();
  useNavScrollAndActive();
  useNavLinkClose();
  useProductGridModal(setModalData);

  return (
    <>
      <Navbar />
      <Strip />
      <Hero />
      <StatsBar />
      <Showcase />
      <About />
      <Products />
      <WhyUs />
      <Brands />
      <Licenses />
      <Services />
      <Testimonials />
      <Contact />
      <FAQ />
      <Footer />
      <ProductModal open={modalData !== null} data={modalData} onClose={() => setModalData(null)} />
      <WaFloat />
    </>
  );
}
