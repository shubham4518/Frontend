import React from "react";

const index = () => {
  return (
    <main>
      <section id="home">
        <div className="home-left"><h2>Welcome to My Portfolio</h2>
       
        <p>Hi, I am <strong>Shubham Chaudhary</strong>. I am a 
          <em> Python Full Stack Developer</em> who loves building web applications.</p></div>
          <div className="home-img"><img 
          src="dp.png"
          alt="Shubham Profile"
          width="300px"
          height="300px"
        /></div>
      </section>

      <section id="about">
       <div className="about-me"> <h2>About Me</h2>
        <p>
          My name is Shubham Chaudhary. I am a Computer Science Engineering graduate with a strong interest in software development, web technologies, and problem-solving. I am currently working as a Python Developer Intern at Besant Technologies, where I am developing my programming skills and gaining practical technical knowledge.
          I have experience with technologies such as Python, JavaScript, React.js, Django, Node.js, SQL, and MongoDB. I am interested in building responsive, user-friendly web applications and developing efficient solutions to real-world problems.
        </p></div>
      
      </section>

      <section id="projects">
        <h2>Projects</h2>
        <ul>
          <li id="project1">
            <h3>Project 1: LiveLink </h3>
            <p>
              Video conferencing application using React.js ,Node.js , WebRTC
              and MySQL.
            </p>
          </li>
          <li id="project2">
            
            <h3>Project 2: Quiz Game</h3>
            <p>
            
              Interactive quiz application with real-time scoring and
              leaderboards. It is made using html , css , javascript , bootstrap
              and by using quiz api.
            </p>
          </li>
        </ul>
      </section>

      <section id="skills">
        <h2>Skills </h2>
        <ul>
          <li>Python</li>
          <li>JavaScript</li>
          <li>React.js</li>
          <li>Django</li>
          <li>HTML & CSS</li>
          <li>MySQL</li>
        </ul>
      </section>
    </main>
  );
};

export default index;
