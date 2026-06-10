import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import emailjs from "@emailjs/browser";
import HeaderApp from "./HeaderApp";
import { ToastContainer, toast } from "react-toastify";

export default function ContactApp() {
// create a desructured state for add task via form 
const [name, setName] = useState('')
const [email, setEmail] = useState('')
const [phone, setPhone] = useState('')
const [subject, setSubject] = useState('')
const [message, setMessage] = useState('')
const navigate=useNavigate();
//create a variables to stored sending email config
const YOUR_SERVICE_ID="service_djmzyuh";
const YOUR_TEMPLATE_ID="template_0p24c6e";
const YOUR_PUBLIC_KEY="JPe-bVJe1GBhHEeLw";

//create a function of form handeling to add all data in local storage
    const handleSubmit = (e) => {
        e.preventDefault();
        const newContact = {
            id: Date.now(),
            name: name, 
            email:email,
            phone:phone,
            subject:subject,
            message:message
        };
  
        // for send email set email js method 
        emailjs.sendForm(YOUR_SERVICE_ID, YOUR_TEMPLATE_ID, e.target, YOUR_PUBLIC_KEY)

        // Add the new task to local storage
        const existingTasks = JSON.parse(localStorage.getItem('contact')) || [];
        existingTasks.push(newContact);
        localStorage.setItem('contact', JSON.stringify(existingTasks));
        // Show success toast notification
        toast.success('Thanks for contacting us! We will get in touch with you soon.');
        navigate('/contact');
        // Clear the form
        setName('');
        setEmail('');
        setPhone('');
        setSubject('');
        setMessage('');
    };

  return (
    <>
      <HeaderApp />

      <main className="min-h-screen bg-white flex items-center justify-center py-10">
        <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 items-center gap-10 px-5">

          {/* Left Side */}
          <div className="hidden md:flex justify-center items-center">
            <div className="bg-white rounded-3xl shadow-2xl p-5 w-full max-w-lg">
              <img
                src="https://media.giphy.com/media/f3iwJFOVOwuy7K6FFw/giphy.gif"
                alt="Contact Us"
                className="w-full rounded-2xl"
              />

              <h3 className="text-2xl font-bold text-slate-900 mt-6 text-center">
                Contact Our Team
              </h3>

              <p className="text-slate-500 text-center mt-2">
                Have questions? We'd love to hear from you.
              </p>
            </div>
          </div>

          {/* Right Side Form */}
          <div className="bg-white rounded-3xl text-black shadow-2xl p-8">
            <ToastContainer />

            <h2 className="text-4xl font-bold text-black">
              Contact Us
            </h2>

            <p className="text-slate-500 mb-8">
              Fill out the form below and we'll get back to you soon.
            </p>

            <form onSubmit={handleSubmit} className="space-y-5">

              {/* Name */}
              <div>
                <label className="block mb-2 font-semibold">
                  Full Name
                </label>
                <input
                  type="text"
                  value={name}
                  name="name"
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              {/* Email & Phone */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <label className="block mb-2 font-semibold">
                    Email Address
                  </label>
                  <input
                    type="email"
                    value={email}
                    name="email"
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="Enter email"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>

                <div>
                  <label className="block mb-2 font-semibold">
                    Phone Number
                  </label>
                  <input
                    type="tel"
                    value={phone}
                    name="phone"
                    onChange={(e) => setPhone(e.target.value)}
                    placeholder="Enter phone number"
                    className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    required
                  />
                </div>
              </div>

              {/* Subject */}
              <div>
                <label className="block mb-2 font-semibold">
                  Subject
                </label>
                <select
                  value={subject}
                  name="subject"
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                >
                  <option value="">Select Subject</option>
                  <option value="24x7 Support">24x7 Support</option>
                  <option value="Customer Care Contact">Customer Care Contact</option>
                  <option value="Return Products">Return Products</option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block mb-2 font-semibold">
                  Message
                </label>
                <textarea
                  rows="5"
                  value={message}
                  name="message"
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Write your message..."
                  className="w-full border border-gray-300 rounded-xl px-4 py-3 resize-none focus:outline-none focus:ring-2 focus:ring-teal-500"
                  required
                />
              </div>

              {/* Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-slate-700 hover:bg-slate-600 text-white py-3 rounded-xl font-semibold transition"
                >
                  Send Message
                </button>

                <button
                  type="button"
                  // onClick={handleReset}
                  className="flex-1 bg-red-500 hover:bg-red-600 text-white py-3 rounded-xl font-semibold transition"
                >
                  Reset Form
                </button>
              </div>

            </form>
          </div>

        </div>
      </main>
    </>
  );
}