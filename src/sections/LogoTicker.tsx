import Image from "next/image";
// Update the import to use require
const arrowRightSrc = require('../assets/images/arrow-right.svg').default;

const logos = [
  {name: "ArrowRight", src: arrowRightSrc},
];

export default function LogoTicker() {
      return (
      <section className="py24 overflow-x-clip">
        <div className="container">
          <h3 className="text-center text-white/50 text-xl"> Keep Tracking Your Progress with us </h3>
              <div>
                  <div>
                    {logos.map((logo) => (
                      <Image
                        src={logo.src}
                        key={logo.name}
                        alt={logo.name}
                        width={24}  // adjusted to more reasonable SVG icon size
                        height={24} // adjusted to more reasonable SVG icon size
                      />
                    ))}
                  </div>
              </div>
        </div>
    </section>
    );
}
