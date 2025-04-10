import  {HeaderBar}  from "../sections/HeaderBar";
import Hero from "../sections/Hero";
import LogoSideBar from "@/src/sections/LogoSideBar";
import Introduction from "@/src/sections/Introduction";
import Features from "@/src/sections/Features";
import Team from "@/src/sections/Team";
import Footer from "../sections/Footer";

export default function Home() {
    return (
        <>
            <HeaderBar />
            <Hero />
            <LogoSideBar />
            <Introduction />
            <Features />
            <Team />
            <Footer />
        </>
    );
}
