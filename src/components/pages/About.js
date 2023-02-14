import React from 'react';
import '../../styles/About.css';
import '../../styles/Section.css';

export default function About() {
  return (
    <section className="section">
      <header>
        About Me
      </header>
      <div className="content">
        <div className="profile-photo" ></div>
        <p>
          Hello, my name is Shahnoor Rashid, I am a professional FullStack MERN developer with an experience of more than 3 years in web designing. I am based in Birmingham, United Kingdom. I am working on projects remotely on for clients all over the world. I have a diverse set of skills, ranging from design to HTML + CSS + JavaScript.
        </p><br />
        
        <p>I can create from scratch, providing a unique experience for the users. There is something very satisfying about designing a project from scratch and building it into something that someone else can use. I am looking for an exciting opportunity to combine my technical and creative capabilities to build better experiences on the web.</p>
      </div>
    </section>
  );
}
