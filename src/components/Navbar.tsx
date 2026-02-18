import { Hexagon } from "lucide-react";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container flex h-16 items-center justify-between">
        <div className="flex items-center gap-2.5">
          <Hexagon className="h-7 w-7 text-primary" />
          <span className="font-display text-xl font-bold text-foreground">Matrix Academy</span>
        </div>
        <div className="hidden md:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <a href="#" className="hover:text-primary transition-colors">How It Works</a>
          <a href="#" className="hover:text-primary transition-colors">Freelance Gigs</a>
          <a href="#" className="hover:text-primary transition-colors">Courses</a>
          <a href="#" className="hover:text-primary transition-colors">Pricing</a>
        </div>
        <div className="flex items-center gap-3">
          <a href="#" className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors hidden sm:inline">Sign In</a>
          <a href="#" className="rounded-lg gradient-brand px-5 py-2 text-sm font-semibold text-primary-foreground hover:opacity-90 transition-opacity">
            Get Started
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
