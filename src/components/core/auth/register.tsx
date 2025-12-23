"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useNavigate } from "react-router"

export function Register() {
    const [accountType, setAccountType] = useState<"brand" | "influencer">("brand")
    const [formData, setFormData] = useState({
        fullName: "",
        company: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const nagigate = useNavigate()
    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        console.log("Form submitted:", { accountType, ...formData })
    }

    return (
        <div className="w-full max-w-md mx-auto px-6">
            <div className="text-center mb-8">
                <h1 className="text-3xl font-bold mb-2 text-foreground">Create your account</h1>
                <p className="text-muted-foreground">Start your journey with us today</p>
            </div>

            {/* Account Type Toggle */}
            <div className="flex gap-2 mb-8 bg-secondary rounded-lg p-1">
                <button
                    onClick={() => setAccountType("brand")}
                    className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${accountType === "brand"
                            ? "bg-white text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                >
                    As a brand
                </button>
                <button
                    onClick={() => setAccountType("influencer")}
                    className={`flex-1 py-2.5 px-4 rounded-md text-sm font-medium transition-all ${accountType === "influencer"
                            ? "bg-white text-foreground shadow-sm"
                            : "text-muted-foreground hover:text-foreground"
                        }`}
                >
                    As an influencer
                </button>
            </div>

            {/* Form */}
            <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                    <Label htmlFor="fullName" className="text-sm font-medium text-muted-foreground">
                        Enter your full name
                    </Label>
                    <Input
                        id="fullName"
                        type="text"
                        placeholder="e.g John Doe Gabriel"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="h-11 bg-white"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="company" className="text-sm font-medium text-muted-foreground">
                        Company
                    </Label>
                    <Input
                        id="company"
                        type="text"
                        placeholder="Enter company name"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="h-11 bg-white"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="email" className="text-sm font-medium text-muted-foreground">
                        Work Email
                    </Label>
                    <Input
                        id="email"
                        type="email"
                        placeholder="youremail@example.com"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="h-11 bg-white"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="password" className="text-sm font-medium text-muted-foreground">
                        Password
                    </Label>
                    <Input
                        id="password"
                        type="password"
                        placeholder="Create strong password"
                        value={formData.password}
                        onChange={(e) => setFormData({ ...formData, password: e.target.value })}
                        className="h-11 bg-white"
                    />
                </div>

                <div className="space-y-2">
                    <Label htmlFor="confirmPassword" className="text-sm font-medium text-muted-foreground">
                        Confirm Password
                    </Label>
                    <Input
                        id="confirmPassword"
                        type="password"
                        placeholder="Confirm your password"
                        value={formData.confirmPassword}
                        onChange={(e) => setFormData({ ...formData, confirmPassword: e.target.value })}
                        className="h-11 bg-white"
                    />
                </div>

                <Button type="submit" className="w-full h-12 text-base font-medium bg-primary hover:bg-primary/90">
                    Create account
                </Button>
            </form>

            <p className="text-center mt-6 text-sm text-muted-foreground">
                Already have an account?{" "}
                <div onClick={() => nagigate("/login")} className="text-primary font-medium hover:underline">
                    Sign in.
                </div>
            </p>
        </div>
    )
}
