"use client";
import React, { useState } from 'react';
import './contact.css';

export default function Contact() {
    const [showOther, setShowOther] = useState(false);

    const handleBusinessTypeChange = (e) => {
        setShowOther(e.target.value === 'other');
    }
    return (
        <section className="contact" >
            <form>
                <h2>Interested in becoming a service provider?</h2>
                <p>Fill out the form below and we'll get back to you as soon as possible.</p>
                <div className="input-box">
                    <label>Business Name </label>
                    <input type="text" className="field" placeholder="Enter your business name" />
                </div>
                <div className="input-box">
                    <label>Contact Person's Name </label>
                    <input type="text" className="field" placeholder="Enter your name" />
                </div>
                <div className="input-box">
                    <label>Email </label>
                    <input type="email" className="field" placeholder="Enter your email" />
                </div>
                <div className="input-box">
                    <label>Phone Number </label>
                    <input type="tel" className="field" placeholder="Enter your phone number" />
                </div>
                <div className="input-box">
                    <label>Business Address </label>
                    <input type="text" className="field" placeholder="Enter your business address" />
                </div>
                <div className="input-box">
                    <label>Website URL (if applicable) </label>
                    <input type="url" className="field" placeholder="Enter your website URL" />
                </div>
                <br />
                <h2>Business Details</h2>
                <div className="input-box">
                    <label>Business Type</label>
                </div>
                <select name="businessType" id="businessType" onChange={handleBusinessTypeChange}>
                    <option value="accomodation">Accomodation</option>
                    <option value="restaurant">Restaurant/Cafe</option>
                    <option value="activity">Tour/Activity Provider</option>
                    <option value="transportation">Transportation</option>
                    <option value="other">Other</option>

                </select>

                {showOther && (
                    <div className="input-box" id="other">
                        <label>Please specify: </label>
                        <textarea className="field" placeholder="Enter"></textarea>
                    </div>
                )}

                <div className="input-box">
                    <label>Operating Hours </label>
                    <input type="text" className="field" placeholder="Enter your operating hours" />
                </div>
                <br></br>

                <div className="input-box">
                    <label>Your Message </label>
                    <textarea name="" id="" className="field" placeholder="Enter your message"></textarea>
                </div>

                <button type="submit">Submit</button>
            </form>
        </section>
    );
}