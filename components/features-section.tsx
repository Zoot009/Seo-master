import { Card } from "@/components/ui/card";
import {
  Search,
  Code2,
  Gauge,
  Image,
  FileText,
  Layers,
  Sparkles,
  Shield,
} from "lucide-react";

const features = [
  {
    icon: Search,
    title: "Meta Tag Optimization",
    description: "Automatically optimize title tags, meta descriptions, and Open Graph tags for better search visibility.",
  },
  {
    icon: Code2,
    title: "HTML Structure Analysis",
    description: "Inspect and improve heading hierarchy, semantic HTML, and overall document structure.",
  },
  {
    icon: Gauge,
    title: "Performance Boost",
    description: "Identify and fix performance issues affecting your SEO rankings and user experience.",
  },
  {
    icon: Image,
    title: "Image Optimization",
    description: "Add alt tags, optimize image sizes, and implement lazy loading for better SEO.",
  },
  {
    icon: FileText,
    title: "Content Analysis",
    description: "Analyze content quality, keyword density, and readability scores with AI insights.",
  },
  {
    icon: Layers,
    title: "Schema Markup",
    description: "Implement structured data and schema markup for rich search results.",
  },
  {
    icon: Sparkles,
    title: "AI-Powered Suggestions",
    description: "Get intelligent recommendations based on current SEO best practices.",
  },
  {
    icon: Shield,
    title: "Security Headers",
    description: "Check and optimize security headers that impact SEO and user trust.",
  },
];

export function FeaturesSection() {
  return (
    <section className="container mx-auto px-4 py-20 lg:py-32">
      <div className="text-center space-y-4 mb-16">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight">
          Powerful SEO Features
        </h2>
        <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
          Everything you need to optimize your website for search engines
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <Card
              key={feature.title}
              className="p-6 hover:shadow-lg transition-shadow duration-300 border-2 hover:border-primary/50"
            >
              <div className="space-y-4">
                <div className="h-12 w-12 rounded-lg bg-primary/10 flex items-center justify-center">
                  <Icon className="h-6 w-6 text-primary" />
                </div>
                <div className="space-y-2">
                  <h3 className="font-semibold text-lg">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {feature.description}
                  </p>
                </div>
              </div>
            </Card>
          );
        })}
      </div>
    </section>
  );
}
