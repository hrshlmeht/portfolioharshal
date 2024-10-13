import React from 'react';
import '../assets/styles/Contact.scss';  // Importing SCSS correctly

const Contact = () => {
  return (
    <div className="contact-section">
      {/* Resume Button */}
      <a 
        href="https://drive.google.com/file/d/1P60dS5t49sog-r2AuhWr_I_DgAIP9nzU/view?usp=drive_link" 
        target="_blank" 
        rel="noopener noreferrer"
        className="resume-button"
      >
        View Resume
      </a>

      {/* Typewriter text */}
      <div className="typewriter-container">
        <p className="typewriter-text">
          If you want to discuss more, feel free to drop an email at 
          <a href="mailto:harshalmehta1998@gmail.com" className="email-link"> harshalmehta1998@gmail.com</a>.
        </p>
      </div>
    </div>
  );
};

export default Contact;
