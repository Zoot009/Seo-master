"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";

export default function LoginPage() {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    rememberMe: false,
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login submitted:", formData);
    // TODO: Connect to backend API
  };

  return (
    <div className="min-h-screen flex">
      {/* Left Side - Form */}
      <div className="w-full lg:w-1/2 bg-white flex flex-col">
        {/* Logo at top */}
        <div className="px-8 pt-8 pb-4">
          <Link href="/" className="flex items-center">
            <span className="text-2xl font-bold">SEOmaster</span>
          </Link>
        </div>
        
        {/* Form centered */}
        <div className="flex-1 flex items-center justify-center px-8 pb-8">
          <div className="w-full max-w-md">
            {/* Heading */}
            <h1 className="text-3xl font-bold text-foreground mb-8">Login</h1>

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-5">
            {/* Email */}
            <div>
              <Input
                type="email"
                placeholder="Email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="h-12 bg-[#F8F9FA] border-gray-300 text-base"
                required
              />
            </div>

            {/* Password */}
            <div>
              <Input
                type="password"
                placeholder="Password"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                className="h-12 bg-[#F8F9FA] border-gray-300 text-base"
                required
              />
            </div>

            {/* Remember Me & Forgot Password */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="rememberMe"
                  checked={formData.rememberMe}
                  onChange={(e) =>
                    setFormData({ ...formData, rememberMe: e.target.checked })
                  }
                  className="h-4 w-4 rounded border-gray-300"
                />
                <label htmlFor="rememberMe" className="text-sm text-gray-600">
                  Remember me
                </label>
              </div>
              <Link href="/forgot-password" className="text-sm text-[#0D6EFD] hover:underline">
                Forgot Password?
              </Link>
            </div>

            {/* Submit Button */}
            <Button
              type="submit"
              className="w-full h-12 bg-[#FDB022] hover:bg-[#F5A623] text-white font-semibold text-lg rounded-md mt-6"
            >
              Login
            </Button>

            {/* Sign Up Link */}
            <div className="text-center pt-4">
              <span className="text-gray-500">Don't have an account? </span>
              <Link href="/register" className="text-[#0D6EFD] hover:underline font-medium">
                Sign Up
              </Link>
            </div>
          </form>

          {/* Divider */}
          <div className="relative my-8">
            <div className="absolute inset-0 flex items-center">
              <div className="w-full border-t border-gray-300"></div>
            </div>
            <div className="relative flex justify-center text-sm">
              <span className="px-4 bg-white text-gray-500">Or continue with</span>
            </div>
          </div>

          {/* Social Login Buttons */}
          <div className="grid grid-cols-2 gap-4">
            <Button
              type="button"
              variant="outline"
              className="h-12 border-2 border-gray-300 hover:bg-gray-50"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M19.6 10.227c0-.709-.064-1.39-.182-2.045H10v3.868h5.382a4.6 4.6 0 01-1.996 3.018v2.51h3.232c1.891-1.742 2.982-4.305 2.982-7.35z" fill="#4285F4"/>
                <path d="M10 20c2.7 0 4.964-.895 6.618-2.423l-3.232-2.509c-.895.6-2.04.955-3.386.955-2.605 0-4.81-1.76-5.595-4.123H1.064v2.59A9.996 9.996 0 0010 20z" fill="#34A853"/>
                <path d="M4.405 11.9c-.2-.6-.314-1.24-.314-1.9 0-.66.114-1.3.314-1.9V5.51H1.064A9.996 9.996 0 000 10c0 1.614.386 3.14 1.064 4.49l3.34-2.59z" fill="#FBBC05"/>
                <path d="M10 3.977c1.468 0 2.786.505 3.823 1.496l2.868-2.868C14.959.99 12.695 0 10 0 6.09 0 2.71 2.24 1.064 5.51l3.34 2.59C5.19 5.736 7.395 3.977 10 3.977z" fill="#EA4335"/>
              </svg>
              Google
            </Button>
            <Button
              type="button"
              variant="outline"
              className="h-12 border-2 border-gray-300 hover:bg-gray-50"
            >
              <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="mr-2">
                <path d="M20 10c0-5.523-4.477-10-10-10S0 4.477 0 10c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V10h2.54V7.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V10h2.773l-.443 2.89h-2.33v6.988C16.343 19.128 20 14.991 20 10z" fill="#1877F2"/>
              </svg>
              Facebook
            </Button>
          </div>
        </div>
        </div>
      </div>

      {/* Right Side - Image/Info */}
      <div className="hidden lg:flex lg:w-1/2 bg-[#0D6EFD] items-center justify-center p-12 relative overflow-hidden">
        <div className="text-center z-10">
          <div className="bg-white rounded-lg shadow-2xl p-8 max-w-md mx-auto mb-8">
            <div className="space-y-4">
              {/* Mock recommendation items */}
              <div className="flex items-center justify-between border-b pb-3">
                <span className="text-sm font-medium">Include a meta description tag</span>
                <span className="text-xs text-white bg-red-500 px-2 py-1 rounded">High Priority</span>
              </div>
              <div className="flex items-center justify-between border-b pb-3">
                <span className="text-sm font-medium">Optimize for Core Web Vitals</span>
                <span className="text-xs text-white bg-orange-500 px-2 py-1 rounded">Medium Priority</span>
              </div>
              <div className="flex items-center justify-between border-b pb-3">
                <span className="text-sm font-medium">Noindex Tag Test</span>
                <span className="text-xs text-white bg-yellow-500 px-2 py-1 rounded">Low Priority</span>
              </div>
              
              {/* Performance Score */}
              <div className="mt-8 flex items-center justify-center">
                <div className="relative w-32 h-32">
                  <svg className="transform -rotate-90 w-32 h-32">
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#E5E7EB"
                      strokeWidth="8"
                      fill="none"
                    />
                    <circle
                      cx="64"
                      cy="64"
                      r="56"
                      stroke="#0D6EFD"
                      strokeWidth="8"
                      fill="none"
                      strokeDasharray={`${2 * Math.PI * 56 * 0.38} ${2 * Math.PI * 56}`}
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                    <span className="text-3xl font-bold text-[#0D6EFD]">B-</span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <h2 className="text-4xl font-bold text-white mb-4">
            SEO Audit & Reporting Tool
          </h2>
          <p className="text-xl text-white/90">
            + Comprehensive SEO Toolset
          </p>
        </div>

        {/* Decorative Elements */}
        <div className="absolute top-10 right-10 w-64 h-64 bg-white/10 rounded-lg transform rotate-12"></div>
        <div className="absolute bottom-10 left-10 w-48 h-48 bg-white/10 rounded-lg transform -rotate-12"></div>
      </div>
    </div>
  );
}
