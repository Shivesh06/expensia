import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import Link from "next/link";

const CTASection = () => {
  return (
    <section id="limited" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-primary/5 to-transparent z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full bg-primary/10 blur-3xl z-0" />

      <div className="container mx-auto px-6 relative z-10">
        <div className="glass-card p-12 md:p-16 text-center max-w-4xl mx-auto border-primary/20">
          <div className="inline-flex items-center gap-2 px-6 py-2 bg-[#2A3330] border border-[#EAC54F] rounded-full -mt-8">
            <Sparkles className="w-5 h-5 text-[#EAC54F]" />
            <span className="text-[#EAC54F] font-medium text-base font-sans">
              Limited Time Offer
            </span>
          </div>

          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 mt-8">
            Ready to Transform
            <br />
            <span className="gradient-text">Your Finances?</span>
          </h2>

          <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
            Join to finally take control of your financial future with Expensia.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-up-delay-3">
            <Link href="/dashboard">
              <Button
                size="lg"
                className="px-8 h-12 text-base rounded-full bg-gradient-primary hover:shadow-[0_0_20px_hsl(173_80%_50%/0.5)] transition-all duration-300 hover:scale-105 border-0"
              >
                Get Started
                <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
