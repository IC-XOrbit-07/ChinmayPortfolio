import React from 'react';
import '../CSS/Hero.css';
import HelloUpperLogo from '../Images/HelloUpperLogo.png';
import Man from '../Images/man.png'
import HelloLowerLogo1 from '../Images/HelloLowerLogo.png';

export default function Hero() {
  return (
    <>
      <div className="container text-center">
        <img src={HelloUpperLogo} alt="Hello Logo" className="image_hello" />
      </div>

      <div className="text-center container">
        <a href="#" className="btn active hello_styler" role="button" data-bs-toggle="button" aria-pressed="true">
          Hello!
        </a>
      </div>

      <div className="container text-center mt-4 intro_line_1">
        I'm <span style={{ color: '#FD853A' }} className="intro_line_1">Chinmay</span>,
      </div>

      <div className="text-center container lower_flower_design">
        <img src={HelloLowerLogo1} alt="" />
      </div>
      <div className="container text-center intro_line_2 intro_line_1">Web Developer</div>

      <div className="semicircle-wrapper">
        {/* <div className="semicircle"></div> */}
        <img src={Man} className='man_avatar' alt="" />
      </div>

      <div className='social_media'>
        <div><a href="https://wa.me/9602862890" target='_blank'><i class="bi bi-whatsapp"></i></a></div>
        <div><a href=""><i class="bi bi-facebook"></i></a></div>
        <div><a href="https://github.com/IC-XOrbit-07" target='_blank'><i class="bi bi-github"></i></a></div>
        <div><a href="https://www.instagram.com/iamchinmay07/" target='_blank'><i class="bi bi-instagram"></i></a></div>
      </div>

      <div className='container text-center hire_linkedin_button'>
        <div>
          <a href="https://www.linkedin.com/in/chinmay-porwal-945621270/" target='_blank' className='button_under_semicircle' style={{textDecoration:'none' ,color:'white'}}>Linkedin ➶</a>
        </div>
      
        <div>
          <a href="https://www.linkedin.com/in/chinmay-porwal-945621270/" target='_blank' className='button_under_semicircle' style={{textDecoration:'none' ,color:'white'}}>Hire me</a>

        </div>
      
      </div>


      
    </>
  );
}
