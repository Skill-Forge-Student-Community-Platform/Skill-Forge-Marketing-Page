import logo from "@/src/assets/images/Skill Forge logo .png";
import Image from "next/image";
import MenuIcon from "@/src/assets/images/menu.svg";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#aboutUs" },
    { label: "Features", href: "#features"},
    { label: "Pricing", href: "#pricing" },
    { label: "Reach us", href: "#contact" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return <section>
        <div className="container py-4 m-0 max-w-full">
          <div className="flex justify-between items-center">
          <Image src={logo} alt="Skill Forge" height={40} width={40} />
          <h1>Skill Forge</h1> {/* Logo replace later */}
          <MenuIcon className="w-5 h-5 md:hidden "/>
          <nav className="hidden md:flex gap-6 text-white/75 items-center">
            {navLinks.map((link) => (
              <a href={link.href} key={link.label}>
                {link.label}
              </a>
            ))}
            <button className="btn btn-sm btn-outline hidden lg:inline-flex text-white align-items justify-center tracking-tight"> Login </button>
            <button className="bg-blue-400 text-white px-4 py-2 rounded-lg font-semibold inline-flex align-items justify-center tracking-tight"> Sign up </button>
          </nav>
          </div>
        </div>
    </section>
    ;
}
