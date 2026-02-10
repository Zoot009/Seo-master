import { Search, Twitter, Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background">
      <div className="container mx-auto px-4 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="h-8 w-8 rounded-lg bg-[#3B82F6] flex items-center justify-center">
                <Search className="h-5 w-5 text-white" />
              </div>
              <span className="text-xl font-bold">SEOmaster</span>
            </div>
            <p className="text-sm text-muted-foreground">
              AI-powered SEO optimization for modern websites. Boost your rankings effortlessly.
            </p>
            <div className="flex gap-4">
              <a href="#" className="text-muted-foreground hover:text-[#14B8A6] transition-colors">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#14B8A6] transition-colors">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-[#14B8A6] transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>

          {/* Product */}
          <div className="space-y-4">
            <h3 className="font-semibold">Product</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-[#14B8A6] transition-colors">Features</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#14B8A6] transition-colors">Pricing</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#14B8A6] transition-colors">API</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#14B8A6] transition-colors">Documentation</a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div className="space-y-4">
            <h3 className="font-semibold">Company</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-[#14B8A6] transition-colors">About</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#14B8A6] transition-colors">Blog</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#14B8A6] transition-colors">Careers</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#14B8A6] transition-colors">Contact</a>
              </li>
            </ul>
          </div>

          {/* Legal */}
          <div className="space-y-4">
            <h3 className="font-semibold">Legal</h3>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li>
                <a href="#" className="hover:text-[#14B8A6] transition-colors">Privacy Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#14B8A6] transition-colors">Terms of Service</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#14B8A6] transition-colors">Cookie Policy</a>
              </li>
              <li>
                <a href="#" className="hover:text-[#14B8A6] transition-colors">GDPR</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t mt-12 pt-8 text-center text-sm text-muted-foreground">
          <p>&copy; 2026 SEO Optimizer. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
