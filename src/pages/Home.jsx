import React from "react"
import Section from "../components/Section"
import Resume from "../assets/Resume.pdf"

import { FaFacebookF, FaGithub, FaLinkedinIn, FaTwitter, FaInstagram } from "react-icons/fa"

const SocialIcon = ({ href, icon }) => {
  return (
    <a
      className="social-icon"
      href={href}
      target="_blank"
      rel="noopener noreferrer"
    >
      {icon}
    </a>
  )
}

export default function Home() {
  const icons = [
    {
      href: "https://www.linkedin.com/in/manoj-k-dev/",
      icon: <FaLinkedinIn />,
    },
    {
      href: "https://github.com/manoj-1202",
      icon: <FaGithub />,
    },
    {
      href: "https://x.com/i/flow/login",
      icon: <FaTwitter />,
    },
    {
      href: "https://www.facebook.com/login/",
      icon: <FaFacebookF />,
    },
    {
      href: "https://www.instagram.com/",
      icon: <FaInstagram />,
    },
  ]

  return (
    <Section id="about">
      <div className='row justify-content-center'>
        <div className='col-md-6 order-last order-lg-first' data-aos='fade-up'>
          <h1 className="mb-0">
            MANOJ
            <span className="text-primary" style={{paddingLeft: '2vw'}}>K</span>
          </h1>
          <div className="subheading mb-3 ">
            
            
            <a href="mailto:manojpolevault1202@gmail.com" className='home-mail '>
              manojpolevault1202@gmail.com
            </a>
          </div>
        </div>
        
      </div>

      <p className="lead mb-4">
      I am a dedicated and passionate front-end developer with a solid foundation in HTML, CSS, and JavaScript, alongside experience in modern web technologies like Bootstrap, Tailwind CSS, and React.js. I have a strong eye for design and a commitment to creating visually appealing, responsive, and user-friendly web applications.I am eager to continue learning and expanding my skill set, with a goal of becoming a proficient full-stack developer in the future.
      </p>

      <div className="btn-group mb-5">
        <button
          className="btn btn-primary btn-custom py-2 px-5 CV-Button"
          type="submit"
          onClick={() => window.open(Resume)}
        >
          Download Resume
        </button>
      </div>

      <div className="social-icons">
        {icons.map(({ href, icon }, index) => (
          <SocialIcon href={href} icon={icon} key={index} />
        ))}
      </div>
    </Section>
  )
}
