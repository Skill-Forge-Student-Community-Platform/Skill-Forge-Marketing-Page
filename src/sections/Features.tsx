import FeatureCard from "../components/FeatureCard";
import avatar1 from "@/src/assets/images/avatar-ashwin-santiago.jpg";
import avatar3 from "@/src/assets/images/avatar-lula-meyers.jpg";
import avatar2 from "@/src/assets/images/avatar-florence-shaw.jpg";
import portfolio from "@/src/assets/images/portfolio.png";
import Avatar from "../components/Avatar";
import Image from "next/image";
const features = [
    "Personalized Dashboard",
    "Leaderboard",
    "Event Hub",
    "Team Management",
    "Xp-based Level-up",
    "Profile Customization",
    "Event announcements ",
    "Real time Notifications",
];

export default function Features() {
    return (
      <section className="py24">
        <div className="container">
          <div className="flex justify-center  ">
          <h1>whats on the table</h1>
          </div>
          <h2 className="text-6xl font-medium text-center mt-6 max-w-2xl mx-auto">where experience step over <span className="text-blue-500">knowledge </span></h2>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-4 lg:grid-cols-3  gap-8">
            <FeatureCard
            title="Real-time Collaboration"
            description="Communicate together seamlessly when active on competitions"
            className="md:col-span-2 lg:col-span-1"
             >
              <div className=" aspect-video flex items-center justify-center">
                <Avatar className="z-40">
                    <Image src={avatar1} alt="avatar1" className=" rounded-full" />
                </Avatar>
                <Avatar className=" z-30 -ml-6 border-indigo-500">
                    <Image src={avatar2} alt="avatar1" className=" rounded-full" />
                </Avatar>
                <Avatar className=" z-20 -ml-6 border-amber-500">
                    <Image src={avatar3} alt="avatar1" className=" rounded-full" />
                </Avatar>
                <Avatar className="-ml-6 border-transparent">
                    <div className="size-full bg-neutral-700 rounded-full inline-flex items-center justify-center gap-1" >
                      {Array.from({ length: 3 }).map((_, i) => (
                           <span className="size-1.5 rounded-full bg-white inline-flex" key={i}></span>
                      ))}
                    </div>

                </Avatar>
              </div>
            </FeatureCard>

            <FeatureCard
            title="Community"
            description="Engage with a active community posting to showcase your colors"
            className="md:col-span-2 lg:col-span-1"
            >
             <div className="aspect-video flex items-center justify-center">
                      <p className="text-4xl font-extrabold text-white/20">Upload your Achievements, projects, and <span className="bg-gradient-to-r from-purple-400 to-blue-600 bg-clip-text text-transparent">special moments of competitions</span>  </p>
              </div>
            </FeatureCard>

            <FeatureCard
            title="Portfolio builder"
            description="Secure your spot with visually appealing Portfolio including a customizable industry standard cv"
            className="md:col-span-2 col-start-2 lg:col-span-1 lg:col-start-auto"
            >
              <div className="aspect-video flex items-center justify-center">
                <Image src={portfolio
                } alt="portfolio"
                className="rounded-xl"/>
              </div>
            </FeatureCard>


          </div>
            <div className="mt-8 flex flex-wrap gap-3 justify-center">
              {features.map(feature => (
                 <div key={feature} className="bg-neutral-900 border border-white/10 inline-flex px-3 py-1.5 rounded-xl gap-3 items-center">
                    <span className="bg-blue-400 text-neutral-950 size-5 rounded-full inline-flex items-center justify-center text-xl">&#10038;</span>
                    <span className="font-medium">{feature}</span>
                 </div>
              ))}
            </div>
        </div>
      </section>
    );
}
