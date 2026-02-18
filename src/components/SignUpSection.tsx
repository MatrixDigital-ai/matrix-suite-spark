import { CheckCircle, Edit3, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const profileFields = [
  { label: "Full Name", value: "Sarah Chen", editable: true },
  { label: "Professional Title", value: "Growth & Strategy Professional", editable: true },
  { label: "Email", value: "sarah.chen@email.com", editable: true },
  { label: "Top Skills", value: "Strategic Planning, Data Analysis, Content Strategy", editable: true },
  { label: "Experience", value: "8+ years in Growth & Marketing", editable: true },
  { label: "Strong Suite", value: "The Growth Strategist", editable: false },
];

const SignUpSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <p className="text-sm font-semibold text-primary uppercase tracking-wider mb-3">Final Step</p>
          <h2 className="font-display text-3xl sm:text-4xl font-bold text-foreground mb-4">
            Create My <span className="gradient-brand-text">Account</span>
          </h2>
          <p className="text-muted-foreground">
            Your profile has been auto-populated from your resume. Review and edit before saving.
          </p>
        </div>

        <div className="rounded-2xl bg-card border border-border shadow-card overflow-hidden">
          <div className="gradient-brand px-8 py-5 flex items-center gap-3">
            <CheckCircle className="h-5 w-5 text-primary-foreground" />
            <span className="text-sm font-semibold text-primary-foreground">Profile Preview — Auto-populated from your resume</span>
          </div>

          <div className="p-8 space-y-6">
            {profileFields.map((field) => (
              <div key={field.label} className="flex items-start justify-between gap-4 pb-4 border-b border-border last:border-0 last:pb-0">
                <div className="flex-1">
                  <label className="text-xs font-semibold text-muted-foreground uppercase tracking-wider">{field.label}</label>
                  <p className="mt-1 text-foreground font-medium">{field.value}</p>
                </div>
                {field.editable && (
                  <button className="mt-3 text-muted-foreground hover:text-primary transition-colors">
                    <Edit3 className="h-4 w-4" />
                  </button>
                )}
              </div>
            ))}
          </div>

          <div className="px-8 pb-8">
            <Button variant="cta-lg" size="lg" className="w-full gap-3 py-6 text-lg rounded-xl">
              Store Profile & Start Earning
              <ArrowRight className="h-5 w-5" />
            </Button>
            <p className="text-center text-xs text-muted-foreground mt-4">
              By creating an account, you agree to our Terms of Service and Privacy Policy.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SignUpSection;
