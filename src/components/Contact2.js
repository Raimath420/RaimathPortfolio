import React from 'react'

const Contact2 = () => {
    return (
        <div className='contactSection'>
            
            <section className="contact">
            <iframe title='map' src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d69071.6235287675!2d76.4856495480689!3d15.431154205473339!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bb7811160189eaf%3A0x4d304602fe8621e0!2sGangavathi%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1701499629582!5m2!1sen!2sin" width="100%"  style={{border:0}} allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
                <div className="container contact-section flex" id="contacts">
                    
                    <h2>CONTATCT</h2>
                    <form action="https://formspree.io/f/xoqozond" method="POST" className=" form flex" id="contactform">
                        <div className="name">
                            <input name="fullname" id="first-name" type="text" placeholder="First Name" autoComplete="off" required />
                            <input name="email" type="email" id="email" placeholder="Email" autoComplete="off" required />
                        </div>
                        <input name="subject" id="subject" type="text" placeholder="Subject" autoComplete="off" required />
                        <textarea name="message" id="textarea" cols="10" rows="10" placeholder="Message" autoComplete="off" required></textarea>
                        <button type="submit" className="btns" name="submit" id="sub" >Submit</button>
                    </form>
                   
                </div>
                
            </section>
        </div>
    )
}

export default Contact2
