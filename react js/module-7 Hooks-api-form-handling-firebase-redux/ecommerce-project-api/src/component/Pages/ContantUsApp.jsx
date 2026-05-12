import React from 'react'
import HeaderApp from '../Sample/HeaderApp'
import FooterApp from '../Sample/FooterApp'

export default function ContantUsApp() {
  return (

     <>
     <HeaderApp />

<main className="pt-32 pb-xl">
  {/* Hero Section */}
  <section className="max-w-[1280px] mx-auto px-6 mb-xl">
    <div className="max-w-2xl">
      <h1 className="font-h1 text-h1 text-primary mb-sm">Get in Touch</h1>
      <p className="font-body-lg text-body-lg text-on-surface-variant">
        We're here to help you elevate your lifestyle. Reach out for any
        inquiries about our collections, shipping, or bespoke services.
      </p>
    </div>
  </section>
  {/* Bento Grid Contact Section */}
  <section className="max-w-[1280px] mx-auto px-6">
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter">
      {/* Contact Form Card */}
      <div className="lg:col-span-7 bg-white p-lg rounded-xl shadow-lg shadow-slate-900/5">
        <form action="#" className="space-y-md">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-md">
            <div className="flex flex-col gap-base">
              <label className="font-label-sm text-label-sm text-on-surface-variant">
                Full Name
              </label>
              <input
                className="w-full px-md py-sm border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-surface-bright"
                placeholder="John Doe"
                type="text"
              />
            </div>
            <div className="flex flex-col gap-base">
              <label className="font-label-sm text-label-sm text-on-surface-variant">
                Email Address
              </label>
              <input
                className="w-full px-md py-sm border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-surface-bright"
                placeholder="john@example.com"
                type="email"
              />
            </div>
          </div>
          <div className="flex flex-col gap-base">
            <label className="font-label-sm text-label-sm text-on-surface-variant">
              Subject
            </label>
            <select className="w-full px-md py-sm border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-surface-bright">
              <option>Order Inquiry</option>
              <option>Returns &amp; Exchanges</option>
              <option>Wholesale Opportunities</option>
              <option>General Feedback</option>
            </select>
          </div>
          <div className="flex flex-col gap-base">
            <label className="font-label-sm text-label-sm text-on-surface-variant">
              Message
            </label>
            <textarea
              className="w-full px-md py-sm border border-outline-variant rounded-lg focus:outline-none focus:ring-2 focus:ring-secondary/20 focus:border-secondary transition-all bg-surface-bright resize-none"
              placeholder="How can we help you?"
              rows={6}
              defaultValue={""}
            />
          </div>
          <button
            className="bg-secondary text-on-secondary px-lg py-sm rounded-lg font-button text-button hover:bg-on-secondary-container transition-all shadow-md shadow-secondary/10"
            type="submit"
          >
            Send Message
          </button>
        </form>
      </div>
      {/* Info Column */}
      <div className="lg:col-span-5 flex flex-col gap-gutter">
        {/* Contact Details Card */}
        <div className="bg-primary-container text-on-primary-fixed p-lg rounded-xl shadow-lg h-full">
          <h2 className="font-h3 text-h3 text-white mb-lg">Contact Details</h2>
          <div className="space-y-lg">
            <div className="flex items-start gap-md">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="mail"
                >
                  mail
                </span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-slate-400 uppercase tracking-widest">
                  Email Us
                </p>
                <p className="font-body-md text-body-md text-white">
                  concierge@luxe-corp.com
                </p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="call"
                >
                  call
                </span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-slate-400 uppercase tracking-widest">
                  Call Us
                </p>
                <p className="font-body-md text-body-md text-white">
                  +1 (888) 555-0123
                </p>
              </div>
            </div>
            <div className="flex items-start gap-md">
              <div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center flex-shrink-0">
                <span
                  className="material-symbols-outlined text-white"
                  data-icon="location_on"
                >
                  location_on
                </span>
              </div>
              <div>
                <p className="font-label-sm text-label-sm text-slate-400 uppercase tracking-widest">
                  Visit Showroom
                </p>
                <p className="font-body-md text-body-md text-white">
                  721 Fifth Avenue,
                  <br />
                  New York, NY 10022
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* Map Integration Section */}
    <div className="mt-gutter w-full rounded-xl overflow-hidden shadow-lg shadow-slate-900/5 bg-surface-container-high h-[400px] relative group">
      <div className="absolute inset-0 bg-slate-200/50 flex items-center justify-center">
        <div className="text-center p-md">
          <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center mx-auto mb-sm shadow-sm">
            <span
              className="material-symbols-outlined text-secondary scale-125"
              data-icon="map"
            >
              map
            </span>
          </div>
          <p className="font-label-sm text-label-sm text-on-surface-variant">
            Interactive Map Integration
          </p>
          <p className="text-xs text-slate-400 mt-base">
            New York Flagship Location
          </p>
        </div>
      </div>
      {/* Placeholder image for map aesthetic */}
      <img
        alt="Map showing New York Fifth Avenue location"
        className="w-full h-full object-cover opacity-30 grayscale mix-blend-multiply"
        data-alt="Modern architectural blueprint map of a metropolitan area with minimalist lines and soft blue and gray tones"
        data-location="New York"
        src="https://lh3.googleusercontent.com/aida-public/AB6AXuCy22Cbn9YMXc9P9rB3MqsG4_6u6eMGQrc34r9SjB5F-Sl2hiN0Uvf-fzjS0m54p09mtLnXFCr7Uazj0GF-1S4EDlufVuM7vIfdQpOf26GLnqrRdirkgGQ23Hf1oiFE2dH1VIc8Fdqx5OREP-WihY_s9pBhQdBQcvJiss0TYvyjqCPqF2mxORh6-UnmNrhveIRHILTpCraUJuVG9N7XR-NEOqdj8bHNcpKLgRxGL8ZE_5IN7fSaLjj9dpf2oq61tTOlncOQ3VYHn94"
      />
    </div>
  </section>
  {/* FAQ CTA Section */}
  <section className="max-w-[1280px] mx-auto px-6 mt-xl">
    <div className="bg-surface-container-low border border-outline-variant/30 rounded-xl p-lg flex flex-col md:flex-row justify-between items-center gap-md">
      <div>
        <h3 className="font-h3 text-h3 text-primary">
          Need immediate answers?
        </h3>
        <p className="font-body-md text-body-md text-on-surface-variant">
          Browse our frequently asked questions for shipping and return
          policies.
        </p>
      </div>
      <a
        className="border-2 border-primary text-primary px-lg py-sm rounded-lg font-button text-button hover:bg-primary hover:text-white transition-all whitespace-nowrap"
        href="#"
      >
        View FAQ
      </a>
    </div>
  </section>
</main>

     <FooterApp />

     
     </>

  )
}
