"use client";

import { GithubIcon, Linkedin } from "lucide-react";
import Link from "next/link";
import { useState } from "react";

export default function LoginForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [isLogin, setIsLogin] = useState(true);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    console.log("Form submitted");
    console.log("Email:", email);
    console.log("Password:", password);
    if (!isLogin) console.log("Name:", name);

    try {
      const endpoint = isLogin ? "/api/login" : "/api/signup";
      const body = isLogin ? { email, password } : { name, email, password };

      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(body),
      });

      const data = await res.json();
      console.log("API response:", data);

      if (!res.ok) throw new Error(data.message || "Something went wrong");

      alert(`${isLogin ? "Login" : "Signup"} successful!`);
    } catch (err) {
      if (err instanceof Error) {
        console.error("Error:", err.message);
        setError(err.message);
      } else {
        setError("An unknown error occurred");
      }
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-card shadow-md p-6 rounded w-full max-w-sm"
    >
      <h2 className="mb-4 font-semibold text-2xl">
        {isLogin ? "Login" : "Sign Up"}
      </h2>

      {error && <p className="mb-2 text-red-500">{error}</p>}

      {!isLogin && (
        <div className="mb-4">
          <label className="block">Name</label>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            className="mt-1 px-3 py-2 border border-border rounded w-full"
          />
        </div>
      )}

      <div className="mb-4">
        <label className="block">Email</label>
        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="mt-1 px-3 py-2 border border-border rounded w-full"
        />
      </div>

      <div className="mb-4">
        <label className="block">Password</label>
        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          className="mt-1 px-3 py-2 border border-border rounded w-full"
        />
      </div>

      <Link href="#" className="inline-block my-1 font-thin text-end">
        Forgot Password?
      </Link>

      <button
        type="submit"
        className="py-2 border border-border rounded w-full transition"
        disabled={loading}
      >
        {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
      </button>

      <p className="mt-6 text-sm">
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <button
          type="button"
          onClick={() => setIsLogin(!isLogin)}
          className="text-destructive"
        >
          {isLogin ? "Create Account" : "Login"}
        </button>
      </p>
      {isLogin && (
        <>
          <h3 className="my-4 text-xl">Or login with</h3>
          <div className="flex items-center gap-3">
            <span className="group inline-block p-1 border-2 border-gray-400 hover:border-destructive rounded-full cursor-pointer">
              <GithubIcon
                className="text-gray-400 group-hover:text-destructive"
                size={20}
              />
            </span>
            <span className="group inline-block p-1 border-2 border-gray-400 hover:border-destructive rounded-full cursor-pointer">
              <Linkedin
                className="text-gray-400 group-hover:text-destructive"
                size={20}
              />
            </span>
          </div>
        </>
      )}
    </form>
  );
}
