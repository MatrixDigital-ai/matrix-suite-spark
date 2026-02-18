import Navbar from "@/components/Navbar";
import HeroSection from "@/components/HeroSection";
import ProfileDashboard from "@/components/ProfileDashboard";
import Marketplace from "@/components/Marketplace";
import SignUpSection from "@/components/SignUpSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      <HeroSection />
      <ProfileDashboard />
      <Marketplace />
      <SignUpSection />
      <footer className="border-t border-border py-10 bg-background">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 Matrix Academy. All rights reserved.
        </div>
      </footer>
    </div>
  );
};

export default Index;
