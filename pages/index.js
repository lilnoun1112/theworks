// pages/index.js

import Head from 'next/head';
import { useEffect } from 'react';
import fetchAndPopulate from '../js/fetchAndPopulate';
import styles from '../styles/Home.module.css';

export default function Home() {
  useEffect(() => {
    fetchAndPopulate();
  }, []);

  return (
    <>
      <Head>
        <meta content="Spiritual inspired and science-backed is at the core of all our current and coming endeavours; Lamark and The Works." name="description" />
        <meta content="Harmonic Coherence - The Works" property="og:title" />
        <meta content="Spiritual inspired and science-backed is at the core of all our current and coming endeavours; Lamark and The Works." property="og:description" />
        <meta content="images/OG.jpg" property="og:image" />
        <meta content="Harmonic Coherence - The Works" property="twitter:title" />
        <meta content="Spiritual inspired and science-backed is at the core of all our current and coming endeavours; Lamark and The Works." property="twitter:description" />
        <meta content="images/OG.jpg" property="twitter:image" />
        <meta property="og:type" content="website" />
        <meta content="summary_large_image" name="twitter:card" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link href="images/favicon.png" rel="shortcut icon" type="image/x-icon" />
        <title>Harmonic Coherence - The Works</title>
        <link rel="stylesheet" type="text/css" href="normalize.css" />
        <link rel="stylesheet" type="text/css" href="hamburgers.css" />
        <link rel="stylesheet" type="text/css" href="styles.css" />
        <script src="https://cdnjs.cloudflare.com/ajax/libs/bodymovin/5.7.4/lottie.min.js"></script>
        <script src="https://cdn.jsdelivr.net/npm/marked/marked.min.js"></script>
      </Head>
      <body>
        <div className="menu-container">
          <a href="index.html" className="button-logo">
            <img style={{ height: '40px' }} src="images/theworks-black.png" />
          </a>
          <div className="buttons-container">
            <a href="index.html" className="button" style={{ display: 'none' }}>About<div className="underline"></div></a>
            <a href="work.html" className="button">Our work<div className="underline"></div></a>
            <a href="news.html" className="button">News<div className="underline"></div></a>
            <a href="team.html" className="button">Team<div className="underline"></div></a>
            <a href="contact.html" className="button">Contact<div className="underline"></div></a>
          </div>
          <div className="button-logo sandwich">
            <div className="hamburger hamburger--spring">
              <div className="hamburger-box">
                <div className="hamburger-inner"></div>
              </div>
            </div>
          </div>
          <div className="mobile-menu">
            <a className="link" href="">About<div className="href-arrow"></div></a>
            <a className="link" href="">Our work<div className="href-arrow"></div></a>
            <a className="link" href="">News<div className="href-arrow"></div></a>
            <a className="link" href="">Team<div className="href-arrow"></div></a>
            <a className="link" href="">Contact<div className="href-arrow"></div></a>
          </div>
          <script src="js/menu-toggle.js"></script>
        </div>
        <div className="hero">
          <div className="textbox-container">
            <div className="titlebox">
              <h1>The Works Research Institute</h1>
            </div>
            <div className="textbox">
              <p>The Works Research Institute provides new understanding of the principles of sound wave dynamics and its benefits for human wellbeing, nature and beyond.</p>
            </div>
          </div>
          <img className="teaser-3" style={{ position: 'absolute', left: 0, right: 0, bottom: '20px', marginLeft: 'auto', marginRight: 'auto', width: '34px' }} src="images/arrow.png" />
        </div>
        <div className="section-wrapper">
          <div className="textbox-container about">
            <div className="titlebox">
              <h2>About</h2>
            </div>
            <div className="textbox">
              <p>The Works Research Institute conducts scientific research on sound wave dynamics and its effects on human wellbeing and natural ecosystems. To this end, The Works Research Institute collaborates with an interdisciplinary team of researchers and scientists in the field of Acoustics, Electroacoustics, Physics, Mathematics, Biology, Neurobiology and Cognitive Neuroscience. 
                In conjunction with scientific studies, The Works Research Institute develops new methods and technologies in audio processing and acoustic holography, leading to a wide range of applications. One such application is the Sphere, an optimized acoustic environment for high-fidelity spatial sound projection and measuring human response to sound at various levels.
              </p>
            </div>
          </div>
        </div>
        <div className="sphere">
          <div className="textbox-container">
            <div className="titlebox">
              <h2>The Sphere</h2>
            </div>
            <div className="textbox">
              <p>The Sphere is a sound-proof pod designed for one person, equipped with an omnidirectional microphone, loudspeaker system, and a vibro-acoustic chair. It uses spatial audio processing to deliver personalized sound treatments, optimizing the user’s acoustic profile in real-time to promote physical and emotional health. Treatment sessions last 15-40 minutes and can alleviate stress, regulate mood and sleep, and enhance cardiovascular functions, focus, creativity, and memory. User sessions are monitored and reported via an online app. The Sphere is 2.8 meters in diameter, weighs 1200 kg, and includes features like air regulation, light dimming, and door automation, with high acoustic insulation and a fully recyclable design.</p>
              <a className="link" href="">read more<div className="href-arrow"></div></a>
            </div>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="publications-container">
            <div className="titlebox">
              <h2>Publications</h2>
              <a className="link" href="#">view all<div className="href-arrow"></div></a>
            </div>
            <div className="teaser-container">
              <div className="teaser-card teaser-1">
                <div className="teaser-image">
                  <img src="" />
                  <div className="tag">Tag</div>
                </div>
                <div className="teaser-textbox">
                  <h3>Teaser test</h3>
                  <p>Lorem ipsum body text.</p>
                  <a href="" className="button-card">read more<div className="button-arrow"></div></a>
                </div>
              </div>
              <div className="teaser-card teaser-2">
                <div className="teaser-image">
                  <img src="" />
                  <div className="tag">Tag</div>
                </div>
                <div className="teaser-textbox">
                  <h3>Teaser test</h3>
                  <p>Lorem ipsum body text.</p>
                  <a href="" className="button-card">read more<div className="button-arrow"></div></a>
                </div>
              </div>
              <div className="teaser-card teaser-3">
                <div className="teaser-image">
                  <img src="" />
                  <div className="tag">Tag</div>
                </div>
                <div className="teaser-textbox">
                  <h3>Teaser test</h3>
                  <p>Lorem ipsum body text.</p>
                  <a href="" className="button-card">read more<div className="button-arrow"></div></a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="section-wrapper">
          <div className="textbox-container" style={{ marginBottom: '20px' }}>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', flex: '1', width: '100%' }}>
              <div className="card-default">
                <img style={{ height: '40px' }} src="images/theworks-black.png" />
              </div>
              <div className="card-default">
                <h4>Company Details</h4>
                <p>The Works Research Institute B.V.<br />
                  Karthuizersstraat 153<br />
                  1015 LP Amsterdam<br />
                  <br />
                  COC 73955981<br />
                  VAT NL 8597 23 239 B 01</p>
              </div>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '2px', flex: '1', alignSelf: 'stretch', width: '100%' }}>
              <div className="card-default" style={{ flex: '1' }}>
                <h4>Contact</h4>
                <div className="button">welcome@theworks.info<div className="underline"></div></div>
              </div>
              <div className="footer-buttons">
                <div className="button-icon">
                  <img src="images/linkedin.png" />
                  <div className="button">LinkedIn<div className="underline"></div></div>
                </div>
                <div className="button-icon">
                  <img src="images/osd.png" />
                  <div className="button">OSF<div className="underline"></div></div>
                </div>
                <div className="button-icon">
                  <img src="images/ResearchGate.png" />
                  <div className="button">ResearchGate<div className="underline"></div></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <script src="js/fetchAndPopulate.js"></script>
      </body>
    </>
  );
}