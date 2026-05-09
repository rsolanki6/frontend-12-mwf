import React, { useRef } from 'react'
import Swal from 'sweetalert2';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App() {

  const fullname = useRef("");
  const email = useRef("");
  const phone = useRef("");
  const date = useRef("");
  const doctor = useRef("");
  const problem = useRef("");

  const addData = (e) => {
    e.preventDefault();

    var insertData = {
      fullname: fullname.current.value,
      email: email.current.value,
      phone: phone.current.value,
      date: date.current.value,
      doctor: doctor.current.value,
      problem: problem.current.value
    }

    // Swal.fire({
    //   title: "Appointment Booked!",
    //   text: "Your appointment submitted successfully",
    //   icon: "success"
    // });

      toast.success("Thanks for appointment successfully booked !", {
         position: "top-right"
      });

      console.log(insertData);
      // reset form data after submitted form 
      e.target.reset();


  }

  return (
    <>
    
    <ToastContainer />
    <div className="container">

      <div className="left">
        <h1>Book Your Appointment</h1>

        <p>
          Schedule your appointment quickly and easily with our expert doctors.
        </p>
      </div>

      <div className="right">

        <h2>Appointment Form</h2>

        <form onSubmit={addData}>

          <div className="input-box">
            <input type="text" placeholder="Full Name" required ref={fullname}/>
          </div>

          <div className="input-box">
            <input type="email" placeholder="Email Address" required ref={email}/>
          </div>

          <div className="input-box">
            <input type="tel" placeholder="Phone Number" required ref={phone}/>
          </div>

          <div className="input-box">
            <input type="date" required ref={date}/>
          </div>

          <div className="input-box">
            <select required ref={doctor}>
              <option value="">Select Doctor</option>
              <option value="Dr Sharma">Dr. Sharma</option>
              <option value="Dr Patel">Dr. Patel</option>
              <option value="Dr Mehta">Dr. Mehta</option>
            </select>
          </div>

          <div className="input-box">
            <textarea placeholder="Describe your problem" ref={problem}/>
          </div>

          <button type="submit" className="btn">
            Confirm Appointment
          </button>

        </form>
      </div>
    </div>
    <ToastContainer />
    </>
  )
}