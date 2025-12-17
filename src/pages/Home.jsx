import About from "../components/About";
import Hero from "../components/Hero";
import Suite from "../components/Suite";
import Choose from "../components/Choose";
import MonexaFutureSections from "../components/Future";
import Footer from "../components/Footer";

export default function Home() {
    return(
        <>
        <Hero/>
        <About/>
        <Suite/>
        <Choose/>
        <MonexaFutureSections/>
        <Footer/>
        </>
    );
}
