import { Briefcase, BookOpen, ArrowRight, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const jobs = [
  { title: "Growth Marketing Strategist", company: "TechScale Inc.", rate: "$95/hr", match: 94, tags: ["Marketing", "Analytics"] },
  { title: "Product Strategy Consultant", company: "InnovateCo", rate: "$110/hr", match: 89, tags: ["Strategy", "Product"] },
  { title: "Data-Driven Campaign Lead", company: "AdVantage", rate: "$85/hr", match: 82, tags: ["Data", "Marketing"] },
  { title: "Business Development Advisor", company: "ScaleUp Labs", rate: "$120/hr", match: 78, tags: ["Business Dev", "Growth"] },
];

const courses = [
  { title: "Advanced Growth Hacking", duration: "6 weeks", tier: "Unlocks $120+/hr roles", level: "Advanced" },
  { title: "Data Analytics Mastery", duration: "8 weeks", tier: "Unlocks $110+/hr roles", level: "Intermediate" },
  { title: "AI-Powered Marketing", duration: "4 weeks", tier: "Unlocks $140+/hr roles", level: "Advanced" },
];

const Marketplace = () => {
  return (
    <section className="py-24">
      <div className="container">
        {/* Freelance Matches */}
        <div className="mb-20">
          <div className="flex items-center gap-3 mb-2">
            <Briefcase className="h-5 w-5 text-primary" />
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Earn</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Live Matches <span className="gradient-brand-text">For You</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg">Freelance roles matched to your skills and experience, ready to apply.</p>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {jobs.map((job) => (
              <div
                key={job.title}
                className="group rounded-2xl bg-card border border-border p-6 shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="flex items-center justify-between mb-4">
                  <span className="inline-flex items-center gap-1 rounded-full bg-sky/30 px-3 py-1 text-xs font-bold text-primary">
                    <Star className="h-3 w-3" /> {job.match}% match
                  </span>
                  <span className="font-display font-bold text-foreground">{job.rate}</span>
                </div>
                <h4 className="font-display font-bold text-foreground mb-1 group-hover:text-primary transition-colors">{job.title}</h4>
                <p className="text-sm text-muted-foreground mb-4">{job.company}</p>
                <div className="flex flex-wrap gap-2 mb-5">
                  {job.tags.map((tag) => (
                    <span key={tag} className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>
                <Button variant="cta" size="sm" className="w-full rounded-lg">
                  Apply Now
                </Button>
              </div>
            ))}
          </div>
        </div>

        {/* Upskilling Roadmap */}
        <div>
          <div className="flex items-center gap-3 mb-2">
            <BookOpen className="h-5 w-5 text-primary" />
            <p className="text-sm font-semibold text-primary uppercase tracking-wider">Learn</p>
          </div>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Bridge the <span className="gradient-brand-text">Gap</span>
          </h2>
          <p className="text-muted-foreground mb-10 max-w-lg">Curated courses that unlock higher-paying freelance tiers.</p>

          <div className="grid md:grid-cols-3 gap-6">
            {courses.map((course) => (
              <div
                key={course.title}
                className="group relative rounded-2xl overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1"
              >
                <div className="gradient-brand p-6 pb-4">
                  <span className="inline-block rounded-full bg-primary-foreground/20 px-3 py-1 text-xs font-medium text-primary-foreground mb-3">
                    {course.level}
                  </span>
                  <h4 className="font-display text-xl font-bold text-primary-foreground">{course.title}</h4>
                </div>
                <div className="bg-card p-6 border border-t-0 border-border rounded-b-2xl">
                  <div className="flex justify-between text-sm mb-4">
                    <span className="text-muted-foreground">{course.duration}</span>
                    <span className="font-semibold text-primary">{course.tier}</span>
                  </div>
                  <Button variant="ghost" className="w-full justify-between text-primary hover:text-primary group-hover:bg-primary/5">
                    Start Learning
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Marketplace;
