import React from 'react';
import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <section className='intro'>
      <h1>Bryce Eklund</h1>
      <h2>Full stack developer, musician, IT professional</h2>
      <h3>Hi, I'm Bryce. I live for creative problem solving, engineering of all sorts, and good design. Having an idea is a mere fraction of the puzzle — elegant drafting, streamlined implementation, and peer-checked revision are all core elements of a magnificent project. These concepts extend far beyond the reaches of coding; they affect my art and my life. I love all parts of a stack, but with my experience as a producer and an IT administrator, I've developed a particular fixation with backend technologies.</h3>
    </section>
    <section className='links'>
      <a href='https://github.com/bryceklund' target='_blank'>github</a>
      <a href='https://linkedin.com/in/bryceklund' target='_blank'>linkedin</a>
      <a href='mailto:bryce.eklund@gmail.com' target='blank'>email</a>
    </section>
    <section className='project-list'>
      <h2 className='section-title'>apps i've made</h2>
      <section className='project chord-magic'>
        <h3>Chord Magic</h3>
        <img className='project-image image-left' alt='chord-magic image' src='https://camo.githubusercontent.com/95a6d26f478da2d4610d28d7c234f14f047ba642/68747470733a2f2f692e696d6775722e636f6d2f69304a5a7449522e706e67' />
        <p className='project-description'>A tool for exploring, building, and storing chord progressions. Choose from four in-browser-generated instruments, five octaves, and over 100 chords as you piece together the foundation of your new smash pop hit.</p>
        <p className='tech-used'>
          Technologies used:
          <ul className='tech-list'>
            <li>Audio rendered with the Web Audio API</li>
            <li>Frontend built with React and bootstrapped with create-react-app</li>
            <li>API written in Node.js with the lovely assistance of Express</li>
            <li>Database powered by PostgreSQL</li>
            <li>SPA hosting by Zeit, server + db provisioning by Heroku, body by milk</li>
          </ul>
        </p>
      </section>
      <section className='project ytpoet'>
        <h3>ytPoet</h3>
        <img className='project-image image-right' alt='ytpoet image' src='https://i.imgur.com/pfkOVND.png' />
        <p className='project-description'>A true artist, incapable of emotion, but vastly capable of procedurally generating content out of YouTube comments sections. Knows how to write four different types of poems, but can also format things to your liking.</p>
        <p className='tech-used'>
          Technologies used:
          <ul className='tech-list'>
            <li>Comments retrieved with the YouTube API</li>
            <li>Frontend built with React and bootstrapped with create-react-app</li>
            <li>API written in Node.js + Express</li>
            <li>Database constructed via PostgreSQL</li>
            <li>Zeit hosts the front, Heroku hosts the back</li>
          </ul>
        </p>
      </section>
      <section className='project bottom-feeder'>
        <h3>Bottom Feeder</h3>
        <img className='project-image image-left' alt='bottom-feeder image' src='https://i.imgur.com/7uXFTvQ.png' />
        <p className='project-description'>Not here to impress you — just to get you to the nearest, lowest-rated dive bar. With couches.</p>
        <p className='tech-used'>
          Technologies used:
          <ul className='tech-list'>
            <li>Bars found via the Yelp API</li>
            <li>Frontend vanilla JS ES6 jQuery, and good ole HTML5 & CSS3 (yowza!)</li>
          </ul>
        </p>
      </section>
    </section>
        <section className='music-list'>
      <h2 className='section-title'>music i've made</h2>
      <section className='project grandfather'>
        
      </section>
      <section className='project refractor'>
        
      </section>
    </section>
    </div>
  );
}

export default App;
