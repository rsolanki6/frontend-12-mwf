import React, { useState } from "react";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import HeaderApp from "./HeaderApp";

export default function ContactApp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation
    if (!name || !email || !phone || !subject || !message) {
      toast.error("Please fill all fields!");
      return;
    }

    const newContact = {
      id: Date.now(),
      name,
      email,
      phone,
      subject,
      message,
    };

     // for send email set email js method 
     emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', form.current, {
        publicKey: 'YOUR_PUBLIC_KEY',
     })

    // Save to localStorage
    const existingContacts =
      JSON.parse(localStorage.getItem("contacts")) || [];

    existingContacts.push(newContact);

    localStorage.setItem(
      "contacts",
      JSON.stringify(existingContacts)
    );

    toast.success("Message sent successfully!");

    // Clear form
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");

    // Navigate after a short delay
    setTimeout(() => {
      navigate("/");
    }, 1500);
  };

  const handleReset = () => {
    setName("");
    setEmail("");
    setPhone("");
    setSubject("");
    setMessage("");
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

            <form className="space-y-4" onSubmit={handleSubmit}>
              {/* Name */}
              <div>
                <label className="block font-semibold mb-2">
                  Name
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter Name"
                  className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              {/* Email */}
              <div>
                <label className="block font-semibold mb-2">
                  Email
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter Email"
                  className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              {/* Phone */}
              <div>
                <label className="block font-semibold mb-2">
                  Phone
                </label>
                <input
                  type="tel"
                  value={phone}
                  onChange={(e) => setPhone(e.target.value)}
                  placeholder="Enter Phone Number"
                  className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-slate-900"
                />
              </div>

              {/* Subject */}
              <div>
                <label className="block font-semibold mb-2">
                  Subject
                </label>

                <select
                  value={subject}
                  onChange={(e) => setSubject(e.target.value)}
                  className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-slate-900"
                >
                  <option value="">Select Subject</option>
                  <option value="24x7 support">
                    24x7 Support
                  </option>
                  <option value="customer care contact">
                    Customer Care Contact
                  </option>
                  <option value="return products">
                    Return Products
                  </option>
                </select>
              </div>

              {/* Message */}
              <div>
                <label className="block font-semibold mb-2">
                  Message
                </label>

                <textarea
                  rows="5"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Enter Message..."
                  className="w-full border border-slate-300 rounded-xl p-4 focus:outline-none focus:ring-2 focus:ring-slate-900 resize-none"
                />
              </div>

              {/* Buttons */}
              <div className="flex gap-4">
                <button
                  type="submit"
                  className="flex-1 bg-slate-900 hover:bg-slate-800 text-white py-4 rounded-xl font-semibold text-lg transition duration-300"
                >
                  Send
                </button>

                <button
                  type="button"
                  onClick={handleReset}
                  className="flex-1 bg-red-600 hover:bg-red-500 text-white py-4 rounded-xl font-semibold text-lg transition duration-300"
                >
                  Reset
                </button>
              </div>
            </form>
          </div>

        </div>
      </main>
    </>
  );
}