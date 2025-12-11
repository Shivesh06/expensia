import { Brain, LineChart, Shield, Wallet, Zap, TrendingUp } from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "AI-Powered Insights",
    description: "Get personalized financial recommendations powered by machine learning that adapts to your goals.",
  },
  {
    icon: LineChart,
    title: "Smart Portfolio Management",
    description: "Automated rebalancing and optimization to maximize returns while minimizing risk exposure.",
  },
  {
    icon: Shield,
    title: "Bank-Grade Security",
    description: "Enterprise-level encryption and multi-factor authentication to keep your assets safe.",
  },
  {
    icon: Wallet,
    title: "Unified Dashboard",
    description: "Connect all your accounts and view your complete financial picture in one place.",
  },
  {
    icon: Zap,
    title: "Real-Time Analytics",
    description: "Instant insights and alerts on market movements, spending patterns, and investment opportunities.",
  },
  {
    icon: TrendingUp,
    title: "Predictive Forecasting",
    description: "AI models that predict market trends and help you stay ahead of the curve.",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-32 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <span className="text-primary font-semibold text-sm uppercase tracking-wider">Features</span>
          <h2 className="text-4xl md:text-5xl font-bold mt-4 mb-6">
            Everything You Need to
            <br />
            <span className="gradient-text">Master Your Finances</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            From intelligent insights to automated management, our AI handles the complexity so you can focus on what matters.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {features.map((feature, index) => (
            <div
              key={index}
              className="glass-card p-8 hover:border-primary/50 transition-all duration-300 group hover:-translate-y-1"
            >
              <div className="feature-icon mb-6 group-hover:scale-110 transition-transform duration-300">
                <feature.icon className="w-6 h-6 text-primary-foreground" />
              </div>
              <h3 className="text-xl font-semibold mb-3">{feature.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
