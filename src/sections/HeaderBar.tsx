import ArrowRightIcon from "../assets/images/arrow-right.svg";
import Navbar from "./Navbar";

export const HeaderBar = () => {
  return (
    <header className="sticky top-0">
        <div className="flex justify-center items-center py-2 bg-black text-white text-sm gap-4">
           <p className="text-white/55 hidden md:block">Streamline your workflow and Boost up yourself to be a Tech professionalist with us!. </p>
          <div className="inline-flex gap-1 items-center">
            <p>Get Started for free</p>
            <ArrowRightIcon width={16} height={16} className="inline-flex justify-center items-center" />
          </div>
        </div>
        {/* NAv bar */}
        <div>
          <Navbar/>
        </div>
    </header>
  );
}
