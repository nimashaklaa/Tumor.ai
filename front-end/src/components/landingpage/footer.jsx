import React from 'react'
import './footer.css'
import { Backhead, Gradient, Bottompath, WhiteLogo,Newlogo } from '../../assets/index';
import { Link } from 'react-router-dom';

export const CustFooter = () => {

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
          const targetY = element.getBoundingClientRect().top + window.scrollY;
          const initialY = window.scrollY;
          const diff = targetY - initialY;
          const duration = 500; // Adjust the duration to control the scroll speed (milliseconds)
          let start;
    
          const step = (timestamp) => {
            if (!start) start = timestamp;
            const progress = timestamp - start;
            window.scrollTo(0, initialY + easeInOutQuad(progress, 0, diff, duration));
    
            if (progress < duration) {
              requestAnimationFrame(step);
            }
          };
    
          // Easing function for smooth scrolling
          const easeInOutQuad = (t, b, c, d) => {
            t /= d / 2;
            if (t < 1) return (c / 2) * t * t + b;
            t--;
            return (-c / 2) * (t * (t - 2) - 1) + b;
          };
    
          requestAnimationFrame(step);
        }
      };

  return (
    <div className='footer'>
        <img src={WhiteLogo} alt='logo' className='white-logo' />
        <div className='footer-links'>
            <ul>
                <li className='wws'><a href='#' onClick={() => scrollToSection('whoWeServe')}>WHO WE SERVE</a></li>
                <li className='osns'><a href='#' onClick={() => scrollToSection('ourSolutions')}>OUR SOLUTIONS</a></li>
                <li className='hwtwouse'><a href='#' onClick={() => scrollToSection('howToUse')}>HOW TO USE</a></li>
            </ul>
        </div>
        <div className='footer-links-2'>
            <ul>
                <li className='home-1'><a href='/'>HOME</a></li>
                <li className='aboutus-1'><a href='/aboutus'>ABOUT US</a></li>
                <li className='contactus-1'><a href='/contactus'>CONTACT US</a></li>
            </ul>
        </div>
        <p className='gtp'>Go to Page</p>
        <p className='ngt'>Navigate to</p>
        <p className='getintouch'>Get In Touch</p>
        <p className='no-1'>+94 77 39 35 182</p>
    </div>

  );
}

