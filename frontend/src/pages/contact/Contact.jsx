import Card from '../../components/Card/Card';
import { FaPhoneAlt, FaEnvelope, FaTwitter } from 'react-icons/fa';
import { GoLocation } from 'react-icons/go';
import axios from 'axios';
import { BACKEND_URL } from '../../services/authService';
import './Contact.scss';
import React, { useState } from 'react';
import { toast } from 'react-toastify';

const Contact = () => {
  const [subject, setSubject] = useState('');
  const [message, setMessage] = useState('');
  const data = {
    subject,
    message,
  };

  const sendEmail = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BACKEND_URL}/api/contactus`, data, {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      });
      setSubject('');
      setMessage('');
      toast.success(response.data.message);
    } catch (error) {
      toast.error(error.message);
    }
  };

  return (
    <div className="contact">
      <h3 className="--mt">Contact Us</h3>
      <div className="section">
        <form onSubmit={sendEmail}>
          <Card cardClass="card">
            <label>Subject</label>
            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={subject}
              onChange={(e) => setSubject(e.target.value)}
              required
            />
            <label>Message</label>
            <textarea
              cols="30"
              rows="10"
              name="message"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              required
            ></textarea>
            <button className="--btn --btn-primary">Send Message</button>
          </Card>
        </form>

        <div className="details">
          <Card cardClass={'card2'}>
            <h3>Our Contact information</h3>
            <p>Fill the form or contact us via other channels listed below</p>

            <div className="icons">
              <span>
                <FaPhoneAlt />
                <p>0677777777</p>
              </span>
              <span>
                <FaEnvelope />
                <p>Support@example.com</p>
              </span>
              <span>
                <GoLocation />
                <p>Agadir, Morocco</p>
              </span>
              <span>
                <FaTwitter />
                <p>@AC14172881</p>
              </span>
            </div>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default Contact;
