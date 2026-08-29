import { useState } from "react";
import { Eye, EyeOff, LockKeyhole, Smartphone } from "lucide-react";

const VALID_MOBILE = "9998003879";

export default function Login({ onLogin }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");

  const submit = (e) => {
    e.preventDefault();
    setError("");

    if (username === VALID_MOBILE && password === VALID_MOBILE) {
      localStorage.setItem("tops_hrms_user", JSON.stringify({
        mobile: VALID_MOBILE,
        name: "HRMS Employee",
        role: "Employee"
      }));
      onLogin();
      return;
    }

    setError("Invalid username or password. Use 9998003879 for both.");
  };

  return (
    <main className="login-bg min-h-screen flex flex-col items-center justify-center px-4 py-8 text-white">
      <div className="w-full max-w-[760px] flex flex-col items-center">
        <div className="mb-8 text-center select-none">
          <div className="flex items-center justify-center gap-3">
            <div className="w-16 h-16 sm:w-20 sm:h-20 border-[5px] border-cyan-400 rotate-45 flex items-center justify-center">
              <span className="-rotate-45 text-3xl sm:text-4xl font-black text-cyan-400">T</span>
            </div>
            <div className="text-left">
              <div className="text-6xl sm:text-7xl font-serif tracking-tight text-cyan-400 leading-none">TOPS</div>
              <div className="text-xl sm:text-2xl font-bold text-cyan-400">Technologies</div>
            </div>
          </div>
          <p className="mt-2 text-xs sm:text-sm tracking-[.18em] text-cyan-300">
            TRAINING · OUTSOURCING · PLACEMENT SERVICES
          </p>
        </div>

        <form
          onSubmit={submit}
          className="login-card w-full max-w-[400px] rounded-lg bg-slate-100 p-7 sm:p-8 text-slate-700 glass-card"
        >
          <h1 className="mb-7 text-center text-3xl font-light text-cyan-500">Sign In</h1>

          <label className="relative block mb-4">
            <Smartphone size={18} className="absolute left-3 top-3.5 text-slate-400" />
            <input
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              className="w-full rounded bg-slate-200/80 px-10 py-3 text-sm outline-none ring-cyan-400 placeholder:text-slate-500 focus:ring-2"
              placeholder="Username / Mobile"
              inputMode="numeric"
              autoComplete="username"
              required
            />
          </label>

          <label className="relative block mb-4">
            <LockKeyhole size={18} className="absolute left-3 top-3.5 text-slate-400" />
            <input
              type={showPassword ? "text" : "password"}
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full rounded bg-slate-200/80 px-10 py-3 pr-11 text-sm outline-none ring-cyan-400 placeholder:text-slate-500 focus:ring-2"
              placeholder="Password"
              autoComplete="current-password"
              required
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-2 top-2 p-2 text-slate-500 hover:text-cyan-500"
              aria-label="Toggle password visibility"
            >
              {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
            </button>
          </label>

          {error && (
            <div className="mb-4 rounded bg-red-50 px-3 py-2 text-xs font-medium text-red-600">
              {error}
            </div>
          )}

          <button className="w-full rounded bg-cyan-500 py-3 text-sm font-bold tracking-wide text-white transition hover:bg-cyan-600 active:scale-[.99]">
            LOGIN
          </button>

          <p className="mt-5 text-center text-xs text-slate-500">
            Demo Login: <b>9998003879</b> / <b>9998003879</b>
          </p>
        </form>

        <p className="mt-5 text-sm text-slate-400">
          Copyright © 2022- 2026 TOPS Technologies
        </p>
      </div>
    </main>
  );
}
