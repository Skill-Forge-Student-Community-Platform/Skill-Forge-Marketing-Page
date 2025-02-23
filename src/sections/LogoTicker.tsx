import ArrowRightIcon from "../assets/images/arrow-right.svg";

const logos = [
  { name: "ArrowRight", Icon: ArrowRightIcon },
];

export default function LogoTicker() {
      return (
      <section className="py24 overflow-x-clip">
        <div className="container">
          <h3 className="text-center text-white/50 text-xl"> Keep Tracking Your Progress with us </h3>
              <div>
                  <div>
                    {logos.map(({name, Icon}) => (
                      <Icon
                        key={name}
                        width={24}
                        height={24}
                        className="text-white"
                      />
                    ))}
                  </div>
              </div>
        </div>
    </section>
    );
}
