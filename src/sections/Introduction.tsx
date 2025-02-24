const text = `You're racing to create exceptional work, but lack of practical experience slows you down with unnecessary complexity and steep your learning curves.`;

export default function Introduction() {
    return (
      <section className="py-28 lg:py-40">
          <div className="container">
              <div className="flex justify-center ">
              <div className="inline-flex border border-blue-500 text-blue-600 sm:text-xs md:text-xl rounded-full md:px-3 sm:px-1 py-1 md:uppercase items-center ">&#10038; Welcome to SkillForge – Where Skills Meet Opportunity </div>
              </div>
              <div className="text-center text-4xl md:text-6xl lg:text-7xl font-medium mt-10">
                <span>Experience a smarter way to learn, grow, and lead.</span> {" "}
                <span className="text-white/15">{text}</span>
                <span className="text-blue-400 block">That&apos;s why we built Skill forge. </span>
              </div>
          </div>
          <div>
          {/* add the detailed of skill forge */}
          </div>
      </section>
    );
}
