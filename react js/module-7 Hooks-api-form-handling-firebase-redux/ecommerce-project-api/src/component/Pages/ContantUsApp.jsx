import React, { useRef } from 'react'
import HeaderApp from '../Sample/HeaderApp'
import FooterApp from '../Sample/FooterApp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

export default function ContantUsApp() {

  // store data using useRef
  const name = useRef("")
  const email = useRef("")
  const subject = useRef("")
  const message = useRef("")

  const navigate = useNavigate()

  // submit form
  const contactus = (e) => {
    e.preventDefault()

    const insertData = {
      name: name.current.value,
      email: email.current.value,
      subject: subject.current.value,
      message: message.current.value
    }

    // API call
    axios.post("http://localhost:8000/contacts", insertData).then(() => {
        // pass the toast message
        toast.success("Your message has been sent successfully!", {
          position: "top-right"
        })

        // redirect
        navigate('/contact')

      })

  }

  return (

    <>
      <HeaderApp />

      <main className="pt-32 pb-xl">

        {/* Hero Section */}
        <section className="max-w-[1280px] mx-auto px-6 mb-xl">
          <div className="max-w-2xl">
            <h1 className="font-h1 text-h1 text-primary mb-sm">
              Get in Touch
            </h1>

            <p className="font-body-lg text-body-lg text-on-surface-variant">
              We're here to help you elevate your lifestyle.
            </p>
          </div>
        </section>

        {/* Contact Section */}
        <section className="max-w-[1280px] mx-auto px-6">

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

            {/* Form */}
            <div className="lg:col-span-7 bg-white p-6 rounded-2xl shadow">

              <ToastContainer />

              <form onSubmit={contactus} className="space-y-5">

                <div className="grid grid-cols-1 md:grid-cols-2 gap-5">

                  {/* Name */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Full Name
                    </label>

                    <input
                      type="text"
                      placeholder="Enter Name"
                      ref={name}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400"
                    />
                  </div>

                  {/* Email */}
                  <div>
                    <label className="block mb-2 font-medium">
                      Email
                    </label>

                    <input
                      type="email"
                      placeholder="Enter Email"
                      ref={email}
                      required
                      className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400"
                    />
                  </div>

                </div>

                {/* Subject */}
                <div>
                  <label className="block mb-2 font-medium">
                    Subject
                  </label>

                  <select
                    ref={subject}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400"
                  >
                    <option value="">Select Subject</option>
                    <option value="Order Inquiry">Order Inquiry</option>
                    <option value="Returns">Returns</option>
                    <option value="Feedback">Feedback</option>
                  </select>
                </div>

                {/* Message */}
                <div>
                  <label className="block mb-2 font-medium">
                    Message
                  </label>

                  <textarea
                    rows="6"
                    placeholder="Enter Message"
                    ref={message}
                    required
                    className="w-full border border-gray-300 rounded-lg px-4 py-3 outline-none focus:ring-2 focus:ring-teal-400 resize-none"
                  ></textarea>
                </div>

                {/* Button */}
                <button
                  type="submit"
                  className="bg-teal-500 hover:bg-teal-600 text-white px-6 py-3 rounded-lg transition duration-300"
                >
                  Send Message
                </button>

              </form>
            </div>

            {/* Contact Info */}
            <div className="lg:col-span-5 bg-slate-900 text-white p-6 rounded-2xl shadow">

              <h2 className="text-3xl font-bold mb-6">
                Contact Details
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="font-semibold text-gray-300">
                    Email
                  </h3>

                  <p>contact@example.com</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-300">
                    Phone
                  </h3>

                  <p>+91 99999 99999</p>
                </div>

                <div>
                  <h3 className="font-semibold text-gray-300">
                    Address
                  </h3>

                  <p>
                    New York, USA
                  </p>
                </div>

              </div>

            </div>

          </div>

        </section>

      </main>

      <FooterApp />
    </>
  )
  }