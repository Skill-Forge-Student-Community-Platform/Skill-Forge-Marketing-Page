import logo from "@/src/assets/images/Skill Forge logo .png";
import Image from "next/image";
// import MenuIcon from "@/src/assets/images/menu.svg";
import Button from "@/src/components/Button";

const navLinks = [
    { label: "Home", href: "#" },
    { label: "About", href: "#aboutUs" },
    { label: "Features", href: "#features"},
    { label: "Pricing", href: "#pricing" },
    { label: "ReachUs", href: "#contact" },
    { label: "FAQs", href: "#faqs" },
];

export default function Navbar() {
    return <section className="py-4 lg:py-8">
        <div className="container max-w-full">
          <div className="grid grid-cols-2 lg:grid-cols-3 border border-white/15 rounded-full md:p-1 lg:p-2 items-center">
              <div className="flex items-center gap-1">
              <Image src={logo} alt="Skill Forge" className="h-12   w-auto "/>
              <h1>Skill Forge</h1> {/* Logo replace later */}
              </div>
              <div className="lg:flex justify-center items-center hidden ">
              <nav className="md:flex gap-6 font-medium text-white/75 items-center">
              {navLinks.map((link) => (
                <a href={link.href} key={link.label}>
                  {link.label}
                </a>
              ))}

          </nav>
              </div>
          <div className="flex justify-end gap-4 ">
                <svg xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="feather feather-menu ml-2 md:hidden">
                    <line x1="3" y1="12" x2="21" y2="12"></line>
                    <line x1="3" y1="6" x2="21" y2="6"></line>
                    <line x1="3" y1="18" x2="21" y2="18"></line>
                </svg>
                  <Button variant="secondary" className="hidden md:inline-flex tracking-tight items-center"> Login </Button>
                  <Button variant="primary" className=" hidden md:inline-flex tracking-tight items-center"> Sign up </Button>



          </div>

          </div>
        </div>
    </section>
    ;
}
