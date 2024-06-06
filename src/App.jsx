
import About from "./Components/About/About";

import Footer from "./Components/Footer/Footer";
import Form from "./Components/Form/Form";
import Hero from "./Components/Hero/Hero";
import Navbar from "./Components/Navbar/Navbar";

import toast, { Toaster } from 'react-hot-toast';
import Gallery from "./Components/Gallery/Gallery";



function App() {
  

  return (
    <>
    <div>
    <Navbar />
    <Hero />
    <About />
    <Gallery />
    <Form />
    <Footer />
    </div>
    <Toaster />
    </>
  )
}

export default App
