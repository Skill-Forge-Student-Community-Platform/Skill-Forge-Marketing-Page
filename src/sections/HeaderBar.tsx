import ArrowRightIcon from "@/src/assets/images/arrow-right.svg";
import Image from "next/image";
import Navbar from "./Navbar";

export const HeaderBar = () => {
  return (
    <header className="sticky">
        <div className="flex justify-center items-center py-2 bg-black text-white text-sm gap-4">
           <p className="text-white/55 hidden md:block">Streamline your workflow and Boost up yourself to be a Tech professionalist with us!. </p>
          <div className="inline-flex gap-1 items-center">
            <p>Get Started for free</p>
            <Image
              src={ArrowRightIcon}
              key={"Arrow right"}
              alt="Arrow right"
              width={16}
              height={16}
              className="text-white bg-white rounded-full ml-3"
            />
          </div>
        </div>
        {/* NAv bar */}
        <div className="">
          <Navbar/>
        </div>
    </header>
  );
}
