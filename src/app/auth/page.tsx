"use client";

import React, { useState } from "react";
import { signIn } from "next-auth/react";

export default function AuthPage() {
  const [email, setEmail] = useState("test@vault.local");
  const [password, setPassword] = useState("test1234");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleTestLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    const res = await signIn("credentials", {
      redirect: false,
      callbackUrl: "/vault",
      email,
      password,
    });
    setLoading(false);
    if (res?.error) {
      setError("Invalid test credentials");
    } else if (res?.url) {
      window.location.href = res.url;
    }
  };

  return (
    <div className="noise-bg min-h-screen flex flex-col items-center justify-center bg-bg px-4">
      <h1 className="font-display text-5xl md:text-6xl italic text-white mb-3">
        Vault
      </h1>
      <p className="font-mono text-sm font-light text-muted mb-6">
        Your second brain. Minimal.
      </p>

      <div className="flex flex-col sm:flex-row gap-3 w-full max-w-xs mb-6">
        <button
          type="button"
          onClick={() => signIn("google", { callbackUrl: "/vault" })}
          className="font-mono text-sm font-medium px-6 py-3 rounded-btn bg-surface border border-border hover:border-border-hover text-text transition-all duration-150"
        >
          Sign in with Google
        </button>
        <button
          type="button"
          onClick={() => signIn("github", { callbackUrl: "/vault" })}
          className="font-mono text-sm font-medium px-6 py-3 rounded-btn bg-surface border border-border hover:border-border-hover text-text transition-all duration-150"
        >
          Sign in with GitHub
        </button>
      </div>

      <form
        onSubmit={handleTestLogin}
        className="w-full max-w-xs bg-surface border border-border rounded-card p-4 space-y-3"
      >
        <p className="font-mono text-xs text-muted mb-1">
          Or use a normal login for testing.
        </p>
        <div className="space-y-2">
          <input
            type="email"
            autoComplete="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full px-3 py-2 rounded-btn bg-bg border border-border text-text font-mono text-sm focus:outline-none focus:border-accent"
            placeholder="Email"
          />
          <input
            type="password"
            autoComplete="current-password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full px-3 py-2 rounded-btn bg-bg border border-border text-text font-mono text-sm focus:outline-none focus:border-accent"
            placeholder="Password"
          />
        </div>
        {error && (
          <p className="font-mono text-xs text-red mt-1">
            {error}
          </p>
        )}
        <button
          type="submit"
          disabled={loading}
          className="w-full font-mono text-sm font-medium px-4 py-2 rounded-btn bg-text text-bg border border-border hover:bg-accent hover:text-black disabled:opacity-70 disabled:cursor-not-allowed transition-all duration-150"
        >
          {loading ? "Signing in…" : "Sign in with test account"}
        </button>
        <p className="font-mono text-[10px] text-muted mt-1">
          Default: <span className="underline">test@vault.local</span> /{" "}
          <span className="underline">test1234</span> (or override via{" "}
          <code className="px-1 rounded bg-bg border border-border">
            TEST_USER_EMAIL
          </code>{" "}
          and{" "}
          <code className="px-1 rounded bg-bg border border-border">
            TEST_USER_PASSWORD
          </code>
          ).
        </p>
      </form>
    </div>
  );
}
