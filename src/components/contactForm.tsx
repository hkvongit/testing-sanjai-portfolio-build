
import '../styles/contactForm.css'

import { DownloadIcon, Facebook, GithubIcon, Instagram, Linkedin, LucideLinkedin, Mail, MailCheckIcon } from 'lucide-react';

export const ContactForm = () => {

    return (
        <div>
        <h1 style={{color:"white",textAlign:"center"}}>Contact Me</h1>
        <div className="contact-form-container">
            <div className='contact-form'>
        <form action="https://submit-form.com/6Wuu43TIY">
            <div className='form-components'>
            <label htmlFor="name">Name</label>
            <input type="text" id="name" name="name" placeholder="Name" required={true} style={{width:300,height:30,border:1, borderRadius:10}} />
            </div>
            <div className='form-components'>
            <label htmlFor='company'>Company</label>
            <input type='text' id="company" name="company-name" placeholder="Company" style={{width:300,height:30,border:1, borderRadius:10}}/>
            </div>
            <div className='form-components'>
            <label htmlFor="email">Email</label>
            <input type="email" id="email" name="email" placeholder="Email" required={true} style={{width:300,height:30,border:1, borderRadius:10}} />
            </div>
            <div className='form-components'>
            <label htmlFor="message">Message</label>
            <textarea
                id="message"
                name="message"
                placeholder="Message"
                required={true}
                style={{width:300,height:80,border:1, borderRadius:10}}
            ></textarea>
            </div>
            <div className='form-components'>
            <button type="submit" style={{width:250,height:30}}>Send</button>
            </div>
        </form>
        </div>
        <div className='contact-others'>
            <div className='contact-icons'>
                <a>
                <Instagram color='white'/>
                <p>Instagram</p>
                </a>
            </div>
            <div className='contact-icons'>
                <Mail color='white'/>
                <p>Email</p>
            </div>
            <div className='contact-icons'>
                <Facebook color='white'/>
                <p>Facebook</p>
            </div>
            <div className='contact-icons'>
                <Linkedin color='white'/>
                <p>Linkedin</p>
            </div>
        </div>
        </div>
        </div>
    )

}