import React, { useEffect } from 'react'
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
import BreadBot from './assets/bread_bot.png'
import ChordMagic from './assets/chordd-magic.png'
import ytPoet from './assets/ytpoet.png'
import BottomFeeder from './assets/bottom-feeder.png'
import Wikipedia from './assets/wikipedia.png'
import Twitter from './assets/twitter.png'
import Python from './assets/python.png'
import './App.css'

function App() {
  function scroll(id, event) {
    if (event) { event.preventDefault() }
    let leftPos;

    switch(id) {
      case 'bread_bot':
        leftPos = 0
        break
      case 'ytpoet':
        leftPos = 1100
        break
      case 'chord-magic':
        leftPos = 1800
        break
      case 'bottom-feeder':
        leftPos = 3000
        break
    }
    console.log(leftPos)
      document.getElementById('project-list').scroll({
        top: 0,
        left: leftPos,
        behavior: "smooth"
      })
  
  }

  useEffect(() => {
    return     document.getElementById('project-list').scroll({
      top: 0,
      left: 0,
      behavior: "smooth"
    })
  })
  return (
    <div className="App">
      <section className='intro'>
      <div className='hero'><h1>Bryce Eklund</h1></div>
      <div className='intro-title'><h2>full stack developer <br />& music maker</h2></div>
      <div className='bio'>
        <h3>Oh hey, didn't see you walk in there. Welcome to my portfolio! Feel free to look around, and contact me if you're so inclined. My background consists of IT administration, technical support, and lots of code and music. Here you'll find a few examples of everything. My current fixation is with backend development, but I'm no stranger to a full stack.</h3>
      </div>
      {/*i, I'm Bryce. I live for creative problem solving, engineering of all sorts, and good design. Having an idea is a mere fraction of the puzzle — elegant drafting, streamlined implementation, and peer-checked revision are all core elements of a magnificent project. These concepts extend far beyond the reaches of coding; they affect my art and my life. I love all parts of a stack, but with my experience as a producer and an IT administrator, I've developed a particular fixation with backend technologies.*/}
    </section>
    <div className='intro-black'></div>
    <section className='links'>
      <a href='https://github.com/bryceklund' target='_blank'><img className='contact-logo' src={GitHubLogo} alt='github' /></a>
      <a href='https://linkedin.com/in/bryceklund' target='_blank'><img className='contact-logo' src={LinkedInLogo} alt='linkedin' /></a>
      <a href='mailto:bryce.eklund@gmail.com' target='blank'><img className='contact-logo' src={EmailLogo} alt='email' /></a>
    </section>
    <h2 className='section-title'>Code</h2>
    <div className='project-anchor-links'>
      <a href='' onClick={(e) => scroll('bread_bot', e)}>bread_bot</a>
      <a href='' onClick={(e) => scroll('ytpoet', e)}>ytPoet</a>
      <a href='' onClick={(e) => scroll('chord-magic', e)}>Chord Magic</a>
      <a href='' onClick={(e) => scroll('bottom-feeder', e)}>Bottom Feeder</a>
    </div>
    <section className='project-list' id='project-list'>
    <section className='project bread_bot' id='bread_bot'>
      <h3>breads_bot</h3>
      <div className='project-links'>
        <a href='https://twitter.com/breads_bot/' target='_blank'>live</a>
        <a href='https://github.com/bryceklund/bread_bot' target='_blank'>repo</a>
      </div>
      <img className='project-image' alt='bread_bot image' src={BreadBot} />
      <p className='project-description'>A Twitter bot that helps us all learn of new breads, together.</p>
      <p className='tech-used'>
        <ul className='tech-list'>
          <li><img className='tech-icon' src={Wikipedia} alt='wikipedia logo'/>Breads scraped from Wikipedia with Beautiful Soup</li><br />
          <li><img className='tech-icon' src={Twitter} alt='twitter logo'/>Connected to Twitter via the Twitter API</li><br />
          <li><img className='tech-icon' src={Python} alt='python logo'/>Bot written in Python 3</li><br />
        </ul>
      </p>
    </section>
    <section className='project ytpoet' id='ytpoet'>
    <h3>ytPoet</h3>
    <div className='project-links'>
      <a href='https://ytpoet.bryceklund.dev/' target='_blank'>live app</a>
      <a href='https://github.com/bryceklund/ytpoet-client' target='_blank'>client repo</a>
      <a href='https://github.com/bryceklund/ytpoet-server' target='_blank'>server repo</a>
    </div>
    <img className='project-image image-right' alt='ytpoet image' src={ytPoet} />
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
    <section className='project chord-magic' id='chord-magic'>
        <h3>Chord Magic</h3>
        <div className='project-links'>
          <a href='https://chord-magic.bryceklund.dev/' target='_blank'>live app</a>
          <a href='https://github.com/bryceklund/chord-magic-client' target='_blank'>client repo</a>
          <a href='https://github.com/bryceklund/chord-magic-server' target='_blank'>server repo</a>
        </div>
        <img className='project-image image-left' alt='chord-magic image' src={ChordMagic} />
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
    <section className='project bottom-feeder' id='bottom-feeder'>
        <h3>Bottom Feeder</h3>
        <div className='project-links'>
          <a href='https://bryceklund.github.io/bottom-feeder/' target='_blank'>live app</a>
          <a href='https://github.com/bryceklund/bottom-feeder' target='_blank'>repo</a>
        </div>
        <img className='project-image image-left' alt='bottom-feeder image' src={BottomFeeder} />
        <p className='project-description'>Not here to impress you — just to get you to the nearest, lowest-rated dive bar. With couches.</p>
        <p className='tech-used'>
          <ul className='tech-list'>
            <li><img className='tech-icon' src={YelpLogo} alt='yelp logo'/>Bars found via the Yelp API</li><br />
            <li><img className='tech-icon' src={JQLogo} alt='jQuery logo'/>Everything else written in vanilla JS ES6, jQuery, and good ole HTML5 & CSS3 (yowza!)</li><br />
          </ul>
        </p>
      </section>
    <div className='end-space'>.</div>
      </section>
    <h2 className='section-title'>Music</h2>
      <section className='project-list music'>
        
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
    <!-- this script is definitely not collecting user data and sending it back to me -->
    <script>/*<![CDATA[*/(function(w,a,b,d,s){w[a]=w[a]||{};w[a][b]=w[a][b]||{q:[],track:function(r,e,t){this.q.push({r:r,e:e,t:t||+new Date});}};var e=d.createElement(s);var f=d.getElementsByTagName(s)[0];e.async=1;e.src='//marketing.absolutelybryce.com/cdnr/forpci61/acton/bn/tracker/42645';f.parentNode.insertBefore(e,f);})(window,'ActOn','Beacon',document,'script');ActOn.Beacon.track();/*]]>*/</script>
  );
}

export default App;
