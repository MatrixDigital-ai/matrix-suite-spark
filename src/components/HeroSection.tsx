import { Upload, Linkedin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const ResumeScanVisual = () => (
  <div className="relative w-full max-w-sm mx-auto">
    <div className="relative rounded-xl border border-border bg-card p-6 shadow-card overflow-hidden">
      {/* Scan line animation */}
      <div className="absolute left-0 right-0 h-0.5 gradient-brand animate-scan-line opacity-60" />
      
      {/* Mock resume lines */}
      <div className="space-y-3">
        <div className="h-3 w-3/4 rounded bg-muted animate-pulse" />
        <div className="h-2 w-full rounded bg-muted/60" />
        <div className="h-2 w-5/6 rounded bg-muted/60" />
        <div className="h-2 w-full rounded bg-muted/60" />
        <div className="mt-4 h-3 w-1/2 rounded bg-primary/20" />
        <div className="h-2 w-4/5 rounded bg-muted/60" />
        <div className="h-2 w-3/4 rounded bg-muted/60" />
        <div className="mt-4 h-3 w-2/3 rounded bg-primary/20" />
        <div className="h-2 w-full rounded bg-muted/60" />
        <div className="h-2 w-2/3 rounded bg-muted/60" />
      </div>

      {/* Decorative corner accents */}
      <div className="absolute top-0 left-0 w-8 h-8 border-t-2 border-l-2 border-primary/40 rounded-tl-xl" />
      <div className="absolute bottom-0 right-0 w-8 h-8 border-b-2 border-r-2 border-magenta/40 rounded-br-xl" />
    </div>

    {/* Floating badges */}
    <div className="absolute -top-3 -right-3 rounded-lg gradient-brand px-3 py-1.5 text-xs font-semibold text-primary-foreground animate-pulse-glow">
      AI Scanning...
    </div>
    <div className="absolute -bottom-3 -left-3 rounded-lg bg-sky px-3 py-1.5 text-xs font-semibold text-sky-foreground shadow-card">
      Skills Detected: 12
    </div>
  </div>
);

const HeroSection = () => {
  const navigate = useNavigate();
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden">
      {/* Subtle background grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,hsl(var(--border))_1px,transparent_1px),linear-gradient(to_bottom,hsl(var(--border))_1px,transparent_1px)] bg-[size:4rem_4rem] opacity-40" />
      
      {/* Gradient orbs */}
      <div className="absolute top-20 -left-32 w-96 h-96 rounded-full bg-primary/5 blur-3xl" />
      <div className="absolute bottom-20 -right-32 w-96 h-96 rounded-full bg-magenta/5 blur-3xl" />

      <div className="container relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Left content */}
          <div className="space-y-8" style={{ animationDelay: "0.1s" }}>
            <div className="inline-flex items-center gap-2 rounded-full gradient-brand-light px-4 py-2 text-sm font-medium text-primary">
              <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
              Powered by Matrix Architect AI
            </div>

            <h1 className="font-display text-4xl sm:text-5xl lg:text-6xl font-bold leading-tight tracking-tight text-foreground animate-fade-in">
              Unlock Your{" "}
              <span className="gradient-brand-text">Market Value</span>{" "}
              with Matrix Architect AI.
            </h1>

            <p className="text-lg text-muted-foreground max-w-lg animate-fade-in" style={{ animationDelay: "0.2s" }}>
              Upload your resume to get a professional profile analysis, discover your strong suite, and access exclusive freelance gigs.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <Button variant="cta-lg" size="lg" className="gap-3 px-8 py-6 text-lg rounded-xl" onClick={() => navigate("/analysis")}>
                <Upload className="h-5 w-5" />
                Upload Resume
              </Button>
              <Button variant="outline" size="lg" className="gap-3 px-8 py-6 text-lg rounded-xl border-primary/20 text-primary hover:bg-primary/5">
                <Linkedin className="h-5 w-5" />
                Link LinkedIn
              </Button>
            </div>

            <div className="flex items-center gap-6 text-sm text-muted-foreground animate-fade-in" style={{ animationDelay: "0.4s" }}>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                10,000+ profiles analyzed
              </div>
              <div className="flex items-center gap-2">
                <span className="h-1.5 w-1.5 rounded-full bg-primary" />
                Free analysis
              </div>
            </div>
          </div>

          {/* Right visual */}
          <div className="animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <ResumeScanVisual />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
