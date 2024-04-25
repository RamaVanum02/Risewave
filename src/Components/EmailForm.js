import React, { useState } from "react";
import emailjs from '@emailjs/browser'

const EmailForm = ()=>{
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [showLoader, setShowLoader] = useState(false)
    const [showMessage, setShowMessage] = useState(false)

    

    const handleSubmit =(e)=>{
    e.preventDefault(); 
    const serviceId = process.env.REACT_APP_Service_Id;
    const templateId = process.env.REACT_APP_Template_Id;
    const publicKey = process.env.REACT_APP_Public_Key;

    setShowLoader(true);
    
    

    const templateParams = {
        from_name : name,
        from_email : email,
        to_name : 'RiseWave',
        message : message
    }

    emailjs.send(serviceId, templateId, templateParams, publicKey)
    .then((response)=>{
        console.log('Email sent Successfully', response);
        setName('');
        setEmail('');
        setMessage('');
        setShowMessage(true);
        setShowLoader(false);
    })
    .catch((error)=>{
        console.error('Error Sending email:', error);
    });
}
    return(
        <>
    <section id="contact" class="contact">
      <div class="container">

        <div class="section-title" data-aos="zoom-out">
          <h2>Contact</h2>
          <p>Contact Us</p>
        </div>

        <div class="row mt-5">

          <div class="col-lg-4" data-aos="fade-right">
            <div class="info">
              <div class="address">
                <i class="bi bi-geo-alt"></i>
                <h4>Location:</h4>
                <p>501, Nilagiri Business Center, Block B, Begumpet, Hyderabad </p>
              </div>

              <div class="email">
                <i class="bi bi-envelope"></i>
                <h4>Email:</h4>
                <p>info@risewave.com</p>
              </div>

              <div class="phone">
                <i class="bi bi-phone"></i>
                <h4>Call:</h4>
                <p>+91 9912 9913 99</p>
              </div>

            </div>

          </div>

          <div class="col-lg-8 mt-5 mt-lg-0" data-aos="fade-left">

          <form onSubmit={handleSubmit} className="php-email-form">
            <div className="row">
                <div class="col-md-6 form-group">
                    <input type="text" className="form-control" placeholder="Your Name" value={name} onChange={(e)=>setName(e.target.value)}></input>
                </div>
                <div class="col-md-6 form-group mt-3 mt-md-0">
                    <input type="email" className="form-control" placeholder="Your Email" value={email} onChange={(e)=>setEmail(e.target.value)}></input>
                </div>
            </div>
           <div class="form-group mt-3">
                <input type="text" className="form-control" name="subject" id="subject" placeholder="Subject" required></input>
            </div> 
            <div class="form-group mt-3">
                <textarea className="form-control" cols={30} rows={4} value={message} onChange={(e)=>setMessage(e.target.value)}></textarea>
            </div>

            <div class="my-3">
            {showLoader && <div class="loading"></div>}
            {showMessage && <div class="sent-message">Your message has been sent. Thank you!</div>}
          
                
            </div>
            <div class="text-center">
                <button type="submit">Send Message</button>
            </div>
        </form>
          </div>

        </div>

      </div>
    </section>




        
        
        </>

    )

}

export default EmailForm