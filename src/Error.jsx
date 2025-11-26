import React from "react";
import ErrorImg from "/src/assets/error.png";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";

function ErrorPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-purple-50 to-indigo-100 p-6 relative overflow-hidden">
      <div className="absolute top-1/4 left-1/4 w-72 h-72 bg-purple-200 rounded-full"></div>
      <div className="absolute bottom-1/4 right-1/4 w-72 h-72 bg-indigo-200 rounded-full "></div>

      <div className="relative z-10 text-center w-full max-w-4xl bg-white bg-opacity-90 backdrop-blur-sm p-12 rounded-3xl shadow-3xl border border-gray-100 transform transition-all duration-300 hover:scale-[1.01]">
        <div className="flex justify-center mb-6">
          <img
            src={ErrorImg}
            alt="Error Illustration"
            className="w-full max-w-sm object-contain"
          />
        </div>

        <h1 className="text-8xl font-extrabold text-[#9450FF] mb-4 drop-shadow-md">
          404
        </h1>

        <h2 className="text-5xl font-bold text-gray-800 mb-4 tracking-tight leading-tight">
          Page Not Found
        </h2>

        <p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto leading-relaxed">
          Oops! It seems you've entered the wrong URL. The page you're looking
          for might be lost in space, or perhaps it never existed.
        </p>

        <Link to="/">
          <Button
            className="px-10 py-4 text-xl font-bold rounded-full shadow-lg hover:shadow-xl transition duration-300 ease-in-out transform hover:-translate-y-1 hover:scale-105"
            style={{ backgroundColor: "#9450FF", color: "white" }}
          >
            <ArrowLeft className="h-6 w-6 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </div>
  );
}

export default ErrorPage;
