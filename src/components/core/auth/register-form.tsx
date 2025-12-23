"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate } from "react-router";

export function RegisterForm() {
  const [accountType, setAccountType] = useState<"brand" | "influencer">(
    "brand"
  );
  const [formData, setFormData] = useState({
    fullName: "",
    company: "",
    email: "",
    password: "",
    confirmPassword: "",
  });
  const nagigate = useNavigate();
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", { accountType, ...formData });
  };

  return (
    <div className="w-full max-w-md mx-auto">
      <div className="text-center mb-8">
        <h1 className="text-[32px] font-bold mb-2 text-blck">
          Create your account
        </h1>
        <p className="text-base text-[#5D6A6B]">
          Start your journey with us today
        </p>
      </div>

      {/* Account Type Toggle */}
      <div className="flex gap-2 mb-8 bg-secondary border rounded-lg p-0.5">
        <button
          onClick={() => setAccountType("brand")}
          className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
            accountType === "brand"
              ? "bg-white text-foreground border border-[#E2E8F0]"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          As a brand
        </button>
        <button
          onClick={() => setAccountType("influencer")}
          className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${
            accountType === "influencer"
              ? "bg-white text-foreground border border-[#E2E8F0]"
              : "text-muted-foreground hover:text-foreground"
          }`}
        >
          As an influencer
        </button>
      </div>

      {/* Form */}
      <form onSubmit={handleSubmit} className="space-y-5">
        <div className="space-y-2">
          <Label
            htmlFor="fullName"
            className="text-sm font-bold text-[#8E8E8E]"
          >
            Enter your full name
          </Label>
          <Input
            id="fullName"
            type="text"
            placeholder="e.g John Doe Gabriel"
            value={formData.fullName}
            onChange={(e) =>
              setFormData({ ...formData, fullName: e.target.value })
            }
            className="h-11 bg-white rounded-[6px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="company" className="text-sm font-bold text-[#8E8E8E]">
            Company
          </Label>
          <Input
            id="company"
            type="text"
            placeholder="Enter company name"
            value={formData.company}
            onChange={(e) =>
              setFormData({ ...formData, company: e.target.value })
            }
            className="h-11 bg-white rounded-[6px]"
          />
        </div>

        <div className="space-y-2">
          <Label htmlFor="email" className="text-sm font-bold text-[#8E8E8E]">
            Work Email
          </Label>
          <Input
            id="email"
            type="email"
            placeholder="youremail@example.com"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="h-11 bg-white rounded-[6px]"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="password"
            className="text-sm font-bold text-[#8E8E8E]"
          >
            Password
          </Label>
          <Input
            id="password"
            type="password"
            placeholder="Create strong password"
            value={formData.password}
            onChange={(e) =>
              setFormData({ ...formData, password: e.target.value })
            }
            className="h-11 bg-white rounded-[6px]"
          />
        </div>

        <div className="space-y-2">
          <Label
            htmlFor="confirmPassword"
            className="text-sm font-bold text-[#8E8E8E]"
          >
            Confirm Password
          </Label>
          <Input
            id="confirmPassword"
            type="password"
            placeholder="Confirm your password"
            value={formData.confirmPassword}
            onChange={(e) =>
              setFormData({ ...formData, confirmPassword: e.target.value })
            }
            className="h-11 bg-white rounded-[6px]"
          />
        </div>

        <Button
          type="submit"
          className="mt-12 rounded-[6px] w-full h-12 text-base font-medium bg-[#2563EB] hover:bg-[#2563EB]/90"
        >
          Create account
        </Button>
      </form>

      <p className="text-center mt-6 text-sm text-muted-foreground">
        Already have an account?{" "}
        <span
          onClick={() => nagigate("/login")}
          className="text-[#8B5CF6] font-medium cursor-pointer hover:underline"
        >
          Sign in.
        </span>
      </p>
    </div>
  );
}
