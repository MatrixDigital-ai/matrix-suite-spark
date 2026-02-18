import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { Hexagon } from "lucide-react";
import Navbar from "@/components/Navbar";

const steps = [
  { label: "Reading document structure...", color: "bg-sky" },
  { label: "Extracting skills & competencies...", color: "bg-primary" },
  { label: "Mapping career trajectory...", color: "bg-magenta" },
  { label: "Analyzing strength patterns...", color: "bg-cta" },
];

const Scanning = () => {
  const navigate = useNavigate();
  const [progress, setProgress] = useState(0);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const duration = 4500;
    const interval = 50;
    const increment = (100 / duration) * interval;

    const timer = setInterval(() => {
      setProgress((prev) => {
        const next = prev + increment;
        if (next >= 100) {
          clearInterval(timer);
          return 100;
        }
        return next;
      });
    }, interval);

    return () => clearInterval(timer);
  }, []);

  useEffect(() => {
    const stepInterval = setInterval(() => {
      setActiveStep((prev) => {
        if (prev < steps.length - 1) return prev + 1;
        return prev;
      });
    }, 1000);

    return () => clearInterval(stepInterval);
  }, []);

  useEffect(() => {
    if (progress >= 100) {
      const timeout = setTimeout(() => navigate("/analysis"), 600);
      return () => clearTimeout(timeout);
    }
  }, [progress, navigate]);

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <div className="flex flex-col items-center justify-center min-h-[calc(100vh-4rem)] px-4">
        {/* Icon */}
        <div className="relative mb-8">
          <div className="h-24 w-24 rounded-2xl gradient-brand flex items-center justify-center shadow-elevated animate-pulse-glow">
            <Hexagon className="h-12 w-12 text-primary-foreground" />
          </div>
          <div className="absolute inset-0 rounded-2xl border-2 border-primary/30 scale-110 animate-pulse" />
        </div>

        {/* Title */}
        <h2 className="font-display text-2xl sm:text-3xl font-bold text-foreground mb-2">
          Matrix Architect
        </h2>
        <p className="text-muted-foreground mb-10">
          AI is analyzing your profile
        </p>

        {/* Progress bar */}
        <div className="w-full max-w-sm mb-10">
          <div className="h-2.5 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full gradient-brand transition-all duration-100 ease-linear"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-xs text-muted-foreground text-right mt-2">
            {Math.round(progress)}%
          </p>
        </div>

        {/* Steps */}
        <div className="space-y-4 w-full max-w-sm">
          {steps.map((step, i) => (
            <div
              key={step.label}
              className={`flex items-center gap-3 transition-all duration-500 ${
                i <= activeStep ? "opacity-100 translate-y-0" : "opacity-0 translate-y-2"
              }`}
            >
              <span
                className={`h-2.5 w-2.5 rounded-full ${step.color} ${
                  i === activeStep ? "animate-pulse" : ""
                }`}
              />
              <span
                className={`text-sm ${
                  i === activeStep
                    ? "font-semibold text-foreground"
                    : "text-muted-foreground"
                }`}
              >
                {step.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Scanning;
