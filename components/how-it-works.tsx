import { Card } from "@/components/ui/card";
import { Globe, ScanEye, Wand2, Download } from "lucide-react";

const steps = [
  {
    icon: Globe,
    number: "01",
    title: "Enter URL",
    description: "Simply paste the URL of the website you want to optimize",
  },
  {
    icon: ScanEye,
    number: "02",
    title: "AI Analysis",
    description: "Our AI inspects every element, analyzing SEO factors in real-time",
  },
  {
    icon: Wand2,
    number: "03",
    title: "Auto-Optimize",
    description: "Apply suggested changes automatically or review them manually",
  },
  {
    icon: Download,
    number: "04",
    title: "Get Results",
    description: "Download optimized code or deploy changes directly to your site",
  },
];

export function HowItWorks() {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-32">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          How It Works
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Four simple steps to better SEO
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 relative">
        {/* Connection lines for desktop */}
        <div className="hidden lg:block absolute top-16 left-0 right-0 h-0.5 bg-linear-to-r from-transparent via-border to-transparent" />

        {steps.map((step, index) => {
          const Icon = step.icon;
          return (
            <Card
              key={step.title}
              className="relative p-6 text-center space-y-4 hover:shadow-lg transition-shadow duration-300"
            >
              {/* Step number badge */}
              <div className="absolute -top-4 left-1/2 -translate-x-1/2 h-8 w-8 rounded-full bg-primary text-primary-foreground flex items-center justify-center text-sm font-bold">
                {index + 1}
              </div>

              <div className="pt-4">
                <div className="h-16 w-16 mx-auto rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Icon className="h-8 w-8 text-primary" />
                </div>
                <h3 className="font-semibold text-xl mb-2">{step.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {step.description}
                </p>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
