import Navbar from "./navbar_page";
import { useState } from "react";
import { db } from "../config/firebase";
import { ref, set } from 'firebase/database';
import "../styles/contact.css"
import Footer from "./footer";

const Contact = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();

        const contactRef = ref(db, 'contacts/' + Date.now());
        set(contactRef, {
            name,
            email,
            message,
        })
        .then(() => {
            alert('Message sent successfully!');
            setName('');
            setEmail('');
            setMessage('');
        })
        .catch((error) => {
            alert('Error sending message: ' + error.message);
        });
    };

    return (
        <>
        <div className="contact-page">
            <Navbar />

            
            <form className="contact-form" onSubmit={handleSubmit}>
                <h1>Get in Touch</h1>
                <div className="form-group">
                    <label className="form-label">Name:</label>
                    <input
                        className="form-input"
                        type="text"
                        value={name}
                        onChange={(e) => setName(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Email:</label>
                    <input
                        className="form-input"
                        type="email"
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        required
                    />
                </div>
                <div className="form-group">
                    <label className="form-label">Message:</label>
                    <textarea
                        className="form-textarea"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        required
                    />
                </div>
                <button className="form-button" type="submit">Send</button>
            </form>

            <div className="company-address">
            <h2>
            <i className="fa-solid fa-house"></i> Mumbai Central Way
            </h2>
            <p>bunglow, CA 91770</p>
            
            <h2>
            <i className="fa-solid fa-phone"></i> 91+ 9875435774
            </h2>
            <p>
                Mon to Fri 9am to 6pm
            </p>
            <h2>
            <i className="fa-regular fa-envelope"></i> Support@abhaar.com
            </h2>
            <p>
                send us query for anytime
            </p>
        </div>
        </div>
         <Footer/>
        </>
    );
}

export default Contact;