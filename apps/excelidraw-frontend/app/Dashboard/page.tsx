"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HTTP_BACKEND } from "@/config";
import {
  Plus,
  Sparkles,
  Pencil,
  ArrowRight,
  FolderOpen,
  Users,
} from "lucide-react";

export default function Dashboard() {
  const [roomName, setRoomName] = useState("");
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleCreateRoom = async () => {
    if (!roomName.trim()) {
      return alert("Please enter a room name");
    }

    try {
      setLoading(true);

      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${HTTP_BACKEND}/room`,
        {
          name: roomName,
        },
        {
          headers: {
            Authorization: `${token}`,
          },
        }
      );

      const roomId = res.data.roomId;

      router.push(`/canvas/${roomId}`);
    } catch (err: any) {
      alert(err.response?.data?.message || "Error creating room");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-cyan-50 relative overflow-hidden">
      {/* Background Blur */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-400/20 blur-3xl rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-400/20 blur-3xl rounded-full" />

      {/* Navbar */}
      <nav className="relative z-10 flex items-center justify-between px-6 lg:px-12 py-6">
        <div className="flex items-center gap-3">
          <div className="w-11 h-11 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white shadow-lg">
            <Pencil size={20} />
          </div>

          <h1 className="text-2xl font-bold text-slate-900">
            DrawFlow
          </h1>
        </div>

        <button className="px-5 py-2 rounded-xl bg-white/70 backdrop-blur-lg border border-slate-200 text-slate-700 hover:bg-white transition-all duration-300 shadow-sm">
          Recent Projects
        </button>
      </nav>

      {/* Main Content */}
      <div className="relative z-10 flex items-center justify-center px-4 py-12">
        <div className="w-full max-w-6xl grid lg:grid-cols-2 gap-10 items-center">
          
          {/* Left Section */}
          <div>
            <div className="inline-flex items-center gap-2 bg-blue-100 text-blue-700 px-4 py-2 rounded-full mb-6">
              <Sparkles size={16} />
              Create collaborative workspaces
            </div>

            <h1 className="text-5xl lg:text-6xl font-bold text-slate-900 leading-tight">
              Start Drawing
              <span className="bg-gradient-to-r from-blue-600 to-cyan-500 bg-clip-text text-transparent">
                {" "}
                Ideas
              </span>
            </h1>

            <p className="text-slate-600 text-lg mt-6 max-w-xl leading-relaxed">
              Create real-time collaborative whiteboards, diagrams,
              and brainstorming spaces for your team.
            </p>

            {/* Features */}
            <div className="grid sm:grid-cols-2 gap-5 mt-10">
              <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-4">
                  <Users size={22} />
                </div>

                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  Team Collaboration
                </h3>

                <p className="text-slate-600 text-sm">
                  Work together live with teammates from anywhere.
                </p>
              </div>

              <div className="bg-white/70 backdrop-blur-xl border border-white/50 rounded-3xl p-5 shadow-lg hover:shadow-xl transition-all duration-300">
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center mb-4">
                  <FolderOpen size={22} />
                </div>

                <h3 className="font-semibold text-lg text-slate-900 mb-2">
                  Cloud Workspace
                </h3>

                <p className="text-slate-600 text-sm">
                  Save and access your projects anytime securely.
                </p>
              </div>
            </div>
          </div>

          {/* Right Section */}
          <div className="bg-white/70 backdrop-blur-2xl border border-white/50 rounded-[32px] p-8 lg:p-10 shadow-2xl">
            <div className="flex items-center gap-3 mb-8">
              <div className="w-14 h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white flex items-center justify-center shadow-lg">
                <Plus size={26} />
              </div>

              <div>
                <h2 className="text-3xl font-bold text-slate-900">
                  Create Room
                </h2>

                <p className="text-slate-500 mt-1">
                  Start a new collaborative workspace
                </p>
              </div>
            </div>

            {/* Input */}
            <div className="space-y-6">
              <div>
                <label className="block mb-3 text-sm font-medium text-slate-700">
                  Room Name
                </label>

                <input
                  type="text"
                  placeholder="Enter room name..."
                  value={roomName}
                  onChange={(e) => setRoomName(e.target.value)}
                  className="w-full h-14 px-5 rounded-2xl border border-slate-200 bg-white/80 text-slate-800 placeholder-slate-400 outline-none focus:ring-4 focus:ring-blue-100 focus:border-blue-500 transition-all duration-300"
                />
              </div>

              {/* Button */}
              <button
                onClick={handleCreateRoom}
                disabled={loading}
                className="w-full h-14 rounded-2xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold text-lg shadow-lg hover:scale-[1.02] hover:shadow-xl transition-all duration-300 disabled:opacity-50 flex items-center justify-center gap-2"
              >
                {loading ? (
                  "Creating Room..."
                ) : (
                  <>
                    Create Workspace
                    <ArrowRight size={18} />
                  </>
                )}
              </button>
            </div>

            {/* Bottom Info */}
            <div className="mt-8 p-5 rounded-2xl bg-slate-50 border border-slate-100">
              <p className="text-sm text-slate-600 leading-relaxed">
                Your rooms are securely stored and synced in real-time
                across devices and collaborators.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}