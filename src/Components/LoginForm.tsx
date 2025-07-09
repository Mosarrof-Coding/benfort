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
  const [isLogin, setIsLogin] = useState(false); // Start with Sign Up page
  const [registeredUser, setRegisteredUser] = useState<{
    email: string;
    password: string;
  } | null>(null);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setLoading(true);

    setTimeout(() => {
      if (!isLogin) {
        // Signup logic
        if (!email || !password || !name) {
          setError("Please fill in all fields.");
        } else {
          // Save user in local state
          setRegisteredUser({ email, password });
          alert("Signup successful! Redirecting to login...");
          setIsLogin(true);
          setEmail("");
          setPassword("");
          setName("");
        }
      } else {
        // Login logic
        if (
          registeredUser &&
          email === registeredUser.email &&
          password === registeredUser.password
        ) {
          alert("Login successful!");
        } else {
          setError("Invalid email or password.");
        }
      }

      setLoading(false);
    }, 800); // Simulate delay
  };

  return (
    <div className="bg-card shadow-shadow shadow-xl p-4 lg:p-6 rounded w-full max-w-sm">
      <form onSubmit={handleSubmit}>
        <h2 className="mb-4 font-semibold text-2xl">
          {isLogin ? "Login" : "Sign Up"}
        </h2>

        {error && <p className="mb-2 text-destructive">{error}</p>}

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
          className="py-2 border hover:bg-border border-border rounded w-full transition cursor-pointer"
          disabled={loading}
        >
          {loading ? "Processing..." : isLogin ? "Login" : "Sign Up"}
        </button>

        <p className="mt-6 text-sm">
          {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
          <button
            type="button"
            onClick={() => {
              setIsLogin(!isLogin);
              setError("");
            }}
            className="text-destructive"
          >
            {isLogin ? "Create Account" : "Login"}
          </button>
        </p>

        {!isLogin && (
          <>
            <h3 className="my-4 text-xl">Or login with</h3>
            <div className="flex items-center gap-3">
              <span className="group inline-block p-1 border-2 hover:border-destructive border-border rounded-full cursor-pointer">
                <GithubIcon
                  className="group-hover:text-destructive"
                  size={20}
                />
              </span>
              <span className="group inline-block p-1 border-2 hover:border-destructive border-border rounded-full cursor-pointer">
                <Linkedin className="group-hover:text-destructive" size={20} />
              </span>
            </div>
          </>
        )}
      </form>
    </div>
  );
}
