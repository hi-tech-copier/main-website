
import Topbar from "@/components/Topbar";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Brands from "@/components/Brand";
// import Divider from "@/components/Divider";
import Services from "@/components/Services";
import Rentals from "@/components/Rentals";
import Testimonial from "@/components/Testimonial";
import Footer from "@/components/Footer";



export default function Home() {
  return (
    <>
      <Topbar/>
      <Navbar/>
      <Hero/>
      <Services/>
      <Brands/>
      <About/>
      {/* <Divider/> */}
      <Rentals/>
      <Testimonial/>
      <Footer/>
    </>
  );
}
