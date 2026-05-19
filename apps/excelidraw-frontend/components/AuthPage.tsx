"use client";

import { HTTP_BACKEND } from "@/config";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { Pencil, Sparkles, ArrowRight } from "lucide-react";

export function Authpage({ Issignin }: { Issignin: boolean }) {
  const router = useRouter();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [loading, setLoading] = useState(false);

  const handleAuth = async () => {
    try {
      setLoading(true);

      if (Issignin) {
        const res = await axios.post(`${HTTP_BACKEND}/signin`, {
          email,
          password,
        });

        const token = res.data.token;

        if (token) {
          localStorage.setItem("token", token);
          router.push("/Dashboard");
        }
      } else {
        const res = await axios.post(`${HTTP_BACKEND}/signup`, {
          email,
          password,
          name,
        });
        console.log(res.data);
        if (res.data.userId) {
          router.push("/signin");
        }
      }
    } catch {
      alert("Authentication Failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full flex items-center justify-center bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 px-4 overflow-hidden relative">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/20 blur-3xl rounded-full" />

      {/* Main Container */}
      <div className="relative z-10 w-full max-w-6xl grid lg:grid-cols-2 bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl shadow-2xl overflow-hidden">
        {/* Left Side */}
        <div className="hidden lg:flex flex-col justify-center p-16 bg-gradient-to-br from-blue-600 to-cyan-500 text-white relative overflow-hidden">
          <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_top_left,_white,_transparent_40%)]" />

          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center backdrop-blur-md">
                <Pencil size={24} />
              </div>
              <h1 className="text-3xl font-bold">DrawFlow</h1>
            </div>

            <div className="inline-flex items-center gap-2 bg-white/15 px-4 py-2 rounded-full mb-6 backdrop-blur-md border border-white/20">
              <Sparkles size={16} />
              <span className="text-sm">Real-time collaboration platform</span>
            </div>

            <h2 className="text-5xl font-bold leading-tight mb-6">
              Draw, Collaborate & Share Ideas Instantly
            </h2>

            <p className="text-lg text-blue-100 leading-relaxed max-w-lg">
              Create stunning diagrams, whiteboards, and collaborative
              workflows with your team in real-time.
            </p>

            {/* Feature Cards */}
            <div className="grid grid-cols-2 gap-4 mt-10">
              <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md">
                <h3 className="font-semibold mb-2">Real-time Sync</h3>
                <p className="text-sm text-blue-100">
                  Collaborate seamlessly with your team.
                </p>
              </div>

              <div className="bg-white/10 border border-white/20 rounded-2xl p-5 backdrop-blur-md">
                <h3 className="font-semibold mb-2">Cloud Storage</h3>
                <p className="text-sm text-blue-100">
                  Access your work from anywhere.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="flex items-center justify-center p-8 lg:p-14">
          <div className="w-full max-w-md">
            {/* Mobile Logo */}
            <div className="lg:hidden flex items-center justify-center gap-2 mb-10">
              <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white">
                <Pencil size={18} />
              </div>
              <h1 className="text-2xl font-bold text-slate-800">
                DrawFlow
              </h1>
            </div>

            <div className="mb-8">
              <h2 className="text-4xl font-bold text-slate-900 mb-3">
                {Issignin ? "Welcome Back" : "Create Account"}
              </h2>

              <p className="text-slate-500 text-lg">
                {Issignin
                  ? "Sign in to continue collaborating"
                  : "Start building and sharing ideas today"}
              </p>
            </div>

            {/* Form */}
            <div className="space-y-5">
              {!Issignin && (
                <div>
                  <label className="text-sm font-medium text-slate-700 mb-2 block">
                    Full Name
                  </label>
                  <input
                    type="text"
                    placeholder="Enter your name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300"
                  />
                </div>
              )}

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Email Address
                </label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-sm font-medium text-slate-700 mb-2 block">
                  Password
                </label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-white/80 focus:outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              <button
                onClick={handleAuth}
                disabled={loading}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2"
              >
                {loading ? (
                  "Please wait..."
                ) : (
                  <>
                    {Issignin ? "Sign In" : "Create Account"}
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>

            {/* Footer */}
            <div className="mt-8 text-center text-slate-600">
              {Issignin
                ? "Don't have an account?"
                : "Already have an account?"}

              <Link
                href={Issignin ? "/signup" : "/signin"}
                className="ml-2 font-semibold text-blue-600 hover:text-cyan-500 transition-colors"
              >
                {Issignin ? "Sign Up" : "Sign In"}
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

