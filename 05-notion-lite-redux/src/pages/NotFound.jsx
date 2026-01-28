import React from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export function NotFound() {
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="prose mx-auto text-center">
      <h1>Page Not Found</h1>
      {user ? (
        <Link to="/home" className="text-green-500 underline">
          Go to the home page
        </Link>
      ) : (
        <Link to="/login" className="text-green-500 underline">
          Go to the login page
        </Link>
      )}
    </div>
  );
}
