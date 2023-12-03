import React from 'react'

const Contact = () => {
  return (
    <div className='contactSection'>
      <section className="contact">
        <div className="container contact-section flex" id="contacts">
            <h2>CONTATCT</h2>
            <form  action="https://formspree.io/f/xoqozond" method="POST" className=" form flex" id="contactform">
                <div className="name">
                    <input name="fullname" id="first-name" type="text" placeholder="First Name" autoComplete="off" required/>
                    <input name="email" type="email" id="email"  placeholder="Email" autoComplete="off" required/>
                </div>
                <input name="subject" id="subject" type="text" placeholder="Subject" autoComplete="off" required/>
                <textarea name="message" id="textarea" cols="10" rows="10" placeholder="Message" autoComplete="off" required></textarea>
                <button type="submit" className="btns" name="submit" id="sub" >Submit</button>
            </form>
        </div>
    </section>
    </div>
  )
}

export default Contact
