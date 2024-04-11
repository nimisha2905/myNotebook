import React from 'react'
import NavBar from '../NavBar'
import './index.css'


const About = () => {
  return (
    <>
    <NavBar/>
    <div className="about-page">
      <h2 className='about-heading'>About Our Notes App</h2>
      <p>
        Our notes app is designed to help you organize your thoughts, ideas, and
        to-do lists efficiently. With a simple and intuitive interface, you can
        create, edit, and manage your notes effortlessly.
      </p>
      <p className='para-heading'>
        Features:
        <ul>
          <li className='list-heading'>Create new notes with titles and descriptions</li>
          <li className='list-heading'>Customize notes with colors and formatting</li>
          <li className='list-heading'>Search and filter notes for easy access</li>
          <li className='list-heading'>Sort notes by date or title</li>
        </ul>
      </p>
      <p>
        Built with love by our team of developers, our goal is to provide you
        with a seamless note-taking experience that enhances your productivity
        and creativity.
      </p>
    </div>
    </>
  );
};

export default About;