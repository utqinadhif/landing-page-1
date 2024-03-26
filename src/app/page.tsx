import { About } from "./components/About";
import { Contact } from "./components/Contact";
import { Features } from "./components/Features";
import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";
import { Navbar } from "./components/Navbar";
import { Team } from "./components/Team";
import { Testimonial } from "./components/Testimonial";

export default function Home() {
    return (
        <>
            <Navbar />
            <Header />
            <Features />
            <About />
            <Gallery />
            <Testimonial />
            <Team />
            <Contact />
        </>
    );
}
