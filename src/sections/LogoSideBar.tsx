// import quantumLogo from "@/src/assets/images/quantum.svg";
// import acmeLogo from "@/src/assets/images/acme-corp.svg";
// import echoValleyLogo from "@/src/assets/images/echo-valley.svg";
// import pulseLogo from "@/src/assets/images/pulse.svg";
// import outsideLogo from "@/src/assets/images/outside.svg";
// import apexLogo from "@/src/assets/images/apex.svg";
// import celestialLogo from "@/src/assets/images/celestial.svg";
// import twiceLogo from "@/src/assets/images/twice.svg";
// import Image from "next/image";


// const logos = [
//   { name: "Quantum", image: quantumLogo },
//   { name: "Acme Corp", image: acmeLogo },
//   { name: "Echo Valley", image: echoValleyLogo },
//   { name: "Pulse", image: pulseLogo },
//   { name: "Outside", image: outsideLogo },
//   { name: "Apex", image: apexLogo },
//   { name: "Celestial", image: celestialLogo },
//   { name: "Twice", image: twiceLogo },
// ];

const logos = [
    { name: "🏆 Rewards" },
    { name: "⭐ Ranks" },
    { name: "📈 Experience" },
    { name: "🏅 Recognition" },
    { name: "🆙 Level Up" },
    { name: "📅 Event Management" },
    { name: "🎯 Competitions" },
    { name: "💡 Recommendations" },
    { name: "🔔 Notifications" },
    { name: "📊 Analytics" },
    { name: "🔗 Integrations" },
    { name: "🎨 Customization" },
];


export default function LogoSideBar() {
  return (
      <section className="py-24 overflow-x-clip">
        <div className="container">
          <h3 className="text-center text-white/50 text-xl">Build expertise, gain recognition, stay ahead.</h3>
          <div className="overflow-hidden mt-12 [mask-image:linear-gradient(to_right,transparent,black_10%,black_90%,transparent)]">
            <div className="flex gap-24 pr-24">
              {logos.map((logo) => (
                  <div
                      key={logo.name}
                      className="text-white text-xl font-medium whitespace-nowrap"
                  >
                      {logo.name}
                  </div>
              ))}
            </div>
          </div>
        </div>
      </section>
  );
}
