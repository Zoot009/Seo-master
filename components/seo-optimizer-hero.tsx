"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function SEOOptimizerHero() {
  const [url, setUrl] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleAudit = async () => {
    if (!url) return;
    setIsLoading(true);
    // TODO: Connect to backend API
    setTimeout(() => {
      setIsLoading(false);
      console.log("Auditing:", url);
    }, 2000);
  };

  return (
    <div className="container mx-auto px-4 py-32 lg:py-40">
      <div className="flex flex-col items-center text-center space-y-8 max-w-4xl mx-auto">
        {/* Main Heading */}
        <div className="space-y-4">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight">
            SEO Audit & Reporting Tool
            <svg className="mx-auto mt-4" width="240" height="8" viewBox="0 0 240 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M2 5.5C40 2.5 80 1 120 4C160 7 200 5.5 238 5.5" stroke="#FDB022" strokeWidth="6" strokeLinecap="round"/>
            </svg>
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 font-light">
            + Comprehensive SEO Toolset
          </p>
        </div>

        {/* URL Input */}
        <div className="w-full max-w-2xl mt-12">
          <div className="flex flex-col sm:flex-row gap-0 border-2 border-foreground rounded-lg overflow-hidden">
            <Input
              type="url"
              placeholder="Example.com"
              value={url}
              onChange={(e) => setUrl(e.target.value)}
              className="flex-1 h-16 text-lg border-0 focus-visible:ring-0 focus-visible:ring-offset-0 rounded-none"
              onKeyDown={(e) => e.key === "Enter" && handleAudit()}
            />
            <Button
              size="lg"
              onClick={handleAudit}
              disabled={!url || isLoading}
              className="h-16 px-12 font-semibold text-lg bg-[#FDB022] hover:bg-[#F5A623] text-white rounded-none sm:rounded-r-md"
            >
              {isLoading ? "Auditing..." : "Audit"}
            </Button>
          </div>
          <p className="text-base text-muted-foreground mt-4">
            Enter an URL address and get a Free Website Analysis!
          </p>
        </div>

        {/* Additional CTA */}
        <div className="mt-12">
          <Button 
            variant="outline" 
            className="rounded-full px-6 py-2 border-2 border-foreground hover:bg-accent"
          >
            New now with GEO related checks →
          </Button>
        </div>
      </div>
    </div>
  );
}
