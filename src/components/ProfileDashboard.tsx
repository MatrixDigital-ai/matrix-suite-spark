import { User, TrendingUp, Award, Zap } from "lucide-react";
import { Progress } from "@/components/ui/progress";

const skills = [
  { name: "Strategic Planning", level: 92, color: "bg-primary" },
  { name: "Data Analysis", level: 85, color: "bg-magenta" },
  { name: "Project Management", level: 78, color: "bg-primary" },
  { name: "UX Research", level: 71, color: "bg-magenta" },
  { name: "Content Strategy", level: 88, color: "bg-primary" },
  { name: "Digital Marketing", level: 65, color: "bg-magenta" },
];

const ProfileDashboard = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container">
        <div className="text-center mb-16 animate-slide-up">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Profile Analysis</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground">
            Your <span className="gradient-brand-text">AI-Powered</span> Dashboard
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {/* Identity Card */}
          <div className="rounded-2xl bg-card border border-border p-8 shadow-card hover:shadow-elevated transition-shadow duration-300">
            <div className="flex items-center gap-4 mb-6">
              <div className="h-16 w-16 rounded-full gradient-brand flex items-center justify-center">
                <User className="h-8 w-8 text-primary-foreground" />
              </div>
              <div>
                <h3 className="font-display text-xl font-bold text-foreground">Sarah Chen</h3>
                <p className="text-sm text-muted-foreground">Growth & Strategy Professional</p>
              </div>
            </div>
            <div className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-muted-foreground">Profile Completion</span>
                <span className="font-semibold text-primary">87%</span>
              </div>
              <div className="h-2.5 rounded-full bg-sky/30 overflow-hidden">
                <div className="h-full rounded-full bg-sky w-[87%] animate-progress-fill" />
              </div>
              <p className="text-xs text-muted-foreground">Add certifications to reach 100%</p>
            </div>
          </div>

          {/* Strong Suite Archetype */}
          <div className="rounded-2xl bg-card border border-border p-8 shadow-card hover:shadow-elevated transition-shadow duration-300">
            <div className="text-center mb-6">
              <div className="inline-flex h-20 w-20 items-center justify-center rounded-2xl gradient-brand mb-4 animate-pulse-glow">
                <Award className="h-10 w-10 text-primary-foreground" />
              </div>
              <h3 className="font-display text-lg font-bold text-foreground">Your Strong Suite</h3>
            </div>
            <div className="text-center">
              <span className="inline-block rounded-full gradient-brand px-6 py-2.5 text-sm font-bold text-primary-foreground">
                The Growth Strategist
              </span>
              <p className="mt-4 text-sm text-muted-foreground leading-relaxed">
                You excel at identifying market opportunities and building scalable strategies that drive measurable results.
              </p>
            </div>
          </div>

          {/* Earnings Calculator */}
          <div className="rounded-2xl bg-card border border-border p-8 shadow-card hover:shadow-elevated transition-shadow duration-300">
            <div className="flex items-center gap-3 mb-6">
              <TrendingUp className="h-6 w-6 text-primary" />
              <h3 className="font-display text-lg font-bold text-foreground">Earnings Potential</h3>
            </div>
            <div className="space-y-6">
              <div>
                <p className="text-sm text-muted-foreground mb-2">Current Market Value</p>
                <p className="font-display text-3xl font-bold text-foreground">$85/hr</p>
              </div>
              <div className="border-t border-border pt-4">
                <p className="text-sm text-muted-foreground mb-2">After Matrix Certifications</p>
                <div className="flex items-baseline gap-2">
                  <p className="font-display text-3xl font-bold gradient-brand-text">$140/hr</p>
                  <span className="inline-flex items-center gap-1 rounded-full bg-sky/30 px-2.5 py-0.5 text-xs font-semibold text-primary">
                    <Zap className="h-3 w-3" /> +65%
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Skill Heatmap */}
        <div className="mt-12 rounded-2xl bg-card border border-border p-8 shadow-card">
          <h3 className="font-display text-xl font-bold text-foreground mb-8">Skill Heatmap</h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {skills.map((skill) => (
              <div key={skill.name} className="space-y-2">
                <div className="flex justify-between text-sm">
                  <span className="font-medium text-foreground">{skill.name}</span>
                  <span className="text-muted-foreground">{skill.level}%</span>
                </div>
                <div className="h-2 rounded-full bg-muted overflow-hidden">
                  <div
                    className={`h-full rounded-full ${skill.color} transition-all duration-1000`}
                    style={{ width: `${skill.level}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfileDashboard;
