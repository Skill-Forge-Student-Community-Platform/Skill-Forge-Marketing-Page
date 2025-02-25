import Link from 'next/link';
import { TiSocialLinkedin, TiSocialTwitter, TiSocialGithub } from "react-icons/ti";
import { FaInstagram } from "react-icons/fa";

const navigationLinks = [
    {
        title: "Platform",
        links: [
            { href: "#", label: "Features" },
            { href: "#", label: "Competitions" },
            { href: "#", label: "Events" },
        ]
    },
    {
        title: "Company",
        links: [
            { href: "#", label: "About Us" },
            { href: "#", label: "Our Team" },
            { href: "#", label: "Road map" },
        ]
    },
    {
        title: "Resources",
        links: [
            { href: "#", label: "Documentation" },
            { href: "#", label: "Help Center" },
            { href: "#", label: "Community" },
        ]
    },
    {
        title: "Legal",
        links: [
            { href: "#", label: "Privacy Policy" },
            { href: "#", label: "Terms of Service" },
            { href: "#", label: "Cookie Policy" },
            { href: "#", label: "Contact" },
        ]
    },
];

const socialLinks = [
    { href: "#", icon: <TiSocialTwitter className="text-2xl" />, label: "Twitter" },
    { href: "#", icon: <TiSocialLinkedin className="text-2xl" />, label: "LinkedIn" },
    { href: "#", icon: <FaInstagram className="text-2xl" />, label: "Instagram" },
    { href: "#", icon: <TiSocialGithub className="text-2xl" />, label: "GitHub" },
];

export default function Footer() {
    return (
        <footer className="bg-neutral-950 border-t border-white/10 py-24 mt-16">
            <div className="container px-6 md:px-8">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-12 pb-8">
                    {navigationLinks.map((section) => (
                        <div key={section.title} className="space-y-4">
                            <h4 className="text-white font-medium">{section.title}</h4>
                            <ul className="space-y-3">
                                {section.links.map((link) => (
                                    <li key={link.label}>
                                        <Link
                                            href={link.href}
                                            className="text-neutral-400 hover:text-white transition-colors duration-200 text-sm"
                                        >
                                            {link.label}
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>

                <div className="mt-20 pt-8 border-t border-white/10">
                    <div className="flex flex-col md:flex-row justify-between items-center gap-4">
                        <div className="flex items-center gap-6">
                            {socialLinks.map((social) => (
                                <Link
                                    key={social.label}
                                    href={social.href}
                                    className="text-neutral-400 hover:text-white transition-transform hover:-translate-y-1 duration-200"
                                    aria-label={social.label}
                                >
                                    {social.icon}
                                </Link>
                            ))}
                        </div>
                        <p className="text-neutral-400 text-sm">
                            © 2025 SkillForge. All rights reserved.
                        </p>
                    </div>
                </div>
            </div>
        </footer>
    );
}
