import React, { useState } from 'react';
import { FaPhoneAlt } from 'react-icons/fa';
import { ImLocation } from 'react-icons/im';
import Section from '../components/Section';

const Contact = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!(formData.name && formData.email && formData.message)) {
      alert('Something went wrong!');
      return;
    }

    alert(`Thanks ${formData.name}, I will shortly connect with you!`);
    setFormData({});
  };

  return (
    <Section id="contact" title="Contact">
      <div className="row justify-content-between">
        <div className="col-md-5 order-last order-lg-first" data-aos="fade-up">
          <div className="subheading mb-3">Something hear from you</div>
          <form>
            <div className="form-group pt-1 pb-2">
              <label htmlFor="username">Full Name</label>
              <input
                type="text"
                className="form-control"
                id="username"
                name="name"
                placeholder="Enter your name"
                value={formData.name || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pt-2 pb-3">
              <label htmlFor="email">Email address</label>
              <input
                type="email"
                className="form-control"
                name="email"
                id="email"
                placeholder="Enter email"
                value={formData.email || ''}
                onChange={handleChange}
              />
            </div>
            <div className="form-group pb-4">
              <label htmlFor="userMessage">Message</label>
              <textarea
                className="form-control"
                id="userMessage"
                name="message"
                rows="3"
                placeholder="Enter message"
                value={formData.message || ''}
                onChange={handleChange}
              />
            </div>

            <button
              type="submit"
              className="btn btn-primary"
              onClick={handleSubmit}
            >
              Submit
            </button>
          </form>
        </div>
        <div className="col-md-6 mb-5 mb-lg-0" data-aos="fade-up">
          <div className="subheading mb-3">Reach out to me directly</div>
          <div className="contact-direct">
            <div className="row">
              <div className="col-sm-6">
                <div className="item">
                  <span>
                    <ImLocation />
                  </span>
                  <p>Gobichettipalayam, Erode, Tamilnadu</p>
                </div>
              </div>

              <div className="col-sm-6">
                <div className="item">
                  <span>
                    <FaPhoneAlt />
                  </span>
                  <p>+91 6383338383</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
};

export default Contact;
