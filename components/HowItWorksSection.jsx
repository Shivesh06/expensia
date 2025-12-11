import { ArrowRight } from "lucide-react";

const steps = [
  {
    number: "01",
    title: "Create Your Accounts",
    description: "Securely link your bank accounts, investments, and credit cards in minutes.",
  },
  {
    number: "02",
    title: "Track Your Spendings",
    description: "Automatically categorize and track your transactions in real-time.",
  },
  {
    number: "03",
    title: "Get Personalized Insights",
    description: "Receive AI-powered insights and recommendations to optimize your finances.",
  },
  {
    number: "04",
    title: "Get Your Financial Freedom",
    description: "Track your progress toward financial independence with real-time goal monitoring.",
  },
];

const HowItWorksSection = () => {
  return (
    <section id="how-it-works" className="py-32 relative bg-secondary/30">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">How It Works</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Start in <span className="gradient-text">Minutes</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Getting started with FinanceAI is simple. Four easy steps to transform your financial future.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="glass-card p-8 h-full">
                <span className="text-5xl font-bold gradient-text-accent opacity-50">{step.number}</span>
                <h3 className="text-xl font-semibold mt-4 mb-3">{step.title}</h3>
                <p className="text-muted-foreground">{step.description}</p>
              </div>
              
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-8 h-8 text-primary/50" />
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
