"use client";

import { useEffect, useRef, useState } from "react";
import {
  Circle,
  Pencil,
  RectangleHorizontal,
  Users,
  Share2,
  ZoomIn,
  ZoomOut,
} from "lucide-react";

import { Game } from "@/draw/Game";

export type Tool = "circle" | "rect" | "pencil";

export function Canvas({
  roomId,
  socket,
}: {
  socket: WebSocket;
  roomId: string;
}) {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  const [game, setGame] = useState<Game>();
  const [selectedTool, setSelectedTool] =
    useState<Tool>("pencil");

  // Initialize Game
  useEffect(() => {
    if (!canvasRef.current) return;

    const canvas = canvasRef.current;

    // Responsive Canvas
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    resizeCanvas();

    window.addEventListener("resize", resizeCanvas);

    const g = new Game(canvas, roomId, socket);

    setGame(g);

    return () => {
      g.destroy();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [roomId, socket]);

  // Change Drawing Tool
  useEffect(() => {
    game?.setTool(selectedTool);
  }, [selectedTool, game]);

  return (
    <div className="w-screen h-screen overflow-hidden bg-[#0B1120] relative">
      {/* Grid Background */}
      <div
        className="absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "linear-gradient(to right, white 1px, transparent 1px), linear-gradient(to bottom, white 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-blue-500/20 blur-[120px] rounded-full" />
      <div className="absolute bottom-0 right-0 w-[500px] h-[500px] bg-cyan-500/20 blur-[120px] rounded-full" />

      {/* Header */}
      <div className="absolute top-5 left-5 right-5 z-50 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl shadow-2xl">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 flex items-center justify-center text-white font-bold text-lg">
            D
          </div>

          <div>
            <h1 className="text-white font-semibold text-lg">
              DrawFlow
            </h1>

            <p className="text-xs text-gray-400">
              Real-time Collaboration
            </p>
          </div>
        </div>

        {/* Room Info */}
        <div className="hidden md:flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 px-5 py-3 rounded-2xl shadow-2xl">
          <Users size={18} className="text-cyan-400" />

          <span className="text-white text-sm">
            Room:
            <span className="ml-2 text-cyan-400 font-medium">
              {roomId}
            </span>
          </span>
        </div>

        {/* Actions */}
        <div className="flex items-center gap-3">
          <button className="bg-white/10 hover:bg-white/20 transition-all duration-300 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl text-white shadow-xl">
            <Share2 size={18} />
          </button>

          <button className="bg-gradient-to-r from-blue-600 to-cyan-500 px-5 py-3 rounded-2xl text-white font-medium shadow-xl hover:scale-105 transition-all duration-300">
            Invite Team
          </button>
        </div>
      </div>

      {/* Floating Toolbar */}
      <Topbar
        selectedTool={selectedTool}
        setSelectedTool={setSelectedTool}
      />

      {/* Bottom Controls */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-50">
        <div className="flex items-center gap-3 bg-white/10 backdrop-blur-xl border border-white/10 px-4 py-3 rounded-2xl shadow-2xl">
          <button className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white">
            <ZoomOut size={18} />
          </button>

          <div className="text-white text-sm px-2">
            100%
          </div>

          <button className="w-11 h-11 rounded-xl bg-white/10 hover:bg-white/20 transition-all duration-300 flex items-center justify-center text-white">
            <ZoomIn size={18} />
          </button>
        </div>
      </div>

      {/* Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0"
      />
    </div>
  );
}

/* ========================= */
/* Toolbar */
/* ========================= */

function Topbar({
  selectedTool,
  setSelectedTool,
}: {
  selectedTool: Tool;
  setSelectedTool: (s: Tool) => void;
}) {
  return (
    <div className="absolute top-6 left-1/2 -translate-x-1/2 z-50">
      <div className="flex items-center gap-3 bg-white/10 backdrop-blur-2xl border border-white/10 px-4 py-3 rounded-3xl shadow-2xl">
        
        {/* Pencil */}
        <ToolButton
          active={selectedTool === "pencil"}
          onClick={() => setSelectedTool("pencil")}
          icon={<Pencil size={20} />}
        />

        {/* Rectangle */}
        <ToolButton
          active={selectedTool === "rect"}
          onClick={() => setSelectedTool("rect")}
          icon={<RectangleHorizontal size={20} />}
        />

        {/* Circle */}
        <ToolButton
          active={selectedTool === "circle"}
          onClick={() => setSelectedTool("circle")}
          icon={<Circle size={20} />}
        />
      </div>
    </div>
  );
}

/* ========================= */
/* Reusable Tool Button */
/* ========================= */

function ToolButton({
  active,
  onClick,
  icon,
}: {
  active: boolean;
  onClick: () => void;
  icon: React.ReactNode;
}) {
  return (
    <button
      onClick={onClick}
      className={`
        w-12 h-12 rounded-2xl
        flex items-center justify-center
        transition-all duration-300
        ${
          active
            ? "bg-gradient-to-r from-blue-600 to-cyan-500 text-white shadow-lg scale-105"
            : "bg-white/10 text-gray-300 hover:bg-white/20 hover:text-white"
        }
      `}
    >
      {icon}
    </button>
  );
}