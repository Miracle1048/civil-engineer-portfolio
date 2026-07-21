import "../styles/contact.css";

import { useState, useRef, useEffect } from "react";
import emailjs from "@emailjs/browser";


import ContactInfoCard from "./ContactInfoCard";

import {
  Mail,
  Phone,
  MapPin,
  Download,
  Send,
  BriefcaseBusiness,
  GraduationCap,
  FlaskConical,
  Sparkles,
  ArrowRight,
} from "lucide-react";

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const form = useRef();

const [formData, setFormData] = useState({
  name: "",
  email: "",
  subject: "",
  message: "",
});

const [loading, setLoading] = useState(false);
const [success, setSuccess] = useState("");
const [error, setError] = useState("");

useEffect(() => {
  if (success) {
    const timer = setTimeout(() => {
      setSuccess("");
    }, 5000);

    return () => clearTimeout(timer);
  }
}, [success]);

useEffect(() => {
  if (error) {
    const timer = setTimeout(() => {
      setError("");
    }, 5000);

    return () => clearTimeout(timer);
  }
}, [error]);
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
  e.preventDefault();

  setLoading(true);
  setSuccess("");
  setError("");

  try {
    await emailjs.send(
      import.meta.env.VITE_EMAILJS_SERVICE_ID,
      import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      {
        from_name: formData.name,
        from_email: formData.email,
        subject: formData.subject,
        message: formData.message,
      },
      import.meta.env.VITE_EMAILJS_PUBLIC_KEY
    );

    setSuccess("✅ Thank you! Your message has been sent successfully.");

    setFormData({
      name: "",
      email: "",
      subject: "",
      message: "",
    });

  } catch (err) {

    console.error(err);

    setError("❌ Unable to send your message. Please try again.");

  } finally {

    setLoading(false);

  }
};

  return (
    <section className="contact" id="contact">

      {/* Blueprint Background */}

      <div className="contact-grid-bg"></div>

      <div className="contact-circle contact-circle-1"></div>
      <div className="contact-circle contact-circle-2"></div>

      {/* ================= HEADER ================= */}

      <div className="contact-header">

        <span className="section-tag">
          CONTACT
        </span>

        <h2>

          Let's Build

          <span> the Future Through Engineering </span>

        </h2>

        <p>

          As a Civil Engineering graduate, I combine technical expertise, research, and 
          digital innovation to deliver sustainable infrastructure solutions. 
          I'm always open to engineering roles, research collaborations, and opportunities to create lasting 
          impact.

        </p>

      </div>

      {/* ================= AVAILABILITY ================= */}

      <div className="availability-banner">

        <div className="availability-status">

          <span className="status-dot"></span>

          <span>
            Available for New Opportunities
          </span>

        </div>

        <div className="availability-items">

          <div>

            <BriefcaseBusiness size={18} />

            Graduate Roles

          </div>

          <div>

            <FlaskConical size={18} />

            Research

          </div>

          <div>

            <GraduationCap size={18} />

            Scholarship Projects

          </div>

          <div>

            <Sparkles size={18} />

            Freelance

          </div>

        </div>

      </div>

      {/* ================= MAIN GRID ================= */}

      <div className="contact-wrapper">

        {/* ==========================================
            LEFT COLUMN
        ========================================== */}

        <div className="contact-left">

          <div className="left-heading">

            <h3>

              Let's Connect

            </h3>

            <p>

              I'm passionate about delivering sustainable infrastructure
              solutions through engineering excellence, digital construction
              technologies, and collaborative project delivery. Whether you're
              recruiting, seeking research collaboration, discussing innovative
              engineering ideas, or exploring project opportunities, I'd be
              delighted to connect and contribute to meaningful solutions.

            </p>

          </div>

          {/* Contact Cards */}
          <ContactInfoCard
              icon={<Mail size={28} />}
              title="Email"
              value="gabriel.miracle.junior@gmail.com"
              link="mailto:gabriel.miracle.junior@gmail.com"
            />

            <ContactInfoCard
              icon={<Phone size={28} />}
              title="Phone"
              value="+234 903 806 2683"
              link="tel:+2349038062683"
            />

            <ContactInfoCard
              icon={<MapPin size={28} />}
              title="Location"
              value="Ibadan, Oyo State, Nigeria"
            />

            <ContactInfoCard
              icon={<FaLinkedin size={28} />}
              title="LinkedIn"
              value="Coming Soon"
            />

            <ContactInfoCard
              icon={<FaGithub size={28} />}
              title="GitHub"
              value="Coming Soon"
            />



          

          {/* CTA Buttons */}

          <div className="contact-buttons">
             <a
              href="/cv.pdf"
              download
              className="download-btn"
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              href="#projects"
              className="hire-btn"
            >
              <ArrowRight size={18} />
              Explore My Projects
            </a>


          </div>

        </div>

        {/* ==========================================
            RIGHT COLUMN
            (PART 2 STARTS HERE)
        ========================================== */}

        <div className="contact-right">

          <div className="form-glass">

            <div className="form-header">

              <h3>

                Send a Message

              </h3>

              <p>

                Fill out the form below and I'll
                respond as soon as possible.

              </p>

            </div>
             <form
               ref={form}
                className="contact-form"
                onSubmit={handleSubmit}
              >

              {/* Name & Email */}

              <div className="input-row">

                <div className="input-group">

                  <label>Full Name</label>

                  <input
                    type="text"
                    name="name"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="input-group">

                  <label>Email Address</label>

                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />

                </div>

              </div>

              {/* Subject */}

              <div className="input-group">

                <label>Subject</label>

                <input
                  type="text"
                  name="subject"
                  placeholder="What would you like to discuss?"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                />

              </div>

              {/* Message */}

              <div className="input-group">

                <label>Your Message</label>

                <textarea
                  rows="7"
                  name="message"
                  placeholder="Tell me about your project, opportunity, research collaboration, or enquiry..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                ></textarea>

              </div>

              <div className="form-footer">

                <div className="privacy-note">
                  By submitting this form, your information will only be
                  used to respond to your enquiry.
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={loading}
                >
                  <Send size={18} />
                  {loading ? "Sending..." : "Send Message"}
                </button>

              </div>

              {/* Status Messages */}

              {success && (
                <div className="form-success">
                  ✅ Thank you! Your message has been sent successfully.
                </div>
              )}

              {error && (
                <div className="form-error">
                  ❌ Unable to send your message. Please try again.
                </div>
              )}

            </form>

          </div>

        </div>

      </div>

      {/* Bottom CTA */}

      <div className="contact-bottom">

        <h3>
          Ready to Collaborate?
        </h3>

        <p>
          I welcome opportunities in civil engineering,
          infrastructure development, sustainable construction,
          digital engineering, research, and innovative projects.
          Let's work together to build solutions that create
          lasting impact.
        </p>

        <a
          href="mailto:gabriel.miracle.junior@gmail.com"
          className="bottom-contact-btn"
        >

          <Mail size={20} />

          Start a Conversation

        </a>

      </div>

    </section>
    );
  }
