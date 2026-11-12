import React from 'react'

const index = () => {
  return (
    <div>
        <footer>
            <section id="contact">
        <h2>Contact</h2>
        <p>
          Feel free to reach out to me at <a href="mailto:shubhamchaudhary7084@gmail.com">shubhamchaudhary7084@gmail.com</a> or connect with me on <a href="https://www.linkedin.com/in/shubham4518" target="_blank" rel="noopener noreferrer">LinkedIn</a>.
        </p>
     </section>
      <form id="contact-form">
                <div class="form-group">
                  <input
                    type="text"
                    placeholder="Your Name"
                    required name="user_name"
                  />
                </div>
                <div class="form-group">
                  <input
                    type="email"
                    placeholder="Your Email"
                    required name="user_email"
                  />
                </div>
                <div class="form-group">
                  <textarea
                    name="message"
                    placeholder="Your Message"
                    rows="5"
                    required
                  ></textarea>
                </div>
                <button type="submit" class="glow-genz-button">
                  Send Message
                </button>
              </form>
        </footer>
    </div>
  )
}

export default index