import React from 'react'
import HeaderApp from '../Sample/HeaderApp'
import FooterApp from '../Sample/FooterApp'

export default function LoginApp() {
  return (

     <>
     <HeaderApp />

<div className="flex justify-center items-center min-h-screen">
  <div className="max-w-6xl w-full flex bg-white rounded-xl shadow-xl overflow-hidden min-h-[600px] border border-slate-100 mt-25 mb-5">
    

     <div className="max-w-6xl w-full flex bg-white rounded-xl shadow-xl overflow-hidden min-h-[600px] border border-slate-100">
  {/* Left Side: Visual/Branding */}
  <div className="hidden md:block w-1/2 relative overflow-hidden bg-primary-container">
    <img
      className="absolute inset-0 w-full h-full object-cover opacity-60 mix-blend-overlay"
      data-alt="Modern minimalist high-end retail interior with clean white surfaces, architectural lighting, and premium apparel on display in soft focus"
      src="https://lh3.googleusercontent.com/aida-public/AB6AXuCs-0PC-wVecABZFcxP4P5qcJnUn8MstOUtH6o0gAbn44R7VK0KNpoQ1_Zf5oqmwaaP1ukvtvfif0A0yr_WZ8jSIeUSyB3y4Ln0wHsX_i-MJ3faymD3IqlUWD5-fy4kvEK6xCSx-Tfuj_Y2ENedW6dSAlxVBXElRcse-jTBt1_9pj92WcftMeosFAuXZUnbYV8MVMqxIuJpLF5DEQwSk08kH3958CxcmHBIcALbBGoQTUcmNpcMY1eB4J9VqvpqDs5qxZ7fDaHlDu8"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-primary-container/90 via-primary-container/40 to-transparent p-12 flex flex-col justify-end">
      <h2 className="font-h2 text-h2 text-white mb-4">
        Elevate Your Lifestyle
      </h2>
      <p className="font-body-lg text-body-lg text-on-primary-container max-w-sm">
        Access exclusive collections and personalized recommendations by signing
        in to your LUXE account.
      </p>
    </div>
  </div>
  {/* Right Side: Login Form */}
  <div className="w-full md:w-1/2 p-8 md:p-16 flex flex-col justify-center">
    <div className="mb-10 text-center md:text-left">
      <h1 className="font-h1 text-h1 text-primary mb-2">Welcome Back</h1>
      <p className="font-body-md text-body-md text-on-surface-variant">
        Please enter your details to sign in.
      </p>
    </div>
    <form action="#" className="space-y-6" method="POST">
      {/* Email Field */}
      <div className="space-y-2">
        <label
          className="font-label-sm text-label-sm text-outline"
          htmlFor="email"
        >
          Email Address
        </label>
        <div className="relative">
          <input
            className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
            id="email"
            name="email"
            placeholder="name@example.com"
            required=""
            type="email"
          />
        </div>
      </div>
      {/* Password Field */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <label
            className="font-label-sm text-label-sm text-outline"
            htmlFor="password"
          >
            Password
          </label>
          <a
            className="font-label-sm text-label-sm text-secondary hover:underline"
            href="#"
          >
            Forgot Password?
          </a>
        </div>
        <div className="relative">
          <input
            className="w-full px-4 py-3 bg-surface-container-low border border-outline-variant rounded-lg font-body-md text-body-md focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all"
            id="password"
            name="password"
            placeholder="••••••••"
            required=""
            type="password"
          />
          <button
            className="absolute right-4 top-1/2 -translate-y-1/2 text-outline hover:text-primary"
            type="button"
          >
            <span
              className="material-symbols-outlined"
              style={{ fontSize: 20 }}
            >
              visibility
            </span>
          </button>
        </div>
      </div>
      {/* Remember Me */}
      <div className="flex items-center space-x-2">
        <input
          className="w-4 h-4 rounded border-outline-variant text-secondary focus:ring-secondary"
          id="remember"
          name="remember"
          type="checkbox"
        />
        <label
          className="font-label-sm text-label-sm text-on-surface-variant"
          htmlFor="remember"
        >
          Remember me for 30 days
        </label>
      </div>
      {/* Login Button */}
      <button
        className="w-full py-4 bg-secondary text-on-secondary font-button text-button rounded-lg hover:bg-on-secondary-fixed-variant transition-all shadow-lg shadow-secondary/10 active:scale-[0.98]"
        type="submit"
      >
        Sign In
      </button>
    </form>
    {/* Social Login Separator */}
    <div className="relative my-10">
      <div className="absolute inset-0 flex items-center">
        <div className="w-full border-t border-outline-variant" />
      </div>
      <div className="relative flex justify-center text-label-sm">
        <span className="px-4 bg-white text-outline font-label-sm">
          Or continue with
        </span>
      </div>
    </div>
    {/* Social Buttons */}
    <div className="grid grid-cols-2 gap-4">
      <button className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-lg font-label-sm text-on-surface hover:bg-surface-container-low transition-colors">
        <span className="material-symbols-outlined text-red-500">google</span>
        Google
      </button>
      <button className="flex items-center justify-center gap-2 py-3 border border-outline-variant rounded-lg font-label-sm text-on-surface hover:bg-surface-container-low transition-colors">
        <span className="material-symbols-outlined text-blue-600">
          social_leaderboard
        </span>
        Facebook
      </button>
    </div>
    {/* Create Account Link */}
    <p className="mt-10 text-center font-body-md text-body-md text-on-surface-variant">
      Don't have an account?
      <a className="text-secondary font-semibold hover:underline" href="#">
        Create Account
      </a>
    </p>
  </div>
</div>



  </div>
</div>



     <FooterApp />
     </>

  )
}
