import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export function Home() {
  const user = useSelector((state) => state.auth.user);
  const navigate = useNavigate();

  useEffect(() => {
    if (!user) {
      navigate("/login");
    }
  }, [user, navigate]);

  // Чтобы не мигало и не рисовало "User" на секунду
  if (!user) return null;

  let createdAtText = "Unknown date";
  if (user.createdAt) {
    const d = new Date(user.createdAt);
    createdAtText = Number.isNaN(d.getTime())
      ? "Unknown date"
      : d.toLocaleString();
  }

  return (
    <div className="prose mx-auto flex flex-col items-center gap-6 text-center bg-white p-6">
      <h1 className="text-3xl font-bold text-gray-700">Profile</h1>

      <div className="flex flex-col items-center gap-4">
        <p className="text-lg text-gray-700">
          Welcome, <span className="font-semibold">{user.email}</span>!
        </p>

        <p className="text-sm text-gray-500">
          Your account was created on:{" "}
          <span className="font-medium">{createdAtText}</span>
        </p>
      </div>

      <Link
        to="/notes"
        className="bg-green-500 text-white px-4 py-2 hover:bg-green-600 underline"
      >
        To Notes
      </Link>
    </div>
  );
}
