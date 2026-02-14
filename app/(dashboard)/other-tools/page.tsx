"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { getUser, isAuthenticated } from "@/lib/auth-client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { ChevronRight, ChevronDown, FileText, FileCheck, Globe, ClipboardList, Search, TrendingUp, Link as LinkIcon, BarChart3, Settings, User, Users, LogOut, Circle, HelpCircle, Eye, Wrench, FileCode } from "lucide-react";

export default function OtherToolsPage() {
  const router = useRouter();
  const [user, setUser] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [activeMenu, setActiveMenu] = useState("Other Tools");
  const [expandedMenus, setExpandedMenus] = useState<string[]>([]);

  const toggleMenu = (menu: string) => {
    setExpandedMenus(prev => 
      prev.includes(menu) ? prev.filter(m => m !== menu) : [...prev, menu]
    );
  };

  const handleLogout = () => {
    localStorage.removeItem("seomaster_auth_token");
    localStorage.removeItem("seomaster_user");
    router.push("/login");
  };

  useEffect(() => {
    if (!isAuthenticated()) {
      router.push("/login");
      return;
    }

    const userData = getUser();
    setUser(userData);
    setLoading(false);
  }, [router]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-xl">Loading...</div>
      </div>
    );
  }

  return (
    <div className="flex min-h-screen bg-white">
      {/* Sidebar */}
      <div className="w-64 bg-black text-white flex flex-col">
        {/* Logo */}
        <div className="p-6">
          <Link href="/" className="flex items-center">
            <span className="text-xl font-bold">SEOmaster</span>
          </Link>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 py-4">
          <Link href="/dashboard">
            <button
              className="w-full px-6 py-3 text-left font-medium transition-colors text-gray-300 hover:text-gray-100 hover:bg-[#1a1a1a]"
            >
              Dashboard
            </button>
          </Link>

          {/* Auditing */}
          <div>
            <button
              onClick={() => toggleMenu("Auditing")}
              className="w-full px-6 py-3 text-left font-medium transition-colors flex items-center justify-between text-gray-300 hover:text-gray-100 hover:bg-[#1a1a1a]"
            >
              Auditing
              {expandedMenus.includes("Auditing") ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {expandedMenus.includes("Auditing") && (
              <div className="bg-[#0a0a0a]">
                <button className="w-full px-6 py-2 text-left text-sm text-gray-400 hover:text-gray-200 hover:bg-[#1a1a1a] transition-colors flex items-center gap-3">
                  <FileText className="h-4 w-4" />
                  Report Templates
                </button>
                <Link href="/white-label-reports">
                  <button className="w-full px-6 py-2 text-left text-sm text-gray-400 hover:text-gray-200 hover:bg-[#1a1a1a] transition-colors flex items-center gap-3">
                    <FileCheck className="h-4 w-4" />
                    White Label Reports
                  </button>
                </Link>
                <button className="w-full px-6 py-2 text-left text-sm text-gray-400 hover:text-gray-200 hover:bg-[#1a1a1a] transition-colors flex items-center gap-3">
                  <Globe className="h-4 w-4" />
                  Website Crawls
                </button>
                <button className="w-full px-6 py-2 text-left text-sm text-gray-400 hover:text-gray-200 hover:bg-[#1a1a1a] transition-colors flex items-center gap-3">
                  <ClipboardList className="h-4 w-4" />
                  Task Management
                </button>
              </div>
            )}
          </div>

          {/* Keywords */}
          <div>
            <button
              onClick={() => toggleMenu("Keywords")}
              className="w-full px-6 py-3 text-left font-medium transition-colors flex items-center justify-between text-gray-300 hover:text-gray-100 hover:bg-[#1a1a1a]"
            >
              Keywords
              {expandedMenus.includes("Keywords") ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {expandedMenus.includes("Keywords") && (
              <div className="bg-[#0a0a0a]">
                <button className="w-full px-6 py-2 text-left text-sm text-gray-400 hover:text-gray-200 hover:bg-[#1a1a1a] transition-colors flex items-center gap-3">
                  <Search className="h-4 w-4" />
                  Keyword Research
                </button>
                <button className="w-full px-6 py-2 text-left text-sm text-gray-400 hover:text-gray-200 hover:bg-[#1a1a1a] transition-colors flex items-center gap-3">
                  <TrendingUp className="h-4 w-4" />
                  Keyword Tracking
                </button>
              </div>
            )}
          </div>

          {/* Backlinks */}
          <div>
            <button
              onClick={() => toggleMenu("Backlinks")}
              className="w-full px-6 py-3 text-left font-medium transition-colors flex items-center justify-between text-gray-300 hover:text-gray-100 hover:bg-[#1a1a1a]"
            >
              Backlinks
              {expandedMenus.includes("Backlinks") ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {expandedMenus.includes("Backlinks") && (
              <div className="bg-[#0a0a0a]">
                <button className="w-full px-6 py-2 text-left text-sm text-gray-400 hover:text-gray-200 hover:bg-[#1a1a1a] transition-colors flex items-center gap-3">
                  <LinkIcon className="h-4 w-4" />
                  Backlink Research
                </button>
                <button className="w-full px-6 py-2 text-left text-sm text-gray-400 hover:text-gray-200 hover:bg-[#1a1a1a] transition-colors flex items-center gap-3">
                  <BarChart3 className="h-4 w-4" />
                  Backlink Monitoring
                </button>
              </div>
            )}
          </div>

          {/* Other Tools */}
          <button
            className="w-full px-6 py-3 text-left font-medium transition-colors bg-[#2d3748] text-white"
          >
            Other Tools
          </button>

          {/* Account */}
          <div>
            <button
              onClick={() => toggleMenu("Account")}
              className="w-full px-6 py-3 text-left font-medium transition-colors flex items-center justify-between text-gray-300 hover:text-gray-100 hover:bg-[#1a1a1a]"
            >
              Account
              {expandedMenus.includes("Account") ? (
                <ChevronDown className="h-4 w-4" />
              ) : (
                <ChevronRight className="h-4 w-4" />
              )}
            </button>
            {expandedMenus.includes("Account") && (
              <div className="bg-[#0a0a0a]">
                <button className="w-full px-6 py-2 text-left text-sm text-gray-400 hover:text-gray-200 hover:bg-[#1a1a1a] transition-colors flex items-center gap-3">
                  <Settings className="h-4 w-4" />
                  Domain Settings
                </button>
                <button className="w-full px-6 py-2 text-left text-sm text-gray-400 hover:text-gray-200 hover:bg-[#1a1a1a] transition-colors flex items-center gap-3">
                  <User className="h-4 w-4" />
                  My Account
                </button>
                <button className="w-full px-6 py-2 text-left text-sm text-gray-400 hover:text-gray-200 hover:bg-[#1a1a1a] transition-colors flex items-center gap-3">
                  <Users className="h-4 w-4" />
                  Account Users
                </button>
                <button
                  onClick={handleLogout}
                  className="w-full px-6 py-2 text-left text-sm text-gray-400 hover:text-gray-200 hover:bg-[#1a1a1a] transition-colors flex items-center gap-3"
                >
                  <LogOut className="h-4 w-4" />
                  Logout
                </button>
              </div>
            )}
          </div>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 overflow-auto bg-gray-50">
        {/* Top Bar */}
        <div className="bg-white border-b border-gray-200 px-8 py-5">
          <div className="flex items-center gap-4">
            <div className="flex-1 flex items-center gap-4 max-w-2xl">
              <div className="relative flex-1">
                <Circle className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
                <Input
                  type="text"
                  placeholder="Website URL"
                  className="w-full h-11 bg-gray-50 border-gray-300 rounded-md pl-12 pr-4 text-gray-600"
                />
              </div>
              <Button className="bg-blue-500 hover:bg-blue-600 text-white px-6 h-11 rounded-md font-medium">
                Quick Audit
              </Button>
            </div>
            <div className="ml-auto flex items-center gap-2 text-gray-600 hover:text-gray-900 cursor-pointer">
              <span className="font-medium">Help</span>
              <HelpCircle className="h-5 w-5" />
            </div>
          </div>
        </div>

        {/* SEO Tools Section */}
        <div className="px-8 py-12 bg-gray-50">
          <div className="max-w-6xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">
                SEOptimer's Free SEO Tools
              </h1>
              <p className="text-gray-500 text-lg">
                SEOptimer provides a range of tools to help you improve your website. Try one of our free tools today.
              </p>
            </div>

            {/* Checkers Section */}
            <div className="mb-16">
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Checkers</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Image Alt Tag Checker */}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100 cursor-pointer">
                  <div className="w-16 h-16 bg-green-50 rounded-lg flex items-center justify-center mb-6">
                    <svg 
                      className="h-8 w-8 text-green-500" 
                      fill="none" 
                      stroke="currentColor" 
                      viewBox="0 0 24 24"
                      strokeWidth="2"
                    >
                      <rect x="3" y="3" width="18" height="18" rx="2" ry="2"/>
                      <circle cx="8.5" cy="8.5" r="1.5"/>
                      <polyline points="21 15 16 10 5 21"/>
                    </svg>
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Image Alt Tag Checker</h3>
                  <p className="text-gray-600 leading-relaxed">
                    Check if your website images have proper alt attributes. Alt tags are important for accessibility and SEO.
                  </p>
                </div>
              </div>
            </div>

            {/* Generators Section */}
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-8">Generators</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* Meta Tag Generator */}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                    <Eye className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Meta Tag Generator</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The meta tag generator will create description, keyword and other important meta tags for you with provided content.
                  </p>
                </div>

                {/* .htaccess Generator */}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                    <Wrench className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">.htaccess Generator</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Free .htaccess File Generator will take inputs to produce a .htaccess file you can upload to your website.
                  </p>
                </div>

                {/* Robots.txt Generator */}
                <div className="bg-white rounded-lg p-8 shadow-sm hover:shadow-md transition-shadow border border-gray-100">
                  <div className="w-16 h-16 bg-blue-50 rounded-lg flex items-center justify-center mb-6">
                    <FileCode className="h-8 w-8 text-blue-500" />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-4">Robots.txt Generator</h3>
                  <p className="text-gray-600 leading-relaxed">
                    The Free robots.txt file generator allows you to easily product a robots.txt file for your website based on inputs.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
