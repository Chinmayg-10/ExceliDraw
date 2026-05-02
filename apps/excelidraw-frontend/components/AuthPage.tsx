"use client";
import { HTTP_BACKEND } from "@/config";
import axios from "axios";
import { useState } from "react";
import { useRouter } from "next/navigation";
export function Authpage({ Issignin }: { Issignin: boolean }) {
    const router = useRouter();
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [name, setName] = useState(""); // for signup
    const [loading, setLoading] = useState(false);
    const handleAuth = async () => {
        try{
            setLoading(true);
            if(Issignin){
                const res=await axios.post(`${HTTP_BACKEND}/signin`,{
                    email,
                    password
                });
                const token = res.data.token;
                if(token){
                    localStorage.setItem("token", token);
                    alert("Signin successful");
                    
                }
            }
            else{
                const res=await axios.post(`${HTTP_BACKEND}/signup`,{
                    email,
                    password,
                    name
                });
                if(res.data.userId){
                    alert("Signup successful, please signin now");
                    router.push("/signin");
                }
            }
        }
        catch{
            alert("Error in authentication");
        }
    }
  return (
    <div className="w-screen h-screen flex items-center justify-center">
      
      <div className="w-[350px] backdrop-blur-lg bg-black/10 border border-black/20 rounded-2xl shadow-xl p-6">
        
        {/* Title */}
        <h1 className="text-2xl font-semibold text-black text-center mb-6">
          {Issignin ? "Welcome Back 👋" : "Create Account 🚀"}
        </h1>

        {/* Inputs */}
        <div className="flex flex-col gap-4">
          
          <input
            type="email"
            placeholder="Email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="px-4 py-2 rounded-lg bg-black/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white"
          />

          <input
            type="password"
            placeholder="Password"
            required
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="px-4 py-2 rounded-lg bg-black/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white"
          />
          {!Issignin && (
            <input
                type="text"
                placeholder="Name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
                className="px-4 py-2 rounded-lg bg-black/20 text-white placeholder-gray-200 outline-none focus:ring-2 focus:ring-white"
            />
        )}

          {/* Button */}
          <button
            className="mt-2 bg-white text-purple-600 font-semibold py-2 rounded-lg hover:bg-gray-100 transition duration-200"
            onClick={() => {
              handleAuth();
            }}
          >
            {Issignin ? "Sign In" : "Sign Up"}
          </button>
        </div>

        {/* Footer */}
        <p className="text-sm text-black-200 text-center mt-4">
          {Issignin ? "Don't have an account?" : "Already have an account?"}
          <span className="ml-1 underline cursor-pointer hover:text-white">
            {Issignin ? "Sign Up" : "Sign In"}
          </span>
        </p>

      </div>
    </div>
  );
}