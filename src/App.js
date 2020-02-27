import React from 'react'
import YoutTubeLogo from './assets/youtube.png'
import CloudLogo from './assets/cloud.png'
import JQLogo from './assets/jquery.png'
import NodeLogo from './assets/node.png'
import PostgresLogo from './assets/postgres.png'
import ReactLogo from './assets/react.png'
import AudioLogo from './assets/web-audio-api.png'
import YelpLogo from './assets/yelp.png'
import LinkedInLogo from './assets/linkedin.png'
import EmailLogo from './assets/email.png'
import GitHubLogo from './assets/github.png'
import GrandfatherPic from './assets/grandfather.jpg'
import RefractorPic from './assets/refractor.jpg'
import PeoplePic from './assets/people.png'
import AbletonPic from './assets/ableton.png'
import MicrophonePic from './assets/microphone.png'
import './App.css'

function App() {
  return (
    <div className="App">
      <section className='intro'>
      <div className='hero'><h1>Bryce Eklund</h1></div>
      <div className='intro-title'><h2>full stack developer <br />& music maker</h2></div>
      <div className='bio'>
        <h3>Oh hey, didn't see you walk in there. Welcome to my portfolio! Feel free to look around, and contact me if you're so inclined. My background consists of IT administration, technical support, and lots of code and music. Here you'll find a few examples of everything. My current fixation is with backend development, but I'm no stranger to a full stack. Let's make cool stuff! </h3>
      </div>
      {/*i, I'm Bryce. I live for creative problem solving, engineering of all sorts, and good design. Having an idea is a mere fraction of the puzzle — elegant drafting, streamlined implementation, and peer-checked revision are all core elements of a magnificent project. These concepts extend far beyond the reaches of coding; they affect my art and my life. I love all parts of a stack, but with my experience as a producer and an IT administrator, I've developed a particular fixation with backend technologies.*/}
    </section>
    <div className='intro-black'></div>
    <section className='links'>
      <a href='https://github.com/bryceklund' target='_blank'><img className='contact-logo' src={GitHubLogo} alt='github' /></a>
      <a href='https://linkedin.com/in/bryceklund' target='_blank'><img className='contact-logo' src={LinkedInLogo} alt='linkedin' /></a>
      <a href='mailto:bryce.eklund@gmail.com' target='blank'><img className='contact-logo' src={EmailLogo} alt='email' /></a>
    </section>
    <section className='project-list'>
      <h2 className='section-title'>Code Projects</h2>
      <section className='project chord-magic'>
        <h3>Chord Magic</h3>
        <div className='project-links'>
          <a href='https://chord-magic.bryceklund.dev/' target='_blank'>live app</a>
          <a href='https://github.com/bryceklund/chord-magic-client' target='_blank'>client repo</a>
          <a href='https://github.com/bryceklund/chord-magic-server' target='_blank'>server repo</a>
        </div>
        <img className='project-image image-left' alt='chord-magic image' src='https://i.imgur.com/54raUns.png' />
        <p className='project-description'>A tool for exploring, building, and storing chord progressions. Choose from four in-browser-generated instruments, five octaves, and over 100 chords as you piece together the foundation for your new smash pop hit.</p>
        <p className='tech-used'>
          <ul className='tech-list'>
            <li><img className='tech-icon' src={AudioLogo} alt='audio api logo'/>Audio rendered with the Web Audio API</li><br />
            <li><img className='tech-icon' src={ReactLogo} alt='react logo'/>Frontend built with React and bootstrapped with create-react-app</li><br />
            <li><img className='tech-icon' src={NodeLogo} alt='node logo'/>API written in Node.js with the lovely assistance of Express</li><br />
            <li><img className='tech-icon' src={PostgresLogo} alt='postgres logo'/>Database powered by PostgreSQL</li><br />
            <li><img className='tech-icon' src={CloudLogo} alt='cloud logo'/>SPA hosting by Zeit, server + db provisioning by Heroku, body by milk</li><br />
          </ul>
        </p>
      </section>
      <section className='project ytpoet'>
        <h3>ytPoet</h3>
        <div className='project-links'>
          <a href='https://ytpoet.bryceklund.dev/' target='_blank'>live app</a>
          <a href='https://github.com/bryceklund/ytpoet-client' target='_blank'>client repo</a>
          <a href='https://github.com/bryceklund/ytpoet-server' target='_blank'>server repo</a>
        </div>
        <img className='project-image image-right' alt='ytpoet image' src='https://i.imgur.com/pfkOVND.png' />
        <p className='project-description'>A true artist, incapable of emotion, but vastly capable of procedurally generating content out of YouTube comments sections. Knows how to write four different types of poems, but can also format things to your liking.</p>
        <p className='tech-used'>
          <ul className='tech-list'>
            <li><img className='tech-icon' src={YoutTubeLogo} alt='youtube logo'/>Comments retrieved with the YouTube API</li><br />
            <li><img className='tech-icon' src={ReactLogo} alt='react logo'/>Frontend built with React and bootstrapped with create-react-app</li><br />
            <li><img className='tech-icon' src={NodeLogo} alt='node logo'/>API written in Node.js + Express</li><br />
            <li><img className='tech-icon' src={PostgresLogo} alt='postgres logo'/>Database constructed via PostgreSQL</li><br />
            <li><img className='tech-icon' src={CloudLogo} alt='cloud logo'/>Zeit hosts the front, Heroku hosts the back</li>
          </ul>
        </p>
      </section>
      <section className='project bottom-feeder'>
        <h3>Bottom Feeder</h3>
        <div className='project-links'>
          <a href='https://bryceklund.github.io/bottom-feeder/' target='_blank'>live app</a>
          <a href='https://github.com/bryceklund/bottom-feeder' target='_blank'>repo</a>
        </div>
        <img className='project-image image-left' alt='bottom-feeder image' src='https://i.imgur.com/7uXFTvQ.png' />
        <p className='project-description'>Not here to impress you — just to get you to the nearest, lowest-rated dive bar. With couches.</p>
        <p className='tech-used'>
          <ul className='tech-list'>
            <li><img className='tech-icon' src={YelpLogo} alt='yelp logo'/>Bars found via the Yelp API</li><br />
            <li><img className='tech-icon' src={JQLogo} alt='jQuery logo'/>Frontend vanilla JS ES6, jQuery, and good ole HTML5 & CSS3 (yowza!)</li><br />
          </ul>
        </p>
      </section>
    </section>
      <section className='project-list music'>
        <h2 className='section-title'>Music Projects</h2>
        <section className='project grandfather'>
          <h3>Grandfather</h3>
          <div className='project-links'><a href='https://grandfatherpdx.bandcamp.com/' target='_blank'>Bandcamp</a></div>
          <img className='project-image image-right' alt='grandfather image' src={GrandfatherPic} />
          <p className='project-description'>"Semisensical somethingerother from Portland, thrown together quickly and carelessly by four degenerate children" — my magnum opus; a collaboration with three of my best friends that evolved from a basement jam session to a tour and two albums.</p>
          <p className='tech-used'>
            <ul className='tech-list'>
              <li><img className='tech-icon' src={PeoplePic} alt='people logo'/>Songs written by all members</li><br />
              <li><img className='tech-icon' src={MicrophonePic} alt='microphone logo'/>Recordings made by a slurry of contributors, including all band members</li><br />
              <li><img className='tech-icon' src={AbletonPic} alt='ableton logo'/>Albums produced by me with Ableton Live 10</li><br />
            </ul>
          </p>
        </section>
      <section className='project refractor'>
        <h3>refractor</h3>
        <div className='project-links'><a href='https://soundcloud.com/rfrctr' target='_blank'>SoundCloud</a></div>
        <img className='project-image image-left' alt='refractor image' src={RefractorPic} />
        <p className='project-description'>My first creative endeavor — 100% melodic, electronic dance music; this is the project that made me an artist and taught me how to build things and work technically.</p>
        <p className='tech-used'>
          <ul className='tech-list'>
            <li><img className='tech-icon' alt='ableton logo' src={AbletonPic} />All content written and produced by me in Ableton Live</li>
          </ul>
        </p>
      </section>
    </section>
    </div>
  );
}

export default App;
