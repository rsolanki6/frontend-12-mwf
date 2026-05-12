import React,{useRef, useState} from 'react'
import HeaderApp from '../Sample/HeaderApp'
import FooterApp from '../Sample/FooterApp'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css';

export default function FeedbackApp() {

  // destructureing of the rate data
  const [rateData, setRateData] = useState("");
  // store all data via useRef
  const name = useRef("");
  const email = useRef("");
  const msg = useRef("");
  const rate = useRef("");
  const navigate = useNavigate();


  // call api of post data or given feedback
  const addData=(e)=>{
    e.preventDefault();
    var insertData={
      name:name.current.value,
      email:email.current.value,
      msg:msg.current.value,
      rate:rateData
    }

    // call api of add feedback via aios.post()
    axios.post(`http://localhost:8000/feedback`, insertData).then =(()=>{
      // pass the toast message
       toast.success("THanks for provide your valuable feedback !", {
        position: "top-right"
      });
    
      navigate('/feedback-us');

    })

  }

  return (

     <>
     <HeaderApp />
      <main className="pt-32 pb-xl px-6 max-w-[1280px] mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-gutter items-start">
          <section className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="mb-lg">
              <h1 className="font-h1 text-h1 text-primary mb-md">
                Your experience matters.
              </h1>
              <p className="font-body-lg text-body-lg text-on-surface-variant max-w-md">
                We strive for perfection in every detail. Share your thoughts and help
                us refine the LUXE journey.
              </p>
            </div>
            <div className="bg-white p-lg rounded-xl shadow-lg border border-outline-variant/30">
              
              <form action="#" className="space-y-md" onSubmit={addData}>
                {/* <div>
                  <label className="font-label-sm text-label-sm text-on-surface block mb-xs">
                    Overall Rating
                  </label>
                  <div className="flex space-x-xs text-secondary">
                    <span
                      className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined cursor-pointer hover:scale-110 transition-transform"
                      data-icon="star"
                    >
                      star
                    </span>
                  </div>
                </div> */}
               
                <div>
                  <label className="font-label-sm text-label-sm text-on-surface block mb-xs" htmlFor="review">
                    Your Review
                  </label>
                  <textarea className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all outline-none text-body-md" id="review" placeholder="How was your experience?" ref={msg} rows={5} defaultValue={""}/>
                </div>
                
                <div className="grid grid-cols-2 gap-md">
                  <div>
                    <label className="font-label-sm text-label-sm text-on-surface block mb-xs" htmlFor="name">
                      Name
                    </label>
                    <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all outline-none" id="name" placeholder="Jane Doe" ref={name} type="text" />
                  </div>

                  <div>
                    <label className="font-label-sm text-label-sm text-on-surface block mb-xs" htmlFor="email">
                      Email
                    </label>
                    <input className="w-full bg-surface-container-low border border-outline-variant rounded-lg p-md focus:ring-2 focus:ring-secondary focus:border-secondary transition-all outline-none" id="email" placeholder="jane@example.com" ref={email} type="email" />
                  </div>

                  <div className="space-y-4">
                    <label className="block text-sm font-label font-semibold text-on-surface-variant uppercase tracking-wider">Rate Your Experience</label>
                    <div className="flex gap-4">
                      <input type='radio' name="rating" value="1star" ref={rate} onChange={(e)=>setRateData(e.target.value)} /> 1star 
                      <input type='radio' name="rating" value="2star" ref={rate} onChange={(e)=>setRateData(e.target.value)} /> 2star 
                      <input type='radio' name="rating" value="3star" ref={rate} onChange={(e)=>setRateData(e.target.value)} /> 3star 
                      <input type='radio' name="rating" value="4star" ref={rate} onChange={(e)=>setRateData(e.target.value)} /> 4star 
                      <input type='radio' name="rating" value="5star" ref={rate} onChange={(e)=>setRateData(e.target.value)} /> 5star 
                    </div>
                  </div>

                </div>
                <button
                  className="w-full bg-secondary text-on-secondary font-button text-button py-md rounded-lg shadow-lg hover:brightness-110 transition-all duration-200 uppercase tracking-widest"
                  type="submit"
                >
                  Submit Feedback
                </button>
              </form>

            </div>
          </section>
          <section className="lg:col-span-7 space-y-md">
            <div className="flex items-center justify-between mb-md">
              <h2 className="font-h2 text-h2 text-primary">Recent Experiences</h2>
              <div className="flex items-center space-x-xs bg-secondary-container/30 px-md py-xs rounded-full">
                <span className="font-label-sm text-label-sm text-on-secondary-container">
                  4.8 Average
                </span>
                <span
                  className="material-symbols-outlined text-secondary text-sm"
                  data-icon="star"
                  style={{ fontVariationSettings: '"FILL" 1' }}
                >
                  star
                </span>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-md">
              <div className="bg-white p-lg rounded-xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-md">
                  <div className="flex items-center space-x-md">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary-container">
                      <img
                        alt="Reviewer"
                        className="w-full h-full object-cover"
                        data-alt="Close-up portrait of a smiling woman with warm lighting and soft background bokeh in a professional studio setting"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq670GSNnuunT8k-qJ4A9dP0AjrK_LdfxC9bEoe9T1077oONZyaT33o47tHIgay8zJl4FgqNPsrEgGLijOXPqzH-A69altPRc-yKsaUGhGy9Lu0kWgTAqKDpHi6oxTsgcatLgyszIRs-dPlb8EQdQcxPSfQQ7ImWnqc8CoKiXX_Rnt90lrILQVAyzHdAI57bEQaedNB5H12IBuSQG_qRhpcxTEe0To3MbZo2uGRW1LKXVFJjnbtscMPCrDhbPh4oWAT0YQZ3HCXY8"
                      />
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary">
                        Sarah Jenkins
                      </p>
                      <p className="text-[12px] text-outline">
                        Verified Buyer • 2 days ago
                      </p>
                    </div>
                  </div>
                  <div className="flex text-secondary scale-75 origin-right">
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                  </div>
                </div>
                <p className="text-on-surface-variant font-body-md italic leading-relaxed">
                  "The attention to detail in the packaging alone was worth the
                  purchase. The product quality exceeded my expectations. LUXE truly
                  lives up to its name."
                </p>
              </div>
              <div className="bg-white p-lg rounded-xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow">
                <div className="flex justify-between items-start mb-md">
                  <div className="flex items-center space-x-md">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary-container">
                      <img
                        alt="Reviewer"
                        className="w-full h-full object-cover"
                        data-alt="Modern professional man portrait with subtle lighting against a minimalist gray background for high-end corporate profile"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuDhJeS-YxszNg4LK4cag67OlhRO17bF0Ypgx0w8eYyklRhLbUMSvLdc2lF24u-rwHy86__TF76JeZREuUp0axGJ5PnTCf2WpuVNiAVPB0Cu5-WVvCO57kIxcI9PlmhZrPPR-oDt39gsQ34SIt2KoDY6ZqQyTMvNde5IocTxJfUFSFCt5_bTe7SifaxvSWf7wNM29L0mvqSevjdhxBi4Ah8oXJFMPh-0wYi0BnbF_ts6Gi3BUmuWysn3G-pA2eRuq_E6c3hT-s6-Mjg"
                      />
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary">
                        Marcus Thorne
                      </p>
                      <p className="text-[12px] text-outline">
                        Verified Buyer • 1 week ago
                      </p>
                    </div>
                  </div>
                  <div className="flex text-secondary scale-75 origin-right">
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span className="material-symbols-outlined" data-icon="star-half">
                      star_half
                    </span>
                  </div>
                </div>
                <p className="text-on-surface-variant font-body-md italic leading-relaxed">
                  "Shipping was incredibly fast. I had one small question about the
                  assembly and customer support responded within 15 minutes. Stellar
                  service."
                </p>
              </div>
              <div className="bg-white p-lg rounded-xl shadow-sm border border-outline-variant/20 hover:shadow-md transition-shadow relative overflow-hidden">
                <div className="flex justify-between items-start mb-md">
                  <div className="flex items-center space-x-md">
                    <div className="w-12 h-12 rounded-full overflow-hidden border-2 border-secondary-container">
                      <img
                        alt="Reviewer"
                        className="w-full h-full object-cover"
                        data-alt="Candid headshot of a creative woman with soft natural window lighting and warm tones in a minimalist office space"
                        src="https://lh3.googleusercontent.com/aida-public/AB6AXuA48SzwGGKo_Uohyw3VP6YBiR35jz8CyY_H_cMy-ITqoEU0I3UqJymp_waTJarzUdEQBGSypy1rvTw5ygQ7VwOGpSGJdhqdLRsQn8f4kdlcvdSlWVfxrTL70OwZKsk2Pt-UOwrHVGYhqmvwxi7d_Dc9fIdTFMITV9yuIn_HOHeO4Hc7BxCZXNXvIY3SK_BJiN7WZeA8BCZFe6cvWc5POzkxwxv4nOcDLY-iZ8iGV6Zwifq8cu_QSPInnV0ALI57ee0MWz59EeaW7wM"
                      />
                    </div>
                    <div>
                      <p className="font-label-sm text-label-sm text-primary">
                        Elena Rodriguez
                      </p>
                      <p className="text-[12px] text-outline">
                        Verified Buyer • 2 weeks ago
                      </p>
                    </div>
                  </div>
                  <div className="flex text-secondary scale-75 origin-right">
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                    <span
                      className="material-symbols-outlined"
                      data-icon="star"
                      style={{ fontVariationSettings: '"FILL" 1' }}
                    >
                      star
                    </span>
                  </div>
                </div>
                <p className="text-on-surface-variant font-body-md italic leading-relaxed mb-md">
                  "The minimalist aesthetic fits my home perfectly. I've already
                  recommended three friends to the shop."
                </p>
                <div className="grid grid-cols-3 gap-xs">
                  <img
                    alt="Product Review"
                    className="w-full h-24 object-cover rounded-lg"
                    data-alt="High-end white minimalist product on a clean marble surface with soft shadows and elegant composition"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMuLmXiYOUnS0XlHLHm1V38Cz5rDJOZkP0sseLc5VmjWWzTxs-SJ798mS2ANpgS3-BFg7Zsu2biwFCaKFQ5_ba3IXxO3H2liWu932wT-rY7FABA-VHjWilD4db70t0V4el45o6jf3JZNRCDLiRXAbJnp-oKj725XTuTdfmTSnaw_k653s1YuxeeK2oW2gATYcxIzlLlkVmsIjaPr2H6hrNw98yMIEjmtMYvZdVMiY0eggR8782OalNxexbAUTyrl64Oq0kNaccsY8"
                  />
                  <img
                    alt="Product Review"
                    className="w-full h-24 object-cover rounded-lg"
                    data-alt="A sleek red high-performance sneaker on a dark reflective surface with dramatic lighting and high contrast"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuA-NG8IYEO-dNsrRjXQ-FvaEX0PaA3J3wr4xTTgBTw54Ftl1lFwJVrNnqQ5MfEUwoDeEwnLMz4HBMWGK9_HCEJNmrs3RRa9hh_qX_euiTyV97iY4eXYgrV-Nzz2Z-wJ0S8s-R4q_oovS0YSFgk3EFR6LVcg5YTcTCedGzSzgCOQ-_MiWoMQVFxArirpDZscw5y1iA_hC5PJNLo8MXdpQPmmyC1C7mYBkxY2e7p4moUJ6oBbEsOKZ32K31B7p_V6B3vIFIMl4MHfeN8"
                  />
                  <img
                    alt="Product Review"
                    className="w-full h-24 object-cover rounded-lg"
                    data-alt="Modern stylish eyewear on a designer case with soft natural lighting and warm wood texture background"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDVzMz_vSNrXU8qHEjp9BvbP96NblTVKJabZsU0XpRwUJLekUwkl_4AwIQtQVfNjR_wdnlTm_qq4OfYlw7to275vfl7QqRNok1OnFI4H64YUNWj0Zn-lW6Kn2cIZhBCqmUL2vBlYuJjVJuR2gfYRBPTIH-wLosSvRh7qJYOkoykrg23hrs7WGUFvwEFi4SWS3zUgL3l4sToJSHcsYkebtc0BM5Q-l03-GfyuRS2O9hBXBzo8wwk08DYKM63cu1mYY2MaRaWmX-uKs0"
                  />
                </div>
              </div>
              <button className="w-full py-md border-2 border-outline-variant/30 text-outline-variant hover:border-secondary hover:text-secondary font-button rounded-xl transition-all uppercase tracking-widest text-sm">
                Load More Reviews
              </button>
            </div>
          </section>
        </div>
      </main>


<FooterApp />

     </>

  )
}
