"use client";

import { AnimatedTestimonials } from "../components/ui/animated-testimonials";

const teamMembers = [
  {
    name: "Lakshan",
    designation: "Team Leader | Project Manager | Fullstack Developer",
    quote: "Leading the Skill Forge team with a vision to transform skill development in the digital age. Architected the core platform, established project workflows, and implemented critical backend services that power our learning ecosystem.",
    src: "/images/team/lakshan.jpg",
  },
  {
    name: "Hasindu",
    designation: "Fullstack Developer",
    quote: "Bringing extensive technical expertise to develop robust and scalable solutions. Responsible for implementing critical system architecture and building efficient database structures that make Skill Forge powerful yet intuitive.",
    src: "/images/team/hasindu.jpg",
  },
  {
    name: "Amaneth",
    designation: "Fullstack Developer | ML Developer",
    quote: "Integrating cutting-edge machine learning algorithms to personalize learning experiences. Created recommendation systems that adapt to individual learning patterns and developed key backend services for content delivery.",
    src: "/images/team/amaneth.jpg",
  },
  {
    name: "Dulitha",
    designation: "Frontend Developer",
    quote: "Crafting beautiful and intuitive user interfaces that enhance the learning experience. Focused on creating responsive designs that work seamlessly across all devices while ensuring accessibility standards are maintained.",
    src: "/images/team/dulitha.jpg",
  },
  {
    name: "Madushi",
    designation: "Frontend Developer",
    quote: "Designing engaging and interactive learning components that make skill acquisition enjoyable. Specialized in creating animations and visualization tools that help learners grasp complex concepts effortlessly.",
    src: "/images/team/madushi.jpg",
  },
  {
    name: "Chaniru",
    designation: "Frontend Developer",
    quote: "Implementing user-centered design principles to create interfaces that delight users. Developed key frontend features including the assessment module and progress tracking dashboard.",
    src: "/images/team/chaniru.jpg",
  },
];

export default function Team() {
  return (
    <section className="py-24 mt-16 mb-1 dark:from-neutral-950 dark:to-blue-950  border-gray-200 dark:border-gray-800">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold mb-5 dark:text-white">Meet Our Team</h2>
          <p className="text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
            The talented individuals behind Skill Forge who are passionate about transforming learning experiences.
          </p>
        </div>
        <AnimatedTestimonials testimonials={teamMembers} autoplay={true} />
      </div>
    </section>
  );
}
