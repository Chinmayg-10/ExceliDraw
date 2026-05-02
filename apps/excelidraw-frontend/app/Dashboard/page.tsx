"use client";

import { useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { HTTP_BACKEND } from "@/config";

export default function Dashboard() {
  const [roomName, setRoomName] = useState("");
  const router = useRouter();

  const handleCreateRoom = async () => {
    try {
      const token = localStorage.getItem("token");

      const res = await axios.post(
        `${HTTP_BACKEND}/room`,
        {
          name: roomName
        },
        {
          headers: {
            Authorization: `${token}`
          }
        }
      );

      const roomId = res.data.roomId;

      // ✅ redirect to room
      router.push(`/canvas/${roomId}`);

    } catch (err: any) {
      alert(err.response?.data?.message || "Error creating room");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen gap-4">
      <input
        type="text"
        placeholder="Enter room name"
        value={roomName}
        onChange={(e) => setRoomName(e.target.value)}
        className="px-4 py-2 border rounded"
      />

      <button
        onClick={handleCreateRoom}
        className="px-4 py-2 bg-blue-500 text-white rounded"
      >
        Create Room
      </button>
    </div>
  );
}