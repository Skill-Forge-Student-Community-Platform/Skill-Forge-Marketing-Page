import  {HeaderBar}  from "../sections/HeaderBar";
import Hero from "../sections/Hero";
import LogoSideBar from "@/src/sections/LogoSideBar";
import Introduction from "@/src/sections/Introduction";

export default function Home() {
    return (
        <>
            <HeaderBar />
            <Hero />
            <LogoSideBar />
            <Introduction />
        </>
    );
}
